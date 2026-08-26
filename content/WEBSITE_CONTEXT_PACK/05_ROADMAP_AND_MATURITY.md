# Roadmap and Research Direction

Last updated: 2026-04-25

First implemented (from changelog): 2026-02-28

## Current Position (Research Runtime)

Elora is positioned as a research-based runtime engine:
- core governance boundary patterns are implemented,
- operator and research surfaces are active,
- replay/audit evidence is being expanded through iterative research tracks.

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

9. Observer runtime and research comparability
- maintain observer-runtime evidence parity (HTML/Markdown/JSON report surfaces),
- preserve run-to-run comparability with explicit versioning and scenario attribution,
- continue public-safe chronology updates as internal research surfaces expand.

10. Long-context runtime continuity controls
- improve bounded context-compaction behavior for research-scale runs,
- keep overflow handling deterministic and reviewable in run evidence,
- preserve unchanged commit-boundary governance semantics.

11. Runtime throughput and admin responsiveness hardening
- keep long-running operations off request threads where possible,
- improve progress visibility for background operations,
- reduce repeated metadata/system sampling overhead under active dashboard polling.

12. Engine State and repair-path transparency
- strengthen dedicated stability control-plane visibility for operators,
- improve repair/rerun/injection/termination reporting consistency across research surfaces,
- preserve deterministic halt signaling when same-session repair fails under configured termination policy.

13. Intervention comparability and recovery diagnostics
- improve pre-vs-post intervention comparability for research interpretation,
- expand deterministic failure checkpoint diagnostics for long-run scenario analysis,
- keep queue recovery controls explicit and operator-driven.

## Release Direction

Current line is `0.2.0` for Elora CORE ML/bucket architecture expansion plus runtime evidence and execution visibility work.
All earlier `0.18` progression is retained as previous-version history.

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
- 2026-04-11: Upgraded Execution Monitor to live runtime workload visibility with terminal-style progressive output and bounded completion windows.
- 2026-04-12: Moved reindex flow to background runtime processing with progress polling support and reduced config/system-info read overhead under active polling.
- 2026-04-14: Expanded same-cycle repair/rerun controls and added deterministic failed-repair escalation visibility for constrained self-healing paths.
- 2026-04-15: Reduced admin/runtime contention under active inference and added explicit queue-worker recovery controls for research continuity.
- 2026-04-17: Added Engine State control-plane area with live stability indicators and compact health bars for key runtime posture signals.
- 2026-04-17: Added explicit constitutional-halt visibility and improved repair/self-healing telemetry consistency across research operator surfaces.
- 2026-04-24: Added Model Exams as a dedicated signal-generation and governance-learning foundation with exam-pack/run/event/feature-export surfaces.
- 2026-04-24: Added Elora CORE coordination milestone with explicit module-boundary separation, read-only persona translation, and scheduled Echo learning refresh continuity.
- 2026-04-25: Split Elora CORE into dedicated pages (`Overview`, `Machine Learning`, `Buckets`) with left-nav nesting.
- 2026-04-25: Added public-safe milestone coverage for bucketed learning direction (per-model/per-profile bucket paths and portable bucket repo flow).
- 2026-04-25: Added CORE reliability hardening milestones (degraded snapshot behavior, CSP-safe local chart loading, section stability improvements).
