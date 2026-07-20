import Link from "next/link";
import { navFooter, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-[#ebe4f7] bg-[#F7F2FF]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-black text-[#24212C]">{site.name}</p>
          <p className="mt-2 text-sm font-semibold text-[#7D7788]">{site.tagline}</p>
          <p className="mt-4 text-sm text-[#7D7788]">
            Version {site.version} ·{" "}
            <Link className="font-bold text-[#7B5CD6]" href={site.appCtaPath}>
              Join the beta
            </Link>
          </p>
        </div>
        {(
          [
            ["Explore", navFooter.explore],
            ["Product", navFooter.product],
            ["Legal", navFooter.legal],
          ] as const
        ).map(([title, links]) => (
          <div key={title}>
            <p className="font-extrabold text-[#24212C]">{title}</p>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-semibold text-[#7D7788] hover:text-[#7B5CD6]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#ebe4f7] py-4 text-center text-xs font-semibold text-[#7D7788]">
        © {year} {site.name} ·{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-[#7B5CD6]">
          {site.supportEmail}
        </a>
      </div>
    </footer>
  );
}
