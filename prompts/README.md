# Codex prompt index

Use these in order as needed. They are instructions for the later Codex task, not evidence that work has already run.

| Prompt | When to use |
| --- | --- |
| [00_WORKSPACE_CHECK.md](00_WORKSPACE_CHECK.md) | Prepare/check the environment without implementing the game |
| [01_START_PART_A.md](01_START_PART_A.md) | Start A1 and the deck-system build |
| [02_CONTINUE.md](02_CONTINUE.md) | Approve moving to the next ordinary phase or resume interrupted work |
| [03_START_PART_B.md](03_START_PART_B.md) | Start G0 after Part A is complete |
| [04_FIX_PLAYTEST_FEEDBACK.md](04_FIX_PLAYTEST_FEEDBACK.md) | Give concrete playtest feedback and request fixes before progression |
| [05_RELEASE_AUDIT.md](05_RELEASE_AUDIT.md) | Check claims, content, graphics, playability, portability and complete scope |
| [06_ADD_REMAINING_MAPS.md](06_ADD_REMAINING_MAPS.md) | Begin or continue the four remaining map phases |

For a new Codex session, always identify `terminatorz24/whisker-watch` and the branch containing the most recent work. A fresh task must read `DESIGN_STATE.md` rather than assuming access to another chat.

The owner can use ordinary `next` in an existing conversation once a phase is completed. `next` does not replace explicit G0 design approval or the required playtest feedback. If the owner changes that workflow later, record the new instruction and apply it prospectively.
