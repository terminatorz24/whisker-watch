# Audit the claimed Whisker Watch release

Review the actual implementation against the complete original specification, latest scope clarifications, approved decisions, and acceptance matrix. This is a verification task; do not confuse a successful build command with a complete game.

Verify all five main maps plus Tutorial, all difficulties, 16 cats, 240 functional upgrades, the full enemy/boss/wave content, both custom-deck workflows, learning/progression, full menus, original finished art, offline packaging, and portable save/resume. Exercise real interactions and download/upload paths where the environment permits. Re-run relevant deterministic and simulation cases, and inspect current evidence for checks not runnable here.

Look for placeholder art, unimplemented upgrade effects, fake buttons, untested platform claims, incomplete maps, invisible content loss, incorrect mastery, broken deck binding, and saves that restore the visible screen but change future simulation. Confirm reference screenshots are excluded from production assets.

Report findings by severity with concrete file locations and reproduction evidence. Mark manual device checks honestly. Update `DESIGN_STATE.md` and `docs/ACCEPTANCE_MATRIX.md`. Distinguish intermediate one-map release readiness from overall five-map completion. Do not deploy or silently approve unresolved limitations.
