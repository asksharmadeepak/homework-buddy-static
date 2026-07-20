import Link from "next/link";
import { site } from "@/lib/site";

export function WorksheetDownload({
  pdfPath,
  worksheetName,
}: {
  pdfPath: string;
  worksheetName: string;
}) {
  return (
    <section className="my-10 overflow-hidden rounded-3xl border border-[#7B5CD6]/25 bg-gradient-to-br from-[#F0EBFF] to-[#FFFBF6] p-6 md:p-8">
      <p className="text-sm font-extrabold uppercase tracking-wide text-[#7B5CD6]">
        Free printable PDF
      </p>
      <h2 className="mt-2 text-2xl font-black text-[#24212C]">
        Download “{worksheetName}”
      </h2>
      <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-[#7D7788]">
        Print this free sample — it includes illustrations, quizzes, and a drawing prompt. No signup
        required. When you want unlimited class + theme combinations, generate fresh worksheets in the
        Homework Buddy app.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={pdfPath}
          download
          className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-[#6a4ec4]"
        >
          Download free PDF
        </a>
        <Link
          href={site.appCtaPath}
          className="rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
        >
          Generate more in the app
        </Link>
        <Link
          href="/download"
          className="rounded-full px-4 py-3 text-sm font-bold text-[#7D7788] underline-offset-2 hover:text-[#7B5CD6] hover:underline"
        >
          App details
        </Link>
      </div>
      <p className="mt-4 text-xs font-semibold text-[#7D7788]">
        Tip: After you print this sheet, open Homework Buddy to create a matching activity with a new theme
        in minutes.
      </p>
    </section>
  );
}
