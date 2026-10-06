# Downingtown Area Robotics static site


## Scope

- Keep program details, organization history, joining, volunteering, FAQs, awards, and news as static content.
- Omit sponsor/donor panels and the donor dashboard.
- Use the existing Google Form for student interest submissions.
- Use Google Calendar for events and event administration.
- Leave generic WordPress gallery, carousel, and blog templates out of the new site. Useful content can become static pages; the team wiki can remain external.

## Calendar setup

The Calendar page uses the supplied DAR Google Calendar in the America/New_York time zone. To override it, set `PUBLIC_GOOGLE_CALENDAR_EMBED_URL` in `.env`, then rebuild. Use the iframe `src` from the calendar's **Integrate calendar** settings. The calendar must be publicly viewable.

Changes to events happen in Google Calendar and appear without rebuilding the site.

## Development

Run `npm run dev` locally. Validate with `npm run typecheck` and `npm run build`.

## Editing

Start with the [documentation index](docs/editing-guide.md). Detailed guides cover [pages](docs/pages.md), [programs](docs/programs.md), [news](docs/news.md), [awards](docs/awards.md), [sponsorship](docs/sponsorship.md), [navigation](docs/navigation.md), [calendar and contact](docs/calendar-and-contact.md), [images and styling](docs/images-and-styling.md), and [publishing](docs/publishing.md).

New contributors can follow [getting started](docs/getting-started.md).
