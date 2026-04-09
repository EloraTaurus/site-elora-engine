# Roadmap and Maturity

Last updated: 2026-04-09

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

7. Runtime signals experimentation (proposal-stage)
- begin bounded runtime-signal validation in Lab to reduce drift risk and wasted compute under controlled adjustment limits,
- baseline-led and evidence-captured behavior only (no autonomous commit changes),
- commit boundary behavior remains unchanged.

8. Hardware attestation research track (application for funding)
- define phased trust posture: `software` -> `hardware_backed` -> `hardware_deployed`,
- evaluate TPM/silicon-backed evidence claims for runtime identity proofs,
- run exploratory feasibility work for LUNA board and OpenTitan-backed deployment modes.

9. Observer runtime and research comparability maturity
- maintain observer-runtime evidence parity (HTML/Markdown/JSON report surfaces),
- preserve run-to-run comparability with explicit versioning and scenario attribution,
- continue public-safe chronology updates as internal research surfaces expand.

10. Long-context runtime continuity controls
- improve bounded context-compaction behavior for research-scale runs,
- keep overflow handling deterministic and reviewable in run evidence,
- preserve unchanged commit-boundary governance semantics.

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
- 2026-03-31: Began proposal-stage runtime signals experimentation with bounded per-request adjustment behavior and preserved commit boundary semantics.
- 2026-04-05: Added dedicated observer research runtime integration with per-step evidence persistence and report export parity (HTML/Markdown/JSON).
- 2026-04-06: Expanded research comparability surfaces, version-badged run tracking, and queued observer orchestration for overnight batches.
- 2026-04-07: Added research speed-control mode and revised threshold-oriented interpretation framing for dashboard/report analysis.
- 2026-04-09: Hardened browser-assisted research runtime path and added deterministic context compaction/stacking with overflow-aware retry controls.
