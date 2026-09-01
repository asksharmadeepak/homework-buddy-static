import Link from "next/link";
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
          {site.url.replace("https://", "")} is a parent-first educational site for printable worksheets and calm
          homework ideas from Nursery through Class 3. We publish class hubs, free sample PDFs, parent guides,
          and tools explainers — written for real Indian evenings after school, tuition, or a long commute.
        </p>
        <p>
          The Homework Buddy Android app generates print-ready activities when you need a fresh theme tonight.
          This website explains what good practice looks like at each age, offers downloadable samples you can
          preview before printing, and links to deeper guides on reading, maths, Hindi, and routines.
        </p>
        <p>
          Content is organised by class, activity, and theme so parents can find one helpful page — not fifty
          near-duplicate PDF links. Every indexable page is written to stand alone: unique guidance, FAQs, and
          next steps for that specific intent.
        </p>
        <p>
          Editorial review focuses on age-fit difficulty, finishable length, and language that supports parents
          without requiring a tutor. Read our{" "}
          <Link href="/editorial" className="text-[#7B5CD6]">
            editorial standards
          </Link>{" "}
          for how we create and update worksheet guidance.
        </p>
        <p>
          Contact:{" "}
          <a className="text-[#7B5CD6]" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
          {" · "}
          <Link href="/contact" className="text-[#7B5CD6]">
            Contact form
          </Link>
        </p>
      </div>
      <SoftCta />
    </div>
  );
}
