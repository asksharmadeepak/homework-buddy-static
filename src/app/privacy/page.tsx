import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for the Homework Buddy mobile app and easyhomeworkactivity.com website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }]} />
      <h1 className="text-4xl font-black text-[#24212C]">Privacy Policy</h1>
      <p className="mt-2 text-sm font-semibold text-[#7D7788]">Last updated: 20 July 2026</p>
      <div className="mt-8 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
        <p>
          This Privacy Policy explains how Homework Buddy (&quot;we&quot;, &quot;us&quot;) handles information in the
          Android app and on {site.url.replace("https://", "")}.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Information we collect</h2>
        <p>
          Depending on how you use the app or site, we may process account or contact details you provide,
          device information needed to run the service, and optional analytics data that helps us improve
          reliability and features.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Beta tester signups</h2>
        <p>
          If you join our beta via the website, we collect the email address you submit so we can send
          Google Play testing invites, notify you about an upcoming iPhone / iOS version, and share related
          beta product updates. We do not sell these details or use them for unrelated marketing.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">How we use information</h2>
        <p>
          We use information to provide printable activity features, improve the product, respond to support
          requests, run closed testing, and maintain security. We do not sell children&apos;s personal
          information.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Analytics & cookies</h2>
        <p>
          The website may use privacy-respecting analytics (for example Google Analytics) when configured, to
          understand aggregate traffic. You can control cookies via your browser settings.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Contact</h2>
        <p>
          Privacy questions:{" "}
          <a className="text-[#7B5CD6]" href={`mailto:${site.privacyEmail}`}>
            {site.privacyEmail}
          </a>
          . Support:{" "}
          <a className="text-[#7B5CD6]" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
