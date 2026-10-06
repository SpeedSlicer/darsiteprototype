# Open the DAR map in Obsidian

## Standalone vault

In Obsidian, choose **Open folder as vault** and select this `docs/site-map` folder. Open **DAR Site Map.md** for the linked index or **DAR Site Map.canvas** for the visual map. Graph view shows connections among the notes.

## Add to an existing vault

Copy the entire contents of this folder into your vault’s root, preserving `pages/`, `navigation/`, and `services/`. Canvas file paths are relative to the vault root. If you instead place the map inside a subfolder, prefix each Canvas file node’s `file` path with that subfolder path. Wiki links use unique DAR-prefixed note names.

The notes and Canvas need no community plugin or account connection. Note links are Obsidian wiki links, so a generic Markdown viewer may not render them as clickable links.

The map is a snapshot of local source on 2026-10-05. It does not edit website content or automatically update when routes change. Source file paths are reference text because an isolated vault does not contain the website source.

## Reading the Canvas

Home sits above the three All pages navigation groups. Legacy redirects and shared navigation are on the right. External services are below. Each page card opens a note with its URL, source path, role, content links, and incoming links. Blue edges show navigation organization; green edges show selected content/service relationships. The full link topology is available in Graph view and the page notes.

The Canvas uses the [JSON Canvas 1.0 format](https://jsoncanvas.org/spec/1.0/).
