import Link from "next/link";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(items))}
      />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm font-semibold text-[#7D7788]">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i === items.length - 1 ? (
                <span className="text-[#24212C]">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-[#7B5CD6]">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
