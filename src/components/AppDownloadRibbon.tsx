"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PlayStoreLink } from "@/components/PlayStoreLink";

const DISMISSED_KEY = "hb_app_ribbon_dismissed_v1";

export function AppDownloadRibbon() {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      try {
        setDismissed(window.localStorage.getItem(DISMISSED_KEY) === "true");
      } catch {
        // The ribbon still works when storage is unavailable.
      }
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(hydrationTimer);
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISSED_KEY, "true");
    } catch {
      // Dismiss for this render even when storage is unavailable.
    }
  }

  if (!hydrated || dismissed || pathname === "/download") return null;

  return (
    <aside
      aria-label="Download Homework Buddy"
      className="border-b border-[#6A4EC4] bg-[#7B5CD6] text-white"
    >
      <div className="mx-auto flex min-h-12 max-w-6xl items-center gap-3 px-3 sm:px-4">
        <Image
          src="/brand/app_icon.png"
          alt=""
          width={32}
          height={32}
          className="hidden shrink-0 rounded-lg sm:block"
        />
        <p className="min-w-0 flex-1 text-sm font-extrabold">
          <span className="sm:hidden">Free worksheets in minutes</span>
          <span className="hidden sm:inline">
            Create printable worksheets in minutes with Homework Buddy
          </span>
        </p>
        <PlayStoreLink
          placement="ribbon"
          className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-white px-4 text-sm font-black text-[#6A4EC4] shadow-sm transition hover:bg-[#FFF3D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get App
        </PlayStoreLink>
        <button
          type="button"
          aria-label="Dismiss app download banner"
          onClick={dismiss}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
