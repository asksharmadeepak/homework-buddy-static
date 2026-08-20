"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { trackPlayStoreClick, type PlayStoreClickContent } from "@/lib/analytics";
import { playStoreUrlWithUtm } from "@/lib/site";

type PlayStoreLinkProps = {
  content: PlayStoreClickContent;
  className?: string;
  children: ReactNode;
  /** Defaults to opening Play Store in a new tab. */
  target?: "_blank" | "_self";
  "aria-label"?: string;
};

/** Outbound Play Store link that fires GA4 + Meta Pixel click events. */
export function PlayStoreLink({
  content,
  className,
  children,
  target = "_blank",
  "aria-label": ariaLabel,
}: PlayStoreLinkProps) {
  return (
    <a
      href={playStoreUrlWithUtm(content)}
      target={target}
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackPlayStoreClick(content)}
    >
      {children}
    </a>
  );
}

type PlayStoreBadgeProps = {
  content: PlayStoreClickContent;
  className?: string;
  priority?: boolean;
};

/** Standard Google Play badge used on /download hero. */
export function PlayStoreBadge({ content, className, priority }: PlayStoreBadgeProps) {
  return (
    <PlayStoreLink content={content} className={className} aria-label="Get it on Google Play">
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
