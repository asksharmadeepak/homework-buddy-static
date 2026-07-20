import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact Homework Buddy support and privacy teams.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Contact us</h1>
      <p className="mt-4 text-lg font-semibold text-[#7D7788]">
        We are here to help with the website and the Homework Buddy Android app.
      </p>
      <ul className="mt-8 space-y-4 text-base font-semibold text-[#3d3848]">
        <li>
          Support:{" "}
          <a className="text-[#7B5CD6]" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </li>
        <li>
          Privacy:{" "}
          <a className="text-[#7B5CD6]" href={`mailto:${site.privacyEmail}`}>
            {site.privacyEmail}
          </a>
        </li>
        <li>
          App:{" "}
          <Link className="text-[#7B5CD6]" href={site.appCtaPath}>
            Join the Android beta
          </Link>
        </li>
      </ul>
    </div>
  );
}
