# Combat catalog and wave-design contract
This is a requirements brief, not implemented content. Codex must fill concrete data tables in M1 and validate effects/costs before expanding beyond the vertical slice. Baseline is 16 types/240 upgrades; optional candidates are a separate decision.

| Cat | Distinct role | Path A / B / C direction |
| --- | --- | --- |
| Dart | Low-cost reliable single target | cadence / multi-hit-pierce / detection-critical shots |
| Yarn | Slow and area control | stronger slow / damage-over-time / group tether ability |
| Ice | Freeze and vulnerability | freeze uptime / brittle damage support / area frost ability |
| Bomb | Splash explosions | blast radius / clusters / stun and burst ability |
| Blitz | Fast sustained attack | attack rate / armored-target damage / timed overdrive |
| Smash | Heavy short-range hits | heavy damage / shockwave displacement / giant-enemy stomp |
| Sniper | Long-range precision | global reach/cadence / crippling giant damage / marked-target support |
| Night | Sneaky counter and blades | detection aura / piercing blades / bounded assassin burst |
| Sky | Air patrol attack | flight/shot cadence / bombing runs / aerial burst |
| Fire | Burns and area denial | flame reach / persistent embers / meteor ability |
| Magic | Arcane and summons | bolts / limited summons / time-slow ability |
| Storm | Chain/plasma area damage | chain jumps / concentrated arcs / storm ability |
| Gadget | Engineering/traps | path traps / sentries / bounded tower buff |
| Scholar | Active-learning support | correct-answer cash / range-rate aura / correct-streak reward support |
| Forest | Vines and support | thorns / density-limited area damage / aura and limited life recovery |
| Fisher | Combat-linked economy | bounty efficiency / target marking / limited combat bonus ability |

For EACH of 240 upgrades record stable ID, tower/path/tier, prerequisite/crosspath limits, actual cost by difficulty rule, exact effect primitive and parameters, stacking/caps/immunity interactions, visual change and behavior-test ID. Tiers 1-2 specialize stats; 3-4 introduce material behavior; tier 5 is a substantial identity change. No unnamed 'same as previous' placeholder. No economy path may pay for unanswered questions or mint passive unlimited cash. Three candidates Ricochet/Mortar/Harbor are deferred unless the owner approves a concrete expansion.

Define base tower footprint/range/attack cadence/damage type/projectile/pierce/targeting and ability cooldown. First=max route progress, Last=min, Close=min distance, Strong=max effective remaining threat; ties by stable entity ID. Resolve target eligibility/detection before attack; immunity, vulnerability, damage/layer transitions and child/event/reward order must be explicit. Determine whether effects hit at impact vs fire and preserve it in state/replay.

Every enemy entry specifies stable ID, health/layers/children, speed/path rules, leak loss, modifier compatibility, detection, damage immunity, slowdown/stun restrictions, economic-pop-unit allocation and art states. Boss adds/resurrections/Regrow cannot create repeatable reward loops. Boss phase thresholds and event timing are deterministic. Describe counters and ensure they can be afforded before their introduction.

Author Quick 40 and Full 100 wave tables as static data. Each has explicit spawn groups/ticks, modifiers, boss schedule, expected economic units and a counter-introduction note. Use original numbers rather than blindly copying another game's economy. Map route lengths/available land and timing must be included in balancing. Report playtime and affordability, not just theoretical DPS. Baseline numeric values in docs/ECONOMY_MODEL.md are starting hypotheses.
