# Analytics mapping

One GA4 property (`NEXT_PUBLIC_GA_ID`, currently `G-N7P5CLP7BW`). Do not add a second tag.

## Key events (GA4 console)

Mark these as key events in Admin → Events. There is no code switch for that.

- `play_store_click`
- `app_store_click`

## Store clicks

Fired from `trackStoreClick` in `src/lib/analytics.ts` when a phone opens Play or the App Store. Desktop “Get the app” goes to `/download` and does not fire a store event.

| Parameter | Meaning |
| --- | --- |
| `placement` | Where the link sits (`ribbon`, `worksheet_detail`, `class_hub_{slug}`, `worksheet_chat`, …) |
| `store` | `play` or `app_store` |
| `page_path` | Path at click time |
| `class_level` | Class slug when the page knows it (`nursery`, `class-1`, …) |
| `subject` | Activity slug when the page knows it (`hindi`, `maths`, …) |

## Worksheet chat

| Code event | PRD name | When |
| --- | --- | --- |
| `chat_generate_start` | `generator_start` | Generate is clicked |
| `chat_generate_success` | `generator_success` | A sheet comes back |
| `chat_limit_hit` | — | Daily free sheet is used up |
| `chat_print_click` | — | Print is clicked |

Keep the `chat_*` names. Do not also send `generator_*`.

`chat_generate_start` and `chat_generate_success` include `class_slug`.

## Downloads

`file_download` comes from GA4 enhanced measurement when a PDF link is clicked. Do not send a second download event from code. Segment by `page_path`.

## App attribution (not on this website)

Play Install Referrer and iOS attribution are app work. The site only adds `utm_source=website`, `utm_medium=organic`, `utm_campaign=app_download`, and `utm_content={placement}` on store URLs.

Flutter app requirements when that work starts:

- Read the Play Install Referrer on first launch and store `utm_content` with the install.
- On iOS, read the campaign from the App Store link the site already sends. Do not invent a second campaign name.
