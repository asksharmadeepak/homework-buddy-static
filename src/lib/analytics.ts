/** Client-side analytics helpers for GA4 + Meta Pixel. */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type PlayStoreClickPlacement =
  | "ribbon"
  | "header"
  | "footer"
  | "home_hero"
  | "home_content"
  | "tool_page"
  | "download_hero"
  | "soft_cta"
  | "worksheets_samples"
  | "worksheet_detail"
  | "worksheet_chat"
  | "beta_legacy"
  | `class_hub_${string}`
  | `tool_${string}`;

/**
 * Fires when a user taps a Google Play / Get the app link.
 * - GA4 event: `play_store_click` (mark as key event in GA4)
 * - Meta Pixel custom event: `PlayStoreClick` (use as conversion in Ads Manager)
 */
export function trackPlayStoreClick(placement: PlayStoreClickPlacement) {
  if (typeof window === "undefined") return;

  const pagePath = window.location.pathname;

  try {
    window.gtag?.("event", "play_store_click", {
      event_category: "outbound",
      event_label: placement,
      placement,
      page_path: pagePath,
      transport_type: "beacon",
    });
  } catch {
    /* ignore */
  }

  try {
    window.fbq?.("trackCustom", "PlayStoreClick", {
      placement,
      page_path: pagePath,
    });
  } catch {
    /* ignore */
  }
}
