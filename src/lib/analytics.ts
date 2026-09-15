/** Client-side analytics helpers for GA4 + Meta Pixel. */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type StoreClickPlacement =
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

/** @deprecated Prefer StoreClickPlacement — kept for existing imports. */
export type PlayStoreClickPlacement = StoreClickPlacement;

export type StoreKind = "play" | "app_store";

/**
 * Fires when a user taps a store / Get the app link.
 * - GA4: `play_store_click` or `app_store_click`
 * - Meta Pixel custom: `PlayStoreClick` or `AppStoreClick`
 */
export function trackStoreClick(store: StoreKind, placement: StoreClickPlacement) {
  if (typeof window === "undefined") return;

  const pagePath = window.location.pathname;
  const gaEvent = store === "play" ? "play_store_click" : "app_store_click";
  const metaEvent = store === "play" ? "PlayStoreClick" : "AppStoreClick";

  try {
    window.gtag?.("event", gaEvent, {
      event_category: "outbound",
      event_label: placement,
      placement,
      store,
      page_path: pagePath,
      transport_type: "beacon",
    });
  } catch {
    /* ignore */
  }

  try {
    window.fbq?.("trackCustom", metaEvent, {
      placement,
      store,
      page_path: pagePath,
    });
  } catch {
    /* ignore */
  }
}

/** Fires when a user taps a Google Play / Get the app link. */
export function trackPlayStoreClick(placement: StoreClickPlacement) {
  trackStoreClick("play", placement);
}

/** Fires when a user taps an App Store / Get the app link. */
export function trackAppStoreClick(placement: StoreClickPlacement) {
  trackStoreClick("app_store", placement);
}
