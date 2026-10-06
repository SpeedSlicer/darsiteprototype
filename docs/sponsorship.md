# Editing sponsorship information

[Documentation index](editing-guide.md) · [Pages and Markdown](pages.md) · [Publishing](publishing.md)

This guide is for Mr. Dugan or anyone updating DAR’s sponsorship information. The public sponsorship page is `/sponsor`. Its text is in [src/pages/sponsor.md](../src/pages/sponsor.md); no template editing is needed.

## Update the sponsor page

1. Open `src/pages/sponsor.md` in your editor or GitHub’s file editor.
2. Keep the opening metadata block between the two `---` lines. Edit the text below it.
3. Update the ways to sponsor, current needs, sponsorship options, or email instructions with confirmed DAR information.
4. Save the file and preview `/sponsor`. Follow the [publishing guide](publishing.md) to get the change online.

The page has editable sections for student robotics, ways to sponsor, sponsorship options, and contact information. Hidden HTML comments mark the places intended for future details; they are not shown as visible page text. Anything written in source, including comments, should still be suitable for the public repository and generated HTML.

## Add confirmed sponsorship levels

Under `## Sponsorship options`, replace the introductory paragraph with your confirmed information. Markdown tables work well when comparing levels:

```markdown
| Sponsorship level | Contribution | Recognition |
| --- | --- | --- |
| Confirmed level name | Confirmed amount or arrangement | Confirmed benefit |
```

Replace the example values before publishing. You can instead use one `###` heading per level followed by a short paragraph and list. Keep benefits, amounts, eligibility, and any deadline explicit. The current page intentionally has no invented tiers, payment link, or sponsor-logo panel.

## Update email links

The sponsor and volunteer links currently use `info@darobotics.org` with different prefilled subjects. If DAR provides a dedicated address, change the links in both [sponsor.md](../src/pages/sponsor.md) and [support.md](../src/pages/support.md). The shared contact setting does not automatically rewrite Markdown email links.

```markdown
[Email DAR about sponsorship](mailto:info@darobotics.org?subject=Sponsoring%20DAR)
[Email DAR about volunteering](mailto:info@darobotics.org?subject=Volunteering%20with%20DAR)
```

Use `%20` for spaces in the email subject. Opening a mail link starts the visitor’s email application; it does not send a message automatically.

## Where visitors find this information

The Support DAR page at `/support` links to sponsorship information and directly to volunteer email. Sponsor DAR also appears in the Get involved column of All pages and in the footer. Navigation labels are edited in [navigation.ts](../src/data/navigation.ts).

## Routes and older links

Use `/sponsor` for sponsorship information and `/support` for the overview of sponsorship and volunteering. The old `/sponsors` and `/you-can-help` routes redirect to these pages. New content should link directly to the current routes. Redirect mappings are in `astro.config.mjs`.

## Review before publishing

- Preview the sponsor page and Support DAR page at desktop and mobile widths.
- Check email addresses and prefilled subjects.
- Confirm any newly added amounts, benefits, dates, or contribution instructions with DAR.
- Run `npm run typecheck` and `npm run build`.
- Publish through the existing hosting workflow; saving Markdown alone does not update the live site.

See [Markdown examples](pages.md#markdown-examples) for formatting and [publishing](publishing.md#publish-an-update) for deployment steps.
