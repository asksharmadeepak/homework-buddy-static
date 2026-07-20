import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { HubCard } from "@/components/HubCard";
import { SoftCta } from "@/components/SoftCta";
import { buildMetadata, faqJsonLd, jsonLdScript } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  activities,
  classes,
  guides,
  publishedOnly,
  themes,
  tools,
} from "@/lib/taxonomy";

export const metadata = buildMetadata({
  title: "Printable worksheets & easy homework activities for Nursery to Class 3",
  description: site.description,
  path: "/",
});

const homeFaqs = [
  {
    question: "What printable worksheets can I find here?",
    answer:
      "Class hubs from Nursery to Class 3, activity hubs like reading and maths, theme hubs such as animals and festivals, plus parent guides and tool explainers.",
  },
  {
    question: "Is Homework Buddy free to try?",
    answer:
      "The Android app is available on Google Play with a free experience and premium options as listed on the store page. This website’s educational articles are free to read.",
  },
  {
    question: "How is this different from random worksheet PDFs?",
    answer:
      "We organise content by search intent and topic clusters, with unique guidance and FAQs — then offer Homework Buddy when you want fresh printables generated for your child’s class.",
  },
];

export default function HomePage() {
  const classList = publishedOnly(classes);
  const activityList = publishedOnly(activities);
  const themeList = publishedOnly(themes).slice(0, 6);
  const guideList = publishedOnly(guides);
  const toolList = publishedOnly(tools);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(homeFaqs))}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#7B5CD6]">
            Easy homework activity · Printable worksheets
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[#24212C] md:text-5xl">
            Printable worksheets & calm homework ideas for{" "}
            <span className="text-[#E85D75]">Nursery to Class 3</span>
          </h1>
          <p className="mt-5 text-lg font-semibold leading-relaxed text-[#7D7788]">
            {site.name} helps Indian parents find genuine educational guidance — then create print-ready
            activities in seconds with the Android app. Start with class hubs, reading and maths practice,
            or theme-based learning your child already loves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/worksheets" className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white">
              Browse worksheets
            </Link>
            <Link
              href={site.appCtaPath}
              className="rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
            >
              Get the app
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/brand/hero_boy.png"
            alt="Child enjoying learning with a workbook"
            width={420}
            height={420}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
      </section>

      <section className="bg-[#F7F2FF] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black text-[#24212C]">Browse by your child&apos;s class</h2>
          <p className="mt-3 max-w-3xl font-semibold text-[#7D7788]">
            Parents searching for preschool worksheets, kindergarten worksheets, or Class 1–3 printable PDFs
            can start here. Each class hub explains what practice looks like at that stage and links to related
            activities and themes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {classList.map((c) => (
              <HubCard
                key={c.slug}
                href={`/worksheets/${c.slug}`}
                title={c.name}
                description={c.description}
                icon={c.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-3xl font-black text-[#24212C]">
          A content-first home for easy homework activity
        </h2>
        <div className="mt-6 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
          <p>
            If you have ever typed “easy homework ideas” into Google after a long workday, you already know the
            problem: endless PDFs, unclear age levels, and worksheets that look busy but do not fit your child.
            This website exists to fix that discovery problem with helpful, organised educational content —
            not thin pages built only to rank.
          </p>
          <p>
            We treat printable worksheets as part of a larger learning conversation. Nursery children need
            tracing, colours, and picture talk. Jr KG and Sr KG need letter-sound play and gentle number sense.
            Class 1 brings early reading passages and addition stories. Class 2 and Class 3 can handle richer
            comprehension and multi-step thinking — still with warmth and a finishable length.
          </p>
          <p>
            Every hub on this site is written for one primary search intent. Looking for Class 1 reading
            worksheets? There is a curated hub for that. Exploring animals themes for colouring night? Open the
            animals theme page. Want a weekly rhythm instead of nightly panic? Read the homework routine guide.
          </p>
          <p>
            The Homework Buddy Android app is the product behind the platform. When guidance is not enough and
            you need a fresh printable tonight, you can choose class, activity, theme, and time — then download
            a PDF. First we help. Then we recommend the app as the easiest generator for busy parents in India.
          </p>
          <p>
            Our editorial approach follows helpful-content principles: unique introductions, practical how-tos,
            FAQs parents actually ask, and internal links that connect class pages to activities, themes, guides,
            and tools. We do not publish every filter combination as an indexed URL. Quality beats combinatorial
            spam.
          </p>
          <p>
            Seed keywords that shape our clusters include easy homework activity, easy homework for preschool,
            kindergarten worksheets, Class 1 worksheets, worksheet generator, printable worksheets, reading
            worksheets, writing worksheets, maths worksheets, and kids activities. From those seeds we expand
            into long-tail questions and People-Also-Ask style FAQs on each hub.
          </p>
          <p>
            Whether you need a monsoon rainy-day printable, a festival colouring sheet, or Class 3 life-skills
            discussion prompts, start from a hub, follow related links, and keep sessions short. Fifteen calm
            minutes beat an hour of conflict.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black text-[#24212C]">Homework activities parents search for</h2>
        <p className="mt-3 max-w-3xl font-semibold text-[#7D7788]">
          Reading, writing, maths, colouring, creative thinking, and life skills — each with printable-oriented
          guidance.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activityList.map((a) => (
            <HubCard
              key={a.slug}
              href={`/activities/${a.slug}`}
              title={a.name}
              description={a.description}
              icon={a.icon}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#FFF5F0] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black text-[#24212C]">Themes kids love</h2>
          <p className="mt-3 max-w-3xl font-semibold text-[#7D7788]">
            Theme-based learning keeps motivation high. Animals, transport, festivals, space, and more.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themeList.map((t) => (
              <HubCard
                key={t.slug}
                href={`/themes/${t.slug}`}
                title={t.name}
                description={t.description}
                icon={t.icon}
              />
            ))}
          </div>
          <Link href="/themes" className="mt-6 inline-block font-extrabold text-[#E85D75]">
            See all themes →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-3xl font-black text-[#24212C]">
          How printable worksheets fit real Indian evenings
        </h2>
        <div className="mt-6 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
          <p>
            After school, many children still have tuition, playdates, or simply need rest. Printable worksheets
            should never become a second full school day at the dining table. The best easy homework for Class 1
            or kindergarten is short, clear, and connected to something your child already cares about.
          </p>
          <p>
            Start with one skill. If today was a writing-heavy school day, choose reading or colouring at home.
            If maths felt shaky in class, use a single Class 1 maths worksheet with picture support — then stop.
            Celebrate effort: “You sounded out a new word” matters more than finishing every blank.
          </p>
          <p>
            Printers, ink, and paper are real costs. Preview on screen. Prefer A4 layouts. Keep a folder of
            favourites by class so you are not searching from zero every Sunday night. When favourites feel
            stale, a worksheet generator app like Homework Buddy can create a new theme without another hour of
            scrolling.
          </p>
          <p>
            For preschool and Nursery, protect play. Tracing, matching, and colouring are enough. For Class 2
            and Class 3, add light reasoning — a “why” question, a creative prompt, or a life-skills scenario —
            without turning homework into coaching-centre intensity.
          </p>
          <p>
            Internal links on this site are intentional. A Class 1 hub points to reading and maths activities.
            An animals theme points back to class pages. Guides explain routines. Tools explain generators.
            Together they form topical authority around printable learning for early primary years.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black text-[#24212C]">Parent guides</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {guideList.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-3xl border border-[#ebe4f7] bg-white p-6 hover:border-[#7B5CD6]/40"
            >
              <h3 className="text-xl font-black text-[#24212C]">{g.title}</h3>
              <p className="mt-2 text-sm font-semibold text-[#7D7788]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F7F2FF] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black text-[#24212C]">Free tools & generators</h2>
          <p className="mt-3 max-w-3xl font-semibold text-[#7D7788]">
            Learn how worksheet generators and planners work — then create printables in the app.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {toolList.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="rounded-3xl border border-[#ebe4f7] bg-white p-6 font-extrabold text-[#7B5CD6]"
              >
                {t.name}
                <p className="mt-2 text-sm font-semibold text-[#7D7788]">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-3xl font-black text-[#24212C]">
          Why topical clusters beat random PDF dumps
        </h2>
        <div className="mt-6 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
          <p>
            Search engines reward helpful content that satisfies intent. A parent looking for “Class 1 reading
            worksheets” does not want a generic homepage paragraph. They want Class 1 reading guidance, sample
            ideas, FAQs, and a next step. That is why we publish curated cross-hubs alongside class and activity
            pillars.
          </p>
          <p>
            Likewise, “worksheet generator” is commercial investigation intent. Our tools section explains what
            good generators do, how to avoid overload, and how Homework Buddy maps class + activity + theme +
            time into a printable PDF. We do not pretend a blank web form is a finished product when the real
            generator lives in the Android app today.
          </p>
          <p>
            Over time this architecture can grow to hundreds of articles and worksheet explainers without
            rewriting the site. New pages join the taxonomy registry, earn unique copy, and only then enter the
            sitemap. Draft ideas stay unpublished. Filter UIs — if added later — remain noindex.
          </p>
          <p>
            If you are a parent reading this on a phone at 8:17 p.m., skip ahead: open{" "}
            <Link href="/worksheets/class-1" className="text-[#7B5CD6]">
              Class 1 worksheets
            </Link>
            , pick an activity, or{" "}
            <Link href={site.appCtaPath} className="text-[#7B5CD6]">
              join the Homework Buddy beta
            </Link>{" "}
            and generate one calm printable for tonight.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-3xl font-black text-[#24212C]">
          Search intents we design pages around
        </h2>
        <div className="mt-6 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
          <p>
            Informational intent includes queries like printable worksheets for Class 1, reading worksheets for
            kindergarten, and easy homework ideas. Those visitors need explanations, examples, and calm next
            steps — not a hard sell on the first screen.
          </p>
          <p>
            Commercial investigation includes best worksheet generator, homework app, and AI worksheet generator.
            For those readers we explain trade-offs: static PDF libraries versus generators, how to judge class
            fit, and when an Android app is simply faster than hunting another website.
          </p>
          <p>
            Transactional intent looks like download Homework Buddy or worksheet generator app. Those visitors
            should reach a clear download path quickly, with screenshots and version context, without losing the
            educational framing of the rest of the site.
          </p>
          <p>
            Navigational intent is people already looking for Homework Buddy by name. They deserve a trustworthy
            brand presence, privacy and contact links, and an unambiguous Google Play button.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F2FF] py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-black text-[#24212C]">
            Building topical authority without thin pages
          </h2>
          <div className="mt-6 space-y-4 text-base font-semibold leading-relaxed text-[#3d3848]">
            <p>
              Long-term, this platform can support hundreds of articles, worksheet explainers, FAQs, and free
              tools. The architecture is registry-driven so new hubs join as data with unique intros — not as
              accidental duplicates of every class × theme × difficulty combination.
            </p>
            <p>
              That is a deliberate SEO choice. Indexable pages must offer unique educational value: an
              introduction that could not be swapped onto another URL, FAQs that match the page intent, related
              links that strengthen the cluster, and a soft invitation to generate printables when helpful.
            </p>
            <p>
              If you are choosing between printing one thoughtful sheet and downloading five random packets,
              choose the thoughtful sheet. Children remember how homework felt. Calm practice builds the habit
              you actually want.
            </p>
            <p>
              Explore{" "}
              <Link href="/worksheets" className="text-[#7B5CD6]">
                worksheets
              </Link>
              ,{" "}
              <Link href="/activities" className="text-[#7B5CD6]">
                activities
              </Link>
              ,{" "}
              <Link href="/themes" className="text-[#7B5CD6]">
                themes
              </Link>
              ,{" "}
              <Link href="/guides" className="text-[#7B5CD6]">
                guides
              </Link>
              , and{" "}
              <Link href="/tools" className="text-[#7B5CD6]">
                tools
              </Link>
              — then return whenever tonight needs a better plan than improvising under stress.
            </p>
            <p>
              Remember: helpful content is patient content. We would rather publish one careful Class 2 reading
              hub than fifty near-duplicate pages that confuse parents and search engines alike. Your child’s
              evening is not a keyword experiment — it is a relationship. This platform exists to support that
              relationship with printable practice, clear explanations, and a worksheet generator app when you
              need something new in minutes instead of another late-night search spiral.
            </p>
            <p>
              Bookmark the hubs you use most. Share a guide with another parent. Print one sheet tonight. Small
              consistent steps create the homework culture you want — and that is exactly what easy homework
              activity should mean on {site.url.replace("https://www.", "")}. Thank you for trusting us with a
              few quiet minutes of your family’s evening learning time — we built this platform to make those
              minutes calmer and more useful.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4">
        <SoftCta />
        <FaqSection faqs={homeFaqs} title="Quick FAQ" withSchema={false} />
      </div>
    </div>
  );
}
