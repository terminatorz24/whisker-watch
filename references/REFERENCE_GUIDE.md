# Visual reference inventory and usage
Updated October 22, 2026. The original archive is BTD6_Complete_Offline_Visual_Reference.pdf: 71 PDF pages showing approximately 87 map image instances and 18 interface image instances. It was a collection of past screenshots, not a live audit of the current BTD6 release. Thirteen ORIGINAL extracted images are checked into references/images, with page/size/hash in extraction-manifest.json. The full PDF is not checked into this branch.

| Extracted filename | PDF page | Use for original Whisker Watch design |
| --- | ---: | --- |
| p03-monkey-meadow-map.png | 3 | Clear main path against grass; original Sunny Backyard should have a DIFFERENT layout |
| p13-winter-park-map.png | 13 | Snow/terrain contrast for Frosty Rooftops |
| p19-logs-map.png | 19 | Readable lanes and obstacles for Farmhouse Barn |
| p32-moon-landing-map.png | 32 | Crater visual vocabulary for Cheese Moon |
| p38-spice-islands-map.png | 38 | Water and buildable-land distinction for Fish Market Docks |
| p63-map-selection.jpeg | 63 | Map categories, compact cards, map labels |
| p64-tower-category-index.jpeg | 64 | Cohesive unit shop portraits |
| p65-gameplay-sidebar.jpeg | 65 | HUD with money/lives, tower shop and playfield separation |
| p67-gameplay-modal.jpeg | 67 | Centered overlay and visible backdrop |
| p68-difficulty-selection.jpeg | 68 | Clear clickable Easy/Normal/Hard choices |
| p69-expert-map-selection.jpeg | 69 | Selection screen hierarchy |
| p69-mode-selection.jpeg | 69 | Mode selection separate from map selection |
| p71-magic-tower-index.jpeg | 71 | Silhouette variety among consistent shop cards |

These screenshots do not fully document in-world attack effects, tower crosspath menus, valid-placement ghosts, all map structures, or our question/save screens. Do not invent claims about having observed them.
Whisker Watch visual direction: high-quality original bright 2D cartoon with visible outlines, controlled shading/soft shadows, original character silhouettes, static map scenery and moving characters/projectiles. Make the two-column shop and tower-detail panel easy to read, but do not replicate original UI pixel-for-pixel. More depth than a flat vector prototype is encouraged.
NEVER include any of these screenshots in shipped production assets. Use separate original SVG/PNG art. Use docs/ART_PIPELINE.md for the production workflow, animations, safe area/touch UI, and validation.
