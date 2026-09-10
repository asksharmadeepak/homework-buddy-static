"use client";

import { useRef, useState } from "react";
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

type Msg =
  | { role: "user"; text: string }
  | { role: "assistant"; text: string; worksheet?: WorksheetChatResult };

export function WorksheetChat() {
  const [classSlug, setClassSlug] = useState<string>("class-1");
  const [activitySlug, setActivitySlug] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Pick a class, describe tonight’s practice (or tap a starter), and I’ll build one printable sheet you can print from the browser. For unlimited themed PDFs, use the Homework Buddy app.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [limitHit, setLimitHit] = useState(false);
  const [latest, setLatest] = useState<WorksheetChatResult | null>(null);
  const sheetRef = useRef<HTMLElement>(null);

  async function generate(nextPrompt: string, nextClass = classSlug, nextActivity = activitySlug) {
    const trimmed = nextPrompt.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setPrompt("");
    setMessages((m) => [...m, { role: "user", text: trimmed }]);

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
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            text:
              data.error ||
              "Daily free limit reached. Get unlimited print-ready PDFs in the Homework Buddy app.",
          },
        ]);
        return;
      }

      if (!res.ok || !data.worksheet) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            text: data.error || "Could not generate a sheet. Try again or browse free samples.",
          },
        ]);
        return;
      }

      const worksheet = data.worksheet as WorksheetChatResult;
      setLatest(worksheet);
      if (typeof data.remaining === "number") setRemaining(data.remaining);
      trackChatEvent("chat_generate_success", { class_slug: nextClass });
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "Here’s your printable sheet. Use Print this sheet, then get the app when you want fresh themes every night.",
          worksheet,
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "Network error — if you’re on local Next.js only, run `netlify dev` so the generator function is available.",
        },
      ]);
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
      <div className="rounded-3xl border border-[#ebe4f7] bg-white p-4 shadow-sm md:p-6 print:hidden">
        <div className="flex flex-wrap gap-3">
          <label className="flex flex-col gap-1 text-xs font-extrabold uppercase tracking-wide text-[#7D7788]">
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
          <label className="flex flex-col gap-1 text-xs font-extrabold uppercase tracking-wide text-[#7D7788]">
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
          {remaining !== null ? (
            <p className="self-end text-xs font-bold text-[#7D7788]">
              Free sheets left today: {remaining}
            </p>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {CHAT_STARTERS.map((s) => (
            <button
              key={s.label}
              type="button"
              disabled={loading || limitHit}
              onClick={() => onStarter(s)}
              className="rounded-full border border-[#7B5CD6]/30 bg-[#F0EBFF] px-3 py-1.5 text-xs font-extrabold text-[#7B5CD6] disabled:opacity-50"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-4 max-h-72 space-y-3 overflow-y-auto rounded-2xl bg-[#F7F4FC] p-3">
          {messages.map((msg, i) => (
            <div
              key={`${msg.role}-${i}`}
              className={
                msg.role === "user"
                  ? "ml-8 rounded-2xl bg-[#7B5CD6] px-3 py-2 text-sm font-semibold text-white"
                  : "mr-8 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-[#3d3848]"
              }
            >
              {msg.text}
            </div>
          ))}
          {loading ? (
            <p className="text-sm font-bold text-[#7D7788]">Building a calm sheet…</p>
          ) : null}
        </div>

        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            void generate(prompt);
          }}
        >
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            maxLength={500}
            disabled={loading || limitHit}
            placeholder="e.g. 10-minute Sr KG sight words with animals"
            className="min-w-0 flex-1 rounded-2xl border border-[#ebe4f7] px-4 py-3 text-sm font-semibold text-[#24212C] outline-none focus:border-[#7B5CD6]"
          />
          <button
            type="submit"
            disabled={loading || limitHit || !prompt.trim()}
            className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white disabled:opacity-50"
          >
            Generate sheet
          </button>
        </form>
        <p className="mt-2 text-xs font-semibold text-[#7D7788]">
          Free web sheets are browser printables (not PDF). 3 free generations per day.
        </p>
      </div>

      {latest ? (
        <div className="mt-8 print:mt-0">
          <div className="mb-4 flex flex-wrap gap-3 print:hidden">
            <button
              type="button"
              onClick={onPrint}
              className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
            >
              Print this sheet
            </button>
            <PlayStoreLink
              placement="worksheet_chat"
              className="rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
            >
              Get unlimited PDFs in the app
            </PlayStoreLink>
          </div>

          <article
            ref={sheetRef}
            className="worksheet-print-sheet rounded-3xl border border-[#ebe4f7] bg-white p-6 md:p-8 print:rounded-none print:border-0 print:p-0"
          >
            <p className="text-xs font-extrabold uppercase tracking-wide text-[#7B5CD6] print:text-black">
              Homework Buddy · free printable practice
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#24212C]">{latest.title}</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#3d3848]">
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
          </article>

          <div className="print:hidden">
            <SoftCta
              playPlacement="worksheet_chat"
              title="Want unlimited themed PDFs?"
              body="This page prints one calm sheet in your browser. Homework Buddy on Google Play generates fresh class + theme PDFs whenever tonight needs something new."
            />
          </div>
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
