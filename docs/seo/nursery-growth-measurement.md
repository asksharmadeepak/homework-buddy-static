# Nursery SEO measurement — 28-day checklist

Baseline source: Google Search Console export, last three months ending 6 September 2026.

## Baseline

- `/worksheets/nursery`: 317 impressions, 4 clicks, 1.26% CTR, average position 9.39.
- `nursery home work`: 36 impressions, 2 clicks, 5.56% CTR, position 10.44.
- `nursery homework`: 44 impressions, 0 clicks, position 11.3.
- Combined Nursery query variants: 145 impressions, 2 clicks, weighted position 11.7.
- Site-wide mobile average position: 7.79.
- Site-wide desktop average position: 44.9.
- Google Images baseline: not available; the supplied export used Search type **Web**.

## After deployment

1. Search Console → Sitemaps:
   - Submit `https://easyhomeworkactivity.com/sitemap.xml`.
   - Submit `https://easyhomeworkactivity.com/image-sitemap.xml`.
2. URL Inspection → request indexing in this order:
   - `/worksheets/nursery`
   - `/worksheets/nursery/alphabet-tracing`
   - `/worksheets/nursery/numbers-1-to-10`
   - `/worksheets/nursery/colours-shapes`
   - `/worksheets/nursery/same-different`
3. Inspect one preview URL and confirm Google can fetch it:
   - `/worksheets/previews/nursery-alphabet-tracing.png`
4. Confirm the live response headers:
   - `/sitemap.xml` → `application/xml`
   - `/image-sitemap.xml` → `application/xml`
   - `/opengraph-image` → `image/png`
   - worksheet previews → `image/png`

## Compare after 28 complete days

Search Console → Performance → Search results:

1. Set date to **Compare: last 28 days vs previous 28 days**.
2. Add Page filter: URLs containing `/worksheets/nursery`.
3. Export Queries, Pages, Countries, and Devices.
4. Repeat with Search type **Image** and export Queries + Pages.

Success signals:

- Nursery hub CTR increases from 1.26% to at least 3%.
- Combined Nursery variants move from weighted position 11.7 into the top 8.
- New worksheet pages earn impressions for their distinct long-tail queries.
- Google Images reports its first non-zero impressions and clicks.

Do not rewrite titles during the 28-day window. Google needs a stable page to recrawl and evaluate.

## Authority outreach

After all five URLs are indexed, share individual free worksheet pages—not the homepage—with:

- Preschool teachers who maintain resource pages.
- Parenting blogs publishing Nursery activity roundups.
- School or tuition resource pages that accept free PDF contributions.

Ask for an editorially useful link such as “free Nursery alphabet tracing worksheet.” Do not buy links, exchange reviews for links, or submit the same description to bulk directories.
