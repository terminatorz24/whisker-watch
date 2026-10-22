# CODEX AGENT INSTRUCTIONS — WHISKER WATCH V2

Codex is the implementation agent. The user will send an autonomous-build prompt from their Mac to Codex Cloud. This repository contains the confirmed product direction and PROVISIONAL economy/art recommendations; it does not contain a functioning game yet. When a new build task arrives, conduct the mandatory access audit and STOP for owner approval BEFORE implementing the game. Once the owner approves the audit, implement the game rather than only planning it.

## Mandatory initial access audit — HARD OWNER GATE
- BEFORE ANY game code, new package installation, scaffolding, sprite production, or gameplay work, follow docs/PREFLIGHT_ACCESS_CHECK.md fully. Verify the real Codex Cloud repository checkout (not the old default main), authenticated Git read/write/branch push, source files, 13 reference images, setup tools, JSON contract, art-creation fallback and available browser/plugin capabilities.
- Show an evidence-backed access checklist to the OWNER. Identify what is required vs optional (especially Canva/Higgsfield and the full reference PDF). The user requested that you CHECK WITH THEM and wait; DO NOT treat their initial startup prompt as approval.
- Even if all checks PASS, do not start implementation until the owner explicitly replies APPROVE BUILD after seeing the report. If required access is missing, resolve it and re-audit before requesting approval. No unauthorized credential changes, paid subscriptions or security changes.
- After approval, record it in DESIGN_STATE.md and then work through normal phases autonomously; do not request repeated routine phase approvals. Final public deployment separately requires owner's explicit approval.

## Required read order
1. WHISKER_WATCH_MASTER_PROMPT.md (entire active canonical V2 specification)
2. docs/DECISIONS.md (confirmed vs provisional)
3. docs/DECK_FORMAT.md and docs/AI_FORMATTER_PROMPT.md
4. docs/ECONOMY_MODEL.md and docs/ART_PIPELINE.md
5. references/REFERENCE_GUIDE.md and actual reference images
6. DESIGN_STATE.md, docs/ACCEPTANCE_MATRIX.md
7. User's supplied task in prompts/01_START_AUTONOMOUS_BUILD.md or current continuation instructions

Latest owner message outranks these files. Git history is not a competing instruction source; older versions of the specification are obsolete. Do not reintroduce unrelated legacy feature systems while implementing the active design.

## Product guardrails
- Browser-based single-player original cat/mouse/rat tower defense; protect Fish Stash.
- Five immediately playable main maps + Tutorial. Two lengths Quick 40 / Full 100, Easy/Normal/Hard, original bosses/waves.
- Multiple choice ONLY. One validated canonical study-deck upload format: UTF-8 JSON; allow file or paste JSON. External AI converts PDFs/notes via our prompt; the game does not parse source PDFs.
- Question breaks before EVERY wave; NEVER while combat runs. No inter-wave countdown. Combat continues while player shops, places, upgrades, sells and activates cats. Answer accuracy must remain the strongest source of money.
- ALL cats and path options available from the beginning, subject to tower costs, placement and crosspath restrictions. No required permanent unlocking/achievement meta system.
- Exact downloadable JSON SAVE embedding the study deck; it restores correct/wrong statistics, study cursor and the entire tick-level game state even during combat.
- Colorful original BTD6-inspired readable 2D illustration quality. No copied BTD6 assets/routes and no game sound. Production artwork must be shipped in the asset manifest; do not ship references.
- Static build/offline operation, responsive Mac/iPhone interaction, valid error handling. No backend, user login, paid external service or required image-generation subscription.

## How to work autonomously
- User wants the project built with minimal routine oversight. AFTER the explicit pre-build approval only, advance through normal stages independently; do not stop after every engineering phase to request 'next'. Owner retains final product review and must authorize public deployment separately.
- Inspect actual tools first. This chat's Canva/Higgsfield integrations are not necessarily available in your Codex Cloud environment. Create original SVG/code-rendered assets and test screenshots yourself when generative tools are unavailable. Do not buy external credits.
- Implement source files and runnable code, not mock plans. Use simulation/game/render/deck/save/UI modules and data-driven art/content, fixed-step deterministic engine, seeded question shuffle, and shared economy logic.
- Keep a useful playable slice during expansion. Test, update DESIGN_STATE.md and docs/ACCEPTANCE_MATRIX.md at milestones, record factual limitations, use branches and small commits, and continue until the task limit. At a runtime/context limit, leave a precise next-command checkpoint and resume in the next authorized coding task.
- Do not overwrite unknown uncommitted changes. Do not weaken network/access settings, invent test results, or publish before permission. Mark real-device iPhone tests MANUAL CHECK NEEDED if the device is unavailable.

## Preparation check
Run from project root: bash scripts/codex-setup.sh as part of docs/PREFLIGHT_ACCESS_CHECK.md, report actual results to owner and await approval.
This only checks tools/source files. It does not validate gameplay. After a Node package manifest exists, record real install/build/test commands in README and run them.

## Acceptance
Use docs/ACCEPTANCE_MATRIX.md. Only mark PASS with actual runnable behavior and evidence. Before completion verify both run lengths, all real maps and cats, all attack/upgrades/abilities, answer economy, repeat-question handling, deterministic exact save/resume, validation, full reports and complete original graphics. Build release files but do not deploy.
