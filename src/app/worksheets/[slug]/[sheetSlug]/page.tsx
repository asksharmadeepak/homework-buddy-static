import Link from "next/link";
import { notFound } from "next/navigation";
import { WorksheetDetailLayout } from "@/components/WorksheetDetailLayout";
import { WorksheetDownload } from "@/components/WorksheetDownload";
import {
  buildMetadata,
  breadcrumbJsonLd,
  jsonLdScript,
  worksheetCreativeWorkJsonLd,
} from "@/lib/seo";
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
    image: sheet.previewImagePath,
  });
}

export default async function WorksheetDetailPage({ params }: Props) {
  const { slug: classSlug, sheetSlug } = await params;
  const sheet = getWorksheet(classSlug, sheetSlug);
  if (!sheet || sheet.status !== "published") notFound();

  const cls = getClass(sheet.classSlug);
  const activity = getActivity(sheet.activitySlug);
  const theme = getTheme(sheet.themeSlug);
  const path = `/worksheets/${classSlug}/${sheetSlug}`;

  const jsonLd: Record<string, unknown>[] = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Worksheets", path: "/worksheets" },
      { name: cls?.name || classSlug, path: `/worksheets/${classSlug}` },
      { name: sheet.name, path },
    ]),
  ];
  if (sheet.previewImagePath) {
    jsonLd.push(
      worksheetCreativeWorkJsonLd({
        name: sheet.title,
        description: sheet.description,
        path,
        pdfPath: sheet.pdfPath,
        imagePath: sheet.previewImagePath,
        imageAlt: sheet.previewImageAlt || sheet.title,
      }),
    );
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />
      <WorksheetDetailLayout
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Worksheets", path: "/worksheets" },
          { name: cls?.name || classSlug, path: `/worksheets/${classSlug}` },
          { name: sheet.name, path },
        ]}
        title={sheet.title}
        lead={sheet.description}
        guideIntro={sheet.intro}
        sheetContents={sheet.sheetContents}
        howTo={sheet.howTo ?? []}
        faqs={sheet.faqs}
      >
        <div className="mt-8">
          <WorksheetDownload
            pdfPath={sheet.pdfPath}
            worksheetName={sheet.name}
            previewImagePath={sheet.previewImagePath}
            previewImageAlt={sheet.previewImageAlt}
          />
        </div>

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
      </WorksheetDetailLayout>
    </>
  );
}
