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
```

## Key paths

- `src/lib/site.ts` — domain, Play Store, nav
- `src/lib/taxonomy.ts` — content clusters
- `src/lib/seo.ts` — metadata + JSON-LD
- `netlify.toml` — build command + publish `out/`
