import Image from "next/image";
import Link from "next/link";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IphoneWaitlistForm } from "@/components/IphoneWaitlistForm";
import { PlayStoreBadge } from "@/components/PlayStoreLink";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Download Homework Buddy — free printable worksheets for kids",
  description:
    "Get Homework Buddy on Google Play. Kids create their own printable homework for Nursery to Class 3 — Reading, Maths, Hindi Fun, and more.",
  path: "/download",
});

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Download", path: "/download" },
        ]}
      />
      <div className="text-center">
        <Image
          src="/brand/app_icon.png"
          alt=""
          width={96}
          height={96}
          className="mx-auto rounded-3xl shadow"
        />
        <h1 className="mt-6 text-4xl font-black text-[#24212C]">Get Homework Buddy</h1>
        <p className="mt-4 text-lg font-semibold text-[#7D7788]">
          Kids create their own printable homework — Nursery to Class 3. Free on Google Play.
        </p>
        <PlayStoreBadge content="download_hero" className="mt-8 inline-block" priority />
        <p className="mt-3 text-sm font-bold text-[#7B5CD6]">
          Tap to install · Reading, Maths, Hindi Fun &amp; more
        </p>
        <p className="mt-4 text-sm font-semibold text-[#7D7788]">
          Prefer iPhone? Join the waitlist below.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {["/screens/home.png", "/screens/preview.png"].map((src) => (
            <Image
              key={src}
              src={src}
              alt="Homework Buddy app screen"
              width={320}
              height={640}
              className="mx-auto rounded-3xl border border-[#ebe4f7] shadow"
            />
          ))}
        </div>
        <p className="mt-4 text-xs font-semibold text-[#9A94A6]">Version {site.version}</p>
      </div>

      <div className="mt-12">
        <IphoneWaitlistForm />
      </div>

      <SoftCta
        title="Prefer to explore first?"
        body="Browse printable worksheet hubs on the site — then come back here when you are ready to install."
        browseOnly
      />
      <p className="mt-6 text-center text-sm font-semibold text-[#7D7788]">
        Looking for worksheets on the site?{" "}
        <Link href="/worksheets" className="text-[#7B5CD6]">
          Browse free printables
        </Link>
        .
      </p>
    </div>
  );
}
