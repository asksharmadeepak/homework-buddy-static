"use client";

import { useState } from "react";
import { trackAppShare, type AppSharePlacement } from "@/lib/analytics";
import { site } from "@/lib/site";

const SHARE_TITLE = "Homework Buddy";
const SHARE_TEXT =
  "Homework Buddy — printable worksheets for Nursery to Class 3. Free on Google Play and the App Store.";

type ShareAppButtonProps = {
  placement: AppSharePlacement;
  className?: string;
  /** Visual style for ribbon (light on purple) vs download page (outlined). */
  variant?: "primary" | "ribbon";
};

export function ShareAppButton({
  placement,
  className,
  variant = "primary",
}: ShareAppButtonProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${site.url}${site.appCtaPath}`;

  async function handleShare() {
    trackAppShare(placement);

    const payload = { title: SHARE_TITLE, text: SHARE_TEXT, url: shareUrl };

    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share(payload);
        return;
      }
    } catch (err) {
      // User cancelled share sheet — do not fall through to copy.
      if (err instanceof DOMException && err.name === "AbortError") return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  const baseClass =
    variant === "ribbon"
      ? "inline-flex min-h-11 shrink-0 items-center rounded-full border-2 border-white/80 bg-transparent px-4 text-sm font-black text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      : "inline-flex items-center justify-center rounded-full border-2 border-[#7B5CD6] px-5 py-2.5 text-sm font-extrabold text-[#7B5CD6] transition hover:bg-[#F0EBFF]";

  return (
    <button
      type="button"
      onClick={handleShare}
      className={className ?? baseClass}
      aria-label="Share the Homework Buddy app"
    >
      {copied ? "Link copied" : "Share the app"}
    </button>
  );
}
