# Whisker Watch visual reference guide

Reviewed: October 22, 2026. This guide describes the supplied BTD6 reference archive, not a fresh audit of the current BTD6 release.

## What is available

The source is `BTD6_Complete_Offline_Visual_Reference.pdf`: 71 PDF pages containing 105 embedded image instances. The archive divides these into 87 map screenshots and 18 menu/gameplay screenshots. The cover credits the atwiki.jp BTD6 map catalog for maps and Interface In Game for interface images. The existing `BTD6_Offline_Reference_Package.zip` contains this PDF and a README; it does not contain a separate directory of original image files.

Page numbers below are the PDF viewer's 1-based page numbers. Some captions fall at the end of one page while their screenshots appear on the next. The locations in this guide identify where the IMAGE actually appears.

The `images/` subset accompanying this guide contains 13 original images extracted from 12 representative pages, without drawing, cropping, or recoloring them. Map images in the subset are 800 x 534 pixels; interface images are 1920 x 1080 pixels. Use these original extractions when the PDF's scaled presentation makes small text hard to read. `extraction-manifest.json` records their source pages, image indices, dimensions, sizes, and SHA-256 hashes.

## Read these pages first

| PDF page and location | Actual screenshot | Useful reference for Whisker Watch | Extracted filename |
| --- | --- | --- | --- |
| 3, lower image | Monkey Meadow | Readable cobblestone route, grass build areas, entrance/exit arrows, and simple scenery hierarchy for Sunny Backyard. Design a new route. | `p03-monkey-meadow-map.png` |
| 13, lower image | Winter Park | Snow palette, path contrast, a central landmark, and clearly separated decorations for Frosty Rooftops. Rooftops/chimney remain original Whisker Watch elements. | `p13-winter-park-map.png` |
| 19, lower image | Logs | Repeated land plots, winding lanes, water, and large obstacles as layout vocabulary for Farmhouse Barn. Use new geometry and original barn props. | `p19-logs-map.png` |
| 32, lower image | Moon Landing | Terrain boundaries and crater-shaped negative space for Cheese Moon. Translate the idea into original cheese terrain and different paths. | `p32-moon-landing-map.png` |
| 38, single image | Spice Islands | Clear water/land distinction and isolated buildable areas. Useful to think through Fish Market Docks; this screenshot does not show the specified docks, bridges, crates, or boats. | `p38-spice-islands-map.png` |
| 63, upper image | Advanced maps selection | Map-thumbnail cards, category tabs, lock/readiness states, and compact navigation. Whisker Watch must show its five real maps and tutorial, with its own progress rules. | `p63-map-selection.jpeg` |
| 64, lower image | Military monkeys index | Distinct tower portraits, readable names, category navigation, and visual consistency for the Cat Index. | `p64-tower-category-index.jpeg` |
| 65, lower image | Co-op quadrants gameplay | The clearest unobstructed HUD reference: lives/cash at upper left, round/settings at upper right, two-column tower shop outside the map, prices, Upgrades button, and bottom action controls. | `p65-gameplay-sidebar.jpeg` |
| 67, upper image | Co-op information dialog over gameplay | How a centered modal sits over the game while the HUD/sidebar remain visible. Relevant to instructional overlays, not to implementing co-op. | `p67-gameplay-modal.jpeg` |
| 68, upper image | Easy / Medium / Hard selection | Large difficulty choices with recognizable icons and short labels. Whisker Watch labels and values are Easy / Normal / Hard from its specification. | `p68-difficulty-selection.jpeg` |
| 69, upper and lower images | Expert map selection; Hard mode selection | Progress/lock presentation and the distinction between a map selection screen and a game-mode screen. Extra BTD6 modes are outside Whisker Watch's stated scope. | `p69-expert-map-selection.jpeg`; `p69-mode-selection.jpeg` |
| 71, lower image | Magic monkeys index | A second tower-category example showing how distinct character silhouettes can share one card style. | `p71-magic-tower-index.jpeg` |

## Coverage and limitations

- Maps occupy pages 2-62; the interface section is pages 63-71. The archive is useful for layout and art direction. It is not a complete interface specification or proof of how every feature behaves.
- Selected map images are readable at their native size, but normally show the playfield with only the top status HUD; they omit the right tower shop. Use page 65 for the complete gameplay/sidebar relationship.
- The 18 interface stills include map categories, tower-category indexes, knowledge screens, Insta Monkeys, co-op setup/lobby, difficulty selection, mode selection, and a store panel. They are not 18 distinct gameplay mechanics.
- There is NO demonstrated three-path tower upgrade panel in this archive. The Military Knowledge graph on page 63 is a different meta-progression system. Do not present it as a tower upgrade tree or add a global skill tree because it appears in a reference.
- There is NO demonstrated placement ghost with a range radius. The green/red quadrants on page 65 indicate co-op build regions, not a proof of the footprint-validation behavior Whisker Watch needs.
- These stills do not establish enemy layering, targeting, hit effects, animation timing, boss phases, or balance. Implement those from the written specification and test them in the running game.
- There is no reference for Whisker Watch's deck formatting, question interface, mastery reporting, or emulator-style save upload/download flow. Those screens need original designs based on the requirements.
- Some map HUD labels are Japanese. The final game's labels should follow its own language and naming conventions.
- The reference cover's map count is a statement about this archive. It is not a verified count of every map in the current commercial game.

## How to use the references during implementation

1. Read `WHISKER_WATCH_MASTER_PROMPT.md` and the newer handoff requirements before designing. Requirements determine features; screenshots explain useful visual relationships.
2. Visually inspect the selected images, especially the gameplay HUD, map cards, difficulty choices, and tower indexes. Do not claim visual inspection based only on PDF text extraction.
3. Build original cat, mouse, rat, boss, scenery, icon, and UI assets. These screenshots are study references and must never be shipped in the game's production asset manifest or bundled into `dist/`.
4. Preserve the requested bright, readable cartoon style: coherent flat colors, thick outlines, no drop shadows, static decorative scenery, and restrained gameplay animation. BTD6's gradients, blurred backgrounds, and shading do not override Whisker Watch's explicit style rules.
5. Make cat classes recognizable by silhouette, accessories, and attack behavior. Make enemy layers/modifiers readable with shape and pattern cues as well as color. Avoid relying on differently colored generic circles as final character art.
6. Give each of the five maps its own original scenery, route, obstacles, and placement choices. A map thumbnail must match the playable map; maps should not be the same path with a recolored background.
7. Check the finished app at actual desktop and phone sizes. Review placement previews, range circles, selection, upgrade states, prices, study overlays, and menus in screenshots from the running game. Follow the written requirements for accessibility and touch controls.
8. Treat good graphics as an acceptance requirement throughout development. Code-drawn vector art is acceptable if it is deliberate and consistent; unfinished placeholder art is not a finished release.

## Packaging note

Keep this guide and the extracted references under a documentation/reference directory, separate from production artwork. The source PDF may be supplied as an attached handoff document instead of being duplicated into a large Git commit. The small extracted subset is sufficient for the initial visual review; the full PDF provides broader map references when needed.
