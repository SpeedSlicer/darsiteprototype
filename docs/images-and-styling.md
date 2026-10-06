# Images, layouts, and styling

[Documentation index](editing-guide.md) · [Pages](pages.md) · [Programs](programs.md)

## Add an image

1. Save the image in `public/photos/` or the appropriate existing subfolder.
2. Give it a descriptive lowercase filename, such as `workshop-wiring.jpg`.
3. Link to `/photos/workshop-wiring.jpg` in content. Do not include `public` in the URL.
4. Add descriptive alt text and preview the image at a narrow viewport.

```markdown
![Students wiring the robot’s control panel](/photos/workshop-wiring.jpg)
```

Use a real image you have available. Keep files reasonably sized for a website; do not upload full camera originals when a smaller copy will do. Describe the useful content in alt text rather than just writing “photo.” Decorative images can use empty alt text in an Astro template.

## Existing assets

| Asset | Purpose |
| --- | --- |
| `public/dar-logo.png` | Header logo and favicon |
| `public/dar-robot.jpg` | Home hero image |
| `public/programs/fll.png` | FLL photo |
| `public/programs/FRC.png` | FRC photo; capitalization matters |
| `public/vendor/banners/first.svg` | FIRST logo on award banners |
| `public/vendor/banners/banners.css` | Vendored award-banner library |

Replacing a file at the same path updates every page using it after deploying. When changing filenames, update all references. The program photo paths live in [program Markdown](programs.md#change-a-program-photo).

## Layout and component map

| Source | Responsibility |
| --- | --- |
| [main.astro](../src/layouts/main.astro) | Shared document, metadata, router, header/footer, automatic navigation links |
| [markdown.astro](../src/layouts/markdown.astro) | Markdown page headings, article dates, and optional interest panel |
| [Navbar.astro](../src/components/navigation/Navbar.astro) | Sticky header, single All pages panel, mobile layout and keyboard behavior |
| [ProgramPreview.astro](../src/components/programs/ProgramPreview.astro) | Shared program overview |
| [Interest.astro](../src/components/programs/Interest.astro) | Shared Google Form/email panel |
| [global.css](../src/styles/global.css) | Site typography, colors, layout, responsive rules, transition keyframes |

A page’s local `<style>` block affects that page/component. Global styling can affect the whole site. The stylesheet contains earlier rules followed by overrides; search for all occurrences of a selector before changing it. Later rules and more specific selectors may win.

## Change colors or typography

Search `src/styles/global.css` for `--dar-paper`, `--dar-ink`, `--dar-gold`, and `--primary`. Some variables are redefined later in the file, so check the final definitions as well as the first ones. Update shared variables before adding individual hardcoded colors where possible.

The current font is imported in `src/layouts/main.astro`. A font replacement is a layout/dependency change, not a Markdown edit.

## Page transitions

`src/layouts/main.astro` defines a 380ms directional slide for the main content. `src/styles/global.css` defines the matching `dar-page-*` keyframes. Navigation/footer snapshots have their own transition names and do not slide. Forward and backward navigation use opposite directions.

The current slide uses transforms, not an opacity fade. Avoid adding an opacity-to-zero animation if the intended result is a continuous slide. The main content has the paper background and snapshot blending is disabled. Older browsers use Astro’s live-element fallback; reduced-motion users do not receive the snapshot animation.

When changing animation timing, update both directions together. Check navigation to a shorter and taller page, Back/Forward, anchors, and the sticky header. Build success checks syntax, but does not prove the motion looks correct in a browser.

## Keep header and anchors aligned

The header sits outside `.site-shell` so it can span the viewport and remain sticky for the entire page. Anchor offsets use `scroll-padding-top` in the global stylesheet. If changing the header’s height, check the skip link and in-page section links so headings are not hidden behind it.

## Award-banner styling

The library and FIRST logo are stored locally. The [awards page](../src/pages/awards.astro) overrides banner width, text layout, and responsive grid styling. Preserve the MIT license in `public/vendor/banners/LICENSE` when distributing or changing the vendored library. See [Awards](awards.md) for editing records instead of visuals.
