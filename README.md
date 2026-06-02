# Homework Buddy — Static website

Marketing and legal pages for the Homework Buddy app.

## Pages

- `index.html` — landing page with features and app screen gallery
- `privacy.html` — privacy policy (for Play Store / App Store)

## App screenshots

Add PNG or JPG files under `assets/screens/` and update `index.html`:

| Slot | Suggested filename |
|------|-------------------|
| Home | `home.png` |
| Preview | `preview.png` |
| Paywall | `paywall.png` |
| Worksheet | `worksheet.png` |

Replace placeholder cards by copying the structure of existing filled cards (e.g. splash, activity-ready).

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
- Replace `assets/logo.png` if you have a final brand asset
