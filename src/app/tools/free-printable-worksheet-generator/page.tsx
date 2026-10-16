import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { SoftCta } from "@/components/SoftCta";
import { WorksheetChat } from "@/components/WorksheetChat";
import { buildMetadata } from "@/lib/seo";
import { publishedOnly, worksheetSeeds } from "@/lib/taxonomy";

export const metadata = buildMetadata({
  title: "Free printable worksheet generator for Nursery to Class 3",
  description:
    "Generate one free printable worksheet in your browser for Nursery to Class 3, or download ready-made PDF samples. For unlimited themed sheets, get the Homework Buddy app.",
  path: "/tools/free-printable-worksheet-generator",
});

const faqs = [
  {
    question: "Is this the same as the Homework Buddy app?",
    answer:
      "No. This free printable worksheet generator builds one browser-printable practice sheet. The Homework Buddy app generates unlimited class + theme PDFs with preview and download on Google Play and the App Store.",
  },
  {
    question: "How many free sheets can I generate?",
    answer:
      "Up to three free sheets per day on this website. Browse our free sample PDF library anytime, or install Homework Buddy when you need more variety.",
  },
  {
    question: "Can I save a PDF from this generator?",
    answer:
      "Use your browser’s Print dialog and choose “Save as PDF” if you want a file. For ready-made illustrated PDFs, download the free samples linked below or use the app.",
  },
  {
    question: "What ages is this for?",
    answer:
      "Nursery through Class 3 — pick the class that matches your child before you generate. School labels like LKG and UKG map to Jr KG and Sr KG on this site.",
  },
];

const sampleLinks = publishedOnly(worksheetSeeds)
  .filter((s) =>
    [
      "tracing-lines",
      "animals-matching",
      "letter-tracing-abc",
      "animals-reading-adventure",
    ].includes(s.slug),
  )
  .slice(0, 4);

export default function FreePrintableWorksheetGeneratorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
      <div className="print:hidden">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            {
              name: "Free printable worksheet generator",
              path: "/tools/free-printable-worksheet-generator",
            },
          ]}
        />
        <h1 className="mt-2 text-2xl font-black leading-tight text-[#24212C] md:text-3xl">
          Free printable worksheet generator
        </h1>
        <p className="mt-2 max-w-3xl text-base font-semibold text-[#7D7788]">
          Make one calm Nursery–Class 3 practice sheet in your browser tonight — or download a free PDF
          sample first, then use Homework Buddy for unlimited themed worksheets.
        </p>

        <div className="prose-hb mt-6 max-w-3xl space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
          <p>
            Parents searching for a free printable worksheet generator usually need something finishable
            after school or tuition — not a full curriculum pack. This page helps you describe tonight’s
            practice (class, skill, and a short prompt), then print one sheet from your browser. It is built
            for Nursery, Jr KG / LKG, Sr KG / UKG, and Class 1–3.
          </p>
          <p>
            Start with a ready-made sample if you want to see layout and difficulty before generating. Our{" "}
            <Link href="/worksheets/nursery" className="text-[#7B5CD6]">
              Nursery worksheets
            </Link>
            ,{" "}
            <Link href="/worksheets/lkg" className="text-[#7B5CD6]">
              LKG worksheets
            </Link>
            , and{" "}
            <Link href="/worksheets/class-1" className="text-[#7B5CD6]">
              Class 1 worksheets
            </Link>{" "}
            hubs collect free A4 PDFs for tracing, matching, reading, maths, and Hindi. Preview on your phone,
            print one page, and stop while energy is still good.
          </p>
          <p>
            Browser sheets here are simple practice pages. Illustrated, themed PDFs with the same calm style as
            the free samples come from the Homework Buddy app on Google Play and the App Store — pick class,
            activity, theme, and time, preview, then download when you need a fresh variation.
          </p>
          <p>
            Teachers and parents can use this generator for a quick warm-up, then point families to the free
            sample library for take-home practice. Prefer subject hubs? Browse{" "}
            <Link href="/worksheets/english" className="text-[#7B5CD6]">
              English worksheets
            </Link>
            ,{" "}
            <Link href="/activities/maths" className="text-[#7B5CD6]">
              maths worksheets
            </Link>
            , or{" "}
            <Link href="/worksheets/tracing" className="text-[#7B5CD6]">
              tracing worksheets
            </Link>
            .
          </p>
        </div>

        {sampleLinks.length > 0 ? (
          <section className="mt-8 rounded-2xl border border-[#ebe4f7] bg-[#F7F4FC] p-5">
            <h2 className="text-lg font-black text-[#24212C]">Free sample PDFs to download first</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {sampleLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/worksheets/${s.classSlug}/${s.slug}`}
                    className="text-sm font-bold text-[#7B5CD6] hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-semibold text-[#7D7788]">
              <Link href="/worksheets" className="text-[#7B5CD6]">
                Browse all free printable worksheets
              </Link>
            </p>
          </section>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/worksheets"
            className="rounded-full bg-[#7B5CD6] px-5 py-2.5 text-sm font-extrabold text-white"
          >
            Browse free samples
          </Link>
          <a
            href="#generator"
            className="rounded-full border-2 border-[#7B5CD6] px-5 py-2.5 text-sm font-extrabold text-[#7B5CD6]"
          >
            Generate one sheet
          </a>
        </div>
      </div>

      <div id="generator" className="mt-8 scroll-mt-28">
        <WorksheetChat />
      </div>

      <div className="print:hidden">
        <FaqSection faqs={faqs} />
        <SoftCta
          playPlacement="worksheet_chat"
          title="Need unlimited themed PDFs?"
          body="Download a free sample above, generate one browser sheet when you need a quick warm-up, then get Homework Buddy for unlimited class + theme printables."
        />
      </div>
    </div>
  );
}
