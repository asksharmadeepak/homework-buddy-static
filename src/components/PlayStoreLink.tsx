"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  trackPlayStoreClick,
  type PlayStoreClickPlacement,
} from "@/lib/analytics";
import { playStoreUrlWithUtm } from "@/lib/site";

type PlayStoreLinkProps = {
  placement: PlayStoreClickPlacement;
  className?: string;
  children: ReactNode;
  /** Defaults to opening Play Store in a new tab. */
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
}: PlayStoreLinkProps) {
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

type PlayStoreBadgeProps = {
  placement: PlayStoreClickPlacement;
  className?: string;
  priority?: boolean;
};

/** Standard Google Play badge used on /download hero. */
export function PlayStoreBadge({ placement, className, priority }: PlayStoreBadgeProps) {
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
