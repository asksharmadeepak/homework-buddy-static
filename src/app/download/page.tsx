import Image from "next/image";
import Link from "next/link";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IphoneWaitlistForm } from "@/components/IphoneWaitlistForm";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Download Homework Buddy — get the app on Google Play",
  description:
    "Get printable worksheets in the Homework Buddy app on Google Play. Nursery to Class 3. iPhone waitlist available.",
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
          Printable worksheets for Nursery to Class 3 — now on Google Play. Version {site.version}.
        </p>
        <a
          href={site.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#7B5CD6] px-8 py-4 text-base font-extrabold text-white"
        >
          Get the app on Google Play
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
        body="Browse printable worksheet hubs, then get the app when you are ready."
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
