import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SoftCta } from "@/components/SoftCta";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Editorial standards — Homework Buddy",
  description:
    "How Homework Buddy creates and reviews printable worksheet content for Nursery to Class 3 parents in India.",
  path: "/editorial",
});

export default function EditorialPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Editorial standards", path: "/editorial" },
        ]}
      />
      <h1 className="text-4xl font-black text-[#24212C]">Editorial standards</h1>
      <div className="mt-6 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
        <p>
          {site.name} publishes parent guidance and free printable worksheet samples for Nursery through Class 3.
          Content is written for busy Indian families — short evening sessions, A4 home printing, and calm
          practice without coaching-centre intensity.
        </p>
        <p>
          Each class hub, activity page, and worksheet sample is reviewed for age-fit difficulty, finishable
          length (typically 10–20 minutes), and clear instructions a parent can follow without a tutor script.
          We avoid exam-style pressure language and dense photocopy-style grids on early-year pages.
        </p>
        <p>
          Free PDF samples on this site match the layout style generated in the Homework Buddy Android app.
          When a sample feels familiar, you can generate fresh variations in the app rather than searching for
          another random download.
        </p>
        <p>
          We update hubs when school-year patterns shift or when parents report common pain points (e.g. Hindi
          varnamala confusion, Jr KG writing fatigue). Major updates note a revised date on the page footer.
        </p>
        <p>
          Questions or corrections:{" "}
          <a className="text-[#7B5CD6]" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
          . See also{" "}
          <Link href="/about" className="text-[#7B5CD6]">
            About
          </Link>
          ,{" "}
          <Link href="/privacy" className="text-[#7B5CD6]">
            Privacy
          </Link>
          , and{" "}
          <Link href="/contact" className="text-[#7B5CD6]">
            Contact
          </Link>
          .
        </p>
      </div>
      <SoftCta browseOnly />
    </div>
  );
}
