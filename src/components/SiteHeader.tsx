import Image from "next/image";
import Link from "next/link";
import { navMain, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ebe4f7] bg-[#FFFBF6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/brand/app_icon.png"
            alt=""
            width={40}
            height={40}
            className="rounded-xl"
          />
          <Image
            src="/brand/wordmark.png"
            alt={site.name}
            width={140}
            height={36}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-bold text-[#24212C] md:flex" aria-label="Main">
          {navMain.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#7B5CD6]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={site.appCtaPath}
          className="rounded-full bg-[#7B5CD6] px-4 py-2 text-sm font-extrabold text-white shadow-sm hover:bg-[#6a4ec4]"
        >
          Get the app
        </Link>
      </div>
      <nav
        className="flex gap-3 overflow-x-auto border-t border-[#ebe4f7] px-4 py-2 text-xs font-bold text-[#7D7788] md:hidden"
        aria-label="Mobile"
      >
        {navMain.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-[#7B5CD6]">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
