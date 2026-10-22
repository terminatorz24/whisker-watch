# Whisker Watch — Codex workspace setup

Prepared October 22, 2026. This document is a setup guide and checklist; it does not establish that a Codex Cloud environment has already been created, configured, or published.

The current task prepares the repository, instructions, reference material, and development capabilities. Game implementation begins separately when the owner launches `prompts/01_START_PART_A.md`.

## 1. Use the existing project

- Use the existing Whisker Watch GitHub repository. GitHub access has already worked during this preparation; no additional plugin is required for this setup.
- Preserve the repository's existing permissions and default branch. Use the preparation branch `codex/workspace-setup-2026-10-22` once that branch and these setup files have been saved to GitHub.
- If the environment or task interface offers a branch selector, select that preparation branch. If it does not, ask the setup agent to verify the checked-out branch and the presence of the setup files. Do not assume a branch was selected or change the repository's default branch to compensate.
- Keep the original specification, question sources, and reference images intact. Instructions and images must be present in the repository or deliberately supplied to the environment. A reference to a previous chat is not a substitute for the source files.

Cloud tasks use the files and services available in their cloud environment. Local computer files, processes, browser sign-ins, and VPN access are not transferred automatically. [Codex environments](https://learn.chatgpt.com/docs/environments/modes)

## 2. Create or select the Codex Cloud environment

OpenAI's current documented flow is:

1. On the web or desktop, open a new task and choose **Work in → Cloud → Select environment**.
2. Select an existing suitable environment, or choose **Create environment**.
3. Choose the Whisker Watch GitHub repository and select **Get started**. Connect GitHub only if that surface prompts for it.
4. Give the setup agent the bounded instructions below. Resolve missing repository access or tool information as needed.
5. Review the setup report, settings, and changed files before saving and selecting **Publish**.
6. Wait for **Environment published** before starting a task from a newly created environment.

An alternative documented entry point is **Settings → Codex Cloud → Environments → Create environment**. Labels may differ in the interface available to the account; verify what the interface actually shows. [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

### Setup message

```text
Prepare the Whisker Watch development environment only. Do not begin game
implementation or create a game scaffold during environment setup.

Read the repository's AGENTS.md and docs/CODEX_WORKSPACE_SETUP.md. Verify
that the checked-out source includes the workspace preparation files,
prompts/01_START_PART_A.md, the original project specification, and the
reference materials identified by the repository's source inventory.

Use the codex/workspace-setup-2026-10-22 branch if it is available and the
workspace supports choosing it. Report the branch and commit actually used.
Do not overwrite uncommitted work or change the repository's default branch.

From the repository root, run bash scripts/codex-setup.sh if that file is
present. Treat it as a preparation check. Record the command as the Install
script if this environment supports that field. Do not run npm install or
npm ci before an appropriate package.json exists. Do not create a package
manifest or lockfile just to make an installation command work.

Report available versions of Git, Node.js, npm, and Python, and the
availability of PDF extraction/rendering and browser-test capabilities.
Report missing capabilities honestly. Preserve existing access, approval,
network, and secret settings. Keep a new environment private to the owner.
Do not start a game server, deploy a site, or implement game features.

Finish with a concise setup report: repository/ref, source-file presence,
checks run, missing capabilities, and whether the environment is ready for
the owner to launch prompts/01_START_PART_A.md in a separate coding task.
```

## 3. Proposed environment settings

These are project recommendations, not a claim about saved settings.

| Setting | Proposed value or handling |
| --- | --- |
| Repository | Existing Whisker Watch repository only |
| Working ref | Preparation branch, if supported and present; record the actual ref |
| Install script | `bash scripts/codex-setup.sh`, run from the repository root |
| Start skill | Preparation checks only; no game server command until one exists |
| Privacy | **Only me** / **Private** for a new environment |
| Existing permissions | Preserve; do not broaden repository or workspace access |
| Internet access | Preserve existing restrictions; request a specific required destination only if a concrete later task needs it |
| Secrets | No new secrets required for workspace preparation |

The current documentation describes an **Install script** for preparation commands and a **Start skill** for service startup instructions. It also documents **Only me** under privacy. Saving configuration and publishing the prepared environment are separate steps. [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments)

## 4. Capabilities to check

| Capability | Purpose | Preparation check |
| --- | --- | --- |
| Git | Inspect the repository and preserve work on a branch | Report version, current ref, and working-tree status |
| Node.js and npm | Support the eventual browser game toolchain | Report installed versions; follow any runtime requirement in the project specification |
| Python 3 | Support source inspection and document utilities | Report availability; do not create an unrelated Python application |
| PDF text extraction | Read source PDFs and inspect future exports | Identify an available reader such as `pdftotext`, `pypdf`, or `pdfplumber` |
| PDF rendering | Visually inspect PDF pages when needed | Identify an available renderer such as `pdftoppm` or an equivalent supported tool |
| Image inspection | Read the actual visual references | Confirm that image files can be opened and inspected, not just listed |
| Browser testing | Later exercise gameplay and file downloads/uploads | Identify a usable test route; mark it unverified until a real browser can launch |

Availability checks do not establish that gameplay or PDF export works. No game dependencies should be installed during this preparation task. Once implementation creates an appropriate package manifest, that later task can install the declared dependencies and update the tested setup accordingly.

The current Cloud documentation lists computer and browser use as unsupported. Do not assume an interactive browser tool exists there. A command-line browser test runner is a separate capability that must be checked in the chosen runtime; do not claim it works based on its package name alone. Use a local Codex workspace for interactive visual checks if the cloud environment cannot provide the necessary route. [Cloud environments — current limitations](https://learn.chatgpt.com/docs/environments/cloud-environments)

## 5. Local alternative

Clone or download the same repository, select the preparation branch if available, and open that project folder in Codex on the desktop. For Codex CLI, open a terminal in the project directory and run `codex`; sign in if prompted. Local Codex can inspect and edit the project and run the tools available on that computer. [Codex CLI](https://learn.chatgpt.com/docs/codex/cli)

Run the same preparation script from the repository root. Keep the same source-file checklist and permission boundaries. A local workspace does not require creating a Cloud environment.

## 6. Ready-to-start checklist

- [ ] Correct repository, branch, and commit are recorded.
- [ ] Original project instructions and reference assets can be read.
- [ ] `AGENTS.md`, `scripts/codex-setup.sh`, and `prompts/01_START_PART_A.md` are present.
- [ ] Preparation checks have run, with missing capabilities listed.
- [ ] No game scaffold, game dependencies, gameplay implementation, or deployment was created during setup.
- [ ] The environment is private and existing access settings remain intact.
- [ ] For Cloud: the setup report has been reviewed and **Environment published** is confirmed.

### Launch Part A when ready

In a new coding task using this repository and prepared environment, give Codex:

```text
Read AGENTS.md and prompts/01_START_PART_A.md in this repository.
Follow prompts/01_START_PART_A.md for Part A. Start by verifying the
repository, branch, source inventory, and reference-file availability.
Respect the scope and completion criteria in that prompt.
```

Submitting that instruction starts the separate Part A task. Preparing or publishing the environment by itself does not start game implementation.

## Sources

Official OpenAI documentation retrieved October 22, 2026:

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments)
- [Codex environments](https://learn.chatgpt.com/docs/environments/modes)
- [Codex CLI](https://learn.chatgpt.com/docs/codex/cli)

The repository-specific branch, preparation command, scope boundaries, and checklist above are project decisions. The linked documentation supports the product setup steps and stated platform limitations.
