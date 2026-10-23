# Set up Codex Cloud from your Mac
Start from GitHub repository terminatorz24/whisker-watch, branch main. Expected handoff marker WW-HANDOFF-3. The approved handoff is intended to be on main; verify the actual checked-out marker instead of relying on an old branch name or cached environment.

1. In ChatGPT/Codex on web or desktop, use Work in > Cloud > Select environment. Create environment if needed, select this repository and complete GitHub authorization for it. Interface labels may differ between current and legacy Cloud.
2. During environment setup say: 'Preparation only: read AGENTS.md and docs/PREFLIGHT_ACCESS_CHECK.md; do not scaffold or implement the game. Run bash scripts/codex-setup.sh and report actual tools/files. Do not make remote test commits without my permission.'
3. If an install-script field exists, use bash scripts/codex-setup.sh at this preparation stage. It uses existing Node/Git/npm, installs nothing and does not require package.json. Later, after M1 creates/pins dependencies, update and test the environment's install script before republishing it.
4. Review actual setup results, resolve required access, save and Publish the ENVIRONMENT. Publishing an environment is not deploying the game. Keep environment access limited to the intended user; repository may remain public as requested.
5. Start a task in that environment and paste prompts/00_PREFLIGHT_AND_APPROVAL.md. The task must run its own access checks, show results and WAIT. If needed, grant APPROVE ACCESS TEST for one harmless isolated branch/PR test. After verification, reply APPROVE BUILD to start the game.
6. Prefer continuing the same task. For a fresh task select the latest persisted implementation branch; use prompts/02_CONTINUE.md. New tasks do not automatically inherit another task's uncommitted files.

## Plugins and tools
In supported Codex views use Sources > Use plugins (or the Plugins/Apps controls actually shown) to select Canva/Higgsfield if available. Installed in ChatGPT does not prove Cloud access. Ask Codex to list the tools it can actually call and perform a read-only provider action; a successful read is not proof generation/export works or is free. Do not change broad permissions or buy credits to satisfy the checklist.
Dependency/network access is configured separately. Prefer only destinations needed for source and packages; do not disable protections. No AI API key, database, paid hosting or other game credential is required. If a package/browser download is blocked, report the exact host/action and ask for the narrow needed configuration.

## Verification you should see
Repo and current HEAD; WW-HANDOFF-3 files read; fixture/schema check output; Node/npm/Git versions; local write test; actual supported GitHub persistence route and remote evidence when authorized; optional plugin results; browser launch/screenshot status; unresolved manual Safari/iPhone tests. Only then APPROVE BUILD.

Official sources checked 2026-10-22:
https://learn.chatgpt.com/docs/cloud
https://learn.chatgpt.com/docs/environments/cloud-environments
https://help.openai.com/en/articles/20001256-plugins-in-codex
https://help.openai.com/en/articles/20001545-using-codex-cloud
Current Cloud documentation lists interactive computer/browser use as unsupported. A command-line browser runner is a separate capability that must actually launch before it is treated as available.
