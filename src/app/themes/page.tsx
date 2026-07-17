import { HubCard } from "@/components/HubCard";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata, collectionJsonLd, jsonLdScript } from "@/lib/seo";
import { publishedOnly, themes } from "@/lib/taxonomy";

export const metadata = buildMetadata({
  title: "Theme-based learning worksheets",
  description:
    "Animals, transport, nature, space, festivals, stories, fruits, monsoon, and professions — printable theme hubs.",
  path: "/themes",
});

export default function ThemesIndexPage() {
  const list = publishedOnly(themes);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          collectionJsonLd({
            name: "Themes",
            description: "Theme-based learning hubs",
            path: "/themes",
            items: list.map((t) => ({ name: t.name, path: `/themes/${t.slug}` })),
          }),
        )}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Themes", path: "/themes" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Theme-based learning</h1>
      <p className="mt-4 max-w-3xl text-lg font-semibold text-[#7D7788]">
        Themes make practice stick. Browse printable learning ideas organised around what kids already love.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <HubCard key={t.slug} href={`/themes/${t.slug}`} title={t.name} description={t.description} icon={t.icon} />
        ))}
      </div>
      <SoftCta />
    </div>
  );
}
