# Versioned portable save contract — build this FIRST
The save is a public file interface, not a screenshot, browser cache or merely a wave number. Contract version starts at 1. Required implementation milestone: technical foundation and first playable slice, NOT final integration.

## Envelope
Use fileType="whisker-watch-save", saveFormat=1, gameVersion, engineRulesVersion, contentVersion/contentHash, exportedAt (UI metadata), deck (canonical validated deck), settings, learning and run. A deck and a save both use .json but have different root identifiers. Dispatch by validated structure, not filename alone. schema/save-envelope.schema.json describes the outer interface; Codex MUST add strict nested run/learning/entity schemas before claiming save support. The envelope alone is not a working save.
Reject unsupported future versions before mutating state. Older supported versions migrate in pure versioned steps and preserve the original file. Revalidate after migration. A checksum can detect accidental corruption, not authenticate a file or prevent cheating. No cryptographic signing keys, anti-cheat server or secret needed.

## Authoritative state
The deterministic model owns state; Canvas/Phaser/UI does not. Fixed 60 Hz ticks. Record or snapshot all balance rules/content identifiers needed to prevent a later rebalance silently changing an old run. If incompatible content cannot be safely resumed, explain rather than guess.
Store: runId, phase, map/mode/difficulty, tick, wave, wave spawn cursor/timers, cash in integer subunits, lives, already-paid reward IDs, next entity ID, towers and actual purchase totals, upgrade levels, targets/cooldowns/abilities, enemies and layers/routes/progress/health/modifiers, projectiles and hit-ID sets, effects/expiry ticks, traps/summons, boss phases/minion counters, pending ordered events, separate simulation and question RNG states. Sort stable IDs/tie-breaks explicitly. No Math.random, wall-clock catch-up, functions/DOM nodes or untracked framework physics in sim state.
Study state stores question sequence, cursor, shuffled option order, selected-but-unsubmitted option, answer-submitted flag, feedback visibility, streak, per-question counters, and unique attempt/reward receipt IDs. Saving after an answer submission must not repeat its reward or stats on resume. New Game and importing reviewStats cannot mint current-run money.
Pause while taking an immutable end-of-tick snapshot. Resume loaded runs PAUSED with a summary; time spent away never advances combat. Wall-clock export metadata and harmless particles do not participate in simulation equivalence.

## Required regression tests from the first slice
1. Run seeded actions to tick T; save; continue N ticks. Reload at T, replay the same tick-stamped actions and compare normalized future state and reward ledger. Repeat at several T/N, including during projectile flight, a child split and active ability.
2. Save during Study Break before selection, with selected answer, after submission, during explanation, and after final question before wave start. Validate identical next options/cash/counters with no second reward.
3. Extend these tests with EACH new tower effect/boss/Regrow/resurrection mechanic before its feature passes.
4. Import malformed/oversized/truncated/wrong-kind/future-version/out-of-bounds files. Validate transactionally; keep current game intact on error. Use a conservative 20 MiB total save cap initially; measure 5000-question embedded deck plus dense combat.
5. Revision tests: unchanged/changed/removed/added questions, matching deckId, archived stats. Apply updates at safe phase boundaries.
6. UI end-to-end: Download Save -> fresh page -> Load Save -> summary -> Resume. Repeat paste JSON path and desktop/mobile file workflows. WebKit emulation is not real iPhone Files verification.

No legacy save migration is required before any real game save exists. Future version tests can use explicitly synthetic fixtures, never label them genuine played runs.
