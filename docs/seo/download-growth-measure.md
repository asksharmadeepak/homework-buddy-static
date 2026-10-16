# Download-growth measurement loop

Companion to [gsc-post-deploy-checklist.md](./gsc-post-deploy-checklist.md). Run after SEO phases ship.

## Deploy

1. Push to the Netlify-connected branch for easyhomeworkactivity.com
2. Confirm production build succeeds (`npm run build` → `out/`)
3. Spot-check 200s and the `/tools/chat` → `/tools/free-printable-worksheet-generator` 301

## Request indexing

Use GSC URL Inspection on the priority list in the post-deploy checklist (intent hubs + ~10 PDF pages + generator/guide). Cap ~10 requests/day; rotate across days.

## Watch weekly (8–12 weeks)

| Signal | Where | Target direction |
|--------|--------|------------------|
| Indexed pages | GSC → Pages | ↑ hubs + PDF details |
| Organic clicks | GSC → Performance | ↑ hub/PDF landing pages |
| Store clicks | GA4 `play_store_click` / `app_store_click` by placement / utm_content | ↑ from new hubs |
| Installs | Play Console / App Store Connect website campaign | ↑ attributed installs |

## Placement tips

SoftCta and SmartStoreLink already send store-click events. Prefer distinct `playPlacement` values on new hubs (`soft_cta`, `tool_worksheet-generator`, hub asides) so you can see which SEO pages convert.

## Out of scope

Flutter product bugs (video fullscreen, offline media, profile content) stay on a separate board — they do not unblock organic download growth the way crawlable worksheets do.
