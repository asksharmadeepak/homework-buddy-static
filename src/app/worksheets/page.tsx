import Image from "next/image";
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
import { playStoreUrlWithUtm } from "@/lib/site";

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
        <h2 className="text-2xl font-black text-[#24212C]">Free sample worksheets — see before you print</h2>
        <p className="mt-2 max-w-3xl text-sm font-semibold text-[#7D7788]">
          These are real printables (same style the app generates). Preview the page, download free, then create
          unlimited fresh sheets in Homework Buddy.
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freePdfs.map((s) => (
            <li
              key={s.slug}
              className="overflow-hidden rounded-2xl border border-[#ebe4f7] bg-white shadow-sm"
            >
              {s.previewImagePath ? (
                <Link href={`/worksheets/${s.classSlug}/${s.slug}`} className="block bg-[#FFFBF6]">
                  <Image
                    src={s.previewImagePath}
                    alt={s.previewImageAlt || `${s.name} worksheet preview`}
                    width={600}
                    height={850}
                    className="h-48 w-full object-cover object-top"
                  />
                </Link>
              ) : null}
              <div className="p-4">
                <p className="font-extrabold text-[#24212C]">{s.name}</p>
                <p className="mt-1 text-xs font-semibold text-[#7D7788]">{s.description}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold">
                  <a href={s.pdfPath} download className="text-[#7B5CD6] hover:underline">
                    Download PDF
                  </a>
                  <Link
                    href={`/worksheets/${s.classSlug}/${s.slug}`}
                    className="text-[#7D7788] hover:text-[#7B5CD6]"
                  >
                    Full preview
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl bg-white p-5 md:p-6">
          <h3 className="text-lg font-black text-[#24212C]">How the app creates sheets like these</h3>
          <p className="mt-2 text-sm font-semibold text-[#7D7788]">
            Pick class → activity → theme → generate → print. Same quality as the free samples above.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { src: "/screens/create-activity.png", label: "1. Create" },
              { src: "/screens/preview.png", label: "2. Preview" },
              { src: "/screens/activity-ready.png", label: "3. Ready to print" },
            ].map((shot) => (
              <div key={shot.src} className="text-center">
                <Image
                  src={shot.src}
                  alt={shot.label}
                  width={200}
                  height={400}
                  className="mx-auto h-auto w-full max-w-[140px] rounded-xl border border-[#ebe4f7] shadow-sm"
                />
                <p className="mt-2 text-xs font-extrabold text-[#7B5CD6]">{shot.label}</p>
              </div>
            ))}
          </div>
          <a
            href={playStoreUrlWithUtm("worksheets_samples")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-[#7B5CD6] px-5 py-3 text-sm font-extrabold text-white"
          >
            Generate more in the app
          </a>
        </div>
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
