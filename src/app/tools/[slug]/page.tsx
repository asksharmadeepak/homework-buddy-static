import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/FaqSection";
import { SmartStoreLink } from "@/components/PlayStoreLink";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import {
  getTool,
  getWorksheet,
  publishedOnly,
  tools,
  type WorksheetSeed,
} from "@/lib/taxonomy";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return publishedOnly(tools).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const t = getTool(slug);
  if (!t || t.status !== "published") return {};
  return buildMetadata({ title: t.title, description: t.description, path: `/tools/${slug}` });
}

const generatorScreens = [
  { src: "/screens/create-activity.png", label: "Choose class, activity & theme" },
  { src: "/screens/preview.png", label: "Preview before you print" },
  { src: "/screens/activity-ready.png", label: "Download print-ready PDF" },
];

const toolSampleKeys: Record<string, [string, string][]> = {
  "worksheet-generator": [
    ["nursery", "tracing-lines"],
    ["class-1", "english-reading-park"],
    ["jr-kg", "letter-tracing-abc"],
    ["class-3", "maths-word-problems"],
  ],
  "reading-generator": [
    ["class-1", "english-reading-park"],
    ["class-2", "english-comprehension"],
    ["sr-kg", "english-cvc-mix"],
  ],
  "math-worksheet-generator": [
    ["class-1", "maths-bonds-10"],
    ["sr-kg", "maths-add-within-10"],
    ["class-3", "maths-fractions-intro"],
  ],
  "homework-planner": [
    ["nursery", "tracing-lines"],
    ["class-1", "animals-reading-adventure"],
    ["jr-kg", "numbers-count-ten"],
  ],
};

function resolveSamples(slug: string): WorksheetSeed[] {
  const keys = toolSampleKeys[slug] ?? toolSampleKeys["worksheet-generator"];
  return keys
    .map(([classSlug, sheetSlug]) => getWorksheet(classSlug, sheetSlug))
    .filter((s): s is WorksheetSeed => Boolean(s && s.status === "published"));
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const t = getTool(slug);
  if (!t || t.status !== "published") notFound();
  const samples = resolveSamples(slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: t.name, path: `/tools/${slug}` },
        ]}
      />
      <p className="text-sm font-bold text-[#7B5CD6]">Parent guide</p>
      <h1 className="mt-2 text-3xl font-black leading-tight text-[#24212C] md:text-4xl">{t.title}</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">{t.description}</p>

      <div className="prose-hb mt-8 space-y-4">
        {t.intro.map((p) => (
          <p key={p.slice(0, 48)} className="text-base font-semibold leading-relaxed text-[#3d3848]">
            {p}
          </p>
        ))}
      </div>

      {samples.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-black text-[#24212C]">Free sample PDFs to download first</h2>
          <p className="mt-2 text-sm font-semibold text-[#7D7788]">
            Preview and print one sheet tonight — then generate unlimited PDFs in the app.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {samples.map((s) => (
              <Link
                key={`${s.classSlug}-${s.slug}`}
                href={`/worksheets/${s.classSlug}/${s.slug}`}
                className="rounded-2xl border border-[#ebe4f7] bg-white p-3 shadow-sm transition hover:border-[#7B5CD6]"
              >
                {s.previewImagePath ? (
                  <Image
                    src={s.previewImagePath}
                    alt={s.previewImageAlt || s.name}
                    width={s.previewImageWidth ?? 848}
                    height={s.previewImageHeight ?? 1200}
                    className="h-auto w-full rounded-xl border border-[#ebe4f7]"
                  />
                ) : null}
                <p className="mt-2 text-sm font-extrabold text-[#24212C]">{s.name}</p>
                <p className="text-xs font-semibold text-[#7B5CD6]">Free PDF →</p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold">
            <Link href="/worksheets" className="text-[#7B5CD6]">
              Browse all free printable worksheets
            </Link>
            {" · "}
            <Link href="/tools/free-printable-worksheet-generator" className="text-[#7B5CD6]">
              Free printable worksheet generator
            </Link>
          </p>
        </section>
      ) : null}

      {slug === "worksheet-generator" ? (
        <section className="mt-10 rounded-2xl border border-[#ebe4f7] bg-[#F7F4FC] p-6">
          <h2 className="text-xl font-black text-[#24212C]">How Homework Buddy generates sheets</h2>
          <p className="mt-2 text-sm font-semibold text-[#7D7788]">
            Same flow as the free samples on this site — pick options, preview, print.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {generatorScreens.map((shot) => (
              <div key={shot.src} className="text-center">
                <Image
                  src={shot.src}
                  alt={shot.label}
                  width={200}
                  height={400}
                  className="mx-auto h-auto w-full max-w-[120px] rounded-xl border border-[#ebe4f7] bg-white shadow-sm"
                />
                <p className="mt-2 text-xs font-bold text-[#7D7788]">{shot.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {slug === "worksheet-generator" ? (
        <p className="mt-6 rounded-2xl border border-[#ebe4f7] bg-[#F7F4FC] px-4 py-3 text-sm font-semibold text-[#3d3848]">
          Want one free sheet right now?{" "}
          <Link href="/tools/free-printable-worksheet-generator" className="text-[#7B5CD6]">
            Try the free printable worksheet generator
          </Link>{" "}
          — then get the app for unlimited themed PDFs.
        </p>
      ) : null}

      {t.sections && t.sections.length > 0 ? (
        <div className="mt-10 space-y-10">
          {t.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black text-[#24212C]">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mt-3 text-base font-semibold leading-relaxed text-[#3d3848]"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      ) : null}

      <section className="mt-10">
        <h2 className="text-2xl font-black text-[#24212C]">How to use this guide</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-base font-semibold text-[#3d3848]">
          {t.howTo.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <SoftCta
        playPlacement={`tool_${slug}`}
        title="Download a free sample, then generate unlimited sheets in the app"
        body="Browse free printable PDFs above first. When you need unlimited class + theme worksheets, get Homework Buddy."
        browseHref="/worksheets"
        browseLabel="Browse free worksheets"
      />
      <FaqSection faqs={t.faqs} />

      <p className="mt-8 text-sm font-semibold">
        Other tools:{" "}
        <Link href="/tools/free-printable-worksheet-generator" className="mr-3 text-[#7B5CD6]">
          Free printable worksheet generator
        </Link>
        {publishedOnly(tools)
          .filter((x) => x.slug !== slug)
          .map((x) => (
            <Link key={x.slug} href={`/tools/${x.slug}`} className="mr-3 text-[#7B5CD6]">
              {x.name}
            </Link>
          ))}
      </p>
      <p className="mt-6 text-xs font-semibold text-[#7D7788]">
        Educational disclaimer: General parent guidance. Follow your school curriculum.{" "}
        <SmartStoreLink placement="tool_page" className="text-[#7B5CD6]">
          Get the app
        </SmartStoreLink>
      </p>
    </article>
  );
}
