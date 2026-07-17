import Link from "next/link";
import { notFound } from "next/navigation";
import { HubPageLayout } from "@/components/HubPageLayout";
import { WorksheetDownload } from "@/components/WorksheetDownload";
import { buildMetadata } from "@/lib/seo";
import {
  getActivity,
  getClass,
  getTheme,
  getWorksheet,
  publishedOnly,
  worksheetSeeds,
} from "@/lib/taxonomy";

type Props = { params: Promise<{ slug: string; sheetSlug: string }> };

export async function generateStaticParams() {
  return publishedOnly(worksheetSeeds).map((w) => ({
    slug: w.classSlug,
    sheetSlug: w.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug: classSlug, sheetSlug } = await params;
  const sheet = getWorksheet(classSlug, sheetSlug);
  if (!sheet || sheet.status !== "published") return {};
  return buildMetadata({
    title: sheet.title,
    description: sheet.description,
    path: `/worksheets/${classSlug}/${sheetSlug}`,
  });
}

export default async function WorksheetDetailPage({ params }: Props) {
  const { slug: classSlug, sheetSlug } = await params;
  const sheet = getWorksheet(classSlug, sheetSlug);
  if (!sheet || sheet.status !== "published") notFound();

  const cls = getClass(sheet.classSlug);
  const activity = getActivity(sheet.activitySlug);
  const theme = getTheme(sheet.themeSlug);

  return (
    <HubPageLayout
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Worksheets", path: "/worksheets" },
        { name: cls?.name || classSlug, path: `/worksheets/${classSlug}` },
        { name: sheet.name, path: `/worksheets/${classSlug}/${sheetSlug}` },
      ]}
      title={sheet.title}
      lead={sheet.description}
      intro={sheet.intro}
      howTo={[
        "Download the free PDF below.",
        "Print on A4 paper.",
        "Sit with your child for the first few minutes.",
        "Stop while energy is still good.",
        "Generate a fresh variation in Homework Buddy when you want a new theme.",
      ]}
      faqs={sheet.faqs}
    >
      <WorksheetDownload pdfPath={sheet.pdfPath} worksheetName={sheet.name} />

      <section className="mt-10">
        <h2 className="text-2xl font-black text-[#24212C]">Related hubs</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {cls && (
            <Link
              href={`/worksheets/${cls.slug}`}
              className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
            >
              {cls.name}
            </Link>
          )}
          {activity && (
            <Link
              href={`/activities/${activity.slug}`}
              className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
            >
              {activity.name}
            </Link>
          )}
          {theme && (
            <Link
              href={`/themes/${theme.slug}`}
              className="rounded-full bg-[#FFEFE8] px-4 py-2 text-sm font-bold text-[#E85D75]"
            >
              {theme.name}
            </Link>
          )}
        </div>
      </section>
    </HubPageLayout>
  );
}
