import Link from "next/link";
import { site } from "@/lib/site";

export function SoftCta({
  title = "Generate worksheets instantly with Homework Buddy",
  body = "Pick class, activity, theme, and time — then download a print-ready PDF. Join the Android beta to try the app.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <aside className="my-10 rounded-3xl bg-[#F0EBFF] px-6 py-8 text-center md:px-10">
      <h2 className="text-xl font-black text-[#24212C] md:text-2xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-[#7D7788] md:text-base">{body}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={site.appCtaPath}
          className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
        >
          Join the beta
        </Link>
        <Link
          href="/worksheets"
          className="rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
        >
          Browse worksheets
        </Link>
      </div>
    </aside>
  );
}
