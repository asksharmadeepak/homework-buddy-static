"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import {
  trackAppStoreClick,
  trackPlayStoreClick,
  type StoreClickPlacement,
} from "@/lib/analytics";
import { detectStorePlatform } from "@/lib/platform";
import { appStoreUrlWithUtm, playStoreUrlWithUtm, site } from "@/lib/site";

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

/** Standard Google Play badge used on /download hero. */
export function PlayStoreBadge({ placement, className, priority }: BadgeProps) {
  return (
    <PlayStoreLink placement={placement} className={className} aria-label="Get it on Google Play">
      <Image
        src="/brand/google-play-badge.png"
        alt="Get it on Google Play"
        width={215}
        height={83}
        className="mx-auto h-auto w-[215px]"
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
        width={215}
        height={64}
        className="mx-auto h-auto w-[215px]"
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
 * - iOS → App Store
 * - Android → Play Store
 * - Desktop/other → /download (both badges)
 */
export function SmartStoreLink({
  placement,
  className,
  children,
  "aria-label": ariaLabel = "Get the Homework Buddy app",
}: SmartStoreLinkProps) {
  const [href, setHref] = useState<string>(site.appCtaPath);
  const [store, setStore] = useState<"play" | "app_store" | "download">("download");

  useEffect(() => {
    const platform = detectStorePlatform();
    if (platform === "ios") {
      setHref(appStoreUrlWithUtm(placement));
      setStore("app_store");
    } else if (platform === "android") {
      setHref(playStoreUrlWithUtm(placement));
      setStore("play");
    } else {
      setHref(site.appCtaPath);
      setStore("download");
    }
  }, [placement]);

  if (store === "download") {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

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
