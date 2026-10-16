import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@/components/Analytics";
import { AppDownloadRibbon } from "@/components/AppDownloadRibbon";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  jsonLdScript,
  organizationJsonLd,
  softwareAppJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

/** Self-hosted so Netlify builds do not depend on Turbopack Google Fonts fetch. */
const nunito = localFont({
  src: [
    { path: "../fonts/Nunito-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Nunito-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Nunito-800.woff2", weight: "800", style: "normal" },
    { path: "../fonts/Nunito-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7B5CD6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript([
            organizationJsonLd(),
            websiteJsonLd(),
            softwareAppJsonLd(),
          ])}
        />
        <Analytics />
        <div className="sticky top-0 z-50">
          <AppDownloadRibbon />
          <SiteHeader />
        </div>
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
