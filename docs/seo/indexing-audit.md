# GSC indexing audit — easyhomeworkactivity.com

Snapshot: **39 indexed**, **22 not indexed** (19 discovered-not-indexed + 3 redirect).

Cross-check GSC **Page indexing → Discovered - currently not indexed → examples** against this list after each deploy.

## Expected redirect URLs (do not index)

| URL | Reason |
|-----|--------|
| `/beta` | 301 → `/download` ([netlify.toml](../../netlify.toml)) |
| `https://www.easyhomeworkactivity.com/*` | 301 → apex |
| Possible http→https variant | Netlify force HTTPS |

## Likely discovered-not-indexed buckets (~19)

### Cross-hubs (5) — weak internal links before Aug 2026 fix

- `/worksheets/class-1-reading`
- `/worksheets/class-1-maths`
- `/worksheets/class-2-reading`
- `/worksheets/preschool-worksheets`
- `/worksheets/kindergarten-worksheets`

### Worksheet detail pages (24 in sitemap)

Many discovered via sitemap only; prioritize nursery + sr-kg:

- `/worksheets/nursery/tracing-lines`
- `/worksheets/nursery/animals-matching`
- `/worksheets/sr-kg/cvc-reading-warm`
- `/worksheets/sr-kg/writing-sight-words`
- `/worksheets/sr-kg/maths-add-within-10`
- `/worksheets/sr-kg/animals-coloring`
- (plus remaining detail URLs in [sitemap.xml](https://easyhomeworkactivity.com/sitemap.xml))

### Tools (4)

- `/tools/worksheet-generator`
- `/tools/reading-generator`
- `/tools/math-worksheet-generator`
- `/tools/homework-planner`

### Guides (4)

- `/guides/homework-routine`
- `/guides/printable-worksheets-guide`
- `/guides/class-1-reading-at-home`
- `/guides/easy-homework-ideas`

## Validation

After fixes ship, re-export GSC examples and mark each URL:

- [ ] Indexed
- [ ] Still discovered-not-indexed
- [ ] Crawled — currently not indexed (different issue: quality/duplicate)

## Priority request-indexing URLs (max ~10/day in GSC)

1. `/worksheets/nursery`
2. `/worksheets/nursery/tracing-lines`
3. `/worksheets/nursery/festival-coloring-fun`
4. `/worksheets/sr-kg`
5. `/worksheets/preschool-worksheets`
6. `/worksheets/kindergarten-worksheets`
7. `/worksheets/class-1-reading`
8. `/worksheets/class-1/animals-reading-adventure`
9. `/`
10. `/worksheets`

See [gsc-post-deploy-checklist.md](./gsc-post-deploy-checklist.md).
