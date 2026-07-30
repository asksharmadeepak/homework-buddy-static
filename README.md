# Homework Buddy — SEO content platform

Next.js App Router site for **https://easyhomeworkactivity.com**

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run lint
npm run build
npm start
```

## Deploy (Netlify)

This site builds as a **static export** (`out/`). No Next.js runtime plugin required.

1. Push to `main`
2. In Netlify → **Site configuration → Build & deploy**:
   - **Build command:** `npm run build`
   - **Publish directory:** `out` (**not** `public`)
3. Trigger **Clear cache and deploy site**
4. Confirm `https://easyhomeworkactivity.com/` returns 200

Optional env (also set in `netlify.toml` for production builds):

```
NEXT_PUBLIC_GA_ID=G-N7P5CLP7BW
NEXT_PUBLIC_PLAY_BETA_JOIN_URL=https://play.google.com/apps/testing/com.homeworkbuddy.app
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/homeworkbuddyapp
```

Leave `NEXT_PUBLIC_PLAY_BETA_JOIN_URL` empty until you have a Play Console closed-testing join link. Beta emails are collected via Netlify Forms (`beta-testers`) on `/beta`.

Instagram is **`@homeworkbuddyapp`** (`https://www.instagram.com/homeworkbuddyapp`) — wired in footer + Organization `sameAs` by default. Override with `NEXT_PUBLIC_INSTAGRAM_URL` only if the handle changes. Post 2–3×/week using worksheet preview PNGs under `public/worksheets/previews/` (worksheet tip + app CTA).

## Email (beta vs app)

- **Marketing site:** Netlify Forms + manual/Play Console invites are enough. Do **not** build Resend/SMTP just to match competitors.
- **App transactional email:** Keep deferred while beta volume is low. Near-term flow = add email in Play Console + short personal invite (and the site Play invite link when configured). Revisit automation (welcome / iOS waitlist blast) only when signup volume justifies it.

## Key paths

- `src/lib/site.ts` — domain, Play Store, Instagram URL, nav
- `src/lib/taxonomy.ts` — content clusters
- `src/lib/seo.ts` — metadata + JSON-LD
- `public/worksheets/previews/` — worksheet preview PNGs for Image SEO
- `netlify.toml` — build command + publish `out/`

## GSC weekly watchlist

Early GSC signal: **India** leads impressions; **`/worksheets/jr-kg`** is the strongest page; mobile impressions slightly outpace desktop. Prefer the apex host (`easyhomeworkactivity.com` — www redirects there).

Also watch **`/worksheets/class-1/hindi-vyanjan-practice`** for “hindi vyanjan worksheet” / Images pack entry after preview images ship.

In Google Search Console → Performance, enable **Average position** and check these queries weekly (priority order):

| Query | Page to watch | Act when |
|-------|---------------|----------|
| junior kg homework / jr kg homework | `/worksheets/jr-kg` | Top 10 **and** 50+ impressions |
| nursery homework | `/worksheets/nursery` | Top 10 **and** 50+ impressions |
| easy homework | `/`, `/guides/easy-homework-ideas` | Top 10 **and** 50+ impressions |
| homework class 2 / homework for class 2 | `/worksheets/class-2` | Top 10 **and** 50+ impressions |
| hindi vyanjan worksheet for class 1 | `/worksheets/class-1/hindi-vyanjan-practice` | Top 10 **and** 50+ impressions (or Images pack entry) |

Until a row hits that bar: no new hubs. Then deepen that one page (FAQ, internal links, richer H1) — start with Jr KG if it clears first. Ignore one-off queries like competitor brand names. Growth for beta signups still comes from `/beta` and distribution, not organic alone.
