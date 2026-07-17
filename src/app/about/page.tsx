import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SoftCta } from "@/components/SoftCta";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Homework Buddy",
  description:
    "About easyhomeworkactivity.com — a content-first educational platform for printable worksheets and the Homework Buddy app.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">About {site.name}</h1>
      <div className="mt-6 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
        <p>
          {site.url.replace("https://", "")} is a content-first educational platform for parents seeking
          printable worksheets, homework activities, and calm learning ideas for Nursery to Class 3.
        </p>
        <p>
          The Homework Buddy Android application is the product that helps you generate print-ready activities.
          This website exists to answer real parent questions with genuine educational value — and to introduce
          the app as the easiest way to create fresh worksheets when you need them.
        </p>
        <p>
          We organise content in topic clusters (classes, activities, themes, guides, and tools) so families can
          find helpful pages without thin auto-generated spam.
        </p>
        <p>
          Contact:{" "}
          <a className="text-[#7B5CD6]" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </p>
      </div>
      <SoftCta />
    </div>
  );
}
