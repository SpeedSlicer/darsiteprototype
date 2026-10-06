# DAR website editing guide

Start here for editing the static DAR website. These linked Markdown guides live in the repository; they are not public website routes. Open them in GitHub or your editor’s Markdown preview.

## Choose a guide

| Guide | What it covers |
| --- | --- |
| [Getting started](getting-started.md) | Requirements, local setup, everyday editing workflow |
| [Pages and Markdown](pages.md) | Page inventory, metadata, formatting, new pages, renaming and removal |
| [Programs](programs.md) | FLL, FTC, FRC descriptions, facts, photos, shared rendering |
| [News](news.md) | Creating articles, dates, automatic index, existing archive summaries |
| [Awards](awards.md) | Adding records, blue banners, source verification, FLL/FTC construction status |
| [Sponsorship](sponsorship.md) | Mr. Dugan’s editable sponsor-information page, options, and email links |
| [Navigation](navigation.md) | Sticky header, All pages panel, automatic links, footer, redirects |
| [Calendar and contact](calendar-and-contact.md) | Google Calendar, Google Forms, email, workshop address |
| [Images and styling](images-and-styling.md) | Image paths, alt text, layout files, CSS, page transitions |
| [Publishing and troubleshooting](publishing.md) | Checks, static output, deployment handoff, common problems |

## Common tasks

- Change FAQ, joining, or contact text: [edit an existing page](pages.md#edit-an-existing-page).
- Add a new website page: [use the page template](pages.md#add-a-page).
- Add a link without editing code: [automatic navigation links](navigation.md#automatic-links-for-new-pages).
- Update ages or meeting times: [program field reference](programs.md#field-reference).
- Announce an event: [add a news article](news.md#add-an-article) and [update Google Calendar](calendar-and-contact.md#update-calendar-events).
- Update sponsorship information: [Mr. Dugan’s sponsor-page guide](sponsorship.md).
- Add a competition award: [award instructions](awards.md#add-one-award-step-by-step).
- Finish an award section: [FLL and FTC construction status](awards.md#finish-an-fll-or-ftc-section).
- Update the workshop address: [location instructions](calendar-and-contact.md#change-the-workshop-location).
- Get an edit online: [publishing workflow](publishing.md#publish-an-update).

## Current site decisions

The active programs are **FLL, FTC, and FRC**. FLL replaced FLL Explore; its old URL redirects to FLL. The workshop address is **241 Welsh Pool Rd, Exton, PA 19341**.

Awards display FRC first. FLL and FTC award sections are under construction. Awards are saved locally; no live award API runs in the browser or during builds. The header is sticky and uses one All pages panel with organized columns.

Google handles calendar events and interest-form submissions. Sponsor/donor panels, donor accounts, generic WordPress gallery templates, and the Elementor wiki landing page are excluded. The site has no local login, submission database, or payment processor.

The original DAR website map is a historical inventory, not the final sitemap. Follow these guides for the current implementation.
