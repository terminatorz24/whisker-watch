# Tools, optional plugins and evidence
Prepared 2026-10-22. A free software package is not a ChatGPT plugin. A connected plugin is not necessarily available in a separate Codex Cloud task. Never promise unlimited free artwork or unattended account/UI access.

## Recommended core (no new paid service)
Git, Node/npm, TypeScript, Vite, Canvas, a schema library such as Ajv, Vitest and Playwright installed in the authorized development workspace. Use pinned compatible versions and a lockfile during M1, not floating latest versions in recurring setup. Target a currently supported Node 22 or 24 release compatible with selected packages. Playwright requires matching browser binaries, not just the npm package. Prefer headless Chromium for CI, WebKit emulation as supplementary, then real Safari/iPhone Files checks later. GitHub source control is required; no GitHub Actions workflow is enabled by this preparation.

## Plugin discovery result and use
- Canva: already installed in this ChatGPT account; read-only root listing succeeded here. Helpful for art sheets, icons and editing when the appropriate features/credits are available. AI generation uses provider credits; do not assume a free plan covers hundreds of sprites or transparent exports. Verify the intended account in Codex.
- Higgsfield: already installed; authenticated profile read succeeded here. Useful optional image variations; no generation/export/quota test was run. Free/trial allowances are not an unlimited production pipeline. No credit spend permitted by preflight.
- Figma: directory reports installed; optional editable HUD/style-board review. Not required for the engine; this turn did not verify its authenticated design access or free write allowance.
- Replit: directory reports installed; do NOT add a second app-building agent/hosting environment to this Codex+GitHub project by default.
- Product Design and Superpowers appeared as optional plugin candidates. Do not install merely to duplicate the current approval/TDD/planning instructions; their supported surfaces and any account requirements remain unverified.
- Adobe, Vercel and TinyFish appeared in discovery. None is needed for the baseline; no purchase/installation recommended without a specific unmet task and verified useful free allowance.
No additional plugin is required to START. Original SVG/sprite generation in the repo is the no-extra-service fallback, subject to the SAME visual acceptance standard. Native image tools may be used only if actually available and included in the owner's authorized allowance. Tool access does not itself meet the desired artwork standard.

## How to verify inside Codex
1. Repository READ: identify sanitized origin/repo, branch/commit and read a known current file plus marker. A public clone alone does not establish authenticated WRITE.
2. Repository WRITE: use a supported UI commit/PR, GitHub connector or Git, after approval of the isolated docs-only access test. Inspect the real remote branch/commit. No direct terminal push requirement and no automatic test push before approval.
3. Canva/Higgsfield: list actual callable provider actions; make a harmless read. Report READ VERIFIED; keep GENERATE/EXPORT UNVERIFIED until a permitted sample really succeeds. Never guess availability from this ChatGPT's tools.
4. Dev tools: execute node --version, npm --version, git --version, preparation scripts and harmless local temp-file probe. Report missing dependencies as setup needs. Do not run invented npm commands before they exist.
5. Browser: after authorized installation, launch real headless browser, open a tiny local fixture, take a screenshot and confirm file output. A package or emulated device profile is not proof a real iPhone works.

Primary documentation:
https://vite.dev/guide/
https://vitest.dev/guide/
https://playwright.dev/docs/intro
https://playwright.dev/docs/browsers
https://help.openai.com/en/articles/20001256-plugins-in-codex
Use official current documentation for exact installation requirements. No credentials should be committed or printed in reports.
