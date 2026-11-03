"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SmartStoreLink } from "@/components/PlayStoreLink";
import { ShareAppButton } from "@/components/ShareAppButton";

const DISMISS_KEY = "hb_ribbon_dismissed";

export function AppDownloadRibbon() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(sessionStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  if (pathname === "/download" || hidden) return null;

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setHidden(true);
  }

  return (
    <aside
      id="app-download-ribbon"
      aria-label="Download Homework Buddy"
      className="border-b border-[#6A4EC4] bg-[#7B5CD6] text-white"
    >
      <div className="mx-auto flex min-h-12 max-w-6xl items-center gap-2 px-3 sm:gap-3 sm:px-4">
        <Image
          src="/brand/app_icon.png"
          alt=""
          width={32}
          height={32}
          className="hidden shrink-0 rounded-lg sm:block"
        />
        <p className="min-w-0 flex-1 text-sm font-extrabold">
          <span className="whitespace-nowrap sm:hidden">Free worksheets</span>
          <span className="hidden sm:inline">
            Create printable worksheets in minutes with Homework Buddy
          </span>
        </p>
        <span className="hidden sm:inline-flex">
          <ShareAppButton placement="ribbon" variant="ribbon" />
        </span>
        <SmartStoreLink
          placement="ribbon"
          className="inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-full bg-white px-3 text-xs font-black text-[#6A4EC4] shadow-sm transition hover:bg-[#FFF3D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-11 sm:px-4 sm:text-sm"
        >
          Get App
        </SmartStoreLink>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss app banner"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-black text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-11 sm:w-11"
        >
          ×
        </button>
      </div>
    </aside>
  );
}
