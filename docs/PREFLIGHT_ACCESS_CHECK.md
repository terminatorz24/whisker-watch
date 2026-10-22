# Whisker Watch — MANDATORY PRE-BUILD ACCESS AUDIT
Added at the owner's request on October 22, 2026. This document controls the INITIAL Codex Cloud build launch.

**Do not implement the game merely because the owner submits the startup prompt.** Run this audit first, give the owner the results, and wait for their explicit response APPROVE BUILD. Only then begin autonomous implementation. No other request, old instruction, or timeout silently releases the gate.

## A. Required checks from the ACTUAL Codex environment

1. **Correct GitHub source:** verify repository terminatorz24/whisker-watch, current branch, HEAD, V2 marker in AGENTS.md and master. The default main branch has the old draft. Safely switch to codex/workspace-setup-2026-10-22 or an implementation branch descended from it. Never force-reset, discard changes or change the default branch.
2. **Read access to all design files:** actually open and read the full canonical specification, AGENTS.md, DESIGN_STATE.md, docs/DECISIONS.md, docs/ECONOMY_MODEL.md, docs/DECK_FORMAT.md, docs/AI_FORMATTER_PROMPT.md, docs/ART_PIPELINE.md, docs/ACCEPTANCE_MATRIX.md, docs/CODEX_WORKSPACE_SETUP.md, prompts/01_START_AUTONOMOUS_BUILD.md, and templates/multiple_choice_template.json. Inspect all missing-file failures and contradictions.
3. **Reference images:** verify the thirteen files listed in references/images/extraction-manifest.json, preferably by SHA-256. Visually open representative map/gameplay/tower/selection screenshots. Say explicitly that the full original 71-page reference PDF is NOT committed, and ask the owner whether they want to supply it. The checked-in thirteen can be sufficient if the owner agrees; never pretend the full archive is present.
4. **GitHub write access:** verify the ability to CREATE an implementation branch, COMMIT and PUSH to the intended repository without modifying main. Read access or a dry-run push alone is not proof. A safe isolated test is a tiny harmless inert text commit on a disposable preflight branch, pushed and verified remotely, then safely cleaned up if permitted. Do not delete others' branches, change permissions or publicize data. If a safe real push cannot be performed, mark write access UNVERIFIED and ask the owner to address it before implementation.
5. **Development capabilities:** check git, Node, npm, Python, shell execution, filesystem read/write using a harmless temporary local file, test-running ability and package-registry access as actually configured. Run bash scripts/codex-setup.sh and report actual exit code. Do not install game dependencies, create a source scaffold, write gameplay code or generate a production build before approval.
6. **Input schema check:** verify that the checked-in JSON template parses, has multiple_choice type, stable IDs, one correct answer and exactly three distinct distractors, and a source-grounded explanation. Its short example is not a playable deck. Confirm the current spec excludes previous flashcard/path-key/mastery/achievement systems and includes five maps, both run modes, before-wave questions, combat-time shopping and exact one-file JSON saves.
7. **Original art production:** confirm a working toolchain to AUTHOR original game-ready SVG/Canvas/PNG assets in the Codex project even if AI-image plugins are unavailable. Check ability to view images and render or inspect screenshots, if possible. This art fallback is REQUIRED; external image-generation service is not.
8. **Connected apps:** inspect ACTUAL plugins/tools available to this Codex task, including Canva and Higgsfield if offered. Report each as CONNECTED AND TESTED, VISIBLE NOT TESTED, UNAVAILABLE or NOT CONNECTED. ChatGPT connections in a different chat do not prove Codex Cloud access. Do not spend credits, subscribe, accept unexpected permissions or buy anything during preflight.
9. **Testing platforms:** check browser/headless/visual testing and runtime limits available in THIS environment. Mark actual Mac Safari and physical iPhone Safari as MANUAL LATER if they cannot be genuinely tested. Say what future testing remains; do not claim that a screenshot tool, real device, or external app was exercised without evidence.
10. **Privacy and safety:** identify if repository is public, what will be committed, and whether any sources should remain out of the repo. Do not add the complete third-party reference PDF to the public repo without owner approval, alter security/network/permissions, or deploy anything.

## B. Owner-facing report and HARD STOP

Before producing ANY game code, give the owner a table with:
- GitHub remote, branch, HEAD: PASS/FAIL and observed evidence;
- repo read and implementation-branch write: PASS/FAIL/UNVERIFIED and proof;
- each source file and thirteen images, including hashes and visual inspection: PASS/FAIL;
- full reference archive: PRESENT or NOT PRESENT and whether owner wants to provide it;
- local toolchain, filesystem and setup command: PASS/FAIL with versions/exit code;
- JSON example and source contract: PASS/FAIL;
- ability to make original artwork: PASS/FAIL;
- Canva and Higgsfield actual Codex access: CONNECTED/NOT CONNECTED/UNVERIFIED;
- browser/screenshot/test capabilities: available or unavailable with fallback;
- real Mac/iPhone device testing: MANUAL LATER unless genuinely performed;
- repo privacy and any blockers.

Clearly distinguish **REQUIRED** from **OPTIONAL**:
Required: correct V2 checkout, source/image access, verified Git read/write, working source/code toolchain, original-art authoring route, and valid study schema. If ANY required item is failed/unverified, report BLOCKED with an exact remedy and DO NOT begin. 
Optional: Canva, Higgsfield, full 71-page PDF, interactive browser capabilities and actual device checks at preflight. If optional pieces are missing, request the owner's acceptance of stated fallbacks before implementing.

End your report with these EXACT statements:
"PRE-BUILD STATUS: READY" or "PRE-BUILD STATUS: BLOCKED".
"No Whisker Watch game implementation has started."
"I've checked the available access and listed all missing capabilities. Do you approve starting the Whisker Watch build using the verified access and stated fallbacks? Reply APPROVE BUILD, or tell me what to fix."

**Stop and wait for the owner's reply.** The original startup message is not approval to move past this checkpoint. Do not implement the deck module, game scaffold, art, gameplay, or install dependencies before that affirmative message.

## C. After owner approval
- Only an explicit affirmative owner response after reviewing this report, such as APPROVE BUILD, releases this initial gate. Generic "next" or prior "start now" text cannot bypass it.
- If the owner fixes missing required access, rerun the affected checks and re-present the results for approval; never mark a blocked item PASS without evidence.
- Record the dated access report, owner approval and approved optional fallbacks in DESIGN_STATE.md. Then carry out prompts/01_START_AUTONOMOUS_BUILD.md and the active V2 specification **autonomously across normal engineering milestones** without asking for routine per-stage approvals.
- When resuming in a later Codex task, read DESIGN_STATE.md and verify that approval was recorded. Re-run access checks when repository, branch, account or tools have materially changed. A continuation prompt never bypasses an uncompleted gate.
- Public release is a separate approval gate; the build may prepare static files but must NOT publish without explicit permission.

This access audit does not prove the future game is balanced, functional or visually acceptable; those still require implementation, real tests and the owner's playtest review.
