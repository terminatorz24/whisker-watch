# Whisker Watch: instructions for Codex

## Task boundaries

This repository is being prepared for Codex to implement the game. Setup work consists of instructions, references, environment checks, and handoff prompts. A setup-only request does not authorize game implementation. The owner starts implementation with `prompts/01_START_PART_A.md`.

## Read before working

1. `docs/SCOPE_CLARIFICATIONS.md` for the owner's latest requirements.
2. `WHISKER_WATCH_MASTER_PROMPT.md` in full for the original detailed specification.
3. `DESIGN_STATE.md` for the current phase, completed work, decisions, and next task.
4. The relevant entry in `prompts/`, plus `docs/DECISION_REGISTER.md` and `docs/ACCEPTANCE_MATRIX.md`.
5. `references/REFERENCE_GUIDE.md`; visually inspect its images before UI/art work.

The owner's current instructions take priority. Scope clarifications take priority over the old release wording. Proposed resolutions in the decision register are not approved decisions. Preserve the original master file as a historical source; record approved changes separately.

## Product essentials

- Build a real, original browser tower-defense game: cats defend a Fish Stash against layered mice and rats. Study answers power the economy.
- Complete delivery includes five main maps plus the Tutorial, Easy/Normal/Hard, all 16 cats and 240 upgrades, 100 waves, five bosses, the full deck workflow, progression, and portable save/resume. The one-map release is an intermediate milestone.
- Any subject and any valid uploaded deck can be used on any main map. No finance-specific game theme.
- Content workflow: source PDF/notes -> external formatter with the provided prompt -> validated JSON/CSV deck -> gameplay. Do not silently add in-game AI, OCR, or arbitrary-PDF parsing.
- A deck describes questions; a JSON save preserves progress and optionally embeds the deck. A PDF is not a resumable save. See the original file-format and size requirements.
- Everything runs on-device. No accounts, backend, server uploads, analytics, cloud saves, paid services, or API keys are required by this scope.
- File-based saves are authoritative. Implement the exact-resume guarantee, including mid-wave and partial study-break state. Browser crash recovery is an explicit opt-in exception, default off.
- Visual quality is a completion criterion. Use consistent original cat/rat silhouettes, scenery, readable HUD, feedback, and coherent vector or sprite assets. Reference screenshots are for inspection, not production assets.

## Execution and verification

- Follow A1-A5, G0-G7, then the four remaining map phases. Preserve the master's phase `next` gates, G0 design approval, and human feel passes unless the owner explicitly changes them. Start the current authorized phase immediately; do not ask a redundant kickoff question.
- Make actual files and runnable code during implementation. Do not substitute a plan, landing page, mockup, fake controls, or fabricated test results for the requested deliverable.
- Keep simulation, rendering, learning, persistence, content, and UI boundaries clear. Use the same deterministic simulation in the game and headless balance tests.
- Use the master's seeded streams and fixed ticks. Keep gameplay tuning out of engine literals. Decide the single ownership of numeric values at G0.
- Treat decks and saves as untrusted input. Render question text as text, validate before loading, and never execute file-provided code.
- Run the checks relevant to the changed phase. Distinguish `PASS`, `FAIL`, `NOT IMPLEMENTED`, `BLOCKED`, and `MANUAL CHECK NEEDED`. A tool being installed is not a passing test. Browser emulation is not proof of real iPhone Safari behavior.
- Use available subagents for independent tasks when helpful, with distinct file ownership and integration review. Do not assume delegation exists or change model settings automatically.
- At a checkpoint update `DESIGN_STATE.md`, the acceptance matrix, decisions, exact verification results, and next prompt. Preserve working files and the user's uncommitted changes. Stop at a coherent boundary if context or task limits require a continuation.
- Prepare the static deployment package; publish only when the owner explicitly authorizes deployment. Do not weaken access or approval settings.

## Current commands

Workspace preparation: `bash scripts/codex-setup.sh`.

There is no game package manifest, game runtime, or game test command at this preparation stage. Codex must establish and document the real development, build, test, and simulation commands during implementation. Never report an invented command as executed.
