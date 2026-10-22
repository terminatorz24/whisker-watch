# PROVISIONAL ECONOMY ANALYSIS — NOT ACTUAL GAME BALANCE TESTS
Date: 2026-10-22. All monetary values are initial modeling assumptions pending implementation and engine-level testing.

## Goal
Defeating enemies should generate enough in-wave cash to make mid-wave strategy meaningful. Answering questions must remain the dominant income source. No unlimited passive farming. Correct answers should provide a meaningful cumulative advantage while a player with lower accuracy can still learn and attempt waves.

## Study frequency
Full Campaign 100 waves: Q=5 for 1-20, 7 for 21-40, 9 for 41-60, 11 for 61-80, 12 for 81-100; +3 questions on waves 20/40/60/80/100. Total 895 scheduled answers.
Quick Run 40 waves: Q=2 for 1-20, 3 for 21-40; +2 on waves 10/20/30/40. Total 108 scheduled answers.
The user prefers more than 3/4/5 questions in the full campaign. Both schedules are adjustable after real session-length playtests. No countdown between waves or answering during combat.

## Starting wave budgets
Full: B(n) = 250 * (1.03 ** (n-1)) * (1.20 for boss waves, otherwise 1).
Quick: B(n) = 250 * (1.04 ** (n-1)) * (1.15 for boss waves, otherwise 1).
These are cash budgets, not rewards automatically given to the player.
Base value per correctly answered question = B(n)/Q(n). Incorrect or skipped gets zero. Total answer income may exceed B because of a bounded correct-answer streak and eligible Scholar effects.
Streak multiplier on each correct answer: 1x until streak 3, 1.05x at 3-4, 1.10x at 5-9, 1.15x at 10-19, 1.20x at >=20. A wrong or skipped question resets streak. The streak is global to the current run and persists across breaks, and is stored in saves.
Target combat pop pool per wave, if all planned pop units destroyed = 0.37 * B(n). Target round-clear bonus = 0.06 * B(n). Actual pop revenue depends on real kills; no cash for leaks or repeated processing of child spawns; no infinitely farming boss adds. End-of-wave bonus is earned only when the wave clears. The numerical pop ratios will be tuned to static wave composition and tower costs.

## How combat income is calculated without exploits
Compute the static round's total economic-pop-unit budget offline from the actual enemy chain, including descendants and boss/minion events. Assign payouts to irreversible pop/removal events so each is paid once, and cap boss/minion special income against the statically allocated pool. Avoid one coin per boss HP damage tick and no repeated payout when a weak rat spawns again. For a given wave, full kill yields the pool, while leaks yield less. Never inflate income when enemies are spawned due to abilities or a vulnerability effect.
Any economy-enhancing cat stacks under a shared bound. Initial test proposal: total Scholar extra cash <= +10% of the base per-wave study pool; total Fisher bonus <= +5% of the base per-wave pool, earned only from actual combat pops and never as unbounded passive money. Implement and test concrete effect paths.

## Preliminary calculation — reproducible assumptions
Numerical study model only (no tower combat), using independent correct probabilities of 0.60, 0.80, 0.95; 2,500 seeded Monte Carlo sessions per mode and accuracy. On every modeled wave, it ASSUMES all enemies are killed and every round is cleared, so pop/clear amounts are upper bounds, not forecasts of player success. Does not include starting cash, tower purchases/sell losses, special cat bonuses, missed boss clears, or retry mechanics. Study streak persists across waves; boss budgets already include modest increase.

| Mode | Accuracy | Study earnings avg | Full-clear pop money | Wave-clear money | Max modeled gross earned | Study share |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Full | 60% | 94,704 | 56,907 | 9,228 | 160,840 | 58.9% |
| Full | 80% | 130,445 | 56,907 | 9,228 | 196,580 | 66.4% |
| Full | 95% | 165,967 | 56,907 | 9,228 | 232,102 | 71.5% |
| Quick | 60% | 14,863 | 8,946 | 1,451 | 25,260 | 58.8% |
| Quick | 80% | 20,485 | 8,946 | 1,451 | 30,882 | 66.3% |
| Quick | 95% | 26,009 | 8,946 | 1,451 | 36,406 | 71.4% |

Full model base pool including boss multipliers totals ~153,803. Quick totals ~24,179. Under 0% answers and complete hypothetical wave clears, study rewards and streaks are zero and only ~43% of the base pool is accessible: this is an upper bound, not evidence the player can actually clear hard rounds without answering.

Selected Full checkpoints, rounded:
| Wave | Questions | Pool B | Base per correct | Full-clear pop pool | Clear bonus |
| 1 | 5 | 250 | 50 | 92 | 15 |
| 20 boss | 8 | 526 | 66 | 195 | 32 |
| 40 boss | 10 | 950 | 95 | 352 | 57 |
| 60 boss | 12 | 1,716 | 143 | 635 | 103 |
| 80 boss | 14 | 3,099 | 221 | 1,147 | 186 |
| 100 boss | 15 | 5,598 | 373 | 2,071 | 336 |

## Initial difficulty parameters — test, do not assume balance
Easy: 200 lives; 0.85x tower/upgrade costs; 0.90x enemy speed.
Normal: 150 lives; 1.00x costs; 1.00x speed.
Hard: 100 lives; 1.08x costs; 1.15x speed.
All begin with 650 cash. Changing study rewards by difficulty is discouraged initially; tower price, speed, enemy tuning and lives already vary.
Starting sell refund proposal: 0.70 * (actual base tower cost paid + all upgrade costs paid), including purchase difficulty adjustments. No relocation without selling. Cash cannot be duplicated by upgrade/sell cycles.

## Why these are NOT a validated economy
The numbers above do NOT include enemy health, enemy speed, routes, DPS, crowd control, tower price curves, accessibility of economic towers, boss phases, wave duration, leaks, end-state cash accumulation or human strategy. They cannot prove fairness or survivability. A price/health scenario can defeat an 80%-correct player despite plenty of cumulative theoretical cash.

## Mandatory engine-balance validation for Codex
1. Generate static Quick and Full waves and their true economic pop units. Verify maximum pop payouts sum to the configured pool and no reward on leaks, duplicated children, respawns or repeatedly damaged boss HP.
2. Same deterministic engine in live game and batch simulator. Evaluate 0%, 60%, 80%, 95% correct. Include incorrect streak breaks and repeat-question scheduling. Include 20-entry, 30-entry padded/repetitive, 100-entry and 5000-entry decks.
3. At least three strategies: early cheap build, mixed counters, late-game specialization; at least one deliberately suboptimal strategy. Every difficulty, Quick and Full; representative easiest and hardest maps.
4. Report per wave: earned answer/pop/clear cash, cash remaining, towers/upgrades purchased, estimated/actual DPS vs effective enemy threat, leaks/lives lost, defense time, bosses defeated, and efficiency of Scholar/Fisher.
5. Flag dead zones where even skilled players lack a feasible defense, triviality at low accuracy, runaway banked cash, too-slow/too-fast gameplay, economic-tower exploits, inability to afford needed detection, and disproportionate duplicate-deck advantage.
6. Tune only config and authored content, document before/after run results, and inspect gameplay to confirm cash and enemy pacing FEEL fair. Do not claim PASS until tested.
7. Add robust deterministic replay tests and property tests of total pop income and 70% resale.

## BTD6 reference distinction
BTD6 uses pop/round revenue and reduced late-round pop income. Whisker Watch can use this ECONOMIC PRINCIPLE but does not import proprietary balance tables, map art or unique game expression. Reference background:
- https://bloons.fandom.com/wiki/Rounds_%28BTD6%29
- https://bloons.fandom.com/wiki/Standard_Mode
- https://store.steampowered.com/app/960090/Bloons_TD_6/
