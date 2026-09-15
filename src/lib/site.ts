export const site = {
  name: "Homework Buddy",
  tagline: "Printable worksheets & easy homework activities for Nursery to Class 3",
  description:
    "A parent-friendly platform for printable worksheets, homework activities, and AI-generated learning material for Nursery to Class 3. Download the Homework Buddy app on Google Play and the App Store.",
  url: "https://easyhomeworkactivity.com",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.homeworkbuddy.app",
  playStoreId: "com.homeworkbuddy.app",
  /**
   * App Store listing URL. Replace placeholder when the iOS app goes live,
   * or set NEXT_PUBLIC_APP_STORE_URL in Netlify.
   */
  appStoreUrl:
    process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com/app/idPLACEHOLDER",
  /** Primary in-site path for “Get the app” CTAs (both store badges). */
  appCtaPath: "/download",
  /**
   * Instagram profile. Override with NEXT_PUBLIC_INSTAGRAM_URL if needed.
   * Used in Organization sameAs + footer.
   */
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/homeworkbuddyapp",
  supportEmail: "support.dlabs@gmail.com",
  privacyEmail: "support.dlabs@gmail.com",
  version: "1.0.6",
  locale: "en",
} as const;

/** Play Store URL with UTM params for organic→install attribution. */
export function playStoreUrlWithUtm(content: string, medium = "organic") {
  const url = new URL(site.playStoreUrl);
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", "app_download");
  url.searchParams.set("utm_content", content);
  return url.toString();
}

/** App Store URL with UTM params for organic→install attribution. */
export function appStoreUrlWithUtm(content: string, medium = "organic") {
  const url = new URL(site.appStoreUrl);
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", "app_download");
  url.searchParams.set("utm_content", content);
  return url.toString();
}

export const navMain = [
  { href: "/worksheets", label: "Worksheets" },
  { href: "/activities", label: "Activities" },
  { href: "/themes", label: "Themes" },
  { href: "/guides", label: "Guides" },
  { href: "/tools", label: "Tools" },
  { href: "/faq", label: "FAQ" },
] as const;

export const navFooter = {
  explore: [
    { href: "/worksheets", label: "Printable worksheets" },
    { href: "/worksheets/nursery", label: "Nursery worksheets" },
    { href: "/activities", label: "Homework activities" },
    { href: "/themes", label: "Theme-based learning" },
    { href: "/guides", label: "Parent guides" },
    { href: "/tools", label: "Free tools" },
    { href: "/tools/chat", label: "Printable helper" },
  ],
  product: [
    { href: "/features", label: "Features" },
    { href: "/download", label: "Get the app" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
    { href: "/editorial", label: "Editorial" },
    { href: "/sitemap", label: "Site map" },
  ],
} as const;
