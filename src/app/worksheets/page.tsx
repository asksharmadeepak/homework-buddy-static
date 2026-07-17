import Link from "next/link";
import { HubCard } from "@/components/HubCard";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata, collectionJsonLd, jsonLdScript } from "@/lib/seo";
import {
  activities,
  classes,
  crossHubs,
  publishedOnly,
  themes,
  worksheetSeeds,
} from "@/lib/taxonomy";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Printable worksheets for Nursery to Class 3",
  description:
    "Browse printable worksheets by class, curated reading & maths hubs, and theme ideas for Indian parents.",
  path: "/worksheets",
});

export default function WorksheetsIndexPage() {
  const classList = publishedOnly(classes);
  const hubs = publishedOnly(crossHubs);
  const freePdfs = publishedOnly(worksheetSeeds);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          collectionJsonLd({
            name: "Printable worksheets",
            description: "Class and curated worksheet hubs",
            path: "/worksheets",
            items: [
              ...classList.map((c) => ({ name: c.name, path: `/worksheets/${c.slug}` })),
              ...hubs.map((h) => ({ name: h.name, path: `/worksheets/${h.slug}` })),
            ],
          }),
        )}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Worksheets", path: "/worksheets" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Printable worksheets</h1>
      <p className="mt-4 max-w-3xl text-lg font-semibold text-[#7D7788]">
        Find class-wise printable worksheet hubs and curated collections like Class 1 reading or preschool
        printables. Every page is written for real parent search intent — not empty filter combinations.
      </p>

      <section className="mt-12 rounded-3xl border border-[#7B5CD6]/20 bg-[#F0EBFF]/60 p-6 md:p-8">
        <h2 className="text-2xl font-black text-[#24212C]">Free downloadable sample PDFs</h2>
        <p className="mt-2 max-w-3xl text-sm font-semibold text-[#7D7788]">
          Print tonight with no signup. Want unlimited themed sheets afterward? Generate them in Homework Buddy.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {freePdfs.map((s) => (
            <li key={s.slug} className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-extrabold text-[#24212C]">{s.name}</p>
              <p className="mt-1 text-xs font-semibold text-[#7D7788]">{s.description}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold">
                <a href={s.pdfPath} download className="text-[#7B5CD6] hover:underline">
                  Download PDF
                </a>
                <Link href={`/worksheets/${s.classSlug}/${s.slug}`} className="text-[#7D7788] hover:text-[#7B5CD6]">
                  Open page
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <a
          href={site.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-[#7B5CD6] px-5 py-3 text-sm font-extrabold text-white"
        >
          Generate more in the app
        </a>
      </section>

      <h2 className="mt-12 text-2xl font-black text-[#24212C]">Browse by class</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {classList.map((c) => (
          <HubCard key={c.slug} href={`/worksheets/${c.slug}`} title={c.name} description={c.description} icon={c.icon} />
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-black text-[#24212C]">Curated worksheet hubs</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {hubs.map((h) => (
          <Link
            key={h.slug}
            href={`/worksheets/${h.slug}`}
            className="rounded-3xl border border-[#ebe4f7] bg-white p-5 font-extrabold text-[#24212C] hover:border-[#7B5CD6]/40"
          >
            {h.name}
            <p className="mt-2 text-sm font-semibold text-[#7D7788]">{h.description}</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-black text-[#24212C]">Also explore</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {publishedOnly(activities).map((a) => (
          <Link key={a.slug} href={`/activities/${a.slug}`} className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]">
            {a.name}
          </Link>
        ))}
        {publishedOnly(themes).slice(0, 6).map((t) => (
          <Link key={t.slug} href={`/themes/${t.slug}`} className="rounded-full bg-[#FFEFE8] px-4 py-2 text-sm font-bold text-[#E85D75]">
            {t.name}
          </Link>
        ))}
      </div>
      <SoftCta />
    </div>
  );
}
