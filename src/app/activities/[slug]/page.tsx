import Link from "next/link";
import { notFound } from "next/navigation";
import { HubPageLayout } from "@/components/HubPageLayout";
import { buildMetadata } from "@/lib/seo";
import {
  activities,
  getActivity,
  getClass,
  getTheme,
  publishedOnly,
} from "@/lib/taxonomy";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return publishedOnly(activities).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = getActivity(slug);
  if (!a || a.status !== "published") return {};
  return buildMetadata({ title: a.title, description: a.description, path: `/activities/${slug}` });
}

export default async function ActivityPage({ params }: Props) {
  const { slug } = await params;
  const a = getActivity(slug);
  if (!a || a.status !== "published") notFound();

  return (
    <HubPageLayout
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Activities", path: "/activities" },
        { name: a.name, path: `/activities/${slug}` },
      ]}
      title={a.title}
      lead={a.description}
      intro={a.intro}
      howTo={a.howTo}
      faqs={a.faqs}
    >
      <section className="mt-10">
        <h2 className="text-2xl font-black text-[#24212C]">Related classes & themes</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {(a.relatedClassSlugs || []).map((s) => {
            const c = getClass(s);
            return c ? (
              <Link key={s} href={`/worksheets/${s}`} className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]">
                {c.name}
              </Link>
            ) : null;
          })}
          {(a.relatedThemeSlugs || []).map((s) => {
            const t = getTheme(s);
            return t ? (
              <Link key={s} href={`/themes/${s}`} className="rounded-full bg-[#FFEFE8] px-4 py-2 text-sm font-bold text-[#E85D75]">
                {t.name}
              </Link>
            ) : null;
          })}
        </div>
      </section>
    </HubPageLayout>
  );
}
