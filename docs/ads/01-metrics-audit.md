# 7-day Ads Metrics Audit

Use this after each paid week. Fill the numbers from Ads Manager, GA4, and Play Console. Decide the next fix from the table at the bottom — do not change cities until you know which stage failed.

## A. Meta Ads Manager (last 7 days)

Open the ad set → Columns → customize if needed.

| Metric | Where | Your number |
|--------|--------|-------------|
| Amount spent | Ads Manager | ₹ ____ |
| Impressions | Ads Manager | ____ |
| Reach | Ads Manager | ____ |
| Link clicks | Ads Manager | ____ |
| CTR (link click-through rate) | Ads Manager | ____ % |
| CPC (cost per link click) | Ads Manager | ₹ ____ |
| Landing page views (LPV) | Ads Manager | ____ |
| Cost per LPV | Ads Manager | ₹ ____ |

**Audience reminder (₹130/day):** 5–6 metros only, women 24–42, one ad set, 1–2 creatives.

## B. Google Analytics 4 (website)

Property for `easyhomeworkactivity.com`.

| Metric | Where | Your number |
|--------|--------|-------------|
| `/download` pageviews | Engagement → Pages and screens | ____ |
| Sessions with `utm_source=instagram` (or your ad UTM) | Acquisition → Traffic acquisition | ____ |
| `play_store_click` event count | Engagement → Events | ____ |
| `play_store_click` by `utm_content` | Explore / Events | ____ |

**UTM tip for Instagram ads:**  
`https://easyhomeworkactivity.com/download?utm_source=instagram&utm_medium=paid&utm_campaign=app_launch&utm_content=weekN_creativeA`

## C. Google Play Console (app)

| Metric | Where | Your number |
|--------|--------|-------------|
| Store listing visitors (7d) | Statistics / Acquisition | ____ |
| New users / installs (7d) | Statistics → Users | ____ |
| Organic vs other | Acquisition reports | ____ |

Play Console cannot see “clicked badge on website.” It only sees store visits and installs.

## D. How to interpret (pick one)

| Pattern | Likely problem | Next action |
|---------|----------------|-------------|
| CTR under ~0.6% after decent impressions | Creative | New video (see `03-creative-brief-hindi.md`) |
| Clicks OK, LPV near zero | Destination / load / tracking | Check ad URL, page speed, Pixel |
| LPV OK, `play_store_click` near zero | Download page CTA | Stronger Play badge, less friction |
| Play clicks OK, installs near zero | Store listing / trust | Screenshots, reviews, short description |
| Almost no impressions / spend | Delivery / account | Payment, audience too narrow, learning limited |

## E. Success bar at ₹130/day

Do **not** judge the week only by installs.

Healthy early week:
- Some link clicks almost every day
- At least a handful of `/download` views
- CTR trending toward ~1%+

Installs may still be zero at this budget. That means raise spend **after** CTR is healthy, or send traffic **directly to Play Store** (see `02-play-store-destination-test.md`).
