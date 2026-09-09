import { site } from "@/lib/site";
import { publishedOnly, worksheetSeeds } from "@/lib/taxonomy";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const entries = publishedOnly(worksheetSeeds)
    .filter((sheet) => sheet.previewImagePath)
    .map((sheet) => {
      const pageUrl = `${site.url}/worksheets/${sheet.classSlug}/${sheet.slug}`;
      const imageUrl = `${site.url}${sheet.previewImagePath}`;
      const caption =
        sheet.previewImageCaption ??
        `${sheet.name} — free printable worksheet preview from Homework Buddy.`;

      return `<url>
  <loc>${escapeXml(pageUrl)}</loc>
  <image:image>
    <image:loc>${escapeXml(imageUrl)}</image:loc>
    <image:title>${escapeXml(sheet.title)}</image:title>
    <image:caption>${escapeXml(caption)}</image:caption>
  </image:image>
</url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
