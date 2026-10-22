#!/usr/bin/env bash
# Workspace preparation only. No game scaffold, package installation, or deployment.
set -euo pipefail

whisker_project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$whisker_project_root"

echo 'Whisker Watch workspace preparation check'
echo 'This command does not implement or test the game.'

whisker_missing=0
for whisker_tool in git node npm python3; do
  if command -v "$whisker_tool" >/dev/null 2>&1; then
    "$whisker_tool" --version
  else
    echo "MISSING: $whisker_tool"
    whisker_missing=1
  fi
done

if command -v git >/dev/null 2>&1 && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo 'Current branch:'
  git branch --show-current
  echo 'Current commit:'
  git rev-parse HEAD
  echo 'Working-tree changes:'
  git status --short
fi

for whisker_path in \
  AGENTS.md \
  WHISKER_WATCH_MASTER_PROMPT.md \
  DESIGN_STATE.md \
  docs/SCOPE_CLARIFICATIONS.md \
  docs/CODEX_WORKSPACE_SETUP.md \
  docs/DECISION_REGISTER.md \
  docs/ACCEPTANCE_MATRIX.md \
  prompts/00_WORKSPACE_CHECK.md \
  prompts/01_START_PART_A.md \
  references/REFERENCE_GUIDE.md \
  references/images/extraction-manifest.json; do
  if [[ -s "$whisker_path" ]]; then
    echo "PRESENT: $whisker_path"
  else
    echo "MISSING: $whisker_path"
    whisker_missing=1
  fi
done

for whisker_optional in pdftotext pdftoppm; do
  if command -v "$whisker_optional" >/dev/null 2>&1; then
    echo "AVAILABLE: $whisker_optional"
  else
    echo "OPTIONAL TOOL NOT FOUND: $whisker_optional; extracted references remain usable"
  fi
done

if command -v python3 >/dev/null 2>&1; then
  python3 - <<'PY'
from pathlib import Path
images = sorted(p for p in Path('references/images').glob('*') if p.suffix.lower() in {'.png', '.jpg', '.jpeg', '.webp'})
print(f'Reference images available: {len(images)}')
if len(images) != 13:
    raise SystemExit('Reference subset is incomplete: expected 13 original extracted images.')
PY
fi

if [[ -f package.json ]]; then
  echo 'A package manifest exists. Review the actual build phase and its documented install commands.'
else
  echo 'No package.json yet: expected for preparation. Dependency installation was not attempted.'
fi

echo 'Browser launch, image inspection and device behavior require separate capability verification.'
echo 'No game test results are implied by this preparation check.'

if [[ "$whisker_missing" -ne 0 ]]; then
  echo 'Preparation needs the missing required files or tools listed above.'
  exit 1
fi
echo 'Required preparation files and command-line tools are present.'
