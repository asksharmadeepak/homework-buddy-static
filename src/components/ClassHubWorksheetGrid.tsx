import Image from "next/image";
import Link from "next/link";
import type { WorksheetSeed } from "@/lib/taxonomy";

export function ClassHubWorksheetGrid({
  sheets,
  className,
}: {
  sheets: WorksheetSeed[];
  className: string;
}) {
  if (sheets.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-black text-[#24212C]">
        Free printable {className} worksheets
      </h2>
      <p className="mt-2 max-w-2xl text-sm font-semibold text-[#7D7788]">
        Preview each sheet, download the PDF, and print on A4 — no login required.
      </p>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sheets.map((s) => {
          const detailHref = `/worksheets/${s.classSlug}/${s.slug}`;
          const alt =
            s.previewImageAlt ||
            `${className} ${s.name} printable homework worksheet free download`;
          return (
            <li
              key={s.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#ebe4f7] bg-white"
            >
              <Link href={detailHref} className="relative block aspect-[3/4] bg-[#F7F4FC]">
                {s.previewImagePath ? (
                  <Image
                    src={s.previewImagePath}
                    alt={alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center px-4 text-center text-sm font-bold text-[#7D7788]">
                    {s.name}
                  </span>
                )}
              </Link>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[#7B5CD6]">
                  {className}
                </p>
                <Link
                  href={detailHref}
                  className="mt-1 text-base font-extrabold leading-snug text-[#24212C] hover:text-[#7B5CD6]"
                >
                  {s.name}
                </Link>
                <p className="mt-1 line-clamp-2 text-sm font-semibold text-[#7D7788]">
                  {s.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={s.pdfPath}
                    download
                    className="rounded-full bg-[#7B5CD6] px-4 py-2 text-sm font-extrabold text-white hover:bg-[#6a4fc0]"
                  >
                    Download PDF
                  </a>
                  <Link
                    href={detailHref}
                    className="rounded-full border border-[#ebe4f7] px-4 py-2 text-sm font-bold text-[#7D7788] hover:border-[#7B5CD6] hover:text-[#7B5CD6]"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
