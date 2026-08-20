# Play Store Destination Test (3–4 days)

At ₹130/day, do **not** split budget across two ad sets. Run one destination at a time.

## Goal

Learn whether cold Instagram traffic converts better when the ad opens **Google Play** instead of the website download page.

## Setup (Ad set A — Play Store)

Keep everything the same as your current winning/metro setup except destination:

| Setting | Value |
|---------|--------|
| Campaign | Traffic or Engagement — or Sales/Conversions if Pixel is live |
| Daily budget | ₹130 (all in this one ad set) |
| Locations | Delhi NCR, Mumbai, Bangalore, Hyderabad, Pune, Chennai |
| Age | 24–42 |
| Gender | Women (or women-skewed) |
| Audience name | `IN Metros | Women | 24-42 | PlayStore dest | Cold` |
| Creative | Same Hindi video you already ran |
| Destination | **Google Play listing** `https://play.google.com/store/apps/details?id=com.homeworkbuddy.app` |
| Optional UTM | `&referrer=utm_source%3Dinstagram%26utm_medium%3Dpaid%26utm_campaign%3Dplay_direct` |

### How to set destination in Ads Manager
1. Create/edit the ad → Destination = Website URL **or** App (if app is connected)
2. If using website URL field: paste the **Play Store** URL (not easyhomeworkactivity.com)
3. CTA button: **Install now** or **Download**
4. Publish and leave alone for **3–4 full days**

## What to record each day

| Day | Spend | Impressions | Link clicks | CTR | Play Console store visitors | Installs |
|-----|-------|-------------|-------------|-----|------------------------------|----------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |

## After 3–4 days — decide

| Result | Decision |
|--------|----------|
| CTR still &lt; 0.6% | Creative failed — do not blame Play vs website. Shoot new creative (`03-creative-brief-hindi.md`) |
| CTR OK, still 0 installs | Listing/trust — improve Play screenshots + reviews; consider ₹300/day for 3 days with same creative |
| Any installs at ₹130 | Keep Play Store destination; scale budget carefully |
| Worse than website week on CTR | Creative–destination mismatch; retry website with Pixel + `play_store_click` tracking |

## After Play Store test (optional Ad set B)

Only if you still want the website funnel for Pixel learning:

| Setting | Value |
|---------|--------|
| Audience name | `IN Metros | Women | 24-42 | Web /download | Cold` |
| Destination | `https://easyhomeworkactivity.com/download?utm_source=instagram&utm_medium=paid&utm_campaign=app_launch&utm_content=web_download` |
| Optimization | Landing page views **or** custom conversion `PlayStoreClick` (after Pixel deploy) |
| Duration | Another 3–4 days at ₹130 — **pause Play Store ad set first** |

## Do not

- Run Play + Website ad sets at ₹65 each
- Change cities, age, and creative on the same day as destination
- Kill the test before ~3 days unless delivery is broken (₹0 spend)
