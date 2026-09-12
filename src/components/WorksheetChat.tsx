"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
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
import { playStoreUrlWithUtm } from "@/lib/site";
import { trackPlayStoreClick } from "@/lib/analytics";

export function WorksheetChat() {
  const [classSlug, setClassSlug] = useState<string>("class-1");
  const [activitySlug, setActivitySlug] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [limitHit, setLimitHit] = useState(false);
  const [latest, setLatest] = useState<WorksheetChatResult | null>(null);
  const [showAppModal, setShowAppModal] = useState(false);

  const openAppModal = useCallback(() => {
    setShowAppModal(true);
    trackChatEvent("chat_limit_hit");
  }, []);

  async function generate() {
    const trimmed = prompt.trim();
    if (!trimmed || loading || limitHit) return;

    setLoading(true);
    setStatusMsg(null);

    try {
      const res = await fetch(GENERATE_WORKSHEET_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          classSlug,
          activitySlug: activitySlug || undefined,
          prompt: trimmed,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 429 || data.code === "limit") {
        setLimitHit(true);
        setRemaining(0);
        openAppModal();
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
      const next = typeof data.remaining === "number" ? data.remaining : null;
      if (next !== null) {
        setRemaining(next);
        if (next <= 0) {
          setLimitHit(true);
          // Give the parent a beat to see the sheet before the app CTA
          setTimeout(openAppModal, 1200);
        }
      }
      trackChatEvent("chat_generate_success", { class_slug: classSlug });
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
    // Prefill only — user must click Generate.
    setClassSlug(s.classSlug);
    setActivitySlug(s.activitySlug);
    setPrompt(s.prompt);
    setStatusMsg("Prefilled — review and tap Generate.");
    if (typeof document !== "undefined") {
      const input = document.getElementById("worksheet-chat-prompt") as HTMLInputElement | null;
      input?.focus();
    }
  }

  function onPrint() {
    trackChatEvent("chat_print_click");
    window.print();
  }

  return (
    <div className="worksheet-chat">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="flex min-w-0 flex-col">
          <form
            className="rounded-3xl border border-[#ebe4f7] bg-white p-3 shadow-sm print:hidden md:p-4"
            onSubmit={(e) => {
              e.preventDefault();
              void generate();
            }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
              <select
                value={classSlug}
                onChange={(e) => setClassSlug(e.target.value)}
                aria-label="Class"
                className="rounded-xl border border-[#ebe4f7] bg-[#FFFBF6] px-3 py-2 text-sm font-bold text-[#24212C] md:w-32"
              >
                {CHAT_CLASS_OPTIONS.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.label}
                  </option>
                ))}
              </select>
              <select
                value={activitySlug}
                onChange={(e) => setActivitySlug(e.target.value)}
                aria-label="Activity"
                className="rounded-xl border border-[#ebe4f7] bg-[#FFFBF6] px-3 py-2 text-sm font-bold text-[#24212C] md:w-32"
              >
                {CHAT_ACTIVITY_OPTIONS.map((a) => (
                  <option key={a.slug || "any"} value={a.slug}>
                    {a.label}
                  </option>
                ))}
              </select>
              <input
                id="worksheet-chat-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                maxLength={500}
                disabled={loading || limitHit}
                placeholder="e.g. 10-minute Sr KG sight words with animals"
                className="min-w-0 flex-1 rounded-xl border border-[#ebe4f7] px-3 py-2 text-sm font-semibold text-[#24212C] outline-none focus:border-[#7B5CD6]"
              />
              <button
                type="submit"
                disabled={loading || limitHit || !prompt.trim()}
                className="rounded-full bg-[#7B5CD6] px-5 py-2.5 text-sm font-extrabold text-white disabled:opacity-50"
              >
                {loading ? "Generating…" : "Generate"}
              </button>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#7D7788]">
              <span>1 free browser sheet per day. Not a PDF.</span>
              {remaining !== null ? <span>Left today: {remaining}</span> : null}
            </div>
            {statusMsg ? (
              <p className="mt-1 text-xs font-semibold text-[#3d3848]">{statusMsg}</p>
            ) : null}
          </form>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 print:hidden">
            <span className="rounded-full bg-[#F0EBFF] px-3 py-1 text-xs font-extrabold text-[#7B5CD6]">
              Page 1
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onPrint}
                disabled={!latest}
                className="rounded-full bg-[#7B5CD6] px-4 py-2 text-xs font-extrabold text-white disabled:opacity-40"
              >
                Print this sheet
              </button>
              <PlayStoreLink
                placement="worksheet_chat"
                className="rounded-full border-2 border-[#7B5CD6] px-4 py-2 text-xs font-extrabold text-[#7B5CD6]"
              >
                Get unlimited PDFs
              </PlayStoreLink>
            </div>
          </div>

          <article
            className={`worksheet-print-sheet mt-3 min-h-[320px] rounded-3xl border bg-white p-6 shadow-sm md:p-8 print:min-h-0 print:rounded-none print:border-0 print:p-0 print:shadow-none ${
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
              <div className="flex h-full min-h-[260px] flex-col items-center justify-center px-4 text-center print:hidden">
                <p className="text-sm font-extrabold uppercase tracking-wide text-[#7B5CD6]">
                  Worksheet preview
                </p>
                <p className="mt-3 max-w-md text-lg font-black text-[#24212C]">
                  {loading ? "Building a calm sheet…" : "Your printable will appear here"}
                </p>
                <p className="mt-2 max-w-sm text-sm font-semibold text-[#7D7788]">
                  Pick a class, tap an example prompt, or type what you need — then tap Generate.
                </p>
              </div>
            )}
          </article>
        </div>

        <aside className="space-y-4 print:hidden">
          <div className="rounded-3xl border border-[#ebe4f7] bg-white p-4 shadow-sm">
            <h3 className="text-sm font-extrabold text-[#24212C]">Example prompts</h3>
            <p className="mt-1 text-[11px] font-semibold text-[#7D7788]">
              Tap to prefill — then tap Generate.
            </p>
            <ul className="mt-3 space-y-2">
              {CHAT_STARTERS.map((s) => (
                <li key={s.label}>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => onStarter(s)}
                    className="w-full rounded-2xl bg-[#F7F4FC] px-3 py-2 text-left text-sm font-bold text-[#3d3848] hover:bg-[#F0EBFF] disabled:opacity-50"
                  >
                    {s.label}
                    <span className="mt-0.5 block text-xs font-semibold text-[#7D7788]">
                      {s.prompt}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#ebe4f7] bg-[#FFFBF6] p-4">
            <h3 className="text-sm font-extrabold text-[#24212C]">Tips</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-xs font-semibold text-[#7D7788]">
              <li>Pick the class first, then describe one skill.</li>
              <li>Keep sessions 10–20 minutes.</li>
              <li>Need fresh themes every night? Get the Android app.</li>
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

      <AppDownloadModal open={showAppModal} onClose={() => setShowAppModal(false)} />
    </div>
  );
}

function AppDownloadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hb-app-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-[#7B5CD6]">
              Free daily limit reached
            </p>
            <h3 id="hb-app-modal-title" className="mt-1 text-xl font-black text-[#24212C]">
              Get unlimited printable PDFs
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 text-[#7D7788] hover:bg-[#F7F4FC]"
          >
            ✕
          </button>
        </div>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-[#3d3848]">
          You have used your free browser sheet for today. Install the Homework Buddy Android app for
          unlimited class + theme PDFs, previews, and one-tap printing.
        </p>
        <div className="mt-5 flex justify-center">
          <a
            href={playStoreUrlWithUtm("worksheet_chat_modal")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackPlayStoreClick("worksheet_chat")}
            className="inline-flex"
          >
            <Image
              src="/brand/google-play-badge.png"
              alt="Get Homework Buddy on Google Play"
              width={200}
              height={60}
              className="h-14 w-auto"
            />
          </a>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-full border-2 border-[#ebe4f7] px-4 py-2 text-sm font-extrabold text-[#7D7788] hover:border-[#7B5CD6] hover:text-[#7B5CD6]"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
