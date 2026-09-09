"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { PlayStoreLink } from "@/components/PlayStoreLink";

export function AppDownloadRibbon() {
  const pathname = usePathname();

  if (pathname === "/download") return null;

  return (
    <aside
      id="app-download-ribbon"
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
      </div>
    </aside>
  );
}
