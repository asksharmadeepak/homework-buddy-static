import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allPublishedSitemapEntries } from "@/lib/taxonomy";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPublishedSitemapEntries().map(({ path, lastModified }) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
