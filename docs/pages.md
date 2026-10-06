# Pages and Markdown

[Documentation index](editing-guide.md) · [Navigation](navigation.md) · [Images](images-and-styling.md)

## Page inventory

| Website URL | Source to edit |
| --- | --- |
| `/` | [Home](../src/pages/index.astro) |
| `/programs` | [Program overview](../src/pages/programs.astro), with content from [program files](../src/content/programs/) |
| `/fll`, `/ftc`, `/frc` | [Program Markdown files](../src/content/programs/); rendered through the [program template](../src/pages/%5Bprogram%5D.astro) |
| `/about` | [About DAR](../src/pages/about.md) |
| `/join` | [Join DAR](../src/pages/join.md) |
| `/contact-us` | [Contact and location](../src/pages/contact-us.md) |
| `/volunteer-opportunities` | [Volunteer](../src/pages/volunteer-opportunities.md) |
| `/faq` | [FAQ](../src/pages/faq.md) |
| `/support` | [Support DAR](../src/pages/support.md) |
| `/sponsor` | [Sponsor DAR](../src/pages/sponsor.md); [editing instructions](sponsorship.md) |
| `/calendar` | [Calendar](../src/pages/calendar.astro) |
| `/awards` | [Awards records](../src/data/awards.json), [introduction](../src/content/awards/intro.md), and [template](../src/pages/awards.astro) |
| `/news` | [Automatic news index](../src/pages/news/index.astro) |
| `/news/article-name` | Individual Markdown files in [news](../src/pages/news/) |

Files in `src/pages` normally create routes. Files in `src/content` are reusable content and do not create routes by themselves. The program template explicitly creates routes from each program’s `id`.

## Edit an existing page

Open the source file. For a Markdown page, keep the opening metadata between the two `---` lines. Change headings, paragraphs, or links below it. Save and preview the corresponding URL.

Keep headings direct: “Join DAR,” “Event calendar,” or “Awards & achievements.” Use confirmed team information rather than inventing schedules, fees, openings, or results.

## Metadata reference

```yaml
---
layout: ../layouts/markdown.astro
title: Frequently asked questions
description: A few things to know before getting involved.
eyebrow: DAR INFORMATION
showInterest: false
---
```

| Field | Purpose |
| --- | --- |
| `layout` | Required path to the shared Markdown layout for ordinary pages |
| `title` | Page heading and title used by the shared layout |
| `description` | Optional intro beneath the heading and search metadata |
| `eyebrow` | Optional small label above the heading |
| `showInterest` | `true` shows the shared Google Form panel; `false` hides it; omission defaults to showing it |
| `morePages` | `true` adds an automatic All pages/footer link |
| `navLabel` | Optional automatic-link label; defaults to `title` |
| `navOrder` | Optional numeric sort order among automatic links; defaults to `100` |
| `date` | Optional article date; required for news articles |

Write booleans as `true` or `false`, without quotes. Quote text containing a colon or other YAML punctuation: `title: "Robotics: getting started"`. Keep indentation consistent.

## Markdown examples

The layout supplies the page’s main heading. Use `##` for sections and `###` for subsections in the body.

```markdown
## Section heading

A paragraph with **bold text** and *emphasis*.

### Subsection

- First item
- Second item

1. First step
2. Second step

[Contact DAR](/contact-us)
[Email DAR](mailto:info@darobotics.org)
[External resource](https://www.firstinspires.org/)

![Students wiring a robot](/photos/workshop.jpg)
```

Use blank lines between headings, paragraphs, and lists. Website links begin with `/`; documentation links use relative `.md` paths. Images belong in `public/` and use URLs without the `public` prefix. See [image instructions](images-and-styling.md#add-an-image).

## Add a page

Create `src/pages/workshop-visits.md`:

```markdown
---
layout: ../layouts/markdown.astro
title: Workshop visits
description: How to arrange a visit to DAR.
showInterest: false
morePages: true
navLabel: Visit the workshop
navOrder: 100
---

## Arrange a visit

[Contact DAR](/contact-us) to confirm a meeting time.
```

This creates `/workshop-visits` and automatically adds a link under More pages and in the footer. Use a lowercase, hyphenated filename. Avoid names already used by another page, program `id`, or redirect.

For a nested page such as `src/pages/community/visits.md`, use `layout: ../../layouts/markdown.astro`; its URL is `/community/visits`. Add one extra `../` per folder level. [News](news.md) uses this same rule.

## Rename or remove a page

Renaming a file changes its URL. Update links in content and navigation, then add a [redirect](navigation.md#redirect-old-urls) when the old address should still work. To remove a page, remove its source file and navigation entries, and search the repository for its old URL before rebuilding.

Do not rename program IDs as part of a text edit: IDs also control routes and tab behavior. FLL Explore has already been removed; its legacy URL redirects to FLL.

## Edit Home or another Astro page

Home, Calendar, Awards, and the program/news indexes use Astro templates. Text outside the opening `---` code block can usually be edited directly. Preserve tags, imports, expressions in `{braces}`, and component names. Home’s program section and interest form are shared components; their content is edited in [program files](programs.md) and [contact settings](calendar-and-contact.md).

Next: [Navigation](navigation.md) and [publishing checks](publishing.md).
