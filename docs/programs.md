# Programs

[Documentation index](editing-guide.md) · [Pages](pages.md) · [Images](images-and-styling.md)

The active programs are **FLL, FTC, and FRC**. FLL replaced FLL Explore. Do not recreate a separate Explore program or link.

## Edit one source, update multiple pages

| Program | Content file | Detail URL |
| --- | --- | --- |
| FLL | [fll.md](../src/content/programs/fll.md) | `/fll` |
| FTC | [ftc.md](../src/content/programs/ftc.md) | `/ftc` |
| FRC | [frc.md](../src/content/programs/frc.md) | `/frc` |

The same files supply the program panels on Home and `/programs` and the separate detail pages. Edit the Markdown body to update the description everywhere. Avoid maintaining separate copies of these descriptions in page templates.

## Field reference

| Field | Purpose and example |
| --- | --- |
| `order` | Numeric panel order; lower numbers come first; gaps are fine |
| `id` | Route and tab identifier; keep `fll`, `ftc`, or `frc` unchanged |
| `tab` | Short tab label, such as `FTC` |
| `title` | Full program heading |
| `tagline` | Short description used in overview and detail headings |
| `grades` | Grade eligibility text confirmed by DAR |
| `ages` | Age text confirmed by DAR |
| `schedule` | Meeting information or contact instruction |
| `firstUrl` | Official FIRST program resource URL |
| `photo` | Image URL such as `/programs/FRC.png`; `""` means no image |
| `photoAlt` | Description of an informative photo |

These program files do **not** use the ordinary page `layout` metadata. They are imported by components and the route template.

## Update ages or meeting times

1. Confirm the current information with the relevant DAR team lead.
2. Edit `grades`, `ages`, or `schedule` in the program file. Quote text when it contains a colon.
3. Preview both `/programs` and that program’s detail page.
4. If another page has separate prose mentioning the same information, update it too. The overview/detail facts are shared; FAQ and joining prose are not automatically derived from them.

Grade and age labels should agree with each other or explain DAR’s placement policy. Generic FIRST eligibility and actual DAR team placement may differ. The site currently directs families to DAR for fees, availability, and placement.

## Change a program photo

Place the image in `public/programs/`, then update `photo` and `photoAlt`. Filenames are case-sensitive: `/programs/FRC.png` and `/programs/frc.png` are different on many hosts. Blank photos show a placeholder in the overview and no image in the detail page.

## Templates and tab behavior

[ProgramPreview.astro](../src/components/programs/ProgramPreview.astro) renders the overview and facts. [program-preview.ts](../src/components/programs/program-preview.ts) handles tab selection, arrow-key navigation, and URL hashes. The [detail template](../src/pages/%5Bprogram%5D.astro) renders a page for each `id`.

The Markdown description appears in both overview and detail pages. Keep it concise enough for the overview; adding a long team history here also lengthens that panel.

If adding an entirely new program later, give it a unique `id` and `order`, supply all existing metadata fields, and add its link to [navigation](navigation.md). This is a separate structural change from editing the three current programs.

Next: [Images](images-and-styling.md) or [publishing](publishing.md).
