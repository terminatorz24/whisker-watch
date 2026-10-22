# Codex Cloud setup — Whisker Watch V2
As of October 22, 2026. Repository handoff is prepared; this document does not verify that the owner's Codex Cloud environment exists or is published.

Repository: terminatorz24/whisker-watch
Starting branch: codex/workspace-setup-2026-10-22

## Mac steps
1. Open Codex (Cloud) from the ChatGPT/Codex interface while signed in.
2. Select an existing Cloud environment for this repo or Create environment, connecting GitHub if prompted.
3. Choose the exact Whisker Watch repo and preparation branch if the branch selector is available. IMPORTANT: GitHub's default main branch contains the older draft. In setup, verify `git branch --show-current` and that AGENTS.md begins `CODEX AGENT INSTRUCTIONS — WHISKER WATCH V2`. If main was selected, preserve any work, fetch and switch safely to `codex/workspace-setup-2026-10-22` (or create an implementation branch starting from it) BEFORE publishing this environment. If the interface will not preserve the branch selection, the first implementation task MUST perform and verify the same checkout before coding; never build against main.
4. In environment setup, use bash scripts/codex-setup.sh as a preparation/install script. There is no game dependency manifest yet; do not attempt npm ci before Codex creates one.
5. Keep the environment private and its existing approval/security settings intact. No API key or paid art platform is needed for initial implementation.
6. After environment setup, start a separate coding task and paste prompts/01_START_AUTONOMOUS_BUILD.md. This is the autonomous implementation task, not the setup check.
7. Codex records progress in DESIGN_STATE.md. If one coding-task runtime ends, start the next task on the latest implementation branch and use prompts/02_CONTINUE.md.

## Visual asset access
Thirteen original extracted reference image files and their source locations are committed under references/images. The full design source PDF is broader and may be supplied separately if needed; the game can start with these examples. Codex should build its own artwork. ChatGPT has Canva and Higgsfield integrations. In a Codex task that supports plugins, open Sources > Use plugins to inspect actual installed apps and access, but those connections are not guaranteed on every surface or environment. If absent, Codex can use SVG/code-made original game-ready assets, not a paid or blocked service.

## What the setup command validates
Git, Node.js, npm, Python availability; source presence, reference-image count and the example JSON structure. It is not a gameplay test.

## Autonomy and safe limits
No routine human approval is required after each coding stage. Continue automatically until the Cloud task's natural limit, using checkpoints and tests; repeat with a follow-up task if runtime limits require. Codex is not a permanent background worker just because one prompt was submitted. If blocked by missing access, it must state the blocker and preserve the branch. Do not publish externally without final owner approval.

## Complete means
Functional study import and validation, full tower-defense economy and interactions, Quick and Full, all main maps, complete cat/upgrade mechanics, enemies/bosses, original art, reports, exact portable save, automated scenarios, and honestly documented Mac/iPhone usability verification.
