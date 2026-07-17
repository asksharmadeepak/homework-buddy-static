import Link from "next/link";
import { notFound } from "next/navigation";
import { HubPageLayout } from "@/components/HubPageLayout";
import { buildMetadata, collectionJsonLd, jsonLdScript } from "@/lib/seo";
import {
  getActivity,
  getClass,
  getCrossHub,
  getTheme,
  publishedOnly,
  worksheetSeeds,
  classes,
  crossHubs,
} from "@/lib/taxonomy";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [
    ...publishedOnly(classes).map((c) => ({ slug: c.slug })),
    ...publishedOnly(crossHubs).map((h) => ({ slug: h.slug })),
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cls = getClass(slug);
  if (cls?.status === "published") {
    return buildMetadata({ title: cls.title, description: cls.description, path: `/worksheets/${slug}` });
  }
  const hub = getCrossHub(slug);
  if (hub?.status === "published") {
    return buildMetadata({ title: hub.title, description: hub.description, path: `/worksheets/${slug}` });
  }
  return {};
}

export default async function WorksheetHubPage({ params }: Props) {
  const { slug } = await params;
  const cls = getClass(slug);
  const hub = getCrossHub(slug);

  if (cls?.status === "published") {
    const sheets = publishedOnly(worksheetSeeds).filter((w) => w.classSlug === slug);
    const relatedActivities = (cls.relatedActivitySlugs || [])
      .map(getActivity)
      .filter(Boolean);
    const relatedThemes = (cls.relatedThemeSlugs || []).map(getTheme).filter(Boolean);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            collectionJsonLd({
              name: cls.name,
              description: cls.description,
              path: `/worksheets/${slug}`,
              items: sheets.map((s) => ({
                name: s.name,
                path: `/worksheets/${s.classSlug}/${s.slug}`,
              })),
            }),
          )}
        />
        <HubPageLayout
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Worksheets", path: "/worksheets" },
            { name: cls.name, path: `/worksheets/${slug}` },
          ]}
          title={cls.title}
          lead={cls.description}
          intro={cls.intro}
          howTo={cls.howTo}
          faqs={cls.faqs}
        >
          {sheets.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-black text-[#24212C]">Sample printable ideas</h2>
              <ul className="mt-4 space-y-3">
                {sheets.map((s) => (
                  <li key={s.slug} className="rounded-2xl border border-[#ebe4f7] bg-white p-4">
                    <Link href={`/worksheets/${s.classSlug}/${s.slug}`} className="font-extrabold text-[#7B5CD6]">
                      {s.name}
                    </Link>
                    <p className="mt-1 text-sm font-semibold text-[#7D7788]">{s.description}</p>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold">
                      <a href={s.pdfPath} download className="text-[#7B5CD6] hover:underline">
                        Download free PDF
                      </a>
                      <Link href={`/worksheets/${s.classSlug}/${s.slug}`} className="text-[#7D7788] hover:text-[#7B5CD6]">
                        View page
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className="mt-10">
            <h2 className="text-2xl font-black text-[#24212C]">Related activities & themes</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedActivities.map((a) =>
                a ? (
                  <Link key={a.slug} href={`/activities/${a.slug}`} className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]">
                    {a.name}
                  </Link>
                ) : null,
              )}
              {relatedThemes.map((t) =>
                t ? (
                  <Link key={t.slug} href={`/themes/${t.slug}`} className="rounded-full bg-[#FFEFE8] px-4 py-2 text-sm font-bold text-[#E85D75]">
                    {t.name}
                  </Link>
                ) : null,
              )}
            </div>
          </section>
        </HubPageLayout>
      </>
    );
  }

  if (hub?.status === "published") {
    return (
      <HubPageLayout
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Worksheets", path: "/worksheets" },
          { name: hub.name, path: `/worksheets/${slug}` },
        ]}
        title={hub.title}
        lead={hub.description}
        intro={hub.intro}
        howTo={hub.howTo}
        faqs={hub.faqs}
      >
        <section className="mt-10">
          <h2 className="text-2xl font-black text-[#24212C]">Continue exploring</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {hub.classSlug && (
              <Link href={`/worksheets/${hub.classSlug}`} className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]">
                {getClass(hub.classSlug)?.name} worksheets
              </Link>
            )}
            {hub.activitySlug && (
              <Link href={`/activities/${hub.activitySlug}`} className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]">
                {getActivity(hub.activitySlug)?.name}
              </Link>
            )}
            <Link href="/guides/printable-worksheets-guide" className="rounded-full bg-[#FFEFE8] px-4 py-2 text-sm font-bold text-[#E85D75]">
              Printable worksheets guide
            </Link>
          </div>
        </section>
      </HubPageLayout>
    );
  }

  notFound();
}
