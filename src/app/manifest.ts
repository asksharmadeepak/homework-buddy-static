import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Homework Buddy",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFBF6",
    theme_color: "#7B5CD6",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
  };
}
