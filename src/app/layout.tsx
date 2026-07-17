import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@/components/Analytics";
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

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-nunito",
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
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
