/** Client-side analytics helpers for GA4 + Meta Pixel. */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type PlayStoreClickContent =
  | "download_hero"
  | "soft_cta"
  | "worksheets_samples"
  | "worksheet_detail"
  | "beta_legacy"
  | string;

/**
 * Fires when a user taps a Google Play / Get the app link.
 * - GA4 event: `play_store_click` (mark as key event in GA4)
 * - Meta Pixel custom event: `PlayStoreClick` (use as conversion in Ads Manager)
 */
export function trackPlayStoreClick(content: PlayStoreClickContent) {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", "play_store_click", {
      event_category: "outbound",
      event_label: content,
      transport_type: "beacon",
    });
  } catch {
    /* ignore */
  }

  try {
    window.fbq?.("trackCustom", "PlayStoreClick", { content });
  } catch {
    /* ignore */
  }
}
