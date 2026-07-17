import { HubCard } from "@/components/HubCard";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata, collectionJsonLd, jsonLdScript } from "@/lib/seo";
import { activities, publishedOnly } from "@/lib/taxonomy";

export const metadata = buildMetadata({
  title: "Homework activities for kids",
  description:
    "Explore reading, writing, maths, colouring, creative thinking, and life skills homework activities with printable ideas.",
  path: "/activities",
});

export default function ActivitiesIndexPage() {
  const list = publishedOnly(activities);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          collectionJsonLd({
            name: "Homework activities",
            description: "Activity hubs for early learners",
            path: "/activities",
            items: list.map((a) => ({ name: a.name, path: `/activities/${a.slug}` })),
          }),
        )}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Activities", path: "/activities" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Homework activities</h1>
      <p className="mt-4 max-w-3xl text-lg font-semibold text-[#7D7788]">
        Choose an activity type that matches tonight&apos;s energy — reading, writing, maths, colouring,
        creative thinking, or life skills.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <HubCard key={a.slug} href={`/activities/${a.slug}`} title={a.name} description={a.description} icon={a.icon} />
        ))}
      </div>
      <SoftCta />
    </div>
  );
}
