"use client";

import Link from "next/link";
import { SmartStoreLink } from "@/components/PlayStoreLink";
import type { StoreClickPlacement } from "@/lib/analytics";

export function SoftCta({
  title = "Generate worksheets instantly with Homework Buddy",
  body = "Pick class, activity, theme, and time — then download a print-ready PDF. Get the app on Google Play or the App Store.",
  /** When true, hide store CTA (e.g. on /download where hero already installs). */
  browseOnly = false,
  /** UTM / analytics content for the store CTA. */
  playPlacement = "soft_cta",
}: {
  title?: string;
  body?: string;
  browseOnly?: boolean;
  playPlacement?: StoreClickPlacement;
}) {
  return (
    <aside className="my-10 rounded-3xl bg-[#F0EBFF] px-6 py-8 text-center md:px-10">
      <h2 className="text-xl font-black text-[#24212C] md:text-2xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-[#7D7788] md:text-base">{body}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {!browseOnly ? (
          <SmartStoreLink
            placement={playPlacement}
            className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
          >
            Get the app
          </SmartStoreLink>
        ) : null}
        <Link
          href="/worksheets"
          className={
            browseOnly
              ? "rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
              : "rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
          }
        >
          Browse worksheets
        </Link>
      </div>
    </aside>
  );
}
