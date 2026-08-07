import Image from "next/image";
import Link from "next/link";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IphoneWaitlistForm } from "@/components/IphoneWaitlistForm";
import { buildMetadata } from "@/lib/seo";
import { playStoreUrlWithUtm, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Download Homework Buddy — get the app on Google Play",
  description:
    "Get printable worksheets in the Homework Buddy app on Google Play. Nursery to Class 3. iPhone waitlist available.",
  path: "/download",
});

export default function DownloadPage() {
  const playUrl = playStoreUrlWithUtm("download_hero");

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
          Printable worksheets for Nursery to Class 3 — now on Google Play. Version {site.version}.
        </p>
        <a
          href={playUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block"
          aria-label="Get it on Google Play"
        >
          <Image
            src="/brand/google-play-badge.png"
            alt="Get it on Google Play"
            width={215}
            height={83}
            className="mx-auto h-auto w-[215px]"
            priority
          />
        </a>
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
