# Navigation and redirects

[Documentation index](editing-guide.md) · [Add a page](pages.md#add-a-page) · [Publishing](publishing.md)

## Shared navigation structure

The header stays at the top while scrolling. It contains direct Home, Programs, Calendar, About DAR, and Join DAR links, plus **All pages**. All pages opens one full-width panel with organized columns; there are no separate dropdowns for each group.

[Navigation data](../src/data/navigation.ts) defines the panel columns:

- **Programs:** overview, FLL, FTC, FRC, calendar.
- **Get involved:** joining, volunteering, support, sponsor information, FAQ.
- **About DAR:** organization information, contact/location, news, awards.

The footer uses `footerLinks`, derived from these same groups. New automatic links appear in an additional More pages column and in the footer.

## Change a label, link, or column

In `navigationGroups`, each link is an object:

```typescript
{ href: "/contact-us", label: "Contact & location" },
```

Change `label` to rename the displayed text. Change `href` only when the destination changes. Move the object to another group to move the link between columns. Change a group’s `label` to rename its heading. Keep commas between objects.

To remove a configured link, remove its object from this file. That removes its panel and footer links but does not delete the page.

The direct header links are separate `primaryLinks` in [Navbar.astro](../src/components/navigation/Navbar.astro). Change those only when changing the short header row. Updating the data groups does not change `primaryLinks`.

## Automatic links for new pages

In a Markdown page’s metadata:

```yaml
morePages: true
navLabel: Visit the workshop
navOrder: 100
```

The shared [layout](../src/layouts/main.astro) discovers Markdown pages recursively. Only `morePages: true` adds a link. `navLabel` defaults to the title. Lower `navOrder` numbers appear first; equal values sort alphabetically by label. Automatic links appear after the configured links in the footer.

If a URL is already in `navigationGroups`, its automatic link is suppressed to avoid duplication. Moving a link into a named group is therefore as simple as adding its object to that group.

To hide an automatic link, omit `morePages` or set it to `false`. To hide a configured link, remove its navigation object too. Neither action restricts access to the page’s URL.

## Redirect old URLs

Configured redirects live in [astro.config.mjs](../astro.config.mjs):

| Old URL | Destination |
| --- | --- |
| `/you-can-help` | `/support` |
| `/sponsors` | `/sponsor` |
| `/fll-explore` | `/fll` |
| `/about-us` | `/about` |
| `/event-calendar` | `/calendar` |
| `/event-carousel` | `/calendar` |
| `/blog-standard` | `/news` |

Add a new mapping inside `redirects` when renaming a public route:

```javascript
"/old-page": "/new-page",
```

Use an existing destination. Avoid redirect loops and conflicts with source-page routes. Static Astro builds generate redirect HTML; that is not a guarantee of an HTTP redirect status from your host. Add host-level redirects through your hosting setup when appropriate. This repository does not currently define a hosting provider or host redirect format.

## Interaction checks

Open All pages with a mouse, touch, or Enter/Space on its focused summary. Tab through the links. Escape closes the panel and returns focus to its summary. Clicking a link or outside the header closes it. On short screens, the panel can scroll.

After editing navigation, check Home and an interior page, desktop and narrow/mobile layouts, active-page indicators, and every changed destination. See [publishing checks](publishing.md#check-an-update).
