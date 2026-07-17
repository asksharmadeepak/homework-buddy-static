import Link from "next/link";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { guides, publishedOnly } from "@/lib/taxonomy";

export const metadata = buildMetadata({
  title: "Parent guides for homework & printable worksheets",
  description:
    "Long-form parent guides on homework routines, printable worksheets, Class 1 reading, and easy homework ideas.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  const list = publishedOnly(guides);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Parent guides</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">
        Practical articles for busy parents — routines, printables, and class-wise reading support.
      </p>
      <ul className="mt-10 space-y-6">
        {list.map((g) => (
          <li key={g.slug} className="rounded-3xl border border-[#ebe4f7] bg-white p-6">
            <Link href={`/guides/${g.slug}`} className="text-xl font-black text-[#7B5CD6]">
              {g.title}
            </Link>
            <p className="mt-2 text-sm font-semibold text-[#7D7788]">{g.description}</p>
            <p className="mt-2 text-xs font-bold text-[#7D7788]">Updated {g.dateModified}</p>
          </li>
        ))}
      </ul>
      <SoftCta />
    </div>
  );
}
