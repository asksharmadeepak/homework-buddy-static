"use client";

import { useState } from "react";
import { PlayStoreLink } from "@/components/PlayStoreLink";
import { SoftCta } from "@/components/SoftCta";
import {
  CHAT_ACTIVITY_OPTIONS,
  CHAT_CLASS_OPTIONS,
  CHAT_STARTERS,
  GENERATE_WORKSHEET_PATH,
  trackChatEvent,
  type WorksheetChatResult,
} from "@/lib/worksheet-chat";

export function WorksheetChat() {
  const [classSlug, setClassSlug] = useState<string>("class-1");
  const [activitySlug, setActivitySlug] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [limitHit, setLimitHit] = useState(false);
  const [latest, setLatest] = useState<WorksheetChatResult | null>(null);

  async function generate(nextPrompt: string, nextClass = classSlug, nextActivity = activitySlug) {
    const trimmed = nextPrompt.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setPrompt("");
    setStatusMsg(null);

    try {
      const res = await fetch(GENERATE_WORKSHEET_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          classSlug: nextClass,
          activitySlug: nextActivity || undefined,
          prompt: trimmed,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 429 || data.code === "limit") {
        setLimitHit(true);
        setRemaining(0);
        trackChatEvent("chat_limit_hit");
        setStatusMsg(
          data.error ||
            "Daily free limit reached. Get unlimited print-ready PDFs in the Homework Buddy app.",
        );
        return;
      }

      if (!res.ok || !data.worksheet) {
        setStatusMsg(data.error || "Could not generate a sheet. Try again or browse free samples.");
        return;
      }

      const worksheet = data.worksheet as WorksheetChatResult;
      setLatest(worksheet);
      if (typeof data.remaining === "number") setRemaining(data.remaining);
      trackChatEvent("chat_generate_success", { class_slug: nextClass });
      setStatusMsg("Sheet ready — print from your browser, or get the app for unlimited PDFs.");
    } catch {
      setStatusMsg(
        "Network error — if you’re on local Next.js only, run `netlify dev` so the generator function is available.",
      );
    } finally {
      setLoading(false);
    }
  }

  function onStarter(s: (typeof CHAT_STARTERS)[number]) {
    setClassSlug(s.classSlug);
    setActivitySlug(s.activitySlug);
    void generate(s.prompt, s.classSlug, s.activitySlug);
  }

  function onPrint() {
    trackChatEvent("chat_print_click");
    window.print();
  }

  return (
    <div className="worksheet-chat">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="flex min-w-0 flex-col">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#F0EBFF] px-3 py-1 text-xs font-extrabold text-[#7B5CD6]">
                Page 1
              </span>
              {remaining !== null ? (
                <span className="text-xs font-bold text-[#7D7788]">
                  Free sheets left today: {remaining}
                </span>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onPrint}
                disabled={!latest}
                className="rounded-full bg-[#7B5CD6] px-5 py-2.5 text-sm font-extrabold text-white disabled:opacity-40"
              >
                Print this sheet
              </button>
              <PlayStoreLink
                placement="worksheet_chat"
                className="rounded-full border-2 border-[#7B5CD6] px-5 py-2.5 text-sm font-extrabold text-[#7B5CD6]"
              >
                Get unlimited PDFs
              </PlayStoreLink>
            </div>
          </div>

          <article
            className={`worksheet-print-sheet min-h-[420px] rounded-3xl border bg-white p-6 shadow-sm md:p-8 print:min-h-0 print:rounded-none print:border-0 print:p-0 print:shadow-none ${
              latest ? "border-[#ebe4f7]" : "border-dashed border-[#cfc6de]"
            }`}
          >
            {latest ? (
              <>
                <p className="text-xs font-extrabold uppercase tracking-wide text-[#7B5CD6] print:text-black">
                  Homework Buddy · free printable practice
                </p>
                <h2 className="mt-2 text-2xl font-black text-[#24212C] md:text-3xl">{latest.title}</h2>
                <div className="mt-4 flex flex-wrap gap-6 text-sm font-bold text-[#7D7788] print:text-black">
                  <span>NAME: ____________________</span>
                  <span>SCORE: ____ / {latest.items.length}</span>
                </div>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-[#3d3848]">
                  {latest.instructions}
                </p>
                <ol className="mt-6 list-decimal space-y-3 pl-5 text-base font-semibold text-[#24212C]">
                  {latest.items.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                      <div className="mt-2 h-8 border-b border-dashed border-[#cfc6de] print:border-[#999]" />
                    </li>
                  ))}
                </ol>
                {latest.drawingPrompt ? (
                  <div className="mt-8">
                    <p className="text-sm font-extrabold text-[#24212C]">Draw box</p>
                    <p className="mt-1 text-sm font-semibold text-[#7D7788]">{latest.drawingPrompt}</p>
                    <div className="mt-3 h-40 rounded-xl border-2 border-dashed border-[#cfc6de] print:border-[#999]" />
                  </div>
                ) : null}
                <p className="mt-8 text-xs font-semibold text-[#7D7788] print:text-black">
                  Parent tip: {latest.parentTip}
                </p>
              </>
            ) : (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center px-4 text-center print:hidden">
                <p className="text-sm font-extrabold uppercase tracking-wide text-[#7B5CD6]">
                  Worksheet preview
                </p>
                <p className="mt-3 max-w-md text-lg font-black text-[#24212C]">
                  {loading ? "Building a calm sheet…" : "Your printable will appear here"}
                </p>
                <p className="mt-2 max-w-sm text-sm font-semibold text-[#7D7788]">
                  Pick a class, tap an example prompt, or type what you need — then print from the browser.
                </p>
              </div>
            )}
          </article>

          <form
            className="mt-4 rounded-3xl border border-[#ebe4f7] bg-white p-4 shadow-sm print:hidden"
            onSubmit={(e) => {
              e.preventDefault();
              void generate(prompt);
            }}
          >
            <div className="flex flex-wrap gap-3">
              <label className="flex flex-col gap-1 text-[10px] font-extrabold uppercase tracking-wide text-[#7D7788]">
                Class
                <select
                  value={classSlug}
                  onChange={(e) => setClassSlug(e.target.value)}
                  className="rounded-xl border border-[#ebe4f7] bg-[#FFFBF6] px-3 py-2 text-sm font-bold text-[#24212C]"
                >
                  {CHAT_CLASS_OPTIONS.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-[10px] font-extrabold uppercase tracking-wide text-[#7D7788]">
                Activity
                <select
                  value={activitySlug}
                  onChange={(e) => setActivitySlug(e.target.value)}
                  className="rounded-xl border border-[#ebe4f7] bg-[#FFFBF6] px-3 py-2 text-sm font-bold text-[#24212C]"
                >
                  {CHAT_ACTIVITY_OPTIONS.map((a) => (
                    <option key={a.slug || "any"} value={a.slug}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                maxLength={500}
                disabled={loading || limitHit}
                placeholder="Describe tonight’s sheet: e.g. 10-minute Sr KG sight words with animals"
                className="min-w-0 flex-1 rounded-2xl border border-[#ebe4f7] px-4 py-3 text-sm font-semibold text-[#24212C] outline-none focus:border-[#7B5CD6]"
              />
              <button
                type="submit"
                disabled={loading || limitHit || !prompt.trim()}
                className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white disabled:opacity-50"
              >
                {loading ? "Generating…" : "Generate"}
              </button>
            </div>
            <p className="mt-2 text-xs font-semibold text-[#7D7788]">
              Browser printable (not a PDF file). 3 free generations per day.
            </p>
            {statusMsg ? (
              <p className="mt-2 text-sm font-semibold text-[#3d3848]">{statusMsg}</p>
            ) : null}
          </form>
        </div>

        <aside className="space-y-4 print:hidden">
          <div className="rounded-3xl border border-[#ebe4f7] bg-white p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-[#24212C]">Example prompts</h3>
            <ul className="mt-3 space-y-2">
              {CHAT_STARTERS.map((s) => (
                <li key={s.label}>
                  <button
                    type="button"
                    disabled={loading || limitHit}
                    onClick={() => onStarter(s)}
                    className="w-full rounded-2xl bg-[#F7F4FC] px-3 py-2.5 text-left text-sm font-bold text-[#3d3848] hover:bg-[#F0EBFF] disabled:opacity-50"
                  >
                    {s.label}
                    <span className="mt-0.5 block text-xs font-semibold text-[#7D7788]">{s.prompt}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#ebe4f7] bg-[#FFFBF6] p-5">
            <h3 className="text-sm font-extrabold text-[#24212C]">Tips</h3>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm font-semibold text-[#7D7788]">
              <li>Pick the class that matches your child first.</li>
              <li>Keep requests short — one skill, 10–20 minutes.</li>
              <li>Print one sheet, then stop for the night.</li>
              <li>Need fresh themes every night? Use the Android app.</li>
            </ul>
          </div>
        </aside>
      </div>

      {latest ? (
        <div className="print:hidden">
          <SoftCta
            playPlacement="worksheet_chat"
            title="Want unlimited themed PDFs?"
            body="This page prints one calm sheet in your browser. Homework Buddy on Google Play generates fresh class + theme PDFs whenever tonight needs something new."
          />
        </div>
      ) : null}

      {limitHit && !latest ? (
        <div className="print:hidden">
          <SoftCta
            playPlacement="worksheet_chat"
            title="Daily free limit reached"
            body="You’ve used today’s free web sheets. Get Homework Buddy on Google Play for unlimited print-ready PDFs — or browse our free sample downloads."
          />
        </div>
      ) : null}
    </div>
  );
}
