import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — Netlify serves `out/` as a plain site (no Next runtime).
  // Avoids Netlify OOM / exit-code-2 failures during `next build` + adapter bundling.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
