import { FaqSection } from "@/components/FaqSection";
import { SoftCta } from "@/components/SoftCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { FaqItem } from "@/lib/taxonomy";

const faqs: FaqItem[] = [
  {
    question: "What is Homework Buddy?",
    answer:
      "Homework Buddy is an Android app that helps parents create printable learning activities for children from Nursery to Class 3 — with class, activity, theme, and time controls.",
  },
  {
    question: "Who is this website for?",
    answer:
      "Parents and caregivers looking for printable worksheets, easy homework ideas, and educational guidance for early primary years in India.",
  },
  {
    question: "Are the worksheet pages free to use?",
    answer:
      "Yes. Educational articles and hubs on this site are free to read. You can also generate fresh printable PDFs in the Homework Buddy app on Google Play.",
  },
  {
    question: "Do you create pages for every filter combination?",
    answer:
      "No. We only publish pages with unique educational value — class hubs, activity hubs, themes, curated cross-hubs, and guides — not thin auto-generated filter URLs.",
  },
  {
    question: "How is this different from random PDF sites?",
    answer:
      "We organise content by search intent and topical clusters, with parent guidance, FAQs, and a clear path to generate calm printables in the app.",
  },
  {
    question: "Is there an iOS version?",
    answer:
      "Homework Buddy is currently available on Google Play for Android. Check the download page for the latest availability.",
  },
  {
    question: "How do I contact support?",
    answer: "Email support@homeworkbuddy.app — we are happy to help with app or website questions.",
  },
];

export const metadata = buildMetadata({
  title: "FAQ — printable worksheets & Homework Buddy",
  description:
    "Frequently asked questions about printable worksheets, homework activities, and the Homework Buddy Android app.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Frequently asked questions</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">
        Quick answers about this educational platform and the Homework Buddy app.
      </p>
      <FaqSection faqs={faqs} title="Common questions" />
      <SoftCta />
    </div>
  );
}
