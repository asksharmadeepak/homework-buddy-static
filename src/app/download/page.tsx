import Image from "next/image";
import Link from "next/link";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Download Homework Buddy — join the Android beta",
  description:
    "Get Homework Buddy for Android via closed beta. Printable worksheets and learning activities for Nursery to Class 3.",
  path: "/download",
});

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 text-center">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Download", path: "/download" },
        ]}
      />
      <Image
        src="/brand/app_icon.png"
        alt=""
        width={96}
        height={96}
        className="mx-auto rounded-3xl shadow"
      />
      <h1 className="mt-6 text-4xl font-black text-[#24212C]">Download Homework Buddy</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">
        The app is in closed testing on Google Play. Join the beta with your email and we&apos;ll send
        you an invite. Version {site.version}.
      </p>
      <Link
        href={site.appCtaPath}
        className="mt-8 inline-block rounded-full bg-[#7B5CD6] px-8 py-4 text-base font-extrabold text-white"
      >
        Join the beta
      </Link>
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
      <SoftCta
        title="Prefer to explore first?"
        body="Browse printable worksheet hubs, then join the beta when you are ready to try the app."
      />
    </div>
  );
}
