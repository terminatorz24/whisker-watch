# MASTER PROMPT: "WHISKER WATCH" (Study Engine Edition)
A Bloons-TD-6-style cat tower defense that works as a study engine for ANY subject. Each session the player chooses a deck type (Flashcards or Multiple Choice), uploads a DECK (a question file in that type), and, to continue, a SAVE file. The game's economy is powered by answering the deck's questions.
Three deliverables: (1) the game; (2) deck upload checking (format validation); (3) deck structuring/conversion (an in-game import tool plus a prompt that any AI can use to format notes into a valid deck).
Two parts. I will tell you which to run: "RUN PART A" (the deck system) or "RUN PART B" (the game). Run only that part. Sections 0-2 apply to both. Both parts live in ONE project folder (one repository): Part B imports Part A's deck module from /src/deck and uses its demo decks, templates and docs.

---------------------------------------------------------------------
## 0. HOW YOU MUST WORK
You are a senior game engineer, game-balance designer, learning-systems designer, and a careful file-format/tooling engineer. Reason carefully before acting.
- Write complete, working, runnable code and files every time. No placeholders ("TODO", "rest of code here", "similar to above").
- Do not ask me questions unless truly blocked. State the assumption in one line, record it in DESIGN_STATE.md, proceed.
- Deliver files with full paths. If your environment can create/run files, do so, and run the tests yourself.
- If you are about to hit an output limit, STOP at a file boundary and print exactly: "CONTINUE FROM: <next file path>". Never truncate a file.
- At the end of EVERY phase: (a) update DESIGN_STATE.md (decisions, schemas, file tree, config values, open issues), (b) give me exact test/play instructions, (c) run the Section 19 checklist and report pass/fail per item, (d) print "RECOMMENDED EFFORT FOR NEXT PHASE: <level> - <reason>", then (e) stop and wait for me to say "next". I test and approve every phase myself; if I report a bug, fix it before moving on. Never start the next phase without my explicit "next".
- Every tunable number lives in ONE file: /config/config.json. No magic numbers in code. All content (waves, cats, upgrades, enemies, bosses, perks, maps, tutorial questions) lives in JSON files, separate from engine code. Question content comes ONLY from uploaded decks (plus the tutorial questions and demo decks).
- Numbers marked "provisional" are starting values to tune with the simulator. Unmarked numbers are firm decisions.
- REASONING-EFFORT PLAN: I set your effort in the app's model picker; you may not be able to change it yourself. At the start of each phase, print the recommended level. If a HIGH-STAKES item is next and you suspect my setting is lower, say so and wait for me to switch. At any setting, verify deeply on high-stakes work and stay lean on routine work (no long deliberation, no rewriting working files, no unrequested polish).
  - Extra high: architecture and determinism (G0), economy simulator and balance tuning (G3 and final), the deck validator and deck-save matching (A2, G1).
  - High: engine and study-loop core (G1), upgrade/crosspath logic (G2), importer (A3).
  - Medium: docs and prompts, maps, UI, data wiring, settings, tutorial, deploy package.
- TOOLS: Use code execution to run tests. If a needed tool is missing (Node, a headless browser for testing, file creation), tell me exactly what is missing and how I can enable it, then continue with the best available fallback.

---------------------------------------------------------------------
## 1. PRODUCT SUMMARY AND THEME
A fun, bright, 2D cartoon tower defense in the style of Bloons TD 6. The player places cat towers along a path to stop layered rats and mice from stealing the Fish Stash. Between waves the player earns cash mainly by answering questions from an uploaded deck, then spends it on cats and upgrades.
- SUBJECT-AGNOSTIC: the game contains no study content of its own. Any learner can study anything by supplying a deck. It was first conceived for investment-banking interview prep, but nothing about the game may be finance-specific. Never put subject terms in cat names, enemy names, map names, or flavor text.
- Like BTD6: towers and enemies are identical on every map; maps differ only in path layout, scenery, and placement zones. One shared 100-wave table.
- Design pillars: (1) it must feel like a real, satisfying tower defense; (2) answering questions is the best way to get stronger but never tedious; (3) pressure is real (one-shot answers) but failure teaches (always show the answer and explanation); (4) progress is measured two ways: how far you survive and how much you actually know.
- Everything runs in the browser on the player's device. For now the game is for my personal use only (single player, not shared). No accounts, no servers, no uploads to any server, no AI calls inside the game.
- Out of scope for v1 (do not build): multiplayer, heroes, paragons, freeplay beyond wave 100, extra modes (Half Cash, Deflation, Apopalypse, CHIMPS, Alternate rounds), leaderboards, daily challenges, global skill trees, cosmetics/skins, sound/audio, cloud saves, in-game fact-checking of decks, reading PDFs/Word/images inside the game, numeric/randomized question templates (possible v2), typed-answer questions, images/diagrams/math notation/computed math inside questions (plain-text question and answer fields only), native apps (mobile web only), real-money features.

---------------------------------------------------------------------
## 2. MAPS, DECKS, AND SESSION FLOW
Maps are only layouts. Any deck can be played on any map. There are 5 maps plus a Tutorial.
| Map | Name (provisional) | Layout archetype (original design; reference only) |
|---|---|---|
| Tutorial | Kitten Yard | very short loop, open space, ~10 waves, built-in simple questions (10-12 easy general-knowledge items, excluded from all stats and rewards) |
| 1 | Sunny Backyard | classic cobblestone loops with hedges |
| 2 (post-v1) | Farmhouse Barn | grid of dirt lanes between hay-bale plots, hollow logs as obstacles |
| 3 (post-v1) | Fish Market Docks | water channel with plank bridges, crates and boats; path spirals and crosses water |
| 4 (post-v1) | Frosty Rooftops | snow, faint path, huge central chimney obstacle |
| 5 (post-v1) | Cheese Moon | path winding around crater rims (craters = holes in cheese); expert layout |
RELEASE PLAN: v1.0 ships with the Tutorial and Map 1 only, plus all 16 cats, all enemies and bosses, the 100-wave table, and the full deck system, study loop and save system. Maps 2-5 are added later (v1.1 and on), and possibly more enemies and cats after that. EXTENSIBILITY REQUIREMENT: adding a map, cat, upgrade, enemy, boss or perk must need only data entries (maps.json, cats.json, upgrades.json, enemies.json, perks.json, assets.json) and art, with no engine changes; include an automated test that loads an extra dummy map from data alone. Map Select shows only the maps that exist.
Wave Progress is tracked per map; Mastery is tracked per deck (Section 12).
SESSION FLOW: Title (New Game / Load Save File) -> choose DECK TYPE (Flashcards or Multiple Choice) -> download or copy the matching template and AI instructions if needed -> upload the deck (or load a save, which locks the deck type and may embed the deck) -> Deck Validation Report -> Setup (map, difficulty, Casual toggle, study intensity, study focus, perks) -> play -> Save at any time. To continue a run later, the player provides the deck and the save file (or just the save if it embeds the deck). The deck type is locked per save.

---------------------------------------------------------------------
# PART A: THE DECK SYSTEM (run first, as its own task)
Deliverables: the two deck types with example template files, the format spec, the validator (checking uploads and size), the importer/converter (with Split and Convert tools), the AI formatter and repair prompts, demo decks, and tests. The game does NOT verify that a deck's facts are true; the deck author is responsible, and the in-game "Report problem" button exists for catching mistakes.

## 3. DECK TYPES, TEMPLATES, FORMAT AND SIZE RULES
Before uploading, the player picks a DECK TYPE: Flashcards or Multiple Choice. For each type the website offers (1) an example TEMPLATE file (download or copy; JSON and CSV versions) and (2) a "Copy AI instructions" button that copies the matching formatter prompt (Section 6), so the player can have any AI reformat their own questions to fit exactly. The deck is validated against the chosen type. Template files are illustrations (5 questions), are labeled TEMPLATE, and are expected to fail the size minimum. The deck type is stored in the deck (deckType) and LOCKED for the save: a save made with a Flashcard deck cannot be continued as Multiple Choice.
Write /docs/DECK_SPEC.md, a JSON Schema at /schema/deck.schema.json, and four template files in /templates: flashcard_template.json, flashcard_template.csv, multiple_choice_template.json, multiple_choice_template.csv.
FLASHCARD DECK (JSON):
{
  "deckFormat": 1,
  "deckType": "flashcard",
  "deckId": "my-deck-slug",
  "title": "Deck title",
  "subject": "optional",
  "version": "1.0",
  "notes": [],
  "questions": [
    { "id": "q001", "topic": "optional topic", "question": "text", "answer": "correct answer text",
      "explanation": "optional", "hint": "optional", "tier": 1 }
  ]
}
MULTIPLE CHOICE DECK (JSON): identical, but "deckType": "multiple_choice" and every question also has "wrong": ["wrong 1", "wrong 2", "wrong 3"] (EXACTLY 3, giving options A-D).
CSV TEMPLATES (header row required; UTF-8 with or without BOM; quoted fields and embedded newlines supported; Windows or Unix line endings):
- Flashcards: id,question,answer,explanation,hint,topic,tier
- Multiple Choice: id,question,answer,wrong1,wrong2,wrong3,explanation,hint,topic,tier
Only the question and answer columns (plus the three wrong columns for Multiple Choice) are required; the rest are optional. A CSV may omit deckId/title; the importer asks for them and writes the canonical JSON.
FIELD RULES:
- Required deck-level: deckFormat, deckType, deckId (lowercase slug), questions[]. Optional: title, subject, version, notes (ignored by the game).
- Required per question: question, answer; for Multiple Choice also wrong (exactly 3). Optional: id, topic, tier (1-5), hint, explanation.
- A Multiple Choice deck's questions that lack exactly 3 wrong answers are ERRORS (excluded); they are never silently turned into flashcards. In a Flashcard deck, any "wrong" values are ignored with a warning.
- IDs should be supplied, stable and unique per deck. If missing, the importer/game generates an id from a hash of the normalized question text and warns that editing that text later resets that question's progress.
- Plain text only. NEVER render deck text as HTML (no innerHTML); strip control characters; allow line breaks. Decks are untrusted files.
- Length warnings (config): question 600, answer 400, each wrong answer 200, explanation 1,500 characters.
SIZE RULES (config values; the numbers are firm unless I change them):
- Hard minimum: 100 valid questions. Below that, loading is blocked with a clear message (late waves ask up to 25 questions with a 3-wave repeat cooldown, and mastery needs repeated, spaced attempts).
- Warning below 200; recommended 300 or more.
- Hard maximum: 5,000 valid questions or 5 MB. Above it, loading is blocked and the Split tool (Section 5) is offered.
- Any size inside the range is fully supported: every question is used and tracked (learned / learning / unseen) per question id in the save file, and the learning cap (Section 11.8) keeps large decks teachable.

## 4. THE VALIDATOR (deliverable 2: checking upload and format)
One shared module used by the game (in the browser, on upload) and a Node CLI. It must never crash on malformed input.
Checks: file type/size/encoding/parse; deckFormat, deckType (must equal the type the player chose) and deckId; required fields; duplicate ids; duplicate or near-duplicate questions; empty/whitespace fields; for Multiple Choice: wrong[] must have exactly 3 entries, the answer must not equal a wrong option (case-insensitive, trimmed), no duplicate wrong options; over-length text; tier out of range; unknown fields (warn); the size rules in Section 3; number of topics; very short or very long answers; suspicious markup.
Severity: ERROR (that question is excluded; deck-level errors, including size outside 100-5,000, block loading), WARNING (playable, including size 100-199), INFO (statistics).
Report screen: counts, a list grouped by severity with question id and position, a "Play valid questions only" button (only if the valid count is still 100 or more), a "Copy fix report" button (plain text a user can paste into an AI with the repair prompt), and a "Download report" button.
Tests: fixture decks for valid decks of both types, each error type, empty, boundary sizes (99, 100, 199, 200, 5,000, 5,001), oversized file, BOM, Windows line endings, emoji, and right-to-left text.

## 5. THE IMPORTER / CONVERTER (deliverable 3a)
Built into the game, offline, deterministic, no AI. Output is always the deck type the player chose. Accepts JSON (including near-miss key names such as q/a/wrong1-3, with a mapping step), CSV/TSV, and Markdown/plain text patterns: "Q: ... A: ...", numbered questions followed by an answer line, "question | answer" lines, and pasted text. Flow: choose file or paste -> auto-detect -> preview table with the detected column/pattern mapping -> let me fix the mapping and edit rows -> run the validator -> export the canonical deck JSON as a download.
Tools: (1) SPLIT: for decks above the maximum (or on request), split by topic or into parts of N questions; each part is exported as its own deck with its own deckId (-part1, -part2, ...) and its own save. (2) CONVERT: a Multiple Choice deck can be exported as a Flashcard deck (wrong answers dropped). A Flashcard deck cannot be converted to Multiple Choice in the game (it would need wrong answers); the UI tells the player to use the Multiple Choice AI instructions instead.
It does not read PDFs, Word files or images in v1; for those it tells the user to copy the text out or use the AI instructions (Section 6).

## 6. THE AI FORMATTER PROMPTS (deliverable 3b)
Write /docs/DECK_FORMATTER_FLASHCARD_PROMPT.md and /docs/DECK_FORMATTER_MULTIPLE_CHOICE_PROMPT.md: copy-paste prompts any user gives to any AI along with their notes, PDF text, or lists (both are also embedded behind the "Copy AI instructions" buttons). Both must instruct the AI to: output ONLY valid JSON matching the spec for that deck type (using the exact template structure); make one question per source item and never invent facts; keep the source's wording; assign stable ids (q001, q002, ...); use the source's headings as topics; add tiers only if the source has difficulty levels; put doubts in the deck-level "notes" list; process long sources in batches of about 50 questions with continued numbering and a final merge step; warn the user if the result will be under 100 questions; and run a self-check against the spec before replying.
The Multiple Choice prompt additionally requires exactly 3 plausible but clearly wrong answers per question (same kind, length and format as the correct answer; never "all/none of the above"; never accidentally correct; never repeat the answer's exact words as a giveaway); a question that cannot support 3 good wrong answers is left out of the Multiple Choice output and listed in "notes" (it can be used in a separate Flashcard deck).
Also write /docs/DECK_REPAIR_PROMPT.md (takes the validator's "Copy fix report" plus the deck and returns a corrected deck) and /docs/HOW_TO_MAKE_A_DECK.md (plain-language steps for non-technical users).

## 7. PART A PHASES (stop after each and wait for "next")
- A1: spec, schema, the four template files, docs, config limits.
- A2 [Extra high]: validator module, CLI, size rules, report screen component, fixture decks, tests.
- A3 [High]: importer/converter with Split and Convert tools, preview/mapping UI, tests.
- A4: the two formatter prompts, repair prompt, how-to guide, and the in-app deck-type picker with template download/copy and "Copy AI instructions".
- A5: demo decks for testing only: a Flashcard deck of at least 120 questions and a Multiple Choice deck of at least 120 questions (simple uncontroversial facts or script-generated arithmetic; double-check every answer), plus a script-generated 3,000-question stress deck (for performance, learning-cap and save-size tests), plus the broken and boundary-size fixtures.
- Outputs: /docs, /schema, /templates, /src/deck (validator and importer), /decks/demo, /tests.

---------------------------------------------------------------------
# PART B: THE GAME (run after Part A files exist; use sample data until then)

## 8. TECH AND ENGINE (modeled on BTD6)
- HTML5 Canvas with vanilla JS (or Phaser if you justify it). Modular code. Works offline once loaded. Desktop first (Mac: Safari and Chrome) and fully touch-capable for phones/tablets.
- DETERMINISTIC fixed-timestep simulation at 60 Hz, with rendering decoupled. Same seed + same inputs on the same ticks must give identical results. No Math.random or clock/hardware seeding in sim code; use a seeded PRNG (mulberry32 or sfc32) with named streams: sim (crits, random targeting) and questions (question selection and A-D option shuffling). Prefer integer/fixed-point math for sim-critical state. The answer stopwatch is UI-only and must never affect sim or rewards.
- Game state: Cash (float), Lives (int), Wave (1-100), and per-enemy Track_Progress (0.000-1.000) along an invisible path spline.
- Combat: radial proximity checks (no sprite hitboxes). Projectile = Damage (layers per hit), Pierce (unique enemy IDs before destroy), Damage_Type, speed, lifetime, on-hit effects. Damage types: Claw, Smash, Boom, Fire, Frost, Magic, Plasma, Normal ("Normal" bypasses all immunity checks). Immunity is checked before damage is applied.
- Targeting (evaluated when a cat comes off cooldown): First = max Track_Progress in range; Last = min; Close = min distance; Strong = max Red-equivalent HP (RBE), ties fall back to First.
- Children spawn when a layer pops, at the enemy's Track_Progress minus a small spacing offset.
- Buff math: final cooldown = base / product of (1 + each speed buff), with a minimum cooldown of 2 ticks. Flat vulnerability: debuff tags on an enemy add flat damage to every hit (examples: Brittle up to +4; Yarn Tangle +1; Crippling Shot +5 vs blimp-class). Order: base damage + flat bonuses, then immunity check, then layer removal, then child spawn.
- Speed controls: pause, 1x, 2x, 3x, optional auto-start. Performance: 60 FPS with 500 enemies and 100 cats, using pooling and a spatial hash. Debug overlay (FPS, entity counts, seed, tick).
- Abilities: tier 4-5 upgrades may have active abilities with cooldowns (HUD ability bar, click/tap or hotkey).

## 9. ENEMIES, BOSSES, WAVES
Standard rat chain (1 HP per layer, slow to fast; names provisional):
1 Field Mouse (spawns nothing) -> 2 House Mouse (1 Field) -> 3 Garden Rat (1 House) -> 4 Alley Rat (1 Garden) -> 5 Sewer Rat, fast (1 Alley) -> 6 Soot Rat (immune to Boom) and Snow Rat (immune to Frost), each spawns 2 Sewer Rats -> 7 Striped Rat (immune to Boom and Frost; spawns 1 Soot + 1 Snow) -> 8 Calico Rat (spawns 2 Striped) -> 9 Cheese-Armored Rat: 10-HP shell, immune to Claw (spawns 2 Calico).
Modifiers (combinable): Sneaky (invisible without detection), Regrow (regenerates layers), Fortified (doubles Cheese-Armored shell and blimp-class HP).
Blimp-class (BTD6 values as reference; provisional): Rat Chieftain ~200 HP (4 Armored Rats); Rat Warlord ~700 (4 Chieftains); Rat King ~4,000 (4 Warlords); Shadow Rat ~400, fast, Sneaky, armored, immune to Boom (4 Sneaky Regrow Armored Rats); Rat Behemoth ~20,000, immune to all stuns/slows/instant-kills (2 Rat Kings + 3 Shadow Rats).
Bosses (end of each band; 4 health skulls at 80/60/40/20% where the boss is invulnerable while it performs its action; aim 45-90 s kill time, verified by simulator): W20 Matriarch Rat Queen (spews rats); W40 The Pied Piper (stuns cats in radius, speeds enemies); W60 Mecha Rat (shield; cycles immunity groups Claw/Smash -> Boom/Fire -> Frost/Plasma -> Magic); W80 Rat Emperor (fireballs at the most expensive cat; resurrects blimp-class); W100 The Great Rat Overlord (combines all, adds forward warps and Sneaky). Boss waves are "Boss Exams" (Section 11).
Waves: ONE 100-wave table for all maps in /data/waves.json (groups of {enemyType, count, spacingTicks, startOffsetTicks, modifiers}). Hand-author boss and introduction waves; generate the rest with a seeded generator, then write the result to static JSON. Bands: 1-20 Foundations, 21-40 Core, 41-60 Applied, 61-80 Advanced, 81-100 Interview Gauntlet. Provisional introductions: Sewer/Soot/Snow by 11-20; Regrow 15; Armored 22; Sneaky 24; Chieftain 30; Fortified 40; Warlord 45; Shadow Rat 55; Rat King 65; Behemoth 85. Enemy HP multiplier = 1.035^(wave-1). Pop income per layer: waves 1-50 = 1.00, 51-60 = 0.50, 61-85 = 0.20, 86-100 = 0.10 (provisional), plus a small end-of-wave bonus (25 + 2 x wave, config).

## 10. THE 16 CATS (all buyable from the very start; late-game power is gated by COST)
Each cat: 3 paths x 5 tiers = 15 upgrades, 240 total, in /data/upgrades.json (cost, effect, description). Crosspath rule: max 2 paths used; if one reaches tier 3+, the second caps at tier 2 and the third is locked. Selling refunds 70%. Path 3 of EVERY cat is locked until unlocked with 1 Path Key (config value; spent permanently per cat). Shop tabs: Scrappers, Hunters, Mystics, Helpers.
Price bands (provisional): Starter base 150-300, tier-5 upgrades ~15-20k; Mid 400-600, ~18-25k; Late 850-1,000, ~25-35k; Elite 1,400-1,600, ~35-50k. Higher bands have higher power ceilings and boss capability but poor early value; cheap cats must stay useful through niche roles. No cat may be strictly dominated.
SCRAPPERS: Dart Cat (Tabby) [Starter 200] P1 speed, P2 damage/pierce, P3 range/detection/crits. Yarn Cat (Calico) [Starter 220] P1 slow, P2 damage over time, P3 global debuff + ability. Ice Cat (Snowshoe) [Starter 300] P1 freeze, P2 Brittle vulnerability, P3 aura slow + ability. Bomb Cat (Bombay) [Mid 500] P1 radius, P2 cluster/recursive blasts, P3 stuns + screen blast. Blitz Cat (Bengal) [Mid 550] P1 very fast attacks, P2 armor shredding, P3 burst ability. Smash Cat (Maine Coon) [Late 850] P1 heavy swats (Smash), P2 shockwave knockback, P3 anti-blimp stomp.
HUNTERS: Sniper Cat (Siamese) [Mid 400] P1 range to global, P2 damage + Crippling Shot, P3 bounty cash (capped). Night Cat (Black Cat) [Mid 600] P1 detects Sneaky and grants detection to nearby cats, P2 piercing blades, P3 assassin burst (cannot instakill bosses or Behemoth). Sky Cat (Savannah) [Late 1,000] airborne patrol routes; P1 speed/fire rate, P2 bombing runs, P3 aerial fortress + screen-wipe ability.
MYSTICS: Fire Cat (Persian) [Mid 450] P1 range/pierce, P2 burning/embers on path, P3 meteor ring. Magic Cat (Sphynx) [Elite 1,600] P1 arcane bolts, P2 summoned allies, P3 time-slow ability. Storm Cat (Russian Blue) [Elite 1,400] Plasma; P1 chain lightning, P2 fast arcs, P3 screen-wide strikes + stun.
HELPERS: Gadget Cat (Manx) [Starter 250] P1 path traps, P2 sentries, P3 overclock buff for nearby cats + big trap that catches a blimp. Scholar Cat (Scottish Fold) [Mid 500] the knowledge-economy cat: P1 more cash per correct answer, P2 attack-speed/range aura, P3 extra retries + streak protection; ALL economic bonuses hard-capped in config (for example, total cash-per-correct bonus capped at +40%). Forest Cat (Norwegian) [Late 900] P1 thorn vines, P2 area damage scaling with enemy density, P3 buff aura + a capped restore-1-life ability (once per 10 waves, in config). Fisher Cat (Ragdoll) [Mid 450] P1 passive cash per wave, P2 higher passive cash, P3 emergency cash ability; HARD CAP: total passive income from all Fishers <= 15% of that wave's study budget B(n) (config); the simulator must prove that skipping every question with max Fishers is clearly worse than studying.
Rules: every damage type must be used by at least one cat; at least 5 cats must have detection upgrades (Dart P3 line, Night P1, plus three others) because Sneaky appears at wave 24; damage types and immunities must force mixed builds.
Placement and UI: see Section 14.
---------------------------------------------------------------------
## 11. THE STUDY SYSTEM
LOOP PER WAVE: Study Break -> Shop/Prep -> Combat -> Results. The shop is open any time outside combat (including before wave 1).
11.1 Questions per wave: Q(n) = round(5 + 15 x (n-1)/99): wave 1 = 5, wave 100 = 20. Boss waves ("Boss Exams") = Q(n) + 5 at 1.5x rewards. A full run is about 1,300 questions. "Study Intensity" (0.5x or 1.0x) is economy-neutral. Reward per question always rescales (Section 13) so a full wave pays the same total regardless of the number of questions.
11.2 Delivery: sets of 5; I may stop at any set boundary. Skipped/unanswered questions pay nothing, don't change mastery, and prevent a Perfect Wave. Skipping everything is allowed (pop income only; economically punishing). A question appears at most once per wave and never within 3 waves of its last appearance; the cooldown shrinks automatically (down to 0) if a deck is ever too small to satisfy it (rare given the 100-question minimum). Show topic (and tier if present) before the question. After answering, ALWAYS show the correct answer and the explanation if present, right or wrong.
11.3 ANSWER FORMAT = THE DECK TYPE (chosen before upload; locked per save; there is no mixed mode and no auto-filled wrong answers):
- Multiple Choice deck: options A, B, C, D (1 correct + 3 wrong); positions shuffled with the seeded questions stream; keyboard A-D or 1-4; large tap buttons on phones.
- Flashcard deck: show the question, a Reveal button, then thumbs up (got it) or thumbs down (missed). No typing. Self-graded, so it pays 0.75x; 50/50 is unavailable.
11.4 One-shot: the first answer is final. Wrong = no cash. The question is re-queued as a "Redemption" question within the next 3 waves, paying 1.5x (replaces the freshness multiplier; no stacking).
11.5 Wager: once per wave I may flag one question before seeing its prompt (only topic and tier shown): 2x on correct, 0 on wrong. Second Wind cannot be used on a Wager.
11.6 Lockdown: 4 wrong in a row (config; skipped questions neither count nor break the count) means I must correctly answer 2 easier remedial questions (one tier lower if the deck has tiers; otherwise the questions with my highest lifetime accuracy; no cash; they count for mastery) or take -20% tower fire rate for the next wave. The counter resets after Lockdown or any correct answer.
11.7 Power-ups (one-time use, consumed when used): Second Wind (retry the same question once; the retry pays 50%; preserves cash streak, in-wave streak multiplier and Perfect Wave status, but mastery still records the FIRST attempt as wrong; for flashcards it re-queues the question at the end of the current set), 50/50 (Multiple Choice only; removes two wrong options), Hint (only available on questions that have a hint field; otherwise the button is disabled). Assisted correct answers (50/50 or Hint) pay 75% and are mastery-neutral. The BANK holds max 5; at most 3 may be used per wave's study break. Earning: (a) Perfect Wave = +1; (b) Study Checkpoint every 10 waves (config; test 5) with accuracy >= 80% over those waves = +1 (skips count as wrong). Overflow when the bank is full converts to a small cash bonus (config). In-wave streak multiplier: +5% per consecutive correct, cap 1.5x.
11.8 Question selection: per break about 25% unseen, 60% learning (seen, not mastered; prioritize recent misses and Redemptions), 15% mastered-maintenance, subject to the LEARNING CAP: at most L questions (config; default 150) may be in "learning" at once; when the learning count reaches L, no unseen questions are introduced until some are mastered (that share goes to learning). Unseen questions are introduced in a seeded shuffled order by default, or in deck order (setting), and respect Study Focus. Mastered questions stay in the maintenance pool so they keep being rechecked; a mastered question answered wrong returns to learning. This lets any deck from 100 to 5,000 questions be fully used while mastered / learning / unseen is tracked for every question. If the deck has at least 3 distinct tier values, also mix difficulty by wave band (about 70% matching, 20% one lower, 10% one higher; fall back gracefully); otherwise ignore tiers. Use the seeded questions stream.
11.9 NO TIMERS. A stopwatch records how long each answer takes (paused when the window loses focus), shows the last 3 times in a small corner panel, and stores a rolling average per question. It never affects rewards or the simulation.
11.10 Difficulty: Easy 150 lives, Normal 100, Hard 50 (Hard no longer implies flashcards; answer format is a separate choice). Casual toggle (orthogonal): on game over, restart from the last 25-wave snapshot (25/50/75) with lives restored; Casual earns mastery normally but earns NO wave-milestone Path Keys or best-wave records.
11.11 "Report problem" button on every question: logs the question id, the exact text shown, my answer and an optional note into the save file; flagged items appear in the Study Report with an "Export flagged questions" button so the deck's owner can fix them.
11.12 Debrief screen after every run: every missed question with the correct answer and explanation, plus accuracy by topic.

---------------------------------------------------------------------
## 12. PROGRESSION
One save file belongs to one deck. Meters: Wave Progress per map = best wave / 100. Mastery % = currently mastered questions / valid questions in the deck.
- MASTERED = 10+ lifetime correct AND the last 5 attempts all correct (any answer format; assisted answers are neutral; a wrong answer resets the recent-5 streak, losing mastered status, but keeps the lifetime count). Minimum lifetime correct is a config value (default 10). Mastery persists across runs.
- Mastery milestones at 25 / 50 / 75 / 100% (permanent once reached, even if the % later dips; checked immediately, including mid-run). Each grants a bundle worth more than a single streak power-up: starting power-ups at the beginning of every run (1 / 2 / 3 / 4, replacing the previous tier), ONE run perk (4 perks per save, one per milestone; effect lasts one run; equip up to 3 per run), and 1 Path Key. Perk templates (each with a conservative cap so studying stays essential): Head Start (+start cash), Safety Net (+1 Second Wind every 20 waves), Steady Paws (Lockdown needs +1 wrong), Keep Going (first wrong answer each wave keeps the streak multiplier), Extra Lives (+lives), Discount Day (first purchase each wave discounted), Quick Study (lower checkpoint threshold), Lucky Break (small chance a Perfect Wave grants an extra power-up). Assign names, strengths and caps in G0 and list them in DESIGN_STATE.md for my review.
- Wave milestones: best wave 20 / 40 / 60 / 80 / 100 on a map each grant 1 Path Key (non-Casual runs only), per map.
- Path Keys: Path 3 of a cat costs 1 key (config; permanent per cat). Needed for all 16 cats: 16. Available per save: 9 with Map 1 only (5 wave milestones + 4 mastery milestones) and 29 with all five maps (5 per map + 4 mastery). So in v1.0 I can unlock Path 3 on 9 of the 16 cats and must choose; all key counts are config values for me to review at the G0 gate.
- A new deck means a new save, with fresh keys and unlocks. That is by design.
- DECK UPDATES: stats are matched by question id. Added questions start unseen. Removed questions' stats are kept in an archive (inactive). Questions whose text changed keep their stats and are listed as "changed" in the load report.
- STUDY REPORT screen: per topic (or just overall when there are no topics): counts of mastered / learning / unseen, accuracy, slow answers (rolling average above twice the deck median), flagged problems, and the weakest topics and questions. A "Copy list" button copies a plain-text list of topics that need work, topics that are strong, and the missed/unmastered questions, so I can paste it elsewhere. Also a "review weak questions" browser (no cash).

---------------------------------------------------------------------
## 13. ECONOMY (all provisional; tune with the simulator)
Start cash 500. Wave study budget B(n) = 250 x 1.03^(n-1). Base reward per question = B(n)/Q(n) (using the capped Q). Per-question reward = base x tierMult (about 1.0/1.1/1.2/1.35/1.5; 1.0 when the deck has no tiers) x inWaveStreak (cap 1.5) x freshness (1.25 unseen/learning; 0.6 mastered, so mastered questions can't be farmed) x modeMult (Boss Exam 1.5, Wager 2, Redemption 1.5 in place of freshness, assisted 0.75, flashcard self-graded 0.75, Second Wind retry 0.5; Multiple Choice 1.0). A fully correct wave should pay roughly 1.0x-1.6x B(n); report the actual range. Question volume grows with the wave, so per-question rewards must NOT balloon. Pops pay per layer with the Section 9 degradation. Tower costs, sell rate, caps and the Fisher/Scholar limits are in config.

## 14. MAPS, PLACEMENT, HUD, ART (modeled on BTD6; I will attach 7 reference screenshots: structure and style reference ONLY, do not copy BTD6 maps, art, UI assets or names; draw original assets)
- PLAYFIELD: fixed logical 1600 x 900 units (provisional), scaled to fit; the shop/HUD sidebar is OUTSIDE the playfield. All positions, ranges and sizes use logical units.
- Each map (/data/maps.json) defines: one or more path splines with corridor half-width (provisional 28 units), entrance(s) and the Fish Stash exit (lanes may merge, split, cross; bridges over water allowed), blocked zones (polygons for bushes, furniture, ponds, crates, chimney, craters), and a buildable area of roughly 25-40% of the playfield (less on harder maps). Scenery is STATIC (no ambient animation).
- ENTITY SIZES: every cat has a footprint radius by class (Small 14, Medium 18, Large 24; provisional) separate from its range circle; every enemy has a hit radius; blimp-class enemies are visibly larger.
- PLACEMENT is valid only if the footprint is fully inside the playfield, does not touch the path corridor, does not touch any blocked zone, and does not overlap another cat. While placing, a ghost cat follows the cursor/finger with its range circle (green = valid, red = invalid); click/tap confirms; Esc/right-click cancels; selling frees the spot.
- HUD (like BTD6): lives (heart) and cash (coins) top-left; "wave n/100" and settings top-right; right sidebar with a two-column grid of cat icons with prices (red when unaffordable), an Upgrades button above, ability and fast-forward/play buttons below. Selecting a cat shows range circle, cost, sell value, upgrade tree with locks, targeting selector, ability buttons. Also show the power-up bank, in-wave streak, stopwatch panel, and a save button.
- ART PRODUCTION: create all art yourself as code-drawn vector graphics (SVG or canvas shapes) following the style below. List every sprite, tile and icon in /data/assets.json (an asset manifest with file/draw-function, size and anchor point) so better art can be swapped in later with no code changes. If your tools can generate images you may propose them, but code-drawn vector art is the default and must be complete at launch.
- ART: bright, readable 2D cartoon, simpler than BTD6: flat colors, thick outlines, NO drop shadows, static decorative scenery; gameplay objects (cats attacking, projectiles, rats) move normally. Colorblind-safe palette plus shape/pattern cues, scalable fonts, reduced-motion option. No sound.
---------------------------------------------------------------------
## 15. SAVE SYSTEM (FILE-BASED; NO ACCOUNTS, NO SERVER DATA)
Progress lives in a downloadable save file, like saving on an emulator.
- Title screen: "New Game" or "Load Save File" (file picker and drag-and-drop). If the loaded file contains an in-progress run, show "Resume Run".
- A SAVE button is available anywhere outside a combat tick (pause menu, Study Break, Shop, Results). Clicking it downloads one JSON file named whiskerwatch-save-<deckId>-YYYY-MM-DD-HHMM.json. Show an "unsaved progress" indicator, warn before closing the tab if there are unsaved changes, and offer a "remind me to save every N waves" setting (default 5). Optional checkbox "Embed my deck in the save file" (default on when the deck is under 1 MB; otherwise off with a note that the deck must be uploaded again) so continuing can need only the save file.
- Do NOT use localStorage/IndexedDB for progress. The file is the source of truth. Keep progress in memory while playing. The ONLY exception is an optional Settings toggle "Crash recovery on this device" (default OFF): one rolling snapshot in localStorage, offered at next load as "Recover unsaved session", never a substitute for saving the file (it exists because iPhone Safari can discard background tabs).
- The file contains: formatVersion, gameVersion, deck binding (deckId, deckType, deckVersion, deckContentHash, optional embedded deck), profile (per map best wave; per-question stats keyed by question id, stored ONLY for questions that have been seen so the file stays compact even for 5,000-question decks (unseen questions have no entry): lifetimeCorrect, last-5 results, lastSeenWave, rolling average time, flags; milestones earned; Path Keys earned and spent; unlocked Path 3s per cat; perks unlocked and equipped; settings), currentRun (or null) with the full snapshot (seed, RNG stream states, map, difficulty, answer format, casual flag, wave, study state, cash, lives, power-up bank, streaks, placed cats with upgrades/targeting/ability cooldowns, active enemies with track progress/HP/modifiers), and Casual snapshots (waves 25/50/75).
- DECK-SAVE MATCHING on load: if a deck is provided and its deckId or deckType differs from the save's, refuse with a clear explanation and offer to start a new save for that deck. If deckId matches but the content hash differs, continue by matching question ids and show an "added / removed / changed" report. If no deck is provided and none is embedded, ask for the deck.
- RESUME GUARANTEE: loading the save together with its deck (or the embedded deck) must restore EVERYTHING: per-question stats (mastered/learning/unseen counts identical to before saving), best waves, milestones, Path Keys earned and spent, unlocked Path 3s, perks, settings, and any in-progress run. After loading, show a "Progress restored" summary (questions seen and mastered, best wave per map, keys, perks, run in progress). Include an automated test: play, save, reload the page, load save + deck, and assert identical state.
- Validate on load (schema and checksum), show clear errors, never overwrite data silently, and support version migration. Mid-wave save/resume must work (serialize all active entities). A separate "Export Study Report" button copies/downloads the report.
- Must work identically on desktop and phone browsers (downloads go to Files/Downloads; uploads via the file picker).

---------------------------------------------------------------------
## 16. TUTORIAL, UI SCREENS, MOBILE
Tutorial map "Kitten Yard": ~10 waves, teaches placing and upgrading a cat, answering a set in both formats, power-ups, Lockdown, wagers, loading a deck and saving; uses its small built-in question set; touches no stats, mastery, keys or rewards.
Screens: Title (New/Load), Deck Type Picker (Flashcards or Multiple Choice, with template download/copy and "Copy AI instructions"), Deck Upload and Validation Report, Deck Tools (Import / Convert / Split), Setup (map, difficulty, Casual, study intensity, Study Focus, perks, starting power-ups), Map Select (wave progress, mastery, milestone badges), Game HUD, Study Break overlay (set progress, wager toggle, power-up buttons, answer/explanation panel, stopwatch), Shop/Prep, Combat, Results, Debrief, Study Report, Cat Index and Upgrade Tree (all 16 cats from the start, grouped by shop tab, price bands, Path 3 lock status), Settings (study intensity, speed, accessibility, save reminders).
Mobile: canvas scales to any screen; tap targets at least 44 px; tap-to-place with a ghost preview; collapsible sidebar; no hotkey-only or hover-only actions; no pinch-zoom conflicts; landscape layout; study overlay full-screen on small screens; A-D options as large tap buttons. TARGET: mobile web on iPhone Safari (no native app, no App Store). Use dynamic viewport units and safe-area insets (notch and home bar), disable double-tap zoom and rubber-band scrolling on the game canvas, support portrait and landscape (study screens work in portrait; combat prefers landscape with a rotate hint), and make save downloads and file uploads work through the iOS share sheet and Files app. README-DEPLOY.md explains saving to and loading from Files on iPhone and Add to Home Screen.

---------------------------------------------------------------------
## 17. BALANCE SIMULATOR, TESTING, DEPLOYMENT
- Headless Node simulator: deterministic and seeded. Simulate full 100-wave runs with reference strategies (greedy cheapest-DPS, balanced mix, crosspath specialist) at answer accuracies of 60%, 80%, 95%, with deck sizes of 100, 300 and 5,000, and for both deck types (Multiple Choice and Flashcards). Per wave output: cash (study vs pops), cat DPS vs enemy HP, leaks/lives lost, time-to-kill, boss time-to-kill. Auto-flag dead zones, runaway waves (impossible at 95%), trivial waves (no pressure at 60%), the Scholar/Fisher exceeding caps, perks that make studying optional, small-deck repetition problems, and cat-band balance (each band should be the best purchase in some wave range; Elite cats must not be efficient before about wave 20 at 80% accuracy). Suggest config changes and re-run.
- DEV MENU (hidden toggle): jump to any wave, add cash, set simulated accuracy, grant power-ups, force boss waves, show deck/mastery state, load a demo deck.
- Automated tests: replay determinism, save/load round-trip (including mid-wave), deck-save matching cases, validator and importer fixtures, placement rules, crosspath rules, perk caps, A-D shuffle determinism, deck-size boundaries (99, 100, 5,000, 5,001), learning-cap behavior, Split and Convert tools, and save-file size with a 5,000-question deck.
- Human FEEL PASSES (I play and report): after G1, after G3, and at the end. After each, give me a short form: too easy / too hard / boring / confusing / bugs, per map and wave range. Do not continue until I report.
- Test on Safari and Chrome on Mac and on iPhone Safari (the primary mobile target), including the save/load round trip through the iPhone Files app.
- DEPLOY PACKAGE: a static production build in /dist that works by double-clicking index.html (bundle the code so there are no file:// module-loading problems), uses only relative paths, needs no server, includes a web app manifest so the site can be added to a phone's Home Screen, and a README-DEPLOY.md with exact step-by-step instructions to publish on Netlify Drop (drag the /dist folder) and on GitHub Pages. Saves are files, so the site's address does not matter. Do not deploy anything yourself unless I have connected a hosting account and say so.

---------------------------------------------------------------------
## 18. BUILD PHASES (stop after each and wait for "next")
PART A: A1-A5 (Section 7).
PART B:
- G0 [Extra high] [GATE]: architecture, file tree, all JSON schemas, config.json (including all Path Key counts), balance spec, DESIGN_STATE.md skeleton, then a DESIGN REVIEW DOCUMENT for my approval: all 16 cats (role, price band, the three path names, and all 15 upgrades each with cost, effect and description), the 4 perks (names, strengths, caps), the enemy chain with the blimp-class and boss list (HP, immunities, mechanics), the economy numbers (B(n), rewards, costs), the Path Key counts, and layout sketches for the Tutorial and Map 1. Wait for my approval or edits before G1. Later phases must match the approved document; tell me before deviating.
- G1 [Extra high/High]: playable slice: Map 1 (Sunny Backyard), waves 1-20, 4 cats spanning price bands (Dart Cat, Sniper Cat, Bomb Cat, Ice Cat), deck upload with the validation report, both deck types (Flashcards and Multiple Choice) with their template files, the full study loop (sets of 5, one-shot, Redemption, Lockdown, Wager, power-ups, stopwatch, Report problem), mastery tracking, the full file save/load with deck-save matching, demo decks, and a first simulator pass. Then FEEL PASS 1.
- G2 [High]: all 16 cats and 240 upgrades (deliver in batches of 2-3 cats, stopping at file boundaries), crosspath rules, targeting, abilities, price bands, shop tabs, Path 3 locks.
- G3 [Extra high]: all enemies, modifiers, blimp-class, the 100-wave table, 5 bosses with skull phases; run the simulator and tune the economy. Then FEEL PASS 2.
- G4 [Medium]: Tutorial map (Kitten Yard), Map 1 finishing touches (full 100-wave play), and the data-only map-extensibility test.
- G5 [Medium]: meta layer: milestones, Path Keys, perks and loadout, Study Report, Study Focus, Debrief, difficulty modes, Casual snapshots, settings.
- G6 [Medium]: integrate Part A fully (importer screen, report screen), iPhone Safari polish, final full-run simulation and test pass.
- G7 [Medium]: deploy package (Section 17). FINAL FEEL PASS.
Release plan: v1.0 = the Tutorial and Map 1, all 16 cats and 240 upgrades, all enemies/modifiers/blimp-class, the 100-wave table, 5 bosses, the full deck system, study loop and save system, deployed. POST-v1.0 (Phase M, one map at a time, each with its own approval gate and test): add Maps 2-5 (paths, scenery, placement zones, art) using data only. Later, possibly more enemies and cats. Phases are only the build order.

---------------------------------------------------------------------
## 19. ACCEPTANCE CHECKLIST (run at the end of every phase)
[ ] Runs with no console errors or warnings
[ ] Deterministic: same seed + same inputs = identical results (replay test)
[ ] No Math.random or clock use in sim code
[ ] All tunable numbers from config.json; all content from JSON or uploaded decks
[ ] No subject-specific terms in the game theme
[ ] Study rules match Section 11 exactly (sets of 5, one-shot, cooldown, Redemption, Lockdown, power-up bank/limits, streak rewards, no timers, stopwatch only, Multiple Choice A-D and Flashcards)
[ ] Mastery matches Section 12 exactly (10 lifetime correct + last 5 correct; wrong resets the recent streak)
[ ] Validator catches every fixture error and never crashes; deck text is never rendered as HTML
[ ] Deck size range enforced (100 minimum, 5,000 maximum, Split tool offered); deck type locked per save; learning cap keeps large decks teachable
[ ] Save file round-trips (including mid-wave); deck-save matching works; no progress stored in the browser
[ ] RESUME GUARANTEE test passes (save + deck restores identical state); works on iPhone Safari
[ ] A dummy extra map loads from data alone (extensibility test)
[ ] All 16 cats purchasable from the start; cost bands applied; Path 3 locks and keys correct
[ ] Placement rules enforced; no overlap, no path/blocked-zone placement
[ ] 60 FPS stress test met; works on desktop and phone
[ ] Simulator ran; flags addressed or documented
[ ] DESIGN_STATE.md updated; test instructions provided

---------------------------------------------------------------------
WAIT FOR MY INSTRUCTION. When I say "RUN PART A", begin A1. When I say "RUN PART B", begin G0.
