import { SoftCta } from "@/components/SoftCta";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { FaqItem } from "@/lib/taxonomy";

/** Worksheet detail: lead → children (download) → guide body → how-to → FAQs */
export function WorksheetDetailLayout({
  breadcrumbs,
  title,
  lead,
  guideIntro,
  sheetContents,
  howTo,
  faqs,
  children,
}: {
  breadcrumbs: { name: string; path: string }[];
  title: string;
  lead: string;
  guideIntro: string[];
  sheetContents?: string[];
  howTo: string[];
  faqs: FaqItem[];
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-black leading-tight text-[#24212C] md:text-4xl">{title}</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">{lead}</p>

      {children}

      {sheetContents && sheetContents.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl font-black text-[#24212C]">What&apos;s on this sheet</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base font-semibold text-[#3d3848]">
            {sheetContents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {guideIntro.length > 0 ? (
        <div className="prose-hb mt-10 space-y-4">
          {guideIntro.map((p) => (
            <p key={p.slice(0, 48)} className="text-base font-semibold leading-relaxed text-[#3d3848]">
              {p}
            </p>
          ))}
        </div>
      ) : null}

      <section className="mt-10">
        <h2 className="text-2xl font-black text-[#24212C]">How to use this worksheet</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-base font-semibold text-[#3d3848]">
          {howTo.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <SoftCta playContent="worksheet_detail" />
      <FaqSection faqs={faqs} />
      <p className="mt-8 text-xs font-semibold text-[#7D7788]">
        Educational disclaimer: Content is for general parent guidance and practice ideas. Follow your
        school&apos;s curriculum and teacher advice. Last updated: 1 September 2026. Editorial review:
        Homework Buddy content team.
      </p>
    </article>
  );
}
