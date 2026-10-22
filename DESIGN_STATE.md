# Whisker Watch — DESIGN_STATE (V2)
As of 2026-10-22. Branch: codex/workspace-setup-2026-10-22. Game implementation status: NOT STARTED. This is the setup handoff, not a passing game build.

## Canonical instructions
- WHISKER_WATCH_MASTER_PROMPT.md rewritten for the current owner-approved direction.
- docs/DECISIONS.md distinguishes confirmed requirements from proposals.
- docs/DECK_FORMAT.md + docs/AI_FORMATTER_PROMPT.md establish single study JSON contract.
- docs/ECONOMY_MODEL.md contains preliminary answer/cash/streak simulations, explicitly not a tested tower economy.
- docs/ART_PIPELINE.md directs original game assets and optional plugin integrations.
- docs/ACCEPTANCE_MATRIX.md: all game requirements NOT IMPLEMENTED.
- references/ includes a guide and 13 original unmodified excerpts from a broader 71-page PDF.

## Owner-confirmed essentials
Single-player cat tower defense with mice/rats, static original map scenery, animated gameplay objects, no sound, five immediately playable maps plus Tutorial, Easy/Normal/Hard, Full/Quick, questions before each wave, combat-time shop/selling/upgrades/abilities, all cats and upgrade paths available, one multiple-choice JSON deck input, strict formatter from external AI, cash for correct answers and pop events, a bounded answer streak, and one self-contained downloadable JSON save preserving full live state and correct/incorrect counts. Owner must authorize publication.

## Proposals awaiting actual balance evidence
Full question schedule 5/7/9/11/12 with +3 bosses; Quick 2/3 with +2 bosses; lives 200/150/100; tower costs 85%/100%/108%; speeds 90%/100%/115%; cash start 650; study wave budgets; combat/clear income targets; threshold streak +5/10/15/20%; 70% sell return; minimum question counts; Fisher/Scholar caps; final count of three candidate extra cats.
These are NOT described as final owner-approved numeric facts. Codex should make values configurable, test using the real simulation and record tuned values.

## Preparation verification
- Original GitHub branch previously contained only setup docs, master and reference images.
- V2 rewrite adds authoritative docs and replaces conflicting build instructions. Game runtime, art assets, tests and saves have not yet been built.
- Do not claim Mac/iPhone testing; those checks await a game build.
- Codex Cloud connection/environment not confirmed configured or published in the user's account.
- Default/main branch deliberately unchanged.

## Mandatory pre-build access and owner approval — PENDING
The owner explicitly requires a preflight report and one-time permission before implementation. Codex Cloud access has NOT yet been verified. No Codex Cloud preflight report has been produced, and owner APPROVE BUILD has NOT been given. See docs/PREFLIGHT_ACCESS_CHECK.md. A prepared GitHub branch and this ChatGPT's connectors cannot prove GitHub write/plugin permissions inside Codex Cloud.

## Next task
Open prompts/01_START_AUTONOMOUS_BUILD.md in Codex Cloud on the V2 branch, perform the full access/connector/source/art-tool preflight, show owner detailed actual results, ASK for explicit APPROVE BUILD, then STOP without game code. After actual approval, record the date/report/exceptions here, implement the single JSON deck contract and tower-defense engine, and continue ordinary engineering milestones autonomously. Keep the project compiling at each milestone. At limitations leave a complete handoff in this file.

## Per-checkpoint log template
Date and branch; actual commit; stage; files changed; shell commands run and observed results; scenario tests and screenshots; PASS/FAIL/MANUAL status per acceptance requirement; unresolved defects; recommended next build task; owner-deployment permission status.
