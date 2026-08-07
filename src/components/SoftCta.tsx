import Link from "next/link";
import { playStoreUrlWithUtm } from "@/lib/site";

export function SoftCta({
  title = "Generate worksheets instantly with Homework Buddy",
  body = "Pick class, activity, theme, and time — then download a print-ready PDF. Get the app on Google Play.",
  /** When true, hide Play CTA (e.g. on /download where hero already installs). */
  browseOnly = false,
}: {
  title?: string;
  body?: string;
  browseOnly?: boolean;
}) {
  return (
    <aside className="my-10 rounded-3xl bg-[#F0EBFF] px-6 py-8 text-center md:px-10">
      <h2 className="text-xl font-black text-[#24212C] md:text-2xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-[#7D7788] md:text-base">{body}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {!browseOnly ? (
          <a
            href={playStoreUrlWithUtm("soft_cta")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
          >
            Get the app
          </a>
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
