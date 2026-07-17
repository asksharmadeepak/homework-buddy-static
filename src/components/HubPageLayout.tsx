import { SoftCta } from "@/components/SoftCta";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { FaqItem } from "@/lib/taxonomy";

export function HubPageLayout({
  breadcrumbs,
  title,
  lead,
  intro,
  howTo,
  faqs,
  children,
}: {
  breadcrumbs: { name: string; path: string }[];
  title: string;
  lead: string;
  intro: string[];
  howTo: string[];
  faqs: FaqItem[];
  children?: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-black leading-tight text-[#24212C] md:text-4xl">{title}</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">{lead}</p>
      <div className="prose-hb mt-8 space-y-4">
        {intro.map((p) => (
          <p key={p.slice(0, 40)} className="text-base font-semibold leading-relaxed text-[#3d3848]">
            {p}
          </p>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-black text-[#24212C]">How to use these resources</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-base font-semibold text-[#3d3848]">
          {howTo.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      {children}
      <SoftCta />
      <FaqSection faqs={faqs} />
      <p className="mt-8 text-xs font-semibold text-[#7D7788]">
        Educational disclaimer: Content is for general parent guidance and practice ideas. Follow your
        school&apos;s curriculum and teacher advice. Last updated: 17 July 2026. Editorial review: Homework
        Buddy content team.
      </p>
    </article>
  );
}
