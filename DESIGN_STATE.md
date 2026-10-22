# Whisker Watch - design and execution state

Last updated: October 22, 2026.

## Current state

- Stage: WORKSPACE PREPARATION.
- Game implementation: NOT STARTED.
- Current implementation phase: none; next is A1.
- Canonical specification baseline: `0e10b8806c9d967db4c116a8d82da6620dc4e808`, `WHISKER_WATCH_MASTER_PROMPT.md`.
- Scope update: `docs/SCOPE_CLARIFICATIONS.md`.
- Setup branch: `codex/workspace-setup-2026-10-22`.
- Codex Cloud environment: not confirmed created or published by this file.

## Prepared handoff material

- Repository instructions and source-reading order in `AGENTS.md`.
- Workspace guide and a setup-only capability check script.
- Starting, continuing, fixing, and reviewing prompts.
- Clarified five-map completion target and PDF/notes-to-deck workflow.
- Proposed decision register, with no implementation decisions falsely marked approved.
- Acceptance matrix; all game requirements remain NOT IMPLEMENTED.
- Selected original visual references and their extraction metadata.

## Build sequence and gates

| Stage | Work | Status / gate |
| --- | --- | --- |
| A1 | Deck spec, schema, templates, documentation, configured limits | NOT STARTED; initial launch prompt authorizes this phase |
| A2 | Shared validator, CLI, report component, fixtures | Await A1 completion and owner `next` |
| A3 | Import, mapping, edit preview, Split and Convert | Await prior phase and owner `next` |
| A4 | Formatter/repair prompts, guides, deck picker wiring | Await prior phase and owner `next` |
| A5 | Correct demo decks and stress/boundary fixtures | Await prior phase and owner `next` |
| G0 | Architecture and complete design review | Await Part B launch; owner approves design before G1 |
| G1 | Playable 20-wave slice and complete study/save loop | Owner feel pass required |
| G2 | All cats, paths, upgrades, abilities, shop | Original phase gate |
| G3 | Full enemies, bosses, 100 waves and balance | Owner feel pass required |
| G4 | Tutorial and first-map finishing | Original phase gate |
| G5 | Progression, perks, reports, settings and Casual | Original phase gate |
| G6 | Integration, mobile, final tests and simulation | Original phase gate |
| G7 | Static package and deployment instructions | Owner feel pass; deployment separately authorized |
| M2-M5 | Remaining four maps, one at a time | Each map gets its approval and verification gate |
| Final review | Entire five-map target and source checklist | Not complete until all required content is implemented and evidence reviewed |

## Approved decisions

The latest owner clarifications in `docs/SCOPE_CLARIFICATIONS.md` are the known scope. No other proposals in `docs/DECISION_REGISTER.md` have been approved. Record future approvals with the decision, date, affected source rule, and the owner's actual instruction.

## Verification log

Game tests: NOT RUN. There is no game implementation at this stage.

Workspace preparation checks must be recorded separately from game tests. Do not infer a working game from the presence of a setup script, documentation, or reference screenshots.

Preparation verification completed: original source text preserved; 13 reference image hashes match; local Markdown links resolve; shell syntax and setup-only command pass in the preparation runtime. Details and unverified account-side steps: `docs/PREPARATION_REPORT.md`.

## Next exact task

After environment preparation, the owner gives Codex `prompts/01_START_PART_A.md`. Codex reads the sources, verifies the workspace, and implements A1. It then reports actual files/checks and waits for `next`, as the master requires.

## Continuation protocol

At each implementation checkpoint update: current phase; files changed; commands actually run and outcomes; resolved decisions; remaining defects and manual checks; gate awaiting owner response; next file/task. Do not erase this source/history context when updating progress.
