/**
 * Gemini-backed worksheet outline → printable HTML fields.
 * API key: GEMINI_API_KEY (Netlify env only — never expose to the browser).
 *
 * POST /.netlify/functions/generate-worksheet
 * Body: { classSlug, activitySlug?, prompt }
 */

const ALLOWED_CLASSES = new Set([
  "nursery",
  "jr-kg",
  "sr-kg",
  "class-1",
  "class-2",
  "class-3",
]);

const ALLOWED_ACTIVITIES = new Set([
  "reading",
  "writing",
  "maths",
  "hindi",
  "coloring",
  "life-skills",
  "creative-thinking",
]);

const CLASS_LABELS = {
  nursery: "Nursery (ages ~3–4)",
  "jr-kg": "Jr KG",
  "sr-kg": "Sr KG",
  "class-1": "Class 1",
  "class-2": "Class 2",
  "class-3": "Class 3",
};

const BLOCKED =
  /\b(porn|nude|sex|kill|weapon|bomb|hack|exam.?cheat|answer.?key for test|nsfw)\b/i;

const DAILY_LIMIT = 3;
const MAX_PROMPT = 500;

/** @type {Map<string, { day: string; n: number }>} */
const visitorBuckets = new Map();
/** @type {{ day: string; n: number }} */
let globalBucket = { day: "", n: 0 };

function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

function corsHeaders(origin) {
  const allowed = new Set([
    "https://easyhomeworkactivity.com",
    "http://localhost:8888",
    "http://localhost:3000",
    "http://127.0.0.1:8888",
    "http://127.0.0.1:3000",
  ]);
  const allow = origin && allowed.has(origin) ? origin : "https://easyhomeworkactivity.com";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    Vary: "Origin",
  };
}

function json(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  };
}

function hashVisitor(event) {
  const ip =
    event.headers["x-nf-client-connection-ip"] ||
    event.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    event.headers["client-ip"] ||
    "unknown";
  const ua = event.headers["user-agent"] || "";
  let h = 0;
  const s = `${ip}|${ua}`;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return `v${h}`;
}

function parseCookie(header, name) {
  if (!header) return null;
  const parts = header.split(";").map((p) => p.trim());
  for (const p of parts) {
    if (p.startsWith(`${name}=`)) return decodeURIComponent(p.slice(name.length + 1));
  }
  return null;
}

function readQuota(event) {
  const day = todayUTC();
  const raw = parseCookie(event.headers.cookie || event.headers.Cookie, "hb_ws_gen");
  let cookieN = 0;
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed.d === day && typeof parsed.n === "number") cookieN = parsed.n;
    } catch {
      /* ignore */
    }
  }

  const key = hashVisitor(event);
  let mem = visitorBuckets.get(key);
  if (!mem || mem.day !== day) {
    mem = { day, n: 0 };
    visitorBuckets.set(key, mem);
  }

  if (globalBucket.day !== day) globalBucket = { day, n: 0 };

  return { day, cookieN, mem, key };
}

function setQuotaCookie(day, n) {
  const value = encodeURIComponent(JSON.stringify({ d: day, n }));
  return `hb_ws_gen=${value}; Path=/; Max-Age=86400; SameSite=Lax; Secure`;
}

function systemPrompt(classSlug, activitySlug) {
  const activity = activitySlug ? ` Focus on ${activitySlug}.` : "";
  return `You are a calm Indian parent homework helper for Homework Buddy (easyhomeworkactivity.com).
Create ONE short printable worksheet for ${CLASS_LABELS[classSlug] || classSlug}.${activity}
Rules:
- Age-fit, finishable in 10–20 minutes; no exam pressure; generous white space in wording.
- 4–8 practice items max. Clear child-facing instructions a parent can read aloud.
- Prefer A4 print: short lines, numbered items, optional draw box prompt.
- Use simple English; Hindi only if activity is hindi (include Devanagari when helpful).
- Never write adult, violent, or cheating content. If the request is off-topic, still return a gentle on-class practice sheet and note that in parentTip.
- Do not claim you replace the Homework Buddy Android app. parentTip may say: for unlimited themed print-ready PDFs, get Homework Buddy on Google Play.
- Output must match the JSON schema exactly.`;
}

const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    title: { type: "STRING" },
    instructions: { type: "STRING" },
    items: {
      type: "ARRAY",
      items: { type: "STRING" },
    },
    parentTip: { type: "STRING" },
    drawingPrompt: { type: "STRING" },
  },
  required: ["title", "instructions", "items", "parentTip", "drawingPrompt"],
  propertyOrdering: ["title", "instructions", "items", "parentTip", "drawingPrompt"],
};

async function callGemini({ apiKey, model, classSlug, activitySlug, prompt }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const userText = [
    `Class: ${classSlug}`,
    activitySlug ? `Activity: ${activitySlug}` : null,
    `Parent request: ${prompt}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt(classSlug, activitySlug) }] },
      contents: [{ role: "user", parts: [{ text: userText }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA,
      },
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.error?.message || `Gemini HTTP ${res.status}`;
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty model response");

  const parsed = JSON.parse(text);
  if (!Array.isArray(parsed.items) || parsed.items.length === 0) {
    throw new Error("Invalid worksheet shape");
  }

  return {
    title: String(parsed.title).slice(0, 120),
    instructions: String(parsed.instructions).slice(0, 600),
    items: parsed.items.map((i) => String(i).slice(0, 240)).slice(0, 8),
    parentTip: String(parsed.parentTip).slice(0, 400),
    drawingPrompt: String(parsed.drawingPrompt || "").slice(0, 240),
  };
}

exports.handler = async function handler(event) {
  const origin = event.headers.origin || event.headers.Origin || "";
  const cors = corsHeaders(origin);

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed", code: "method" }, cors);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY missing");
    return json(503, { error: "Generator temporarily unavailable", code: "config" }, cors);
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON", code: "bad_request" }, cors);
  }

  const classSlug = String(body.classSlug || "").trim();
  const activitySlug = body.activitySlug ? String(body.activitySlug).trim() : "";
  const prompt = String(body.prompt || "").trim();

  if (!ALLOWED_CLASSES.has(classSlug)) {
    return json(400, { error: "Choose a valid class", code: "bad_class" }, cors);
  }
  if (activitySlug && !ALLOWED_ACTIVITIES.has(activitySlug)) {
    return json(400, { error: "Choose a valid activity", code: "bad_activity" }, cors);
  }
  if (!prompt || prompt.length > MAX_PROMPT) {
    return json(
      400,
      { error: `Prompt required (max ${MAX_PROMPT} characters)`, code: "bad_prompt" },
      cors,
    );
  }
  if (BLOCKED.test(prompt)) {
    return json(400, { error: "Please keep requests school-safe", code: "blocked" }, cors);
  }

  const { day, cookieN, mem } = readQuota(event);
  const used = Math.max(cookieN, mem.n);
  if (used >= DAILY_LIMIT) {
    return json(
      429,
      {
        error: "Daily free limit reached (3 sheets). Get unlimited PDFs in the Homework Buddy app.",
        code: "limit",
        remaining: 0,
      },
      { ...cors, "Set-Cookie": setQuotaCookie(day, DAILY_LIMIT) },
    );
  }

  const dailyMax = Number(process.env.GEMINI_DAILY_MAX || "500");
  if (globalBucket.n >= dailyMax) {
    return json(
      503,
      { error: "Generator is busy today — try free sample PDFs or the app", code: "budget" },
      cors,
    );
  }

  const model = process.env.GEMINI_MODEL || "gemini-2.0-flash-lite";

  try {
    const worksheet = await callGemini({
      apiKey,
      model,
      classSlug,
      activitySlug: activitySlug || undefined,
      prompt,
    });

    mem.n = used + 1;
    globalBucket.n += 1;
    const remaining = Math.max(0, DAILY_LIMIT - mem.n);

    return json(
      200,
      { worksheet, remaining },
      { ...cors, "Set-Cookie": setQuotaCookie(day, mem.n) },
    );
  } catch (err) {
    console.error("generate-worksheet failed", err?.message || err);
    return json(
      502,
      { error: "Could not generate a sheet right now. Try again or browse free samples.", code: "upstream" },
      cors,
    );
  }
};
