import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { GeneratorHubCard } from "@/components/GeneratorHubCard";
import { HubCard } from "@/components/HubCard";
import { ClassHubWorksheetGrid } from "@/components/ClassHubWorksheetGrid";
import { PlayStoreLink } from "@/components/PlayStoreLink";
import { SoftCta } from "@/components/SoftCta";
import { buildMetadata, faqJsonLd, jsonLdScript } from "@/lib/seo";
import { generatorHubItems } from "@/lib/generator-hub";
import { site } from "@/lib/site";
import {
  activities,
  classes,
  crossHubs,
  getPopularWorksheets,
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
      "Every free sample includes an age level, a clear skill goal, practical parent guidance, and a printable preview so you can check the difficulty before using ink.",
  },
];

export default function HomePage() {
  const classList = publishedOnly(classes);
  const activityList = publishedOnly(activities);
  const themeList = publishedOnly(themes).slice(0, 6);
  const guideList = publishedOnly(guides);
  const toolList = publishedOnly(tools);
  const popularSheets = getPopularWorksheets();
  const curatedHubs = publishedOnly(crossHubs).filter((h) =>
    ["preschool-worksheets", "kindergarten-worksheets"].includes(h.slug),
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(homeFaqs))}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F2FF] via-[#FFFBF6] to-[#FFF5F0]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#7B5CD6]">
              {site.name}
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-[#24212C] md:text-5xl">
              Printable worksheets & calm homework for{" "}
              <span className="text-[#E85D75]">Nursery to Class 3</span>
            </h1>
            <p className="mt-5 text-lg font-semibold leading-relaxed text-[#7D7788]">
              Choose class-fit practice for Indian evenings — or try one free browser printable tonight,
              then generate unlimited themed PDFs in the Android app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/tools/chat"
                className="rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
              >
                Try free printable helper
              </Link>
              <PlayStoreLink
                placement="home_hero"
                className="rounded-full border-2 border-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-[#7B5CD6]"
              >
                Get the app
              </PlayStoreLink>
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black text-[#24212C]">Create practice tonight</h2>
        <p className="mt-3 max-w-3xl font-semibold text-[#7D7788]">
          Pick a helper below — real Homework Buddy paths for class-fit worksheets, samples, and the app.
          No sign-in required to browse.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {generatorHubItems.map((item) => (
            <GeneratorHubCard key={item.href + item.title} item={item} />
          ))}
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

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black text-[#24212C]">Popular free downloads</h2>
        <p className="mt-3 max-w-3xl font-semibold text-[#7D7788]">
          Preview and print real sample worksheets — the same style Homework Buddy generates in the app.
        </p>
        <div className="mt-8">
          <ClassHubWorksheetGrid sheets={popularSheets} className="Free sample" />
        </div>
      </section>

      <section className="bg-[#FFF5F0] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black text-[#24212C]">Curated worksheet hubs</h2>
          <p className="mt-3 max-w-3xl font-semibold text-[#7D7788]">
            Preschool and kindergarten collections for parents who search by age band, not class name alone.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {curatedHubs.map((h) => (
              <Link
                key={h.slug}
                href={`/worksheets/${h.slug}`}
                className="rounded-3xl border border-[#ebe4f7] bg-white p-6 hover:border-[#E85D75]/40"
              >
                <h3 className="text-xl font-black text-[#24212C]">{h.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#7D7788]">{h.description}</p>
              </Link>
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
            This site organises class hubs, free samples, and parent guides so you can find one calm sheet —
            then create fresh themes in the Homework Buddy app when favourites feel stale.
          </p>
          <p>
            Start with{" "}
            <Link href="/worksheets/nursery" className="text-[#7B5CD6]">
              free Nursery worksheets
            </Link>
            , a Class 1 reading collection, or an animals theme for a relaxed colouring night. Nursery needs
            tracing and picture talk; Jr KG and Sr KG need letter-sound play; Class 1–3 need finishable reading
            and maths without coaching-centre intensity.
          </p>
          <p>
            Each worksheet page tells you what the PDF contains, who it suits, and how long to spend. Preview
            before printing. Fifteen calm minutes beat an hour of conflict.
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
            After school, many children still have tuition or simply need rest. Printable worksheets should never
            become a second full school day. The best easy homework is short, clear, and connected to something
            your child already cares about — one skill, then stop.
          </p>
          <p>
            Preview on screen before you use ink. Prefer A4 layouts. Keep a folder of favourites by class. When
            they feel stale, try the{" "}
            <Link href="/tools/chat" className="text-[#7B5CD6]">
              printable helper
            </Link>{" "}
            or{" "}
            <PlayStoreLink placement="home_content" className="text-[#7B5CD6]">
              Homework Buddy on Google Play
            </PlayStoreLink>{" "}
            for a new theme without another hour of scrolling.
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
        <h2 className="text-3xl font-black text-[#24212C]">How to use this site</h2>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-base font-semibold leading-relaxed text-[#3d3848]">
          <li>
            Pick your child&apos;s class — start with{" "}
            <Link href="/worksheets/nursery" className="text-[#7B5CD6]">
              Nursery
            </Link>
            ,{" "}
            <Link href="/worksheets/jr-kg" className="text-[#7B5CD6]">
              Jr KG
            </Link>
            , or{" "}
            <Link href="/worksheets/class-1" className="text-[#7B5CD6]">
              Class 1
            </Link>{" "}
            worksheets.
          </li>
          <li>
            Preview a free sample PDF above, download, and print on A4 — no login required.
          </li>
          <li>
            Or{" "}
            <Link href="/tools/chat" className="text-[#7B5CD6]">
              generate one browser printable
            </Link>{" "}
            for tonight, then get{" "}
            <PlayStoreLink placement="home_content" className="text-[#7B5CD6]">
              Homework Buddy
            </PlayStoreLink>{" "}
            for unlimited themed PDFs.
          </li>
        </ol>
      </section>

      <div className="mx-auto max-w-3xl px-4">
        <SoftCta />
        <FaqSection faqs={homeFaqs} title="Quick FAQ" withSchema={false} />
      </div>
    </div>
  );
}
