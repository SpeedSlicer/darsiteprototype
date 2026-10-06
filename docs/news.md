# News

[Documentation index](editing-guide.md) · [Pages](pages.md) · [Publishing](publishing.md)

## How the archive works

Each Markdown file directly inside `src/pages/news/` is an article. Its filename becomes the URL. The [news index](../src/pages/news/index.astro) finds these files automatically and sorts their quoted date strings newest first. You do not manually add article links to the index or main navigation.

The existing two entries summarize older DAR posts and link to the originals. They are not complete migrations of the original articles.

## Add an article

Create `src/pages/news/workshop-update.md`:

```markdown
---
layout: ../../layouts/markdown.astro
title: Workshop update
description: Students tested a new robot mechanism at the workshop.
date: "2026-10-05"
showInterest: false
---

## This week at DAR

Write the update here. Include confirmed details and useful context.

![Students testing a mechanism](/photos/mechanism-test.jpg)

[See upcoming events](/calendar).

[Back to news](/news).
```

Change the example date and text to the real article information. Include the image only after adding the actual file to `public/photos/`. The resulting route is `/news/workshop-update`.

## Date and metadata rules

Use a quoted `YYYY-MM-DD` value. Dates are displayed in a long readable format using UTC so the day does not shift with the reader’s time zone. The index sorts by the date string, so consistent formatting is essential.

Every article needs `title`, `description`, and `date`. The index uses `description` as the summary. `showInterest: false` keeps the student-interest panel out of an article. See [page metadata](pages.md#metadata-reference) for other fields.

## Edit an existing article

Open its `.md` file, change the body, and preview both the article and `/news`. Change the summary separately if needed; it is not generated from the article body. Keep the publication date unless intentionally changing the article’s date and archive position.

## Links, media, and attribution

Use internal URLs for related programs and events. Put images in `public/`; [the image guide](images-and-styling.md) explains URLs and alt text. If summarizing an external source, link to the original and distinguish the summary from a full original article.

## Rename or remove an article

A filename change changes the article URL. Update any links and consider a [redirect](navigation.md#redirect-old-urls). Removing the Markdown file also removes the index entry automatically. The automatic index currently scans only `src/pages/news/*.md`, so articles placed in deeper subfolders will not appear there without changing its glob.

Next: [Publishing and troubleshooting](publishing.md).
