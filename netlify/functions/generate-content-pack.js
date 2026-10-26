/**
 * Gemini-backed content fragments for the Homework Buddy app's offline engine.
 * Returns pools in the same JSON shape as the app's bundled assets/content packs,
 * which the app caches on-device and mixes into future sheets.
 *
 * POST /.netlify/functions/generate-content-pack
 * Headers: X-HB-App: <HB_APP_SECRET>  or  Authorization: Bearer <Supabase JWT>
 *          X-HB-Device: <random per-install id>
 * Body: { theme, grade, difficulty, kinds: string[], count, excludeHashes?: string[], cutouts: string[] }
 *
 * Env: GEMINI_API_KEY (required), HB_APP_SECRET, SUPABASE_URL + SUPABASE_ANON_KEY (JWT mode),
 *      GEMINI_MODEL, CONTENT_DEVICE_DAILY_MAX (default 6), CONTENT_DAILY_MAX (default 2000).
 */

const THEMES = new Set([
  "Animals",
  "Transport",
  "Fruits",
  "Monsoon",
  "Space",
  "Festivals",
  "Nature",
  "Professions",
  "Stories",
]);

const GRADES = {
  nursery: "Nursery / Pre-K (age 3-4), cannot read yet; adult reads aloud",
  jrKg: "Jr KG / Kindergarten (age 4-5), reads single short words",
  srKg: "Sr KG / Kindergarten (age 5-6), reads very short sentences",
  grade1: "Class 1 / Grade 1 (age 6-7)",
  grade2: "Class 2 / Grade 2 (age 7-8)",
  grade3: "Class 3 / Grade 3 (age 8-9)",
};

const KINDS = [
  "storySets",
  "thinkingPrompts",
  "lifeSkillPrompts",
  "creativePrompts",
  "matchPairs",
  "oddOneOut",
  "sortGroups",
  "fillBlanks",
];

const BLOCKED =
  /\b(porn|nude|sex|kill|blood|weapon|gun|bomb|hack|drug|alcohol|beer|wine|nsfw|die|dead|hate)\b/i;

/** @type {Map<string, { day: string; n: number }>} */
const deviceBuckets = new Map();
/** @type {{ day: string; n: number }} */
let globalBucket = { day: "", n: 0 };

function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body),
  };
}

async function authorize(event) {
  const h = event.headers;
  const secret = process.env.HB_APP_SECRET;
  if (secret && (h["x-hb-app"] || h["X-HB-App"]) === secret) return true;

  const auth = h.authorization || h.Authorization || "";
  const url = process.env.SUPABASE_URL;
  const anon = process.env.SUPABASE_ANON_KEY;
  if (auth.startsWith("Bearer ") && url && anon) {
    try {
      const res = await fetch(`${url}/auth/v1/user`, {
        headers: { Authorization: auth, apikey: anon },
      });
      return res.ok;
    } catch {
      return false;
    }
  }
  return false;
}

const str = { type: "STRING" };
const strArr = { type: "ARRAY", items: str };

const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    storySets: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          story: str,
          question: str,
          options: strArr,
          answer: str,
          cutouts: strArr,
          storyLength: str,
        },
        required: ["story", "question", "options", "answer", "cutouts"],
      },
    },
    thinkingPrompts: strArr,
    lifeSkillPrompts: strArr,
    creativePrompts: strArr,
    matchPairs: {
      type: "ARRAY",
      items: { type: "OBJECT", properties: { left: str, right: str }, required: ["left", "right"] },
    },
    oddOneOut: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: { options: strArr, answer: str },
        required: ["options", "answer"],
      },
    },
    sortGroups: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: { groupA: str, groupB: str, itemsA: strArr, itemsB: strArr },
        required: ["groupA", "groupB", "itemsA", "itemsB"],
      },
    },
    fillBlanks: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: { sentence: str, answer: str },
        required: ["sentence", "answer"],
      },
    },
  },
};

function systemPrompt({ theme, grade, difficulty, kinds, count, cutouts }) {
  return `You write content for printable worksheets for young children (Homework Buddy app, used in India, the US and the UK).
Theme: ${theme}. Level: ${GRADES[grade]}. Difficulty: ${difficulty}.
Return ONLY these keys, each with ${count} NEW, varied items: ${kinds.join(", ")}. Leave other keys out.
Formats:
- storySets: 2-4 short sentences (5-6 for Class 2-3), named characters, a small event; question about the story; 3 options; answer is exactly one option; cutouts: 2-3 names chosen ONLY from [${cutouts.join(", ")}]; storyLength short|medium|long.
- thinkingPrompts / creativePrompts: one sentence asking the child to draw, imagine or design something about the theme.
- lifeSkillPrompts: one sentence about a good habit (safety, sharing, health, kindness) linked to the theme, ending with a drawing task.
- matchPairs: left = a theme word, right = its partner (sound, home, use, baby, colour, opposite). Short words.
- oddOneOut: 4 single words or short phrases; three belong together, answer is the one that does not.
- sortGroups: two short group labels (e.g. "Can fly" / "Cannot fly") and 3-5 items each.
- fillBlanks: one simple sentence containing exactly "___" once; answer is a single word.
Rules: child-safe, positive, no brands, no violence, no scary content, simple English. Never repeat a common example twice.`;
}

function clean(s, max = 240) {
  return String(s ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

function validate(kind, items, cutouts) {
  if (!Array.isArray(items)) return [];
  const out = [];
  for (const it of items) {
    try {
      let v;
      switch (kind) {
        case "storySets": {
          const options = (it.options || []).map((o) => clean(o, 60)).filter(Boolean).slice(0, 4);
          const answer = clean(it.answer, 60);
          const arts = (it.cutouts || []).filter((c) => cutouts.includes(c)).slice(0, 3);
          if (options.length < 2 || !options.includes(answer) || arts.length === 0) continue;
          v = {
            story: clean(it.story, 500),
            question: clean(it.question, 160),
            options,
            answer,
            cutouts: arts,
            storyLength: ["short", "medium", "long"].includes(it.storyLength) ? it.storyLength : "short",
          };
          if (v.story.length < 20) continue;
          break;
        }
        case "thinkingPrompts":
        case "lifeSkillPrompts":
        case "creativePrompts":
          v = clean(it, 200);
          if (v.length < 12) continue;
          break;
        case "matchPairs":
          v = { left: clean(it.left, 30), right: clean(it.right, 30) };
          if (!v.left || !v.right) continue;
          break;
        case "oddOneOut": {
          const options = (it.options || []).map((o) => clean(o, 30)).filter(Boolean);
          const answer = clean(it.answer, 30);
          if (options.length !== 4 || !options.includes(answer)) continue;
          v = { options, answer };
          break;
        }
        case "sortGroups": {
          const a = (it.itemsA || []).map((o) => clean(o, 30)).filter(Boolean).slice(0, 5);
          const b = (it.itemsB || []).map((o) => clean(o, 30)).filter(Boolean).slice(0, 5);
          if (a.length < 2 || b.length < 2) continue;
          v = { groupA: clean(it.groupA, 30), groupB: clean(it.groupB, 30), itemsA: a, itemsB: b };
          break;
        }
        case "fillBlanks": {
          const sentence = clean(it.sentence, 160);
          const answer = clean(it.answer, 24);
          if ((sentence.match(/___/g) || []).length !== 1 || !answer || answer.includes(" ")) continue;
          v = { sentence, answer };
          break;
        }
        default:
          continue;
      }
      if (BLOCKED.test(JSON.stringify(v))) continue;
      out.push(v);
    } catch {
      /* drop malformed item */
    }
  }
  return out;
}

async function callGemini(apiKey, model, params) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt(params) }] },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Generate fresh ${params.theme} content now. Seed: ${Date.now() % 100000}. Avoid content with these fingerprints: ${params.excludeHashes.slice(0, 60).join(",") || "none"}.`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 1.0,
        maxOutputTokens: 4096,
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA,
      },
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error?.message || `Gemini HTTP ${res.status}`);
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty model response");
  return JSON.parse(text);
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return json(503, { error: "Generator unavailable", code: "config" });
  if (!(await authorize(event))) return json(401, { error: "Unauthorized", code: "auth" });

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON", code: "bad_request" });
  }

  const theme = String(body.theme || "");
  const grade = String(body.grade || "");
  const difficulty = ["Easy", "Medium", "Fun Challenge"].includes(body.difficulty) ? body.difficulty : "Easy";
  const kinds = (Array.isArray(body.kinds) ? body.kinds : []).filter((k) => KINDS.includes(k));
  const count = Math.min(Math.max(Number(body.count) || 3, 1), 5);
  const cutouts = (Array.isArray(body.cutouts) ? body.cutouts : [])
    .map(String)
    .filter((c) => /^cut_[a-z_]+$/.test(c))
    .slice(0, 20);
  const excludeHashes = (Array.isArray(body.excludeHashes) ? body.excludeHashes : []).map(String).slice(0, 200);

  if (!THEMES.has(theme) || !GRADES[grade] || kinds.length === 0) {
    return json(400, { error: "Invalid theme, grade or kinds", code: "bad_request" });
  }
  if (kinds.includes("storySets") && cutouts.length === 0) {
    return json(400, { error: "cutouts required for stories", code: "bad_request" });
  }

  const day = todayUTC();
  const device = String(event.headers["x-hb-device"] || event.headers["X-HB-Device"] || "anon").slice(0, 64);
  let bucket = deviceBuckets.get(device);
  if (!bucket || bucket.day !== day) {
    bucket = { day, n: 0 };
    deviceBuckets.set(device, bucket);
  }
  if (globalBucket.day !== day) globalBucket = { day, n: 0 };
  const deviceMax = Number(process.env.CONTENT_DEVICE_DAILY_MAX || "6");
  const dailyMax = Number(process.env.CONTENT_DAILY_MAX || "2000");
  if (bucket.n >= deviceMax) return json(429, { error: "Daily refresh limit reached", code: "limit" });
  if (globalBucket.n >= dailyMax) return json(503, { error: "Busy today", code: "budget" });

  const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
  try {
    const raw = await callGemini(apiKey, model, { theme, grade, difficulty, kinds, count, cutouts, excludeHashes });
    bucket.n += 1;
    globalBucket.n += 1;
    const fragments = {};
    for (const kind of kinds) {
      const valid = validate(kind, raw[kind], cutouts).map((v) =>
        typeof v === "string" ? { text: v, grades: [grade] } : { ...v, grades: [grade] },
      );
      if (valid.length) fragments[kind] = valid;
    }
    return json(200, { theme, grade, fragments });
  } catch (err) {
    console.error("generate-content-pack failed", err?.message || err);
    return json(502, { error: "Could not generate content right now", code: "upstream" });
  }
};
