import Link from "next/link";
import { BetaSignupForm } from "@/components/BetaSignupForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SoftCta } from "@/components/SoftCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Join the Homework Buddy beta",
  description:
    "Become a free Android beta tester for Homework Buddy. Submit your email to get a Google Play invite and help improve printable worksheets for Nursery to Class 3.",
  path: "/beta",
});

const steps = [
  "Submit your email below",
  "Accept the Google Play testing invite we send you",
  "Install Homework Buddy and open it at least once",
  "Use it for about two weeks — short worksheet sessions are enough",
];

export default function BetaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Beta", path: "/beta" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Join the Homework Buddy beta</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">
        Help us improve printable worksheets and homework activities for Indian parents of Nursery to
        Class 3 children. Free early access on Android — no payment required.
      </p>

      <ol className="mt-8 space-y-3 text-base font-semibold text-[#3d3848]">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7B5CD6] text-sm font-extrabold text-white">
              {index + 1}
            </span>
            <span className="pt-0.5">{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <BetaSignupForm />
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
        body="Browse printable hubs on the site, then join the beta when you are ready to try the app."
      />
    </div>
  );
}
