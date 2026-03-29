# Roadmap and Maturity

Last updated: 2026-03-29

First implemented (from changelog): 2026-02-28

## Current Maturity (Practical)

Elora is in an advanced build phase:
- core governance boundary patterns are implemented,
- operator surfaces are active,
- replay/audit fidelity is materially beyond toy-system behavior.

## Active Engineering Priorities

1. Commit admissibility hardening
- enforce required decision-class and authority completeness rules.

2. Evidence model stabilization
- canonical bundle structure with hash references and reduced duplication.

3. Policy traceability depth
- richer rule-level violation output (`rule_id`, version, reason, severity).

4. Operator-speed review flows
- tighter governance review UX and export/report paths.

5. Fabric host operations and runtime distribution
- bootstrap builder for node enrollment,
- host policy/workload gating (`standard` / `gpu` / `sandbox`),
- runtime hash and `Update runtime` control-plane path.

6. GPU-aware execution path validation
- verify governed job flow against GPU-capable host inventory and host policy constraints.

7. Hardware attestation research track (application for funding)
- define phased trust posture: `software` -> `hardware_backed` -> `hardware_deployed`,
- evaluate TPM/silicon-backed evidence claims for runtime identity proofs,
- run exploratory feasibility work for LUNA board and OpenTitan-backed deployment modes.

## Release Direction

Current line is `0.18` for runtime evidence + execution visibility work.
Next major release boundary is expected when the next governance section and integrity objectives are completed.

## Recent Milestones (Fabric)

- 2026-03-19: WorkerHost bootstrap builder expanded with node profile + workload policy controls.
- 2026-03-19: WorkerHost runtime distribution path added (`Sync now` / `Update runtime`) with hash-based bundle checks.
- 2026-03-19: Host telemetry and inference-node/model visibility expanded for GPU-aware routing operations.
- 2026-03-24: Added Engine-local WorkerHost deployment path to reduce first-node setup friction.
- 2026-03-24: Added runtime dependency inventory and update-check surface in admin settings.
- 2026-03-24: Added live ops footprint rail (Engine + host/worker summary) for faster performance triage.
- 2026-03-29: Added pre-inference runtime evidence stages (`prompt.captured`, `memory.resolved`, `knowledge.resolved`) and carried their hashes/snapshots into commit/replay artifacts.
- 2026-03-29: Switched pipeline surface to a single master read-only chain with extended canonical stages and runtime-consistent node rendering (`present`/`virtual`, `visual`/`non-visual`).
