"use client";

import Link from "next/link";
import { SmartStoreLink } from "@/components/PlayStoreLink";
import type { StoreClickPlacement } from "@/lib/analytics";

export function SoftCta({
  title = "Download a free sample, then generate more in the app",
  body = "Download a free sample, then generate unlimited sheets in the app.",
  /** When true, hide store CTA (e.g. on /download where hero already installs). */
  browseOnly = false,
  /** UTM / analytics content for the store CTA. */
  playPlacement = "soft_cta",
  browseHref = "/worksheets",
  browseLabel = "Browse free worksheets",
}: {
  title?: string;
  body?: string;
  browseOnly?: boolean;
  playPlacement?: StoreClickPlacement;
  browseHref?: string;
  browseLabel?: string;
}) {
  return (
    <aside className="my-10 rounded-3xl bg-[#F0EBFF] px-6 py-8 text-center md:px-10">
      <h2 className="text-xl font-black text-[#24212C] md:text-2xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-[#7D7788] md:text-base">{body}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={browseHref}
          className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
        >
          {browseLabel}
        </Link>
        {!browseOnly ? (
          <SmartStoreLink
            placement={playPlacement}
            className="rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
          >
            Get the app
          </SmartStoreLink>
        ) : null}
      </div>
    </aside>
  );
}
