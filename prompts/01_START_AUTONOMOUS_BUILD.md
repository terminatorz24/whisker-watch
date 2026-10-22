# CODEX CLOUD: START AUTONOMOUS WHISKER WATCH IMPLEMENTATION
I own Whisker Watch. You are the implementation agent. This prompt authorizes real coding, not just plans or environment setup.

Repository: terminatorz24/whisker-watch
Starting branch: codex/workspace-setup-2026-10-22, or the latest active implementation branch if already started.

CRITICAL CHECKOUT GUARD
GitHub's default branch is main, which does NOT contain the approved V2 handoff. Before reading instructions or writing game code, verify your checked-out branch and the V2 marker in AGENTS.md. If you are on main or the V2 file is missing: check git status; preserve any uncommitted changes; fetch origin codex/workspace-setup-2026-10-22; switch safely to that source branch or create a new implementation branch FROM it; confirm current commit descends from 4323888da0fdfe458911bf088caa45c0bd1ada71. If access/checkout is blocked, report the exact issue and do not build against the old main spec. Never force reset, change default branch, or silently merge the old draft.

PRIMARY INSTRUCTIONS
1. Inspect branch, HEAD, uncommitted changes and repository sources; preserve working files.
2. Read AGENTS.md, WHISKER_WATCH_MASTER_PROMPT.md (current V2 in full), docs/DECISIONS.md, docs/ECONOMY_MODEL.md, docs/DECK_FORMAT.md, docs/AI_FORMATTER_PROMPT.md, docs/ART_PIPELINE.md, references/REFERENCE_GUIDE.md, DESIGN_STATE.md and docs/ACCEPTANCE_MATRIX.md. Visually inspect relevant reference images.
3. Confirm that the current V2 source supersedes all older text in the repository's history. Never import obsolete previous requirements.
4. Run bash scripts/codex-setup.sh, report real environment tools, then immediately begin implementing the game.
5. Keep work on an appropriate implementation branch with usable verified incremental commits.

THE GAME TO SHIP
A complete colorful, original browser-based cat tower defense against mice and rats. Defend a Fish Stash. Aim for the strategic depth and readability of Bloons TD 6 without copying its protected artwork, routes or interface designs.
Five immediately playable different maps plus tutorial, Quick 40 waves and Full 100 waves, Easy/Normal/Hard. Tower placement, targeting, attacks, layered enemies, resistances, boss mechanics, three five-tier upgrades per cat, crosspath choices, active abilities, and tangible upgrade art all function. All cats and all paths available from the first run when affordable.
A single input question format: multiple-choice JSON. The learner gives source PDFs/notes and our prompt to an external AI, downloads JSON or copies raw JSON, then uploads/pastes that JSON into the game. Implement a one-click copyable formatter prompt, example file, proper validation, preview, edit/add/remove and re-export. The game does not parse source PDFs and does not require paid AI services.
Before EVERY wave the player answers questions to gain most of their money, then has unlimited time to build and manually start the wave. No questions during combat. During combat they may purchase, place, sell, upgrade, retarget and activate cats using existing money and actual kill revenue. A partial sale refund depends on tower plus upgrade costs. A bounded consecutive-correct streak boosts question earnings. Record each question's correct and incorrect counts; make useful study reports.
One self-contained downloadable JSON SAVE embeds the active question deck and full deterministic live game state. Load it or paste it back, inspect restored summary, and resume at the precise combat tick or unfinished study question. No accounts, backend, payments, server uploads, or sound. Static/offline-capable output and usable Mac plus touch/mobile UI.

ECONOMY, ART AND HONEST TESTS
Treat sample question counts, bosses, income growth, tower prices and difficulty values as PROVISIONAL. docs/ECONOMY_MODEL.md includes cash-model assumptions, NOT combat-validated balance. Build and tune the REAL seeded simulation using 0, 60, 80, 95 percent answer-accuracy scenarios across modes/difficulties and different tower strategies. Reward defeated enemies once and prevent duplicated cash from child spawns/boss effects; cap economic cat benefits so studying remains essential.
Make premium-looking original outlined and lightly shaded 2D sprites, original five-map artwork, clear right-hand shop, upgrade screens, correct placement ghosts, readable modifiers and combat effects, all listed in asset manifest. Do not ship the reference screenshots. Canva and Higgsfield are optional if actually accessible to YOU in this Codex environment, not assumed from my separate ChatGPT plugin connections. You must still build original SVG/sprite art with no paid dependencies if those tools are unavailable. No sound.
Maintain deterministic fixed-tick engine, replay equivalence, full mid-wave and mid-study save tests, malformed deck/save rejection, actual browser/responsive checks, and all interactive UI controls. If iPhone Safari tests are unavailable, report MANUAL CHECK NEEDED, not PASS.

AUTONOMOUS EXECUTION
I want you to carry through normal coding stages independently without asking me to say next after each stage. Build a playable slice, implement remaining mechanics and artwork, test, fix and continue. Use available subagents when beneficial; preserve independent module boundaries and review integration. Keep source compileable; update DESIGN_STATE.md and docs/ACCEPTANCE_MATRIX.md with precise evidence and commit at checkpoints. When the task budget is exhausted, leave the exact repo branch/commit/state and next command for a continuation task. Do not restart from scratch next time.
Do not claim the game finished if maps, upgrades, graphics or saves are incomplete. Do not publicly deploy until I have played and explicitly approved the final game.

START NOW: verify the sources, implement the validated JSON question workflow, then the first genuinely playable tower-defense slice and proceed toward the entire game.
