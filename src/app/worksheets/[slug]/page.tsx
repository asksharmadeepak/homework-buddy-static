import Link from "next/link";
import { notFound } from "next/navigation";
import { ClassHubWorksheetGrid } from "@/components/ClassHubWorksheetGrid";
import { SoftCta } from "@/components/SoftCta";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlayStoreLink } from "@/components/PlayStoreLink";
import { buildMetadata, collectionJsonLd, jsonLdScript } from "@/lib/seo";
import {
  getActivity,
  getClass,
  getCrossHub,
  getTheme,
  publishedOnly,
  worksheetSeeds,
  classes,
  crossHubs,
  filterCrossHubSheets,
} from "@/lib/taxonomy";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [
    ...publishedOnly(classes).map((c) => ({ slug: c.slug })),
    ...publishedOnly(crossHubs).map((h) => ({ slug: h.slug })),
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cls = getClass(slug);
  if (cls?.status === "published") {
    return buildMetadata({ title: cls.title, description: cls.description, path: `/worksheets/${slug}` });
  }
  const hub = getCrossHub(slug);
  if (hub?.status === "published") {
    return buildMetadata({ title: hub.title, description: hub.description, path: `/worksheets/${slug}` });
  }
  return {};
}

export default async function WorksheetHubPage({ params }: Props) {
  const { slug } = await params;
  const cls = getClass(slug);
  const hub = getCrossHub(slug);

  if (cls?.status === "published") {
    const sheets = publishedOnly(worksheetSeeds).filter((w) => w.classSlug === slug);
    const relatedActivities = (cls.relatedActivitySlugs || [])
      .map(getActivity)
      .filter(Boolean);
    const relatedThemes = (cls.relatedThemeSlugs || []).map(getTheme).filter(Boolean);
    const playContent = `class_hub_${slug}`;

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            collectionJsonLd({
              name: cls.name,
              description: cls.description,
              path: `/worksheets/${slug}`,
              items: sheets.map((s) => ({
                name: s.name,
                path: `/worksheets/${s.classSlug}/${s.slug}`,
                image: s.previewImagePath,
              })),
            }),
          )}
        />
        <article className="mx-auto max-w-6xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Worksheets", path: "/worksheets" },
              { name: cls.name, path: `/worksheets/${slug}` },
            ]}
          />
          <h1 className="text-3xl font-black leading-tight text-[#24212C] md:text-4xl">
            {cls.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold text-[#7D7788]">
            Free downloadable {cls.name} worksheets — preview, print, and practise at home.
          </p>

          <ClassHubWorksheetGrid sheets={sheets} className={cls.name} />

          <aside className="mt-10 rounded-3xl bg-[#FFEFE8] px-6 py-7 text-center md:px-10">
            <h2 className="text-xl font-black text-[#24212C]">
              Want unlimited fresh sheets?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm font-semibold text-[#7D7788]">
              Generate new {cls.name} worksheets by class, activity, and theme in Homework Buddy —
              then print whenever you need homework tonight.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <PlayStoreLink
                content={playContent}
                className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
              >
                Get Homework Buddy on Google Play
              </PlayStoreLink>
              <Link
                href="/download"
                className="rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
              >
                App download page
              </Link>
            </div>
          </aside>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="prose-hb space-y-4">
              {cls.intro.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-base font-semibold leading-relaxed text-[#3d3848]"
                >
                  {p}
                </p>
              ))}
            </div>

            <section className="mt-10">
              <h2 className="text-2xl font-black text-[#24212C]">How to use these resources</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-base font-semibold text-[#3d3848]">
                {cls.howTo.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-black text-[#24212C]">Related activities & themes</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedActivities.map((a) =>
                  a ? (
                    <Link
                      key={a.slug}
                      href={`/activities/${a.slug}`}
                      className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
                    >
                      {a.name}
                    </Link>
                  ) : null,
                )}
                {relatedThemes.map((t) =>
                  t ? (
                    <Link
                      key={t.slug}
                      href={`/themes/${t.slug}`}
                      className="rounded-full bg-[#FFEFE8] px-4 py-2 text-sm font-bold text-[#E85D75]"
                    >
                      {t.name}
                    </Link>
                  ) : null,
                )}
              </div>
            </section>

            <SoftCta
              playContent={playContent}
              title={`Generate more ${cls.name} worksheets in the app`}
              body="Pick class, activity, theme, and time — download a fresh print-ready PDF anytime."
            />
            <FaqSection faqs={cls.faqs} />
            <p className="mt-8 text-xs font-semibold text-[#7D7788]">
              Educational disclaimer: Content is for general parent guidance and practice ideas. Follow
              your school&apos;s curriculum and teacher advice. Last updated: 20 August 2026. Editorial
              review: Homework Buddy content team.
            </p>
          </div>
        </article>
      </>
    );
  }

  if (hub?.status === "published") {
    const sheets = filterCrossHubSheets(hub);
    const playContent = `class_hub_${slug}`;
    const relatedClass = hub.classSlug ? getClass(hub.classSlug) : undefined;
    const relatedActivity = hub.activitySlug ? getActivity(hub.activitySlug) : undefined;

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            collectionJsonLd({
              name: hub.name,
              description: hub.description,
              path: `/worksheets/${slug}`,
              items: sheets.map((s) => ({
                name: s.name,
                path: `/worksheets/${s.classSlug}/${s.slug}`,
                image: s.previewImagePath,
              })),
            }),
          )}
        />
        <article className="mx-auto max-w-6xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Worksheets", path: "/worksheets" },
              { name: hub.name, path: `/worksheets/${slug}` },
            ]}
          />
          <h1 className="text-3xl font-black leading-tight text-[#24212C] md:text-4xl">
            {hub.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold text-[#7D7788]">
            Free downloadable worksheets — preview, print, and practise at home.
          </p>

          {sheets.length > 0 ? (
            <ClassHubWorksheetGrid sheets={sheets} className={hub.name} />
          ) : null}

          <aside className="mt-10 rounded-3xl bg-[#FFEFE8] px-6 py-7 text-center md:px-10">
            <h2 className="text-xl font-black text-[#24212C]">
              Want unlimited fresh sheets?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm font-semibold text-[#7D7788]">
              Generate new worksheets by class, activity, and theme in Homework Buddy — then print
              whenever you need homework tonight.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <PlayStoreLink
                content={playContent}
                className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
              >
                Get Homework Buddy on Google Play
              </PlayStoreLink>
              <Link
                href="/download"
                className="rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
              >
                App download page
              </Link>
            </div>
          </aside>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="prose-hb space-y-4">
              {hub.intro.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-base font-semibold leading-relaxed text-[#3d3848]"
                >
                  {p}
                </p>
              ))}
            </div>

            <section className="mt-10">
              <h2 className="text-2xl font-black text-[#24212C]">How to use these resources</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-base font-semibold text-[#3d3848]">
                {hub.howTo.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-black text-[#24212C]">Continue exploring</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedClass ? (
                  <Link
                    href={`/worksheets/${relatedClass.slug}`}
                    className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
                  >
                    {relatedClass.name} worksheets
                  </Link>
                ) : null}
                {relatedActivity ? (
                  <Link
                    href={`/activities/${relatedActivity.slug}`}
                    className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
                  >
                    {relatedActivity.name}
                  </Link>
                ) : null}
                {(hub.slug === "preschool-worksheets" || hub.slug === "kindergarten-worksheets") && (
                  <>
                    <Link
                      href="/worksheets/nursery"
                      className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
                    >
                      Nursery worksheets
                    </Link>
                    <Link
                      href="/worksheets/jr-kg"
                      className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
                    >
                      Jr KG worksheets
                    </Link>
                    <Link
                      href="/worksheets/sr-kg"
                      className="rounded-full bg-[#F0EBFF] px-4 py-2 text-sm font-bold text-[#7B5CD6]"
                    >
                      Sr KG worksheets
                    </Link>
                  </>
                )}
                <Link
                  href="/guides/printable-worksheets-guide"
                  className="rounded-full bg-[#FFEFE8] px-4 py-2 text-sm font-bold text-[#E85D75]"
                >
                  Printable worksheets guide
                </Link>
              </div>
            </section>

            <SoftCta
              playContent={playContent}
              title="Generate more worksheets in the app"
              body="Pick class, activity, theme, and time — download a fresh print-ready PDF anytime."
            />
            <FaqSection faqs={hub.faqs} />
            <p className="mt-8 text-xs font-semibold text-[#7D7788]">
              Educational disclaimer: Content is for general parent guidance and practice ideas. Follow
              your school&apos;s curriculum and teacher advice. Last updated: 31 August 2026. Editorial
              review: Homework Buddy content team.
            </p>
          </div>
        </article>
      </>
    );
  }

  notFound();
}
