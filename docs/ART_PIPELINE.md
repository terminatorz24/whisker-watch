# Whisker Watch visual pipeline — self-contained & original
Goal: polished, playful, dimensional 2D cartoon comparable in readability and craft to an established premium tower-defense game, while using original cats, mice/rats, scenes, interfaces and map routes. Bold clean outlines, deliberate flat-to-soft shading, gentle ground shadows, static terrain, moving gameplay actors, no audio.

## Scope and source
Reference archive contains ~87 map stills and ~18 interface stills from 71 PDF pages; 13 unmodified image extracts and an inventory are in references/images. Those are PRIVATE DESIGN REFERENCE materials and never production assets. Codex may ask the user for the complete PDF if a specific missing screenshot matters, but must not block core implementation on its absence. Do not trace or copy any proprietary sprite, character silhouette, detailed map geometry, icon or menu composition.

## Asset strategy
1. Build a small original style guide: exact color palette, line widths, corner rounding, shadow softness, character proportions, outline/face templates, icon grid and scale ladder.
2. Implement production art as game-ready original SVG and layered PNG/WebP where suitable; no licensed stock required. Codex can create these assets programmatically and iterate against game screenshots.
3. Maintain a data/assets manifest: stable ID, path/draw-function, size, pivot/anchor, footprint, animation states and variants. Allow future art replacement without game-engine modifications.
4. For each cat type: distinctive species/colors/equipment/silhouette, base idle/attack state, shop portrait, upgrade indicators and equipment variations for paths/tier advancement. Actual upgraded cats visually change, especially at tiers 3 and 5. Not every one of 15 upgrades needs an entirely separate raster painting if clean composable overlays depict changes consistently.
5. For each enemy type/modifier: visually identifiable base, armor/hidden/regrow/fortified cues, animation frames and variant sizes. Large bosses have distinctive designs, segmented health feedback and attacks.
6. Five original environment maps plus Tutorial: static, detailed background scenery; clear path bounds, blocked zones, readable buildable land, entrances and exit; consistent tile scale. Compose layered scenery with independently rendered paths for placement logic.
7. HUD/shop/question panels: consistent icons/type, visually distinct affordable/unaffordable states, readable upgrade tree, range previews, boss bar and save state; use screen-space responsive layout and accessibility labels.
8. Visual QA: take actual running-game screenshots on Mac-size desktop and simulated phone; when available check real Safari and iPhone; assess readability with 100 cats/500 enemies, range previews, hidden-enemy modifiers, and flashing/effects. Iterate when sprites look like placeholders.

## Connected optional tools
Canva is an available ChatGPT connector, useful for sketching, touching up and exporting original art. Higgsfield also has a connected image-generation workflow, but can have limited free generation quotas. A tool connected in this chat is NOT automatically accessible inside a separate Codex Cloud task. Codex must inspect its actual tools/capabilities and only use an image tool if present, authorized, suitable and within available no-cost limits. It may not purchase credits or require paid plans. The fully autonomous fallback is creating original SVG/canvas assets from code in its own repository.
Canva currently advertises a free plan with limited AI use (check current pricing before using it for large batches); free does not imply unlimited commercial-grade generation. Check licenses for any externally generated or stock assets used in publication. As the user prioritizes no-cost plugin-enabled tools, do not require a web-only service or manual account switching to make the game work.

## Render/performance
Static scenery should not animate or shift. Attack animations can be simple but smooth and legible: aim, swipe/fire, projectile, hit sparkle/burst, disappearance, health-bar updates. Use sprite atlas or cached vector rendering at scale; test mobile FPS. Avoid excessive particle clutter and overstrong shadows.
