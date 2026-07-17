import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of Use for easyhomeworkactivity.com and the Homework Buddy app.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Terms of Use</h1>
      <p className="mt-2 text-sm font-semibold text-[#7D7788]">Last updated: 17 July 2026</p>
      <div className="mt-8 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
        <p>
          By using {site.url.replace("https://", "")} or the Homework Buddy app, you agree to these terms.
          Educational content is provided for general parental guidance and home practice.
        </p>
        <p>
          Content is not a substitute for school instruction or professional educational advice. Always follow
          your child&apos;s school curriculum and teacher guidance.
        </p>
        <p>
          App features, pricing, and availability may change. Google Play terms also apply to app downloads and
          purchases.
        </p>
        <p>
          Questions:{" "}
          <a className="text-[#7B5CD6]" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </p>
      </div>
    </div>
  );
}
