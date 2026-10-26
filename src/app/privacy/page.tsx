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
      <p className="mt-2 text-sm font-semibold text-[#7D7788]">Last updated: 26 October 2026</p>
      <div className="mt-8 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
        <p>
          This Privacy Policy explains how Homework Buddy (&quot;we&quot;, &quot;us&quot;) handles information in the
          iOS and Android apps and on {site.url.replace("https://", "")}.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Information we collect</h2>
        <p>
          Depending on how you use the app or site, we may process contact details you provide (for example
          support emails), device information needed to run the service, and optional analytics data that
          helps us improve reliability and features. Much of the app experience works with data stored only
          on your device.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">How we use information</h2>
        <p>
          We use information to provide printable activity features, improve the product, respond to support
          requests, and maintain security. We do not sell children&apos;s personal information.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Accounts and sign-in</h2>
        <p>
          The app lets you create a few worksheets without an account. After that you can sign in for free with
          an email code, Google, or Apple. We store your email address, display name, chosen role (parent or
          teacher) and region with our authentication provider, Supabase, so your account works across phones.
          We do not receive your Google or Apple password.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Student lists for teachers</h2>
        <p>
          Teachers can add their own labels, such as A, B or C, plus a class and an optional section, and
          record which worksheets were given to which label. These labels are not a record of a real child.
          The list is kept on the phone and, when the teacher is signed in, synced to their account so only
          that teacher can read it.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Worksheet content generation</h2>
        <p>
          To keep worksheets varied, the app may request new stories and puzzles for a theme and class from our
          server, which uses Google Gemini to write them. These requests contain only the theme, class level and
          a random device identifier used for rate limiting; they never include names or student details.
        </p>
        <h2 className="pt-4 text-2xl font-black text-[#24212C]">Deleting your account</h2>
        <p>
          You can delete your account at any time from Profile, then Delete account in the app. This removes your
          account, profile, synced students and assignments from our servers. Sheets saved on your phone stay
          there until you remove them or uninstall the app.
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
