# Calendar, forms, and contact information

[Documentation index](editing-guide.md) · [Pages](pages.md) · [Publishing](publishing.md)

## What is managed where

| Item | Editing location | Rebuild needed? |
| --- | --- | --- |
| Calendar events | Google Calendar | No |
| Calendar URL or embed time zone | [calendar.astro](../src/pages/calendar.astro) or build environment | Yes |
| Interest-form questions and responses | Google Forms | No |
| Interest-form link | [contact.ts](../src/data/contact.ts) | Yes |
| Shared email link | [contact.ts](../src/data/contact.ts) | Yes |
| Email links written in Markdown/footer | Their source files | Yes |
| Workshop address and Maps link | [contact-us.md](../src/pages/contact-us.md) | Yes |

## Update calendar events

Use the DAR calendar in Google Calendar to create, edit, or cancel events. Confirm which calendar you are editing, not just your personal calendar. Visitors see the embedded calendar on `/calendar`; source code does not store event copies.

The configured embed uses **America/New_York**. Check the event’s date, start/end time, location, and time zone in Google Calendar. Verify visibility as a visitor who is not signed in to your account.

## Replace the calendar embed

Use the `src` URL from Google Calendar’s embed code. Paste the URL only, not the entire `<iframe>` HTML.

Either replace the default `calendarUrl` URL in `src/pages/calendar.astro`, or set this variable in a local `.env` file or the host’s build environment:

```dotenv
PUBLIC_GOOGLE_CALENDAR_EMBED_URL="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York"
```

Replace `YOUR_CALENDAR_ID` with the actual embed identifier. The environment override takes precedence over the hardcoded default. Public environment variables can be exposed in site output; use only the public embed URL here. `.env*` files are ignored by Git, so a local override is not automatically available to the deployment build.

Restart the development server after changing `.env`. Rebuild/redeploy to update the published embed URL. The iframe already has responsive width, a title, and a link to open the calendar separately.

## Update the interest form

The shared Google Form link is `interestForm` in `src/data/contact.ts`. It is used by [Interest.astro](../src/components/programs/Interest.astro), which appears on Home, Programs, program detail pages, and Markdown pages that enable `showInterest`.

Replace it with the public responder URL, not the form-editing URL. Test that a visitor can open the form and that responses reach the intended form. Questions and responses are managed in Google Forms, not in the website repository.

General inquiries currently use email. There is no separate local contact form backend.

## Change the email address

Update `contact.email` in `src/data/contact.ts`. Then search for literal email links in Markdown and templates, because those are not all derived from the shared setting:

```bash
rg -n 'info@darobotics.org|mailto:' src
```

Update affected links while preserving any URL-encoded subject text. Preview the contact page, footer, volunteer page, and interest panel.

## Change the workshop location

The current workshop is **241 Welsh Pool Rd, Exton, PA 19341**. Edit both the displayed address and the Google Maps URL in `src/pages/contact-us.md`.

The current Maps link is:

```text
https://www.google.com/maps/search/?api=1&query=241+Welsh+Pool+Rd+Exton+PA+19341
```

If the location changes, update the query as well as the paragraph. Search for address copies elsewhere before publishing:

```bash
rg -n 'Welsh Pool|19341|workshop|Exton Square' src
```

Meeting times are separate from the address. Keep the instruction to contact DAR before visiting if visits need confirmation, and update [program schedules](programs.md#update-ages-or-meeting-times) and calendar events as needed.

## Troubleshoot an embed

A permission error generally requires changing the Google resource’s visibility, not site CSS. If the wrong calendar appears, check the environment override before changing the fallback URL. If a form opens in editing mode, replace its URL with the responder link. [Publishing troubleshooting](publishing.md#common-problems) covers stale builds and caches.
