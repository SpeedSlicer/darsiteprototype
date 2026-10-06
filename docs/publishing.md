# Publishing and troubleshooting

[Documentation index](editing-guide.md) · [Getting started](getting-started.md) · [Navigation](navigation.md)

## Check an update

From the repository root:

```bash
npm run typecheck
npm run build
npm run preview
```

`typecheck` checks Astro/TypeScript diagnostics. `build` generates the static site and catches compilation errors. `preview` serves the built output; it does not rebuild on every edit. Stop the preview and rebuild if you change source afterward.

Use the local URL printed by the preview command. Check the changed page and shared components that also use the edited content.

## Review before publishing

- Read the changed text and verify real-world details, dates, addresses, and program facts.
- Follow changed internal and external links.
- Confirm images load and have appropriate alternative text.
- Check the page at desktop and narrow/mobile widths.
- Test All pages, keyboard access, and active-page indicators if navigation changed.
- Test forward/backward page transitions if templates or styling changed.
- For awards, check section order, construction status, and banner/list placement.

A passing build does not validate external permissions, content accuracy, or visual behavior. Calendar/Form links should be checked as an ordinary visitor.

## Publish an update

1. Complete the checks above.
2. Review the changed source files in Git. Keep unrelated edits out of your update.
3. Commit/push through the project’s usual workflow if using Git-based deployment.
4. Have the deployment environment install dependencies and run `npm run build`.
5. Publish the contents of `dist/` as the static site output.
6. Verify the live page and any changed redirects/embeds.

This repository currently has no provider-specific deployment configuration documented here. Use the actual host’s existing workflow rather than assuming a particular platform. Typical static build settings are repository-root working directory, build command `npm run build`, and output directory `dist`.

Use a compatible Node version: the package requires Node 22.12.0 or newer. Ensure any calendar override is present in the **build** environment. Local `.env` files are ignored by Git.

Do not edit `dist/` to make a permanent change. It is generated and overwritten by the next build. The project also ignores `.astro/` and `node_modules/` in Git.

## Preview is not deployment

`npm run dev` serves source locally. `npm run preview` serves built output locally. Neither command publishes the site. Markdown/data edits become public only after rebuilding and deploying. Google Calendar event changes and Google Form question changes happen in those services and do not require redeployment.

## Common problems

| Symptom | What to check |
| --- | --- |
| A page edit does not appear in preview | Re-run `npm run build`; preview serves `dist`, not live source |
| Published content is stale | Confirm the correct branch/commit deployed and the new `dist` output was published; then check caching |
| Build fails after Markdown edit | Check closing `---`, YAML indentation, and quote text containing a colon |
| Build fails after JSON edit | Check double quotes, missing/trailing commas, and unquoted booleans; run the award JSON check below |
| New page missing from navigation | Set `morePages: true`, or add a configured link; a page route alone does not create a menu entry |
| Duplicate or misplaced link | Check `navigationGroups` and the page’s metadata; primary header links are edited separately |
| News article missing from index | Put it directly in `src/pages/news/`, with a quoted `YYYY-MM-DD` date and required metadata |
| Program edit appears in one place only | Edit its shared Markdown file; search for separate prose copies on Join or FAQ |
| FLL/FTC awards remain hidden | Their `underConstruction` flags intentionally hide records; see the awards guide |
| Broken image on the host | Check filename case and use `/photos/...`, not `/public/photos/...` |
| Wrong calendar | Check `PUBLIC_GOOGLE_CALENDAR_EMBED_URL` before the default URL |
| Calendar permission error | Verify public access in Google Calendar |
| Form opens editor or asks for access | Use the public responder URL and check Google Form access settings |
| Old URL fails | Check the Astro redirect and host-level handling; static redirect HTML is not an HTTP status guarantee |
| Transition flashes or looks wrong | Check transform keyframes, matching animation names, reduced-motion settings, and browser behavior; avoid introducing a fade |

## Validate award JSON

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("src/data/awards.json", "utf8")); console.log("Award JSON is valid")'
```

This checks syntax only. It does not prove field types or awards are correct. For example, `"true"` is valid JSON but is the wrong type for `blueBanner`; use `true` or `false`. Follow [the award field reference](awards.md#field-reference).

## Undo a content mistake

Use your editor’s undo before saving, or review Git history for the previous version of the specific file. Restore the intended file content, then rebuild and republish if the mistake went live. Avoid resetting the entire repository when only one content file needs correcting.

## Useful searches

```bash
rg -n 'mailto:|Welsh Pool|19341' src
rg -n 'old-page' src astro.config.mjs
rg --files src/pages src/content docs
```

Search source files to find the editable location. Searching generated output can help diagnose what shipped, but permanent fixes belong in source.
