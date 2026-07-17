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

This site is hosted on **Netlify**. Next.js needs the official plugin — not a static `public/` publish folder.

1. Push these changes to `main`
2. In Netlify → **Site configuration → Build & deploy**:
   - **Build command:** `npm run build` (or rely on `netlify.toml`)
   - **Publish directory:** leave empty / `.next` — **do not use `public`**
3. `@netlify/plugin-nextjs` is configured in `netlify.toml`
4. Trigger **Clear cache and deploy site**
5. Confirm `https://easyhomeworkactivity.com/` returns 200

Optional env:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXX
```

## Key paths

- `src/lib/site.ts` — domain, Play Store, nav
- `src/lib/taxonomy.ts` — content clusters
- `src/lib/seo.ts` — metadata + JSON-LD
- `netlify.toml` — Netlify + Next.js plugin
