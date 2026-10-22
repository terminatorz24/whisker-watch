#!/usr/bin/env bash
# Source/environment readiness only. This script does not install or test a game.
set -euo pipefail
cd "$(cd "$(dirname "$0")/.." && pwd)"
echo "Whisker Watch V2 source check — NOT a gameplay test"
missing=0
for cmd in git node npm python3; do
 if command -v "$cmd" >/dev/null 2>&1; then "$cmd" --version; else echo "MISSING TOOL: $cmd"; missing=1; fi
done
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
 echo "Branch:"; git branch --show-current
 echo "HEAD:"; git rev-parse HEAD
 echo "Working-tree changes:"; git status --short
fi
for path in AGENTS.md WHISKER_WATCH_MASTER_PROMPT.md DESIGN_STATE.md docs/DECISIONS.md docs/ECONOMY_MODEL.md docs/PREFLIGHT_ACCESS_CHECK.md docs/DECK_FORMAT.md docs/AI_FORMATTER_PROMPT.md docs/ART_PIPELINE.md docs/ACCEPTANCE_MATRIX.md docs/CODEX_WORKSPACE_SETUP.md prompts/01_START_AUTONOMOUS_BUILD.md templates/multiple_choice_template.json references/REFERENCE_GUIDE.md references/images/extraction-manifest.json; do
 if [[ -s "$path" ]]; then echo "PRESENT: $path"; else echo "MISSING: $path"; missing=1; fi
done
if command -v python3 >/dev/null 2>&1; then
python3 - <<'PY'
import json
from pathlib import Path
deck=json.loads(Path("templates/multiple_choice_template.json").read_text("utf-8"))
assert deck["deckFormat"] == 1 and deck["deckType"] == "multiple_choice"
assert all(len(q["wrong"])==3 for q in deck["questions"])
print("Sample JSON parses; demonstration only, below playable minimum.")
images=list(Path("references/images").glob("*.png"))+list(Path("references/images").glob("*.jpeg"))
print("Reference images:",len(images))
assert len(images)==13, "Expected 13 references"
PY
fi
for optional in pdftotext pdftoppm; do
 if command -v "$optional" >/dev/null 2>&1; then echo "OPTIONAL AVAILABLE: $optional"; else echo "OPTIONAL UNAVAILABLE: $optional"; fi
done
if [[ -f package.json ]]; then echo "Game manifest present; run its documented tests."; else echo "No package.json yet: expected before implementation."; fi
echo "Browser, game, balance, graphics and device tests NOT verified by this script."
[[ "$missing" -eq 0 ]] || exit 1
echo "V2 source readiness check complete."
