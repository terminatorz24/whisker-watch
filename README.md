# Whisker Watch — Codex Cloud build handoff (V2)

An original cat-vs-mice/rats tower-defense study game inspired by the strategic depth and visual readability of Bloons TD 6. The learner imports one multiple-choice JSON deck generated from their own notes/PDF by an external AI, answers before every wave, earns cash for correct answers and defeating enemies, builds and upgrades cats during waves, and saves the exact game to one downloadable JSON file.

**Status: specification and Codex handoff prepared. The game has NOT been implemented, tested or deployed.**

## For the owner — from Mac to Codex Cloud
1. Choose this repository and starting branch: terminatorz24/whisker-watch, codex/workspace-setup-2026-10-22. CRITICAL: GitHub's default main branch still has the obsolete specification; verify the V2 checkout. The startup prompt contains a safe checkout guard if the environment starts on main.
2. Configure a private Codex Cloud environment and ensure it reads AGENTS.md. See docs/CODEX_WORKSPACE_SETUP.md.
3. Paste prompts/01_START_AUTONOMOUS_BUILD.md into a coding task. It MUST perform docs/PREFLIGHT_ACCESS_CHECK.md first and STOP to show you the actual GitHub, source, reference, tool and connector access report. No game code is written yet.
4. Review the preflight report. Fix blocked access or decide whether optional external art plugins / full source PDF are necessary. Then reply APPROVE BUILD in Codex. ONLY then it may work through regular implementation stages autonomously; final public deployment requires another explicit approval.
5. If a coding task ends with further work required, give prompts/02_CONTINUE.md to a new task that uses the latest implementation branch and DESIGN_STATE.md.

## Active documents
- WHISKER_WATCH_MASTER_PROMPT.md — canonical V2 product and implementation requirements.
- AGENTS.md — the short always-read instruction file for coding agents.
- docs/DECISIONS.md — owner-confirmed versus trial values.
- docs/ECONOMY_MODEL.md — calibrated-first-planning simulation; real gameplay tuning still necessary.
- docs/DECK_FORMAT.md, docs/AI_FORMATTER_PROMPT.md — one input deck type: multiple-choice JSON.
- templates/multiple_choice_template.json — non-playable tiny example; expand to meet selected game's minimum.
- docs/ART_PIPELINE.md, references/REFERENCE_GUIDE.md and references/images/ — graphics production requirements and design references.
- docs/PREFLIGHT_ACCESS_CHECK.md — mandatory owner-reviewed Codex Cloud tool/source/plugin access gate before implementation.
- docs/ACCEPTANCE_MATRIX.md — full project coverage and verification log.
- DESIGN_STATE.md — durable progress checkpoint.
- docs/CODEX_WORKSPACE_SETUP.md — environment setup.
- prompts/README.md — task prompts and continuation.

## Required user experience
User's notes/PDF -> external AI with our copyable formatter prompt -> single .json study deck -> upload or paste into Whisker Watch -> preview questions -> choose map/mode/difficulty -> study/build/defend on repeat -> Download Save .json -> Load Save or paste saved JSON later -> resume exact run and get per-question correct/wrong statistics.

No login and no server needed. The game does not read the raw source PDF; it reads the AI-converted deck. Both deck and save happen to use JSON but are different schema objects. Copy/paste is supported in the UI so users need not create a file manually if they have the raw JSON text.

## Gameplay targets
Tutorial plus Sunny Backyard, Farmhouse Barn, Fish Market Docks, Frosty Rooftops and Cheese Moon; all main maps immediately selectable. Full Campaign 100 waves and Quick Run 40; Easy/Normal/Hard. Sixteen baseline cat types with three upgrade paths each; three distinct candidate cats to evaluate. All types/paths immediately accessible if affordable; no permanent unlock economy. No sound. Original high-quality cartoon art.

## Preparation check
bash scripts/codex-setup.sh

This script does not install a game or prove it works. Codex implementation will create package manifests, source files, game commands, real tests and static release output.

Reference stills are for inspiration and must never be included in the shipped game. Do not use prior Git revisions as an alternative implementation prompt.
