#!/usr/bin/env bash
# Preparation only: no package installation, game scaffold or remote writes.
set -euo pipefail
cd "$(cd "$(dirname "$0")/.." && pwd)"
for cmd in git node npm; do
  if ! command -v "$cmd" >/dev/null 2>&1; then echo "MISSING: $cmd"; exit 1; fi
  "$cmd" --version
done
node scripts/check-handoff.mjs
node --test scripts/test-preparation.mjs
printf '\nPreparation tests only. Codex must complete access report and wait for APPROVE BUILD.\n'
