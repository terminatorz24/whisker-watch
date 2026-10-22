# Acceptance matrix

This is a verification ledger for the future implementation. At workspace preparation, all game features below are **NOT IMPLEMENTED**. Documentation and reference files do not count as feature completion.

Allowed statuses: `NOT IMPLEMENTED`, `IN PROGRESS`, `PASS`, `FAIL`, `BLOCKED`, `MANUAL CHECK NEEDED`. Record the date, command or manual procedure, actual result, and evidence path when changing a status. Preserve the master's Section 19 checklist as well.

| ID | Required outcome | Source | Earliest full verification | Status |
| --- | --- | --- | --- | --- |
| D01 | Accurate deck specification, schema, four correctly labeled templates, configured limits | Sections 3, 7 | A1 | NOT IMPLEMENTED |
| D02 | Validator shared by browser and CLI; malformed input never crashes; valid-count/size/type rules and plain-text safety | Sections 3-4 | A2 | NOT IMPLEMENTED |
| D03 | Import mapping/edit preview, canonical export, Split and supported Convert, clear unsupported-format guidance | Section 5 | A3 | NOT IMPLEMENTED |
| D04 | Both formatter prompts, repair prompt, nontechnical PDF/notes-to-deck guide, in-app template/prompt controls | Section 6; scope clarification | A4 | NOT IMPLEMENTED |
| D05 | Two correct 120+ question demo decks; 3,000 stress deck; required 99/100/199/200/5,000/5,001 and text fixtures | Sections 4, 7 | A5 | NOT IMPLEMENTED |
| G01 | Deterministic fixed-tick simulation, named RNG streams and replay equivalence | Section 8 | G1 and final | NOT IMPLEMENTED |
| G02 | Actual study loop in both formats with source-defined question selection, answers, retries, rewards and mastery | Sections 11-13 | G1 and G5 | NOT IMPLEMENTED |
| G03 | Correct placement, overlap/path/block checks, targeting, purchases, selling, pause and speed controls | Sections 8, 14 | G1 and final | NOT IMPLEMENTED |
| G04 | All 16 cats, all 240 functional upgrades, crosspath restrictions, locks and abilities | Section 10 | G2 | NOT IMPLEMENTED |
| G05 | Full layered enemies/modifiers, 100 authored/static waves and five working boss encounters | Section 9 | G3 | NOT IMPLEMENTED |
| G06 | Tutorial isolated from real progress; first map complete; dummy map loads through data only | Sections 2, 16 | G4 | NOT IMPLEMENTED |
| G07 | Five distinct main maps with original paths/scenery/placement; any deck and difficulty on each | Scope clarification; Phase M | M5 and final | NOT IMPLEMENTED |
| L01 | Milestones, per-deck mastery, per-map best waves, correct Path Key accounting and permanent unlocks | Section 12 | G5 | NOT IMPLEMENTED |
| L02 | Four approved perks/caps, Study Focus, weak-question review, debrief, problem reporting and report export | Sections 11-12 | G5 | NOT IMPLEMENTED |
| L03 | Easy/Normal/Hard and independent Casual; snapshots cannot duplicate rewards or wipe learning incorrectly | Sections 11, 15 | G5 | NOT IMPLEMENTED |
| S01 | Download/upload save plus optional embedded deck; clear mismatch/revision reports and restored summary | Section 15 | G1 and final | NOT IMPLEMENTED |
| S02 | Exact continuation after mid-wave and partial-study save/reload, including all transient state | Sections 8, 15, 17 | G1 and final | NOT IMPLEMENTED |
| S03 | Default file-only progress; optional recovery off by default; safe validation, migration and corruption handling | Section 15 | G1 and final | NOT IMPLEMENTED |
| V01 | Cohesive original graphics, distinguishable units/modifiers, complete menus, genuine working controls | Sections 14, 16; owner clarification | G1, G6, final | NOT IMPLEMENTED |
| V02 | Responsive desktop/touch UI, safe areas, readable study overlay, placement and accessible control alternatives | Section 16 | G6 | NOT IMPLEMENTED |
| T01 | Actual-engine simulator across required accuracy/deck-size/type/strategy cases; balance flags addressed | Section 17 | G3 and final | NOT IMPLEMENTED |
| T02 | Performance measurements for 500 enemies/100 cats with actual runtime/device conditions reported | Sections 8, 19 | G6 | NOT IMPLEMENTED |
| T03 | Real Safari/Chrome and iPhone Files save/load checks; emulation separately identified | Sections 16-17 | G6; owner device check | NOT IMPLEMENTED |
| P01 | Bundled static dist, relative paths, offline/file-open behavior and deployment/iPhone instructions | Section 17 | G7 | NOT IMPLEMENTED |
| R01 | G0 approval, required feel passes and per-map approval recorded; complete five-map review | Sections 0, 17-18; scope clarification | Final | NOT IMPLEMENTED |

## Evidence rules

- An implemented menu without its underlying behavior is not a pass.
- JSON containing 240 upgrades is not proof that all effects work.
- Save serialization alone is not proof that a reloaded run continues identically.
- A reference screenshot is not evidence of the game's finished graphics.
- A package/build existing is not proof of successful double-click/offline behavior.
- A simulator flag remains open until resolved or explicitly accepted as a limitation.
- Actual iPhone checks remain manual/unverified until performed on that device.
- PDF study-report export is optional/open under the latest clarification; do not add it as a mandatory release item without the owner's decision.

## Phase closeout template

Phase; changed files; decision IDs resolved; commands actually executed; observed outcomes; evidence paths; checklist statuses; remaining defects; human feedback needed; next exact task.
