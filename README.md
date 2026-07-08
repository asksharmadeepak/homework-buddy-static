# Homework Buddy — Static website

Marketing and legal pages for the Homework Buddy app (version **1.0.4**).

## Pages

- `index.html` — landing page with features, how-it-works flow, and Google Play download
- `privacy.html` — privacy policy (for Play Store / App Store)

## Assets

| File | Purpose |
|------|---------|
| `assets/logo.png` | App icon (favicon + header) |
| `assets/wordmark.png` | Homework Buddy wordmark in header |
| `assets/features-infographic.png` | Why Homework Buddy — 5 feature columns + trust bar |
| `assets/screens/splash.png` | Welcome / get started |
| `assets/screens/home.png` | Home — class, activity, time |
| `assets/screens/create-activity.png` | Theme & difficulty picker |
| `assets/screens/preview.png` | Worksheet preview before PDF |

Add real phone screenshots as you ship updates (`home.png`, `saved.png`, `profile.png`) and swap flow cards in `index.html` for `<img>` tags.

## Google Play

https://play.google.com/store/apps/details?id=com.homeworkbuddy.app

## Local preview

```bash
cd /Users/deepaksharma/Code/homework-buddy-static
python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy

Host on GitHub Pages, Cloudflare Pages, Netlify, or any static host. Point your domain (e.g. `homeworkbuddy.app`) to this folder.

## Customize

- Update contact emails in `index.html` and `privacy.html`
- Replace screenshots in `assets/screens/` when you capture new app builds
- Bump version badge in `index.html` footer when releasing
