import Link from "next/link";
import { BetaSignupForm } from "@/components/BetaSignupForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SoftCta } from "@/components/SoftCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get printable worksheets — free early access",
  description:
    "Get printable worksheets in the Homework Buddy app. Free early access for Nursery to Class 3 — Android beta open now, iPhone waitlist available.",
  path: "/beta",
});

export default function BetaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Beta", path: "/beta" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">
        Get printable worksheets in the app
      </h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">
        Free early access for Nursery to Class 3. Android beta is open now; iPhone waitlist available.
      </p>

      <div className="mt-8">
        <BetaSignupForm />
      </div>

      <div className="mt-8 space-y-2 text-sm font-semibold text-[#7D7788]">
        <p className="font-extrabold text-[#24212C]">How it works</p>
        <p>Android: we email a Play invite — install when you&apos;re ready.</p>
        <p>iPhone: we notify you when iOS early access opens.</p>
      </div>

      <p className="mt-8 text-sm font-semibold text-[#7D7788]">
        Prefer to browse first?{" "}
        <Link href="/worksheets" className="text-[#7B5CD6]">
          Free printable worksheets
        </Link>{" "}
        or see{" "}
        <Link href="/download" className="text-[#7B5CD6]">
          download details
        </Link>
        .
      </p>

      <SoftCta
        title="Already exploring worksheets?"
        body="Browse printable hubs on the site, then get early access when you are ready to try the app."
      />
    </div>
  );
}
