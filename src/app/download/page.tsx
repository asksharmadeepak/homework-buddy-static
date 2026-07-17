import Image from "next/image";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Download Homework Buddy on Google Play",
  description:
    "Download Homework Buddy for Android — printable worksheets and learning activities for Nursery to Class 3.",
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
        Create printable learning activities in seconds. Version {site.version} on Google Play.
      </p>
      <a
        href={site.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-[#7B5CD6] px-8 py-4 text-base font-extrabold text-white"
      >
        Get it on Google Play
      </a>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {["/screens/home.png", "/screens/preview.png"].map((src) => (
          <Image key={src} src={src} alt="Homework Buddy app screen" width={320} height={640} className="mx-auto rounded-3xl border border-[#ebe4f7] shadow" />
        ))}
      </div>
      <SoftCta title="Prefer to explore first?" body="Browse printable worksheet hubs, then download when you are ready." />
    </div>
  );
}
