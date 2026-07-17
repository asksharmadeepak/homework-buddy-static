import Link from "next/link";
import { notFound } from "next/navigation";
import { HubPageLayout } from "@/components/HubPageLayout";
import { buildMetadata } from "@/lib/seo";
import { getTool, publishedOnly, tools } from "@/lib/taxonomy";
import { site } from "@/lib/site";

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

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const t = getTool(slug);
  if (!t || t.status !== "published") notFound();

  return (
    <HubPageLayout
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Tools", path: "/tools" },
        { name: t.name, path: `/tools/${slug}` },
      ]}
      title={t.title}
      lead={t.description}
      intro={t.intro}
      howTo={t.howTo}
      faqs={t.faqs}
    >
      <section className="mt-10 rounded-3xl border border-dashed border-[#7B5CD6]/40 bg-white p-6">
        <h2 className="text-xl font-black text-[#24212C]">Try it on Android</h2>
        <p className="mt-2 text-sm font-semibold text-[#7D7788]">
          Homework Buddy lets you choose class, activity, theme, and time, then download a print-ready PDF.
          This web page explains the approach; generation happens in the app today.
        </p>
        <a
          href={site.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full bg-[#7B5CD6] px-5 py-3 text-sm font-extrabold text-white"
        >
          Open Homework Buddy on Google Play
        </a>
      </section>
      <p className="mt-8 text-sm font-semibold">
        Other tools:{" "}
        {publishedOnly(tools)
          .filter((x) => x.slug !== slug)
          .map((x) => (
            <Link key={x.slug} href={`/tools/${x.slug}`} className="mr-3 text-[#7B5CD6]">
              {x.name}
            </Link>
          ))}
      </p>
    </HubPageLayout>
  );
}
