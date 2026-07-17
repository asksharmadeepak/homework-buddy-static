import Image from "next/image";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Features — Homework Buddy app",
  description:
    "See how Homework Buddy helps parents pick class, activity, theme, and time to create printable PDFs.",
  path: "/features",
});

const features = [
  {
    title: "Calm home screen",
    body: "Pick your child’s class, the activity type, and how much time you have — without clutter.",
    icon: "/screens/home.png",
  },
  {
    title: "Themes kids love",
    body: "Animals, festivals, space, transport, and more keep practice feeling fresh.",
    icon: "/screens/create-activity.png",
  },
  {
    title: "Printable PDFs",
    body: "Preview the worksheet, then download a print-ready PDF you can save and share.",
    icon: "/screens/preview.png",
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Features", path: "/features" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Built for real parent evenings</h1>
      <p className="mt-4 max-w-3xl text-lg font-semibold text-[#7D7788]">
        Homework Buddy focuses on printable, class-aware activities for Nursery to Class 3 — so learning fits
        into busy Indian households.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-3xl border border-[#ebe4f7] bg-white p-5">
            <Image src={f.icon} alt="" width={280} height={560} className="mx-auto h-auto w-40 rounded-2xl shadow" />
            <h2 className="mt-5 text-xl font-black text-[#24212C]">{f.title}</h2>
            <p className="mt-2 text-sm font-semibold text-[#7D7788]">{f.body}</p>
          </div>
        ))}
      </div>
      <SoftCta />
    </div>
  );
}
