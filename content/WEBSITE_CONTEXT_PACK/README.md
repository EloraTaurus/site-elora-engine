# Elora Website Context Pack

Purpose: website-facing markdown context pack for loaders that ingest multiple `.md` files.

This pack is written in an engineer/architect voice and is designed to present Elora Engine and The Elora Taurus Project as a serious governance and control-plane system.

File metadata convention:
- Each architecture file includes `Last updated: YYYY-MM-DD` near the top.
- Each architecture file includes `First implemented (from changelog): YYYY-MM-DD` for earliest feature existence context.
- Important docs may include `Implementation Timeline (Selected)` for dated milestone context.

Recommended website order:
1. `00_PROJECT_POSITIONING.md`
2. `10_PROJECT_ORIGIN_AND_BUILD.md`
3. `01_ENGINE_CAPABILITIES.md`
4. `02_ARCHITECTURE_AND_CONTROL_PLANE.md`
5. `03_GOVERNANCE_AND_OBSERVABILITY.md`
6. `06_SECURITY_FIRST_POSTURE.md`
7. `09_SECURITY_CLAIMS_MATRIX.md`
8. `11_GOVERNANCE_PIPELINE.md`
9. `12_ARCHITECTURAL_INFLUENCES_AND_COMMUNITY_DIALOGUE.md`
10. `04_FABRIC_AND_DISTRIBUTED_DIRECTION.md`
11. `05_ROADMAP_AND_MATURITY.md`
12. `08_PARTNER_POSITIONING.md`

Reasoning for this order:
- open with positioning and origin for context,
- move into current capabilities and control-plane model,
- then governance/security evidence strength, pipeline flow, and community dialogue framing,
- then distributed direction and roadmap,
- finish with partner positioning context.

Notes:
- Keep this pack aligned with `engine/docs/FEATURES.md` and `engine/CHANGELOG_ENGINE.md`.
- Treat this as public-safe context (no secrets, keys, or private endpoints).
