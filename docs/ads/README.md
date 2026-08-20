# Instagram / Meta ads runbooks

Operational docs for Homework Buddy paid acquisition at small budget (~₹130/day).

| Doc | Purpose |
|-----|---------|
| [01-metrics-audit.md](./01-metrics-audit.md) | Pull CTR, LPV, Play clicks, installs — diagnose which funnel stage failed |
| [02-play-store-destination-test.md](./02-play-store-destination-test.md) | 3–4 day test: send ads to Play Store (not website) |
| [03-creative-brief-hindi.md](./03-creative-brief-hindi.md) | New Reel script: worksheet in first 2s + captions + Hindi VO |

## Tracking (after site deploy)

1. Netlify env: `NEXT_PUBLIC_META_PIXEL_ID=<your pixel id>`
2. GA4 → Admin → Events → mark `play_store_click` as a **key event**
3. Meta Events Manager → confirm `PageView` + custom `PlayStoreClick`
4. Ads Manager → create custom conversion from `PlayStoreClick` if optimizing website funnel

## Recommended order this week

1. Fill [01-metrics-audit.md](./01-metrics-audit.md) for the week you already ran  
2. Shoot creative from [03-creative-brief-hindi.md](./03-creative-brief-hindi.md)  
3. Run [02-play-store-destination-test.md](./02-play-store-destination-test.md) for 3–4 days  
4. Only then decide metros vs creative vs budget
