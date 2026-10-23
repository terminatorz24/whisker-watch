# Implementation sequence and dependencies
One lead coding agent. Task progress is persisted in DESIGN_STATE.md. Owner access approval precedes M1. Access preparation and fixture checks are not game implementation.

| Milestone | Work and required proof |
| --- | --- |
| M0 Access | Read-only audit; supported GitHub persistence route; actual tools/asset access; report and wait for APPROVE BUILD. Remote write-test permission is separate. |
| M1 Foundation | TypeScript/build renderer decision, pinned dependencies/lockfile, schema validation, deterministic state/events/RNG, save envelope AND nested state schemas, replay harness, test runner. Design complete tower/upgrade/enemy/wave tables before content expansion. |
| M2 Vertical slice | Sunny Backyard, four initial cats (Dart/Sniper/Bomb/Ice) with tested upgrades, first 10-20 waves and an encounter, actual question->cash->shop->combat->results loop, revised-deck workflow, early mid-wave and partial-study saves. Produce style board and actual game screenshots; owner approves visual direction before bulk art. |
| M3 Combat/balance | Baseline 16 cats/240 upgrades, enemies/modifiers/bosses, Quick/Full tables, difficulties, live shopping, capped economy, real-engine seeded scenario harness. Every mechanic extends replay tests. |
| M4 Complete presentation | All five distinct maps + tutorial, original sprites and upgrade variations, menus, reports, responsive desktop/touch layouts. Keep accepted art direction; no audio. |
| M5 Release candidate | Full regression suite, all-map/mode smoke tests, representative complete campaigns, performance measurements, static build, offline-current-session check, actual browser/file-upload/download tests. Owner playtest and separate APPROVE PUBLISH before external deployment. |

Preferred stack: TypeScript + Vite, Canvas rendering or a small justified framework, Vitest for logic, Playwright for browser E2E. Pin compatible current versions during M1 after checking the actual environment. The simulation stays plain data/pure logic and shares code with headless balance runs. Do not add React, backend, paid services or multiple agents merely out of habit.

Complete data design before mass coding: docs/COMBAT_DESIGN_BRIEF.md is the contract for the catalog. Codex authors names/numbers/content in M1 as configurable draft tables, tests for missing/duplicate entries and unsupported effects, then exercises the first four cats in M2. A list of names is not completed combat.

Meaningful checkpoints: report executable commands, observed results, screenshots, changed files, remaining defects, next task. Stop only for initial access approval, the bounded first-art/feel review, material changes/new permissions/payments, or publication. Ordinary fixes and test iterations do not require another 'next'. If task limits interrupt, leave an exact continuation without promising unlimited autonomous completion.
