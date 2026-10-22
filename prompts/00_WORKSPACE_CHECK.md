# Workspace setup only

Prepare my Codex workspace for Whisker Watch. This task is environment preparation only. Game implementation starts in a separate task.

Repository: https://github.com/terminatorz24/whisker-watch

Preparation branch: `codex/workspace-setup-2026-10-22`.

If the workspace starts on another branch, inspect the working tree. Use the preparation branch when available without discarding changes. If the branch is not available locally, fetch that named branch through the authorized GitHub connection. Do not change the default branch or account permissions.

Read `AGENTS.md`, `docs/CODEX_WORKSPACE_SETUP.md`, `docs/SCOPE_CLARIFICATIONS.md`, `DESIGN_STATE.md`, and the source inventory in `README.md`. Verify that the original master specification, prompt files, reference guide, image manifest, and reference images are present.

Run `bash scripts/codex-setup.sh` from the repository root. Report the actual Git, Node, npm and Python versions and image/PDF/browser-test capabilities. A missing optional PDF renderer does not block using the extracted PNG/JPEG references. Distinguish unavailable interactive browser use from any shell-based test runner that can actually launch.

Do not create a game scaffold, deck validator, game engine, package manifest, production art, website, deployment, or other game feature. Do not run dependency installation for a manifest that does not exist. Do not claim the game has passed tests.

Finish with: actual repository/branch/commit; files and images found; checks run; missing capabilities; required account-side steps; and whether this environment is ready for me to launch `prompts/01_START_PART_A.md`. Preparing or publishing the environment must not automatically start that implementation prompt.
