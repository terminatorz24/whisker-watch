# Whisker Watch — owner-to-Codex handoff
Handoff revision: WW-HANDOFF-3. Start from main in terminatorz24/whisker-watch.
Status: instructions, structural schemas, deterministic test fixtures and preparation utilities only. NO GAME ENGINE, PLAYABLE BUILD OR GAME TEST RESULTS YET.

## Start from your Mac
Select this repository in Codex Cloud, starting from main. In an existing environment, refresh the checkout; cached older files do not become current automatically. Paste prompts/00_PREFLIGHT_AND_APPROVAL.md. Codex checks access/tools/files, reports the result and waits. Only reply APPROVE BUILD after reviewing that report. An optional isolated GitHub write test has its own APPROVE ACCESS TEST permission.
No manual project download is necessary when Codex can read the repository. A blocked/missing connector must be disclosed; another ChatGPT chat's connections are not evidence of access inside Codex.

## Document ownership
| File | Responsibility |
| --- | --- |
| AGENTS.md | Short agent safety, approval, testing and checkpoint rules |
| WHISKER_WATCH_MASTER_PROMPT.md | Approved product requirements |
| docs/DECISIONS.md | Confirmed choices, provisional defaults and change history |
| docs/PREFLIGHT_ACCESS_CHECK.md | Evidence-based access audit and initial approval |
| docs/DECK_FORMAT.md + schema/deck.schema.json | One study JSON contract; structure only, no fact-checking |
| docs/SAVE_CONTRACT.md | Versioned exact-resume contract from the technical foundation |
| docs/ECONOMY_MODEL.md | Reproducible income assumptions and actual evidence |
| docs/ACCEPTANCE_MATRIX.md | Requirements, exact tests and truthful statuses |
| DESIGN_STATE.md | Current implementation state and continuation |
| docs/IMPLEMENTATION_PLAN.md | Milestone dependencies and review gates |
| docs/ART_PIPELINE.md | Whole-game visual direction and approval examples |
| docs/TOOLING_AND_ACCESS.md | Tool options, account checks and free-use limits |
| docs/CODEX_WORKSPACE_SETUP.md | Owner's Cloud setup instructions |
| docs/RUNTIME_DELIVERY.md | Website, local preview and offline behavior |
| references/REFERENCE_GUIDE.md | Local screenshots and uploaded HTML reference inventory |
| fixtures/README.md | Synthetic demo, small-deck, revision and invalid inputs |

## Preparation commands (no external packages)
- node scripts/check-handoff.mjs — validate schemas/fixtures/contracts and reference integrity.
- node scripts/preflight.mjs — inspect this task's repo/tools and show unresolved access. It never grants approval.
- bash scripts/codex-setup.sh — wrapper around the same preparation checks.
- node scripts/generate-fixtures.mjs --verify — check the reproducible fixture manifest/template without writing files.
- node scripts/generate-fixtures.mjs — write all 20 input cases, including full120 and quick30 decks, to .cache/fixtures; --stress also creates5000.
- node scripts/economy-analysis.mjs — deterministic expected-income calculation, NOT a combat simulator.
- node scripts/unpack-references.mjs — expand the exact uploaded HTML into .cache/references for inspection.
Do not run npm ci before a package manifest and lockfile exist. The future game commands will be documented when Codex creates them after approval.

## Assets and scope
The repo keeps 13 local reference screenshots plus the owner's full HTML library as lossless, hash-verified compressed parts. The HTML links to third-party images; it is not an offline collection of 129 verified screenshots. Original production art must be separate. The owner permits a public repository; no personal study files or credentials belong in commits.
Use prompts/02_CONTINUE.md only after an actual build approval has been recorded. Public release remains unauthorized.
