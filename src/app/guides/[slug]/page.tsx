import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/FaqSection";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { articleJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";
import { getGuide, guides, publishedOnly } from "@/lib/taxonomy";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return publishedOnly(guides).map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g || g.status !== "published") return {};
  return buildMetadata({
    title: g.title,
    description: g.description,
    path: `/guides/${slug}`,
    type: "article",
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g || g.status !== "published") notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleJsonLd({
            title: g.title,
            description: g.description,
            path: `/guides/${slug}`,
            datePublished: g.datePublished,
            dateModified: g.dateModified,
          }),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: g.title, path: `/guides/${slug}` },
        ]}
      />
      <p className="text-sm font-bold text-[#7B5CD6]">Parent guide</p>
      <h1 className="mt-2 text-3xl font-black leading-tight text-[#24212C] md:text-4xl">{g.title}</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">{g.description}</p>
      <p className="mt-3 text-xs font-semibold text-[#7D7788]">
        Author: {site.name} editorial team · Published {g.datePublished} · Last updated {g.dateModified} ·
        Editorial review completed
      </p>
      <div className="mt-10 space-y-10">
        {g.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-black text-[#24212C]">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-3 text-base font-semibold leading-relaxed text-[#3d3848]">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
      <SoftCta />
      <FaqSection faqs={g.faqs} />
      <p className="mt-8 text-sm font-semibold">
        More guides:{" "}
        {publishedOnly(guides)
          .filter((x) => x.slug !== slug)
          .map((x) => (
            <Link key={x.slug} href={`/guides/${x.slug}`} className="mr-3 text-[#7B5CD6]">
              {x.title}
            </Link>
          ))}
      </p>
      <p className="mt-6 text-xs font-semibold text-[#7D7788]">
        Educational disclaimer: General guidance for parents. Follow your school curriculum and teacher advice.
      </p>
    </article>
  );
}
