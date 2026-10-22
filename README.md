# Whisker Watch

A subject-independent study game with original cat towers, layered mice and rats, five main maps, and portable save files.

## Project status

**Codex workspace preparation. Game implementation has not started.**

The repository contains the original detailed specification, clarified final scope, startup and continuation prompts, an implementation tracker, a decision register, and original screenshots extracted from the supplied visual-reference PDF. These are the handoff materials for Codex.

## Start here

1. Open this repository in Codex on branch `codex/workspace-setup-2026-10-22`.
2. Follow [the workspace setup guide](docs/CODEX_WORKSPACE_SETUP.md) and run `bash scripts/codex-setup.sh`.
3. For an environment-only check, use [the workspace prompt](prompts/00_WORKSPACE_CHECK.md).
4. When ready to begin implementation, give Codex [the Part A launch prompt](prompts/01_START_PART_A.md).
5. Continue with [the next-phase prompt](prompts/02_CONTINUE.md). The original phase and playtest approval gates remain in effect.

## User workflow the game must support

Study PDF or notes -> use a provided formatter prompt in an external AI -> save a Flashcard or Multiple Choice deck -> upload and validate the deck -> choose a map and difficulty -> study, build, and defend -> download a JSON save -> upload that save later and resume.

The game must let a learner use their own question set. The formatted question deck and the resumable save are different file types with different purposes. In-game arbitrary-PDF reading is not part of the agreed first implementation.

## Source of truth

| File | Purpose |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Instructions Codex reads when it starts in this repository |
| [Original master specification](WHISKER_WATCH_MASTER_PROMPT.md) | Detailed deck, study, combat, progression, save, and phase requirements |
| [Scope clarifications](docs/SCOPE_CLARIFICATIONS.md) | Latest owner requirements, including five-map completion and the PDF-to-deck workflow |
| [Design state](DESIGN_STATE.md) | Current phase, decisions, progress, and exact next task |
| [Decision register](docs/DECISION_REGISTER.md) | Proposed resolutions of specification conflicts, awaiting the relevant approval gate |
| [Acceptance matrix](docs/ACCEPTANCE_MATRIX.md) | Completion criteria and honest verification status |
| [Visual reference guide](references/REFERENCE_GUIDE.md) | Image locations, intended use, and coverage limitations |
| [Prompt index](prompts/README.md) | Setup, launch, continue, playtest fixes, and release review prompts |

The original master was inspected on October 22, 2026 at commit `0e10b8806c9d967db4c116a8d82da6620dc4e808`. The separately supplied original prompt matched its text. Later changes must be recorded in the project documents.

## Graphics and reference assets

The supplied BTD6 archive is a design reference. The selected images in `references/images/` are unmodified extractions, with source-page and checksum metadata. They must not be bundled in the game's production output. The game needs complete original artwork and its own map geometry.

## Deployment

The target is a static, browser-based game with on-device deck processing and downloadable saves. Preparing this repository or a Codex environment does not publish a game. Actual deployment is a separate owner-authorized step after the implementation and review gates.
