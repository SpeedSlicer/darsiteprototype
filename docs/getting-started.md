# Getting started

[Documentation index](editing-guide.md) · [Pages](pages.md) · [Publishing](publishing.md)

## Requirements

The project uses Astro to generate static HTML. Its [package file](../package.json) requires **Node.js 22.12.0 or newer**. You also need npm, a text editor, and a local copy of the repository.

Check your versions from a terminal:

```bash
node --version
npm --version
```

Run commands from the repository root: the folder containing `package.json`, not `docs/` or `src/`.

## First local setup

```bash
npm ci
npm run dev
```

`npm ci` installs the versions in `package-lock.json`. The development command prints a local URL; open that URL in your browser. Leave the terminal running while editing. Press Ctrl+C to stop the server.

You do not need to install dependencies again for every content edit. If the lockfile changes, run `npm ci` again. It replaces the installed dependency folder.

## Everyday workflow

1. Find the relevant file in the [page inventory](pages.md#page-inventory) or topic guide.
2. Make the content change and save the file.
3. Check the local page in the browser. The development server usually updates it automatically.
4. Follow links you changed and check the narrow/mobile layout.
5. Run [the publishing checks](publishing.md#check-an-update) before delivering the change.
6. Save the change in Git and use your project’s hosting workflow to publish it.

If using GitHub’s web editor, edit the source file and preview the Markdown there. GitHub’s preview checks formatting; it does not show the site’s exact layout. A local or hosted preview is still needed to review the website.

## Know what kind of file you are editing

| File type | Editing approach |
| --- | --- |
| `.md` | Plain Markdown body, often preceded by YAML metadata |
| `.json` | Structured records with double quotes and commas; awards live here |
| `.ts` | Shared configuration/data written as TypeScript; navigation and contact settings |
| `.astro` | Page or component templates combining markup and code |
| `.css` | Shared visual styles |

Edit content in Markdown or data files first. Template changes are needed only when changing the structure or behavior of a page.

## What updates immediately

Local source edits appear through the development server. Published source edits require rebuilding and deploying. Google Calendar event changes and Google Form question changes are managed in those services and do not require a site rebuild. Replacing their URLs in this repository does require a rebuild.

Next: [Edit pages](pages.md), [edit programs](programs.md), or [publish an update](publishing.md).
