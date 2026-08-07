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
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/homeworkbuddyapp
```

**Get the app:** Header/nav → `/download` (badge + iPhone waitlist). In-content CTAs (SoftCta, worksheet samples, sheet pages) → Google Play with UTMs via `playStoreUrlWithUtm()`. Legacy `/beta` **301 → `/download`**.

**Play UTMs** (for GA / Play Console attribution):

| `utm_content` | Where |
|---|---|
| `soft_cta` | SoftCta “Get the app” |
| `download_hero` | `/download` Play badge |
| `worksheets_samples` | `/worksheets` sample strip |
| `worksheet_detail` | Sheet page “Generate more in the app” |

After deploy: GA4 → mark outbound Play clicks as a key event / explore by `utm_content`.

Instagram is **`@homeworkbuddyapp`** — footer + Organization `sameAs`. Post 2–3×/week using worksheet preview PNGs under `public/worksheets/previews/`.

## Email

- **iPhone waitlist:** Netlify Forms on `/download` — no custom SMTP needed.
- **App transactional email:** Defer until volume justifies automation.

## Key paths

- `src/lib/site.ts` — domain, Play Store + `playStoreUrlWithUtm`, Instagram URL, nav
- `src/lib/taxonomy.ts` — content clusters
- `src/lib/seo.ts` — metadata + JSON-LD (incl. MobileApplication screenshots)
- `public/worksheets/previews/` — worksheet preview PNGs for Image SEO
- `public/brand/google-play-badge.png` — official Play badge on `/download`
- `netlify.toml` — build command + publish `out/`

## After each deploy (GSC)

URL Inspection → Request indexing for:

1. `https://easyhomeworkactivity.com/download`
2. `https://easyhomeworkactivity.com/worksheets`
3. `https://easyhomeworkactivity.com/worksheets/jr-kg`
4. `https://easyhomeworkactivity.com/worksheets/class-1/hindi-vyanjan-practice`

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

Until a row hits that bar: no new hubs. Then deepen that one page (FAQ, internal links, richer H1) — start with Jr KG if it clears first. Ignore one-off queries like competitor brand names. App downloads come from Google Play via `/download` and distribution (Instagram/Reels), not organic alone.
