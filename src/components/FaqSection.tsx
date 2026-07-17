import { faqJsonLd, jsonLdScript } from "@/lib/seo";
import type { FaqItem } from "@/lib/taxonomy";

export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  withSchema = true,
}: {
  faqs: FaqItem[];
  title?: string;
  withSchema?: boolean;
}) {
  return (
    <section className="my-12">
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))}
        />
      )}
      <h2 className="text-2xl font-black text-[#24212C]">{title}</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-[#ebe4f7] bg-white px-5 py-4 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none font-extrabold text-[#24212C]">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#7D7788]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
