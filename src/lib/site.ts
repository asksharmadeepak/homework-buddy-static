export const site = {
  name: "Homework Buddy",
  tagline: "Printable worksheets & easy homework activities for Nursery to Class 3",
  description:
    "India's parent-friendly platform for printable worksheets, homework activities, and AI-generated learning material for Nursery to Class 3. Download the Homework Buddy app on Google Play.",
  url: "https://easyhomeworkactivity.com",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.homeworkbuddy.app",
  playStoreId: "com.homeworkbuddy.app",
  /** Where “Get the app” / download CTAs go while the app is in closed testing. */
  appCtaPath: "/beta",
  /** Play Console closed-testing join link; leave empty until you have one. */
  playBetaJoinUrl: process.env.NEXT_PUBLIC_PLAY_BETA_JOIN_URL ?? "",
  supportEmail: "support@homeworkbuddy.app",
  privacyEmail: "privacy@homeworkbuddy.app",
  version: "1.0.4",
  locale: "en_IN",
} as const;

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
    { href: "/activities", label: "Homework activities" },
    { href: "/themes", label: "Theme-based learning" },
    { href: "/guides", label: "Parent guides" },
    { href: "/tools", label: "Free tools" },
  ],
  product: [
    { href: "/features", label: "Features" },
    { href: "/beta", label: "Get the app" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
