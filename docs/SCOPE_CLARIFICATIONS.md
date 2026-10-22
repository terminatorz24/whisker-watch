# Scope clarifications from the owner

Recorded October 22, 2026. These statements clarify the original `WHISKER_WATCH_MASTER_PROMPT.md`; they do not replace its detailed rules.

## 1. Who does the work

The preparation task sets up Codex's workspace, source material, durable instructions, prompts, and development workflow. **Codex performs the game implementation in a separate coding task.** The preparation task does not implement combat, deck tools, learning logic, saves, UI, or art.

## 2. Complete-game target

The owner wants a fully functional game with the structure and satisfying play of Bloons TD 6, using original cat towers and mice/rats. Multiple real maps, difficulty choices, tower placement, upgrades, enemy waves, bosses, meaningful choices, and finished graphics are essential.

Complete delivery includes:

- Tutorial: Kitten Yard.
- Sunny Backyard.
- Farmhouse Barn.
- Fish Market Docks.
- Frosty Rooftops.
- Cheese Moon.

The old master deliberately schedules Tutorial + Sunny Backyard first. Retain that sequence as an intermediate release, then complete the four remaining map phases. Do not report the overall project finished while those maps are absent, fake, or recolored duplicates. Every main map supports any valid deck and the shared 100-wave content. Preserve the source's Easy, Normal, and Hard difficulty choices and separate Casual option.

## 3. The study-content pipeline

The primary PDF requirement is a clear conversion workflow:

1. The learner starts with their own PDF, notes, or existing questions and answers.
2. The game provides the chosen deck type's example JSON/CSV template, exact format instructions, and an AI formatter prompt that can be copied.
3. The learner gives the source material and formatter prompt to an external AI, or copies extracted text into the deterministic importer where its supported patterns apply.
4. They save a correctly structured Flashcard or Multiple Choice deck.
5. They upload that deck to the game and receive an understandable validation report.
6. They use their own questions throughout gameplay, with mastery and weak-question tracking.

The game itself has no AI API calls and does not silently acquire the ability to read arbitrary PDFs, Word files, scans, or images. The first implementation's accepted upload formats remain those in the master. The UI must explain this distinction in ordinary language and make both templates and formatter prompts easy to find.

The initial wording also mentioned PDF output, but the subsequent explanation centered on converting source PDFs into decks. A downloadable study-report PDF is **optional/open**, not a newly approved release blocker. Plain-text study-report export remains required by the original master. Confirm an expanded PDF-output feature before adding it to the mandatory scope.

## 4. Emulator-style save and resume

The learner can download a save file, close the game, and upload the file later to continue where they left off. The save carries both progression and any current run, including partial study state and mid-wave combat state. It may embed the validated deck according to the original size/default rules.

If the deck is not embedded, the learner supplies the matching deck too. A mismatched deck must not silently replace or corrupt progress. Present a restored-progress summary. A PDF, a screenshot, and browser-only storage are not substitutes for the downloadable JSON save.

## 5. Visual quality and completeness

Good graphics are required. Codex should inspect the supplied references and create coherent original artwork: distinguishable cats and enemies, readable modifiers, attractive map scenery, consistent icons and menus, responsive feedback, clear placement/range previews, and usable desktop/touch layouts. Preserve the original bright, flat cartoon direction with thick outlines and no drop shadows unless the owner changes it.

Code-drawn vector art is permitted by the master. Generic circles, unfinished placeholders, disconnected mockups, and buttons with no function do not satisfy final delivery. The selected reference images inform layout and visual hierarchy, not ownership of production artwork.

## 6. Unchanged boundaries

All other detailed rules remain in force: separate deck types; original size limits; single-player/offline operation; no server processing; no in-game AI; no sound for this scope; source-defined study/progression rules; all 16 cats and 240 upgrades; 100 waves and five bosses; approval gates; user playtests; and separate authorization before deployment.

This document adds no authorization to merge, publish, expand account access, or change security settings. Normal repository setup and the separately requested implementation tasks remain governed by the owner's instructions.
