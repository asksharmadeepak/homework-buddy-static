import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SoftCta } from "@/components/SoftCta";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Get Homework Buddy — Android on Google Play",
  description:
    "Homework Buddy is available on Google Play. Get printable worksheets for Nursery to Class 3. iPhone waitlist on the download page.",
  path: "/beta",
});

/** Legacy /beta URL kept for old links; points people to production download. */
export default function BetaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 text-center">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Get the app", path: "/download" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Homework Buddy is live on Android</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">
        The beta invite step is no longer needed. Get the app on Google Play, or join the iPhone waitlist
        on our download page.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={site.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#7B5CD6] px-8 py-4 text-base font-extrabold text-white"
        >
          Get the app on Google Play
        </a>
        <Link
          href="/download"
          className="rounded-full border-2 border-[#7B5CD6] px-8 py-4 text-base font-extrabold text-[#7B5CD6]"
        >
          Download page &amp; iPhone waitlist
        </Link>
      </div>
      <SoftCta
        title="Want printable worksheets tonight?"
        body="Browse free hubs on the site, or open the app to generate a fresh PDF."
      />
    </div>
  );
}
