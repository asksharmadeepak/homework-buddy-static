import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { SoftCta } from "@/components/SoftCta";
import { WorksheetChat } from "@/components/WorksheetChat";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Free printable worksheet helper for parents",
  description:
    "Describe tonight’s practice and print one calm Nursery–Class 3 worksheet in your browser. For unlimited themed PDFs, get the Homework Buddy app.",
  path: "/tools/chat",
});

const faqs = [
  {
    question: "Is this the same as the Homework Buddy app?",
    answer:
      "No. This page builds one browser-printable practice sheet (not a branded PDF). The Android app generates unlimited class + theme PDFs with preview and download.",
  },
  {
    question: "How many free sheets can I generate?",
    answer:
      "Up to three free sheets per day on this website. When you need more variety, install Homework Buddy from Google Play.",
  },
  {
    question: "Can I save a PDF from this chat?",
    answer:
      "Use your browser’s Print dialog and choose “Save as PDF” if you want a file. For ready-made illustrated PDFs and fresh themes, use the app or our free sample downloads.",
  },
  {
    question: "What ages is this for?",
    answer:
      "Nursery through Class 3 — pick the class that matches your child before you generate.",
  },
];

export default function WorksheetChatPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
      <div className="print:hidden">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: "Printable helper", path: "/tools/chat" },
          ]}
        />
        <h1 className="mt-2 text-2xl font-black leading-tight text-[#24212C] md:text-3xl">
          Print one worksheet tonight
        </h1>
        <p className="mt-1 text-sm font-semibold text-[#7D7788]">
          Pick a class, generate, print —{" "}
          <Link href="/download" className="text-[#7B5CD6]">
            get the app
          </Link>{" "}
          for unlimited PDFs.
        </p>
      </div>

      <div className="mt-4">
        <WorksheetChat />
      </div>

      <div className="print:hidden">
        <FaqSection faqs={faqs} />
        <p className="mt-6 text-sm font-semibold text-[#7D7788]">
          Prefer ready-made samples?{" "}
          <Link href="/worksheets" className="text-[#7B5CD6]">
            Browse free printable worksheets
          </Link>{" "}
          or read the{" "}
          <Link href="/tools/worksheet-generator" className="text-[#7B5CD6]">
            worksheet generator guide
          </Link>
          .
        </p>
        <SoftCta playPlacement="worksheet_chat" />
      </div>
    </div>
  );
}
