# Homework Buddy — SEO content platform

Next.js App Router site for **https://www.easyhomeworkactivity.com**

Content-first educational platform for printable worksheets & easy homework activities (Nursery–Class 3). The Homework Buddy Android app is the product; this site is the organic acquisition + authority channel.

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

## Key paths

- `src/lib/site.ts` — domain, Play Store, nav
- `src/lib/taxonomy.ts` — classes, activities, themes, cross-hubs, guides, tools, worksheet seeds
- `src/lib/seo.ts` — metadata + JSON-LD helpers
- `app/sitemap.ts` / `app/robots.ts` — only published URLs

## Env

Optional:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXX
```

## Deploy

Point `www.easyhomeworkactivity.com` at the Next.js build (Vercel / Netlify / Cloudflare). Do not push or deploy until asked.
