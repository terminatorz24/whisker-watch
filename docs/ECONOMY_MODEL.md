# Economy hypotheses and reproducible evidence
WW-HANDOFF-3. Numbers are starting hypotheses, NOT final combat balance. The old handoff claimed Monte Carlo results without a checked-in reproduction script. This revision replaces that evidence with scripts/economy-analysis.mjs and actual deterministic output in reports/economy-planning.json.

## Method
Run node scripts/economy-analysis.mjs. A finite-state distribution tracks correct streaks0..20 and computes expected study payouts under independent answer accuracy. It is not Monte Carlo or a combat simulator. It assumes every wave hypothetically clears and all planned enemy units pay, excludes starting cash, purchases, sale losses, leaks/failure, economic cats and strategy. Conditional income is not a win-rate or affordability claim.

## Starting rules
Full100 waves:5/7/9/11/12 questions across successive20-wave bands,+3 at waves20/40/60/80/100 =895 attempts. Quick40:2 through20,3 after,+2 at10/20/30/40 =108. Small decks repeat automatically; these are attempts, not required unique entries.
B(n)=250*1.03^(n-1) Full, boss multiplier1.20; Quick250*1.04^(n-1), boss1.15. Correct base=B/Q; wrong/skip0. Apply streak AFTER a correct increment:3-4 +5%,5-9 +10%,10-19 +15%,20+ +20%. Wrong/skip resets. This multiplies the answer payout, not the cash balance.
Full-clear enemy pool=.37B, clear-wave bonus=.06B. Combat pays irreversible defeat/layer events with unique receipts. Precompute economic lineage budgets; descendants, Regrow, boss adds/resurrection and repeated damage must not mint extra money. Finite boss-add budgets and leaked/unremoved-layer handling must be defined and tested in the real engine.
Scholar extra <=10%B from correct answers only; Fisher extra <=5%B from actual combat payouts. No unrestricted passive farms. Buying/selling cannot recalculate previous rewards.
Start650; Easy/Normal/Hard lives200/150/100, prices.85/1/1.08, speeds.9/1/1.15. Sell70% of actual total paid; one explicit integer-subunit rounding rule. Tune all numbers together with real tower costs and threat.

## Actual conditional calculation
| Mode | Accuracy | Expected study cash | Conditional total | Study share |
| --- | --- | ---: | ---: | ---: |
| Quick |60%|14864.73|25261.63|58.8%|
| Quick |80%|20479.10|30876.00|66.3%|
| Quick |95%|25983.22|36380.11|71.4%|
| Full |60%|94585.92|160721.40|58.9%|
| Full |80%|130405.58|196541.06|66.4%|
| Full |95%|165974.91|232110.40|71.5%|
At0% study income is0 and hypothetical combat+clear is43%B. That does NOT prove an answer-skipping player can clear later waves. At80% studying supplies roughly two-thirds of modeled income, supporting only an initial funding mix.

## Required actual-engine evidence
Use the SAME deterministic engine as the game, not a guessed DPS spreadsheet. Test0%,25% random guessing,60%,80%,95%,100%; both lengths/difficulties; several seeds; cheap/mixed/specialized and weak strategies; every map's constraints. Test1/19/30/99/120/5000-entry decks, duplicates, clustered misses and long streaks. Log per-wave income sources, purchases, upgrades, cash/lives/leaks, boss state and duration, counter availability, no-study exploits, rounding and save-reload double-pay.
At M2 measure session length. Ten seconds per answer means18 minutes Quick or149 minutes Full studying alone; combat and feedback add time. Adjust recorded tuning values rather than secretly reducing study emphasis. A bot losing does not prove every build is impossible; a bot winning does not prove fun. Store seeds, config/content hashes, actual commands and outputs. Gameplay balance remains NOT IMPLEMENTED until those tests run.
