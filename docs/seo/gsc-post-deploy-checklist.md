# GSC post-deploy checklist

Run after every indexing-related deploy to production (Netlify → easyhomeworkactivity.com).

## 1. Verify live

- [ ] `https://easyhomeworkactivity.com/sitemap.xml` lists class hubs, intent hubs, worksheet detail URLs, tools, and guides
- [ ] `/tools/chat` returns **301** → `/tools/free-printable-worksheet-generator`
- [ ] New generator URL returns **200** with H1 “Free printable worksheet generator”
- [ ] Intent hubs return **200**: `/worksheets/lkg`, `/ukg`, `/english`, `/evs`, `/matching`, `/tracing`
- [ ] A new SEO-batch detail page shows preview + PDF (e.g. `/worksheets/nursery/fruits-matching`)
- [ ] Soft CTAs lead with browse free worksheets; secondary is Get the app
- [ ] `/beta` returns **301** to `/download` (no need to index `/beta`)
- [ ] `/sitemap` HTML page links to class hubs + samples + tools

## 2. Google Search Console

1. **Sitemaps** → submit or resubmit `https://easyhomeworkactivity.com/sitemap.xml`
2. **URL inspection** → request indexing for priority URLs (max ~10/day), rotating across deploys:

   **Intent hubs (Phase 2)**
   - `/worksheets/lkg`
   - `/worksheets/ukg`
   - `/worksheets/english`
   - `/worksheets/evs`
   - `/worksheets/matching`
   - `/worksheets/tracing`

   **Generator / tools (Phase 1 + 4)**
   - `/tools/free-printable-worksheet-generator`
   - `/tools/worksheet-generator`
   - `/guides/worksheet-generator-for-teachers-and-parents`

   **Strong PDF detail pages (Phase 3 — pick ~10 best)**
   - `/worksheets/nursery/fruits-matching`
   - `/worksheets/nursery/tracing-lines`
   - `/worksheets/jr-kg/english-sight-words`
   - `/worksheets/jr-kg/letter-tracing-abc`
   - `/worksheets/sr-kg/english-cvc-mix`
   - `/worksheets/class-1/english-reading-park`
   - `/worksheets/class-1/maths-bonds-10`
   - `/worksheets/class-2/english-comprehension`
   - `/worksheets/class-3/maths-fractions-intro`
   - `/worksheets/class-3/english-paragraph`

3. **Page indexing → Discovered - currently not indexed → Validate fix** (not "Page with redirect" — www/http host variants will always show as redirects)

## 3. Analytics (GA4 + store UTMs)

- [ ] Confirm `play_store_click` / `app_store_click` fire from SoftCta and SmartStoreLink
- [ ] Watch `utm_content` / placement on new hubs (`soft_cta`, `tool_*`, hub asides)
- [ ] Weekly: store clicks from website campaign vs prior week
- [ ] Play Console / App Store Connect: installs attributed to website / campaign if configured

## 4. Monitor (weekly for 8–12 weeks)

Success metrics from the SEO download-growth plan:

- Indexed pages ↑ (intent hubs + PDF details especially)
- Organic clicks to hub / PDF pages ↑
- Store clicks from website UTMs ↑
- Installs attributed to website campaign ↑

Also track:

- Discovered-not-indexed dropping toward single digits for real content URLs
- Impressions on LKG / UKG / Nursery / tracing / matching queries
- Image search impressions for preview PNGs under `/worksheets/previews/`

## 5. Off-site

When posting worksheet previews on Instagram (`@homeworkbuddyapp`), link to the **detail page URL** (not PDF-only).

## 6. Optional (after content ships)

- Lighthouse mobile pass on home + one hub — do not block Phase 1–3 on perf speculation
