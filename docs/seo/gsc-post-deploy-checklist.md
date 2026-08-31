# GSC post-deploy checklist

Run after every indexing-related deploy to production.

## 1. Verify live

- [ ] `https://easyhomeworkactivity.com/sitemap.xml` lists all expected URLs
- [ ] Nursery hub shows download grid with 4 previews
- [ ] `/beta` returns **301** to `/download` (no need to index `/beta`)
- [ ] `/sitemap` HTML page loads and links to class hubs + samples

## 2. Google Search Console

1. **Sitemaps** → submit or resubmit `https://easyhomeworkactivity.com/sitemap.xml`
2. **URL inspection** → request indexing for priority URLs (max ~10/day):
   - `/worksheets/nursery`
   - `/worksheets/nursery/tracing-lines`
   - `/worksheets/nursery/festival-coloring-fun`
   - `/worksheets/sr-kg`
   - `/worksheets/preschool-worksheets`
3. **Page indexing → Discovered - currently not indexed → Validate fix**

## 3. Monitor (weekly)

- Indexed count trending toward ~70
- Discovered-not-indexed dropping toward single digits
- Impressions on nursery / jr-kg worksheet queries
- Image search impressions for preview PNGs

## 4. Off-site

When posting worksheet previews on Instagram, link to the **detail page URL** (not PDF-only).
