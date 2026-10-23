# Acceptance ledger
Feature status: NOT IMPLEMENTED / IN PROGRESS / PASS / FAIL / MANUAL. Capability status is separately VERIFIED / UNVERIFIED / MISSING / BLOCKED. Fixture and preparation results do not mark game features PASS.

| ID | Feature and concrete evidence required | First checkpoint | Status |
| --- | --- | --- | --- |
| A01 | Actual Cloud repo/read/persistence/tool evidence; owner approval recorded | M0 | UNVERIFIED |
| G01 | Browser imports file/pasted JSON; all structural fixtures handled; no factual test | M1-M2 | NOT IMPLEMENTED |
| G02 | 1/19/30/99/120/5000 questions playable, empty/5001 rejected; repetition does not double-pay | M2 | NOT IMPLEMENTED |
| G03 | Exact deterministic state, independent RNG, fixed tick, normalized replay test | M1-M2 | NOT IMPLEMENTED |
| G04 | Mid-flight/projectile/child-split save; continue N ticks identical after reload | M2 | NOT IMPLEMENTED |
| G05 | Save selected/unsubmitted, submitted and feedback-stage question; same shuffle/counters, one reward | M2 | NOT IMPLEMENTED |
| G06 | Manual start, no questions in combat, buy/place/upgrade/sell/target/ability during combat | M2 | NOT IMPLEMENTED |
| G07 | Every 16x3x5 upgrade exercised by effect assertion; invalid crosspaths/cash/placement rejected | M3 | NOT IMPLEMENTED |
| G08 | All enemy counters/children/modifiers/boss phases with per-event reward accounting | M3 | NOT IMPLEMENTED |
| G09 | Actual-engine seeded accuracy scenarios with per-wave purchases, cash, leaks and clear outcomes | M3-M5 | NOT IMPLEMENTED |
| G10 | 5 distinct maps + tutorial; each Quick/Full/difficulty selectable and smoke-tested | M4-M5 | NOT IMPLEMENTED |
| G11 | Changed/removed/added deck questions, stats archives and JSON report reimport without run cash | M2-M4 | NOT IMPLEMENTED |
| G12 | Malformed/oversized/future saves rejected transactionally; nested state schemas and migrations | M1-M5 | NOT IMPLEMENTED |
| V01 | Owner approves base/tier3/tier5 cat, modifier strip, HUD/study view and real map screenshot | M2 | MANUAL |
| V02 | All final art original/coherent; every upgrade visible; no reference assets inside dist | M4-M5 | NOT IMPLEMENTED |
| U01 | Keyboard/touch, readable labels, no hover-only control, phone layout/safe areas | M4-M5 | NOT IMPLEMENTED |
| T01 | Actual browser download->fresh page->upload/paste->resume end-to-end | M2-M5 | NOT IMPLEMENTED |
| T02 | Real Mac Safari/Chrome and physical iPhone Files save/load; emulation labeled separately | M5 | MANUAL |
| T03 | Warm-loaded offline session, no gameplay network dependencies; static production build | M5 | NOT IMPLEMENTED |
| T04 | Dense-wave benchmark with device/runtime/FPS/frame-time and entity count evidence | M5 | NOT IMPLEMENTED |
| R01 | Owner final playtest approval; publishing permission separately recorded | M5 | MANUAL |

Tests must cover all 30 map/mode/difficulty combinations at least through startup/placement/save smoke tests; complete-run balance strategies can start on representative easiest/hardest maps, then extend to every map. Include 0/60/80/95% accuracy, weak and strong strategies, economic-cat caps, low-deck repetitions and endgame affordability. Report real results rather than assuming a greedy bot represents optimal human play. No blanket 'balanced' conclusion from income formulas alone.
Each PASS includes commit, command, environment, exit code and inspectable evidence; a screenshot proves only the state it displays. Preserve failures and pending human tests. Preparation check evidence lives in reports/PREPARATION_VERIFICATION.md, not in game-feature statuses.
