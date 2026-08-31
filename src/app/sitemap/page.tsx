import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  activities,
  classes,
  crossHubs,
  guides,
  publishedOnly,
  themes,
  tools,
  worksheetSeeds,
} from "@/lib/taxonomy";

export const metadata = buildMetadata({
  title: "Site map — all printable worksheet pages",
  description:
    "Browse every class hub, curated collection, free sample worksheet, activity, theme, guide, and tool on Homework Buddy.",
  path: "/sitemap",
});

export default function HtmlSitemapPage() {
  const classList = publishedOnly(classes);
  const hubList = publishedOnly(crossHubs);
  const sheetList = publishedOnly(worksheetSeeds);
  const activityList = publishedOnly(activities);
  const themeList = publishedOnly(themes);
  const guideList = publishedOnly(guides);
  const toolList = publishedOnly(tools);

  const sections = [
    {
      title: "Class worksheet hubs",
      links: classList.map((c) => ({
        href: `/worksheets/${c.slug}`,
        label: c.name,
      })),
    },
    {
      title: "Curated collections",
      links: hubList.map((h) => ({
        href: `/worksheets/${h.slug}`,
        label: h.name,
      })),
    },
    {
      title: "Free sample worksheets",
      links: sheetList.map((s) => ({
        href: `/worksheets/${s.classSlug}/${s.slug}`,
        label: `${s.name} (${s.classSlug})`,
      })),
    },
    {
      title: "Activities",
      links: activityList.map((a) => ({
        href: `/activities/${a.slug}`,
        label: a.name,
      })),
    },
    {
      title: "Themes",
      links: themeList.map((t) => ({
        href: `/themes/${t.slug}`,
        label: t.name,
      })),
    },
    {
      title: "Parent guides",
      links: guideList.map((g) => ({
        href: `/guides/${g.slug}`,
        label: g.title,
      })),
    },
    {
      title: "Tools",
      links: toolList.map((t) => ({
        href: `/tools/${t.slug}`,
        label: t.name,
      })),
    },
    {
      title: "Main pages",
      links: [
        { href: "/", label: "Home" },
        { href: "/worksheets", label: "Worksheets index" },
        { href: "/download", label: "Get the app" },
        { href: "/features", label: "Features" },
        { href: "/faq", label: "FAQ" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Site map", path: "/sitemap" },
        ]}
      />
      <h1 className="text-3xl font-black text-[#24212C]">Site map</h1>
      <p className="mt-4 text-base font-semibold text-[#7D7788]">
        All indexable educational pages on {site.url.replace("https://", "")}.
        Machine-readable sitemap:{" "}
        <a href="/sitemap.xml" className="font-bold text-[#7B5CD6]">
          sitemap.xml
        </a>
        .
      </p>
      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-black text-[#24212C]">{section.title}</h2>
            <ul className="mt-4 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold text-[#7B5CD6] hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
