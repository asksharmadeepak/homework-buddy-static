import Link from "next/link";
import { notFound } from "next/navigation";
import { HubPageLayout } from "@/components/HubPageLayout";
import { buildMetadata } from "@/lib/seo";
import {
  getActivity,
  getClass,
  getTheme,
  publishedOnly,
  themes,
  worksheetSeeds,
} from "@/lib/taxonomy";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return publishedOnly(themes).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const t = getTheme(slug);
  if (!t || t.status !== "published") return {};
  return buildMetadata({ title: t.title, description: t.description, path: `/themes/${slug}` });
}

export default async function ThemePage({ params }: Props) {
  const { slug } = await params;
  const t = getTheme(slug);
  if (!t || t.status !== "published") notFound();

  const sheets = publishedOnly(worksheetSeeds).filter((w) => w.themeSlug === slug);

  return (
    <HubPageLayout
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Themes", path: "/themes" },
        { name: t.name, path: `/themes/${slug}` },
      ]}
      title={t.title}
      lead={t.description}
      intro={t.intro}
      howTo={t.howTo}
      faqs={t.faqs}
    >
      {sheets.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl font-black text-[#24212C]">Free printable worksheets</h2>
          <ul className="mt-4 space-y-3">
            {sheets.map((s) => (
              <li key={s.slug} className="rounded-2xl border border-[#ebe4f7] bg-white p-4">
                <Link
                  href={`/worksheets/${s.classSlug}/${s.slug}`}
                  className="font-extrabold text-[#7B5CD6]"
                >
                  {s.name}
                </Link>
                <p className="mt-1 text-sm font-semibold text-[#7D7788]">{s.description}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold">
                  <a href={s.pdfPath} download className="text-[#7B5CD6] hover:underline">
                    Download free PDF
                  </a>
                  <Link
                    href={`/worksheets/${s.classSlug}/${s.slug}`}
                    className="text-[#7D7788] hover:text-[#7B5CD6]"
                  >
                    View page
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-2xl font-black text-[#24212C]">Related classes & activities</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {(t.relatedClassSlugs || []).map((s) => {
            const c = getClass(s);
            return c ? (
              <Link
                key={s}
                href={`/worksheets/${s}`}
                className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
              >
                {c.name}
              </Link>
            ) : null;
          })}
          {(t.relatedActivitySlugs || []).map((s) => {
            const a = getActivity(s);
            return a ? (
              <Link
                key={s}
                href={`/activities/${s}`}
                className="rounded-full bg-[#FFEFE8] px-4 py-2 text-sm font-bold text-[#E85D75]"
              >
                {a.name}
              </Link>
            ) : null;
          })}
        </div>
      </section>
    </HubPageLayout>
  );
}
