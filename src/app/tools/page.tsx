import Link from "next/link";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata, collectionJsonLd, jsonLdScript } from "@/lib/seo";
import { publishedOnly, tools } from "@/lib/taxonomy";

export const metadata = buildMetadata({
  title: "Free educational tools for parents",
  description:
    "Worksheet generator ideas, reading and maths generators, and a homework planner for Nursery to Class 3.",
  path: "/tools",
});

export default function ToolsIndexPage() {
  const list = publishedOnly(tools);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          collectionJsonLd({
            name: "Tools",
            description: "Educational tools for parents",
            path: "/tools",
            items: list.map((t) => ({ name: t.name, path: `/tools/${t.slug}` })),
          }),
        )}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Tools", path: "/tools" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Free educational tools</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">
        Learn how worksheet generators and planners help busy parents — then create printables in Homework Buddy.
      </p>
      <ul className="mt-10 space-y-4">
        {list.map((t) => (
          <li key={t.slug}>
            <Link href={`/tools/${t.slug}`} className="block rounded-3xl border border-[#ebe4f7] bg-white p-5 hover:border-[#7B5CD6]/40">
              <span className="text-xl font-black text-[#24212C]">{t.name}</span>
              <p className="mt-2 text-sm font-semibold text-[#7D7788]">{t.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <SoftCta />
    </div>
  );
}
