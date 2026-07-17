import { site } from "@/lib/site";
import { guides, publishedOnly } from "@/lib/taxonomy";

export const dynamic = "force-static";

export async function GET() {
  const items = publishedOnly(guides);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${site.name} Guides</title>
    <link>${site.url}/guides</link>
    <description>Parent guides for printable worksheets and homework routines</description>
    ${items
      .map(
        (g) => `<item>
      <title><![CDATA[${g.title}]]></title>
      <link>${site.url}/guides/${g.slug}</link>
      <guid>${site.url}/guides/${g.slug}</guid>
      <pubDate>${new Date(g.datePublished).toUTCString()}</pubDate>
      <description><![CDATA[${g.description}]]></description>
    </item>`,
      )
      .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
