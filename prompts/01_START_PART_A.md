# Whisker Watch - start the Codex implementation

You are the implementation agent for Whisker Watch. Build the complete game described by this repository through its specified phases. Begin with **RUN PART A: implement A1 now**. Create the real requested files and verify them; a plan by itself does not complete this task.

## 1. Load the project and its sources

Repository: https://github.com/terminatorz24/whisker-watch

Initial preparation branch: `codex/workspace-setup-2026-10-22`. If implementation has already started on a later branch, use that branch and its `DESIGN_STATE.md` rather than resetting the project.

Inspect the working tree and read these files before changing anything:

1. `AGENTS.md`.
2. `docs/SCOPE_CLARIFICATIONS.md`.
3. `WHISKER_WATCH_MASTER_PROMPT.md` in full.
4. `DESIGN_STATE.md`.
5. `docs/DECISION_REGISTER.md` and `docs/ACCEPTANCE_MATRIX.md`.
6. `references/REFERENCE_GUIDE.md` and `references/images/extraction-manifest.json`.

Visually inspect the extracted references when starting UI/art work, especially `p65-gameplay-sidebar.jpeg`, `p68-difficulty-selection.jpeg`, the tower indexes, and the five selected map examples. The guide identifies missing reference coverage. Do not claim to have inspected screenshots that are absent. The full archive PDF is supplementary; the checked-in subset lets you begin without another attachment.

The original master is the detailed product specification. The newer scope clarification makes the complete five-map game the overall target. Proposed decisions are not approved requirements. Record real conflicts and present recommended resolutions at the relevant design gate.

## 2. The intended product

Whisker Watch is a fully functional browser tower-defense study game. The learner places and upgrades original cat towers along a path to stop layered mice and rats from reaching the Fish Stash. Combat, upgrade strategy, wave progression, map layouts, targeting, enemy immunities, bosses, and presentation should form a satisfying tower-defense game.

Studying the learner's own questions is central to progression: correct answers supply most of the spending power for cats and upgrades. The game is subject-independent. Any valid deck can be used on any main map. Do not hardcode a finance curriculum or replace uploaded content with a fixed quiz.

The complete target is Tutorial + five main maps, Easy/Normal/Hard with a separate Casual toggle, all 16 cats, three five-tier paths per cat (240 upgrades), 100 waves, five bosses, the full learning/deck system, progression, and exact portable save/resume. The original one-map v1 and early four-cat slice are intermediate milestones, not the final project.

## 3. Make the PDF-to-deck workflow clear

Users start with their own PDF, notes, or question-and-answer material. The game provides two format choices: Flashcards and Multiple Choice. Each has downloadable/copyable JSON and CSV templates and its own copyable AI formatter instructions.

The learner gives the source PDF/notes and those instructions to an external AI to produce a compliant deck, or uses the in-game deterministic importer for supported extracted text, CSV/TSV, Markdown, or JSON. The game validates the formatted deck before play. It does not call an AI service or silently parse arbitrary PDFs, scans, Word files, or images.

Use the exact canonical fields from master Sections 3-6: `deckFormat`, `deckType`, `deckId`, and `questions`, with stable question IDs, question text, answer text, optional topic/explanation/hint/tier, and exactly three `wrong` options for Multiple Choice. Enforce the selected deck type and lock it to the save. Preserve the 100 valid-question minimum, warning below 200, recommendation of 300+, maximum 5,000 valid questions, and 5 MB file limit. Clearly label five-question templates as examples that intentionally do not meet the playable minimum.

Implement shared browser/CLI validation, understandable error/warning reports, preview/mapping/editing, Split, supported conversion, formatter prompts, and repair prompts at their designated phases. Do not silently invent missing answers, fabricate facts to pad a deck, or convert invalid Multiple Choice items into flashcards. Keep user content as plain text.

## 4. Preserve the actual gameplay and learning rules

Implement the exact source-defined loop: Study Break -> Shop/Prep -> Combat -> Results. Preserve one-shot answers, answer explanations, selected deck format, the growing question budget, question selection, spacing, Redemption, Lockdown, Wager, power-up limits, study focus/intensity, mastery and debriefs. No reward-affecting answer timers; the stopwatch is informational.

Question scheduling, reward combinations, final short sets, and learning-cap regressions have documented ambiguities. Resolve them explicitly at the specified gate and test the chosen behavior. Do not silently alter a firm requirement or claim the provisional economy is balanced without simulation.

Use original content and the master's tower roster, enemy chain, modifiers, boss mechanics, crosspath restrictions, Path Keys, and perk system. Meaningful choices and complete mechanics matter: fake buttons, stat-only upgrades with missing effects, or cosmetic map variants do not satisfy the specification.

## 5. Make save files work like emulator saves

Provide New Game, Load Save File, Resume Run, and Download Save. Progress must survive closing the browser and loading the saved JSON later. Keep settings/progression, per-question learning, unlocked paths, keys, perks, current wave, cash, lives, towers, upgrades, targeting, cooldowns, seeded RNG states, active enemies, projectiles/effects, pending events, and partial study state as needed for exact continuation.

Support optional embedded decks and clear deck/save matching. Test both save-with-deck and separate-save-plus-deck flows, updated deck IDs/content handling, malformed files, mid-wave resume, and partial-question-set resume. Compare continued simulation after reload, not only the immediately restored JSON. Do not rely on browser-only storage; preserve the opt-in, default-off crash-recovery exception from the master.

## 6. Graphics, architecture, and delivery quality

Create cohesive original cat, mouse, rat, boss, map, projectile, icon, and UI art. Preserve the bright cartoon direction, clear silhouettes, thick outlines, readable colors and patterns, and the master's no-shadow/no-audio scope. Use code-drawn vectors if they achieve a finished result. Inspect the running game's screenshots on desktop and mobile as development progresses.

Keep the shop outside the playfield, make placement/range previews clear, show real affordability and lock states, and make touch controls usable. Include all menus and reports named by the master. Reference images remain in documentation and must not ship in production assets.

Use the master's modular browser architecture, fixed 60 Hz simulation, seeded named streams, data-driven content and asset manifest. The headless simulator must run the actual combat rules. Package all required runtime data, fonts, dependencies, and assets for the promised offline/static behavior. Do not add a backend, login, paid API, cloud-save service, or unnecessary framework.

## 7. Start now and maintain continuity

Verify setup with `bash scripts/codex-setup.sh`. Then complete A1: the deck-format specification, JSON schema, four templates, required A1 documentation, and configured limits. Establish only the minimum infrastructure this phase needs. Validate the files against the stated requirements.

Keep the original per-phase `next` gates, G0 design approval, and human feel passes. Do not wait for another "RUN PART A" message; this prompt is that instruction. Do not jump to game implementation before its prerequisites and approval gates. At the end of A1, report the completed files and checks, update `DESIGN_STATE.md` and the acceptance matrix, state what is not implemented yet, and give the next-phase instruction.

Use accurate statuses for all checks. Report actual commands/results and browser/device limitations. Continue unfinished authorized work across context limits using the saved state; never restart from scratch or falsely declare the whole game complete. Only deploy after I explicitly authorize publishing.
