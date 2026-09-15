export type StorePlatform = "ios" | "android" | "other";

/**
 * Detect which app store to open from the current device.
 * Safe to call only in the browser (uses navigator).
 */
export function detectStorePlatform(): StorePlatform {
  if (typeof navigator === "undefined") return "other";

  const ua = navigator.userAgent || "";
  const isIpadOs =
    /Macintosh/i.test(ua) &&
    typeof navigator.maxTouchPoints === "number" &&
    navigator.maxTouchPoints > 1;

  if (/iPhone|iPad|iPod/i.test(ua) || isIpadOs) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}
