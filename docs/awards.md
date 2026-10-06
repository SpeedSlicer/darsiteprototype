# Awards

[Documentation index](editing-guide.md) · [Publishing](publishing.md) · [Images and styling](images-and-styling.md)

## Where the content lives

| File | Purpose |
| --- | --- |
| `src/data/awards.json` | Saved award records, source links, and retrieval date |
| `src/content/awards/intro.md` | Introductory paragraph on the awards page |
| `src/pages/awards.astro` | Section order, construction status, and banner layout |
| `public/vendor/banners/` | Local banner CSS, FIRST logo, and MIT license |

Edit [award records](../src/data/awards.json), the [introductory text](../src/content/awards/intro.md), or the [page template](../src/pages/awards.astro).

The page displays **FRC first**, followed by FLL and FTC. FLL and FTC currently show **Under construction**; their saved records remain in the JSON but are hidden until their section is ready. There are no runtime or build-time API requests. Editing the JSON is sufficient to update a published section after rebuilding and deploying.

## Add one award, step by step

1. Find the award on FIRST’s official team or event page. Confirm the team number, season, exact award name, and event. Save the source URL. For FLL, an official regional FIRST organizer’s published results can also substantiate a record.
2. Open `src/data/awards.json` and find the `awards` array. Copy an existing object and insert the copy inside the array. Keep a comma between objects, with no trailing comma after the last object.
3. Replace every field with the verified information. Use the table below to decide how the award should display.
4. Check that the same program, team, season, award, and event are not already present. Two awards with the same name at different events should be separate records.
5. If you verified new source information, update `retrievedOn` to the date of that verification, using `YYYY-MM-DD`. If extending FRC season coverage, add the season to `yearsImported`, keeping that list sorted oldest first. Do not add FTC seasons to that FRC coverage list.
6. Run the checks below, preview `/awards`, and publish the rebuilt site.

This existing FRC record is a copyable template. Change its values when adding a different award:

```json
{
  "program": "frc",
  "team": "1640",
  "year": 2024,
  "award": "District FIRST Impact Award",
  "event": "FMA District Bensalem Event",
  "blueBanner": true,
  "source": "https://frc-events.firstinspires.org/2024/PABEN",
  "recordSource": "https://frc-events.firstinspires.org/2024/team/1640"
}
```

## Field reference

| Field | How to fill it in |
| --- | --- |
| `program` | Lowercase `frc`, `ftc`, or `fll`; determines the section |
| `team` | Team number as a quoted string, such as `"1640"` |
| `year` | Numeric FIRST season year, such as `2024`; FTC seasons may span two calendar years, so use the season shown by FIRST |
| `award` | Exact verified award name; preserve meaningful distinctions such as district, regional, championship, or division |
| `event` | Event name from the official record; preserve cancellation notes where applicable |
| `blueBanner` | Unquoted `true` for a verified blue-banner award, otherwise unquoted `false` |
| `source` | Official event/result URL; visitors reach it by clicking the event |
| `recordSource` | Official team-season or award-results URL used to verify the record |

Awards are sorted automatically by season, newest first, then event name. You do not need to reorder the full JSON array. Blue-banner records appear in the banner grid. Other records appear in the expandable **More awards** list, with their team number and source link.

## Blue banners versus other awards

Set `blueBanner: true` only when the result qualifies for a blue banner. The current FRC set includes event winners, FIRST Impact/Chairman’s awards, and Engineering Inspiration awards. Technical awards such as Quality or Innovation in Control and finalist results are saved as `false`. Do not mark every award blue just because it is an award. Check the official award designation when uncertain, especially for a different program.

The 2020 Chairman’s Award record names a cancelled event on FIRST’s site. That wording is retained rather than silently removing the cancellation note.

## Finish an FLL or FTC section

1. Confirm which DAR team numbers and seasons should be represented.
2. Add verified records with `program: "fll"` or `program: "ftc"`.
3. Open `src/pages/awards.astro`. In the `programs` list at the top, change only the relevant program’s `underConstruction: true` to `underConstruction: false`.
4. Preview the section, check its source links and display, and rebuild before publishing. Keep the other program under construction if it is not ready.

The saved FTC Team 21727 Judges’ Choice Award is already present as a non-banner record. It will become visible when FTC’s construction flag is disabled. Do not add a duplicate.

## Correct or remove an award

To correct a record, edit its fields directly. Changing `blueBanner` moves it between the banner grid and the other-awards list. To remove an award, delete its entire object and repair the adjacent comma. Keep its source link current when correcting information. Changing a record does not require changing the page template or CSS.

## Validate and preview

From the repository folder:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("src/data/awards.json", "utf8")); console.log("Award JSON is valid")'
npm run typecheck
npm run build
npm run preview
```

Open `/awards` at the local preview URL printed in the terminal. Check the award name, year, team, event, banner/list placement, and destination of its source link. Also check the narrow/mobile layout. If the JSON check fails, look for a missing comma, trailing comma, or unquoted text. A boolean written as `"true"` is valid JSON but the wrong field type; use unquoted `true` or `false` and review the rendered placement.

## Snapshot provenance and limits

The saved FRC snapshot includes 52 records from 2015–2026, including 15 blue-banner awards. FIRST’s public site returned 404 for 2005–2014, so those years are not represented. FTC includes Team 21727’s 2024-season Judges’ Choice Award. FLL and other FTC results still need verified records. The public site did not provide the requested historical records for FTC 7314, 14423, and 14842; this does not mean those teams have no awards.

The initial snapshot came from a one-time retrieval of FIRST’s public award tables. Its authenticated API requires credentials and was not called. The site reads the checked-in JSON only, with no automatic refresh. Banner CSS and the logo are local, with the library’s MIT license preserved.


Next: [Publishing checks](publishing.md#check-an-update) or [documentation index](editing-guide.md).
