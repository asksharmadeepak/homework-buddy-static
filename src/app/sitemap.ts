import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allPublishedPaths } from "@/lib/taxonomy";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return allPublishedPaths().map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
