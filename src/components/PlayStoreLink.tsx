"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  trackAppStoreClick,
  trackPlayStoreClick,
  type StoreClickPlacement,
} from "@/lib/analytics";
import { detectStorePlatform } from "@/lib/platform";
import { appStoreUrlWithUtm, playStoreUrlWithUtm } from "@/lib/site";

type StoreLinkBaseProps = {
  placement: StoreClickPlacement;
  className?: string;
  children: ReactNode;
  target?: "_blank" | "_self";
  "aria-label"?: string;
};

/** Outbound Play Store link that fires GA4 + Meta Pixel click events. */
export function PlayStoreLink({
  placement,
  className,
  children,
  target = "_blank",
  "aria-label": ariaLabel,
}: StoreLinkBaseProps) {
  return (
    <a
      href={playStoreUrlWithUtm(placement)}
      target={target}
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackPlayStoreClick(placement)}
    >
      {children}
    </a>
  );
}

/** Outbound App Store link that fires GA4 + Meta Pixel click events. */
export function AppStoreLink({
  placement,
  className,
  children,
  target = "_blank",
  "aria-label": ariaLabel,
}: StoreLinkBaseProps) {
  return (
    <a
      href={appStoreUrlWithUtm(placement)}
      target={target}
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackAppStoreClick(placement)}
    >
      {children}
    </a>
  );
}

type BadgeProps = {
  placement: StoreClickPlacement;
  className?: string;
  priority?: boolean;
};

/** Shared badge display size so Play + App Store match side-by-side. */
const badgeImgClass = "mx-auto h-[64px] w-[168px] object-contain";

/** Standard Google Play badge used on /download hero. */
export function PlayStoreBadge({ placement, className, priority }: BadgeProps) {
  return (
    <PlayStoreLink placement={placement} className={className} aria-label="Get it on Google Play">
      <Image
        src="/brand/google-play-badge.png"
        alt="Get it on Google Play"
        width={168}
        height={64}
        className={badgeImgClass}
        priority={priority}
      />
    </PlayStoreLink>
  );
}

/** Official-style App Store badge used on /download hero. */
export function AppStoreBadge({ placement, className }: BadgeProps) {
  return (
    <AppStoreLink placement={placement} className={className} aria-label="Download on the App Store">
      {/* SVG badge: native img avoids next/image SVG restrictions */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/app-store-badge.svg"
        alt="Download on the App Store"
        width={168}
        height={64}
        className={badgeImgClass}
        decoding="async"
      />
    </AppStoreLink>
  );
}

type SmartStoreLinkProps = {
  placement: StoreClickPlacement;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

/**
 * Single “Get the app” CTA:
 * - iOS / iPadOS → App Store
 * - Android + desktop / other → Play Store
 */
export function SmartStoreLink({
  placement,
  className,
  children,
  "aria-label": ariaLabel = "Get the Homework Buddy app",
}: SmartStoreLinkProps) {
  const [href, setHref] = useState(() => playStoreUrlWithUtm(placement));
  const [store, setStore] = useState<"play" | "app_store">("play");

  useEffect(() => {
    if (detectStorePlatform() === "ios") {
      setHref(appStoreUrlWithUtm(placement));
      setStore("app_store");
    } else {
      setHref(playStoreUrlWithUtm(placement));
      setStore("play");
    }
  }, [placement]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        if (store === "play") trackPlayStoreClick(placement);
        else trackAppStoreClick(placement);
      }}
    >
      {children}
    </a>
  );
}
