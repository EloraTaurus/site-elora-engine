# Engine Capability Register (Beyond Governance)

This register documents non-governance capabilities implemented in Elora so the technical disclosure reflects the wider platform, not only governance-specific work.

## Early Milestones and External Evidence

### WordPress Plugin Integration Milestone

- Date: `2026-01-12`
- Commit fingerprint: `d5bfe84`
- Evidence class: Plugin/runtime integration milestone (pre-formal changelog period)
- Additional evidence channels: Git commit record, Discord project messages, Facebook project post

### Initial Engine Launch Milestone

- Date: `2026-01-17`
- Commit fingerprint: `45dae65`
- Evidence class: Initial engine launch milestone (pre-formal changelog period)
- Additional evidence channels: Git commit record, Discord project messages, Facebook project post

### Additional Milestone Fingerprints (Operator-Supplied Anchors)

#### Tape and Fabric Autoscaling Milestone

- Date: `2026-03-13` (operator-supplied)
- Commit fingerprint: `6c31560`
- Evidence class: Distributed runtime autoscaling and tape/Fabric operational milestone
- Additional evidence channels: Git commit record, changelog references, operator release notes
- Summary of updates (changelog-ready): Expanded tape-aware Fabric autoscaling controls and operational runtime-distribution behavior for governed worker capacity handling.

#### New Lab Harness Simulations and API Milestone

- Date: `2026-03-23`
- Commit fingerprint: `f41ec05`
- Evidence class: Lab simulation harness and API expansion milestone
- Additional evidence channels: Git commit record, changelog references, operator release notes
- Summary of updates (changelog-ready): Added new Lab simulation harness pathways and API surfaces for repeatable controlled scenario validation.

#### Security Hardening and Hardware Attestation Framework Milestone

- Date: `2026-03-24`
- Commit fingerprint: `c128013`
- Evidence class: Security hardening and attestation-framework milestone
- Additional evidence channels: Git commit record, changelog references, operator release notes
- Summary of updates (changelog-ready): Strengthened runtime security posture and advanced phased hardware-attestation framework controls/research alignment.

#### Execution Monitoring Update Milestone

- Date: `2026-03-28`
- Commit fingerprint: `2fb6c20`
- Evidence class: Execution-monitoring and operator observability milestone
- Additional evidence channels: Git commit record, changelog references, operator release notes
- Summary of updates (changelog-ready): Expanded execution-monitor visibility and operator-facing runtime progression controls for clearer governed execution traceability.

#### Memory and Knowledge Pipeline Extension Milestone

- Date: `2026-03-29`
- Commit fingerprint: `8986a2d`
- Evidence class: Memory/knowledge pipeline extension milestone
- Additional evidence channels: Git commit record, changelog references, operator release notes
- Summary of updates (changelog-ready): Extended memory and knowledge pipeline behavior to improve scoped retrieval context quality and governance-aligned evidence depth.

#### Inflight Inference, Pipeline, and Lab/Fabric Update Milestone

- Date: `2026-03-31`
- Commit fingerprint: `953612e`
- Evidence class: Runtime signals, pipeline, and Lab/Fabric integration milestone
- Additional evidence channels: Git commit record, changelog references, operator release notes
- Summary of updates (changelog-ready): Added bounded proposal-stage runtime-signal tuning and related pipeline/Lab/Fabric integration updates while preserving unchanged commit-boundary authority behavior.

#### Observer Research Runtime Integration Milestone

- Date: `2026-04-05`
- Source anchor: Engine changelog (`2026-04-05`)
- Evidence class: Observer runtime, export/report parity, and governance-surface integration
- Additional evidence channels: Changelog references, operator release notes, public disclosure updates
- Summary of updates (changelog-ready): Added dedicated observer research runtime with per-cycle evidence persistence, governance/jobs visibility integration, and report export parity across HTML/Markdown/JSON.

#### Research Comparability and Queue-Orchestration Milestone

- Date: `2026-04-06`
- Source anchor: Engine changelog (`2026-04-06`)
- Evidence class: Comparative reporting and long-run orchestration controls
- Additional evidence channels: Changelog references, operator release notes, public disclosure updates
- Summary of updates (changelog-ready): Expanded run comparability surfaces, version-tag visibility, queue-based overnight observer scheduling, and deeper pressure/intervention traceability.

#### Constraint-First Runtime Interpretation Milestone

- Date: `2026-04-07`
- Source anchor: Engine changelog (`2026-04-07`)
- Evidence class: Research operator dashboard and interpretation model maturity
- Additional evidence channels: Changelog references, operator release notes, public disclosure updates
- Summary of updates (changelog-ready): Added speed-control mode, revised threshold-oriented hypothesis framing, and graduated runtime-state banding for clearer runtime-behavior interpretation.

#### Browser-Assisted Research Hardening and Context Continuity Milestone

- Date: `2026-04-09`
- Source anchor: Engine changelog (`2026-04-09`)
- Evidence class: Browser-assisted runtime hardening and long-context continuity controls
- Additional evidence channels: Changelog references, operator release notes, public disclosure updates
- Summary of updates (changelog-ready): Hardened client-assisted research runtime path, strengthened effective-model consistency checks, added observe-only intervention probes, and introduced deterministic context compaction/stacking with overflow-aware retries.

#### Live Execution Monitor Runtime Visibility Milestone

- Date: `2026-04-11`
- Source anchor: Engine changelog (`2026-04-11`)
- Evidence class: Runtime observability and execution visibility milestone
- Additional evidence channels: Changelog references, operator release notes, public disclosure updates
- Summary of updates (changelog-ready): Upgraded Execution Monitor from scaffold state to live runtime telemetry, including active-workload focus windows, terminal-style progressive line output, and compact process telemetry cards.

#### Background Reindex and Admin Throughput Hardening Milestone

- Date: `2026-04-12`
- Source anchor: Engine changelog (`2026-04-12`)
- Evidence class: Runtime orchestration and operator-throughput hardening milestone
- Additional evidence channels: Changelog references, operator release notes, public disclosure updates
- Summary of updates (changelog-ready): Moved reindex work off request threads with progress polling support and reduced admin/API poll overhead through batched settings reads and short-lived system-info caching.

## Platform and Runtime Baseline

### Core Stack Components

- Ubuntu Server LTS operating baseline (self-managed infrastructure posture)
- Python-based engine services and governance control-plane logic
- Docker Engine/container runtime for service packaging and worker/container execution paths
- Proxmox-aligned VM provisioning and infrastructure integration surfaces
- Caddy-based networking and reverse-proxy routing for service edge handling
- Ollama inference runtime for local/self-managed model execution

### Development and Build Workflow

- Codex-assisted development workflow used for implementation support, refactoring assistance, and documentation drafting under operator control

### Infrastructure Posture

- Self-managed deployment model with explicit security boundary controls
- Separation of public-safe surfaces and protected operator/admin surfaces
- Runtime and audit telemetry persisted for operational review and replay analysis

## Core Data and Runtime Capabilities

### Persistent Memory and Profile Scoping

- Date window: `2026-01-31` onward
- Evidence class: Memory persistence and profile-based access controls
- Code anchors: `engine/core/memory.py`, `engine/admin/pages_sections/memory.py`
- Evidence summary: SQLite-backed memory items, buckets, model permissions, and profile-scoped memory/knowledge controls.

### RAG Knowledge Index and Retrieval

- Date window: `2026-01-20` onward
- Evidence class: Knowledge indexing and retrieval infrastructure
- Code anchors: `engine/services/rag.py`, `engine/core/knowledge.py`
- Evidence summary: Chunking, embedding storage, file/url reindexing, scoped retrieval, and knowledge file management helpers.

### Engine Benchmark and Runtime Measurement

- Date window: `2026-01-31` onward
- Evidence class: Benchmark capture and operator benchmarking surfaces
- Code anchors: `engine/core/benchmarks.py`, `engine/admin/lab/benchmarks.py`
- Evidence summary: Benchmark run persistence, metadata capture, and operator-facing benchmark visibility.

### Persistent Jobs, Replay Events, and Audit-Oriented Runtime History

- Date window: `2026-01-24` to `2026-02-28` onward
- Evidence class: Job persistence and replayability
- Code anchors: `engine/core/jobs.py`
- Evidence summary: SQLite-backed job store, replay event timelines, hash-linked event fields, and lifecycle metadata used by replay/audit surfaces.

### Prompt / Memory / Knowledge Runtime Evidence Capture

- Date: `2026-03-29`
- Evidence class: Pre-inference runtime evidence hardening
- Code anchors: `engine/api/routes_chat.py`, `engine/core/jobs.py`, `engine/services/commit_enforcement.py`
- Evidence summary: Runtime captures prompt hash + encrypted prompt artifact, plus memory/knowledge resolution summaries and snapshot references as first-class evidence before inference, then carries these into commit/replay for deterministic review.

### Proposal-Stage Runtime Signals Experimentation (Bounded)

- Date: `2026-03-31`
- Evidence class: Controlled runtime stabilization experimentation (proposal-stage only)
- Code anchors: `engine/core/inflight_inference.py`, `engine/core/inflight_calibration.py`, `engine/core/lab_inflight_tuning.py`
- Evidence summary: Introduced bounded per-request runtime-signal adjustments around approved baseline profiles, with repeat-evaluation harness workflows and captured evidence outputs for adjustment reason/timing/range while preserving unchanged commit-boundary authority behavior.

### Pre-Inference Planning and Bounded Model-Tuning Parity

- Date window: `2026-03-31` onward (expanded `2026-04-05`)
- Evidence class: Proposal-stage compute/stability optimization under governed boundaries
- Code anchors: `engine/core/inflight_inference.py`, `engine/core/lab_inflight_tuning.py`, `engine/services/chat.py`
- Evidence summary: Pre-inference planning/tuning pathways were aligned across production-chat and research flows to support bounded compute-saving and stability-oriented adjustments before generation, with evidence capture and unchanged commit-boundary authority semantics.

### Observer Runtime and Comparative Research Reporting

- Date window: `2026-04-05` onward
- Evidence class: Internal research runtime and comparative reporting framework
- Code anchors: `engine/admin/research/*`, `engine/services/chat.py`, `engine/core/jobs.py`
- Evidence summary: Observer-mode runtime flow supports governed long-run experimental cycles with per-step evidence capture, comparability exports, queued execution windows, and dashboard KPI visibility for repeatable hypothesis testing.

### Long-Context Runtime Continuity Controls (Research)

- Date: `2026-04-09`
- Evidence class: Context-window continuity and bounded fallback handling
- Code anchors: `engine/services/chat.py`, `engine/core/inflight_inference.py`
- Evidence summary: Deterministic context compaction/stacking and overflow-aware retry behavior were added to keep long research sessions progressing under context pressure without changing commit authority semantics.

## Security and Access Control Foundation

### Signed Request and Payload Controls

- Date: `2026-01-20`
- Evidence class: API security baseline
- Evidence summary: HMAC request signing, timestamp skew controls, payload caps, and strict API-key posture introduced for request integrity and abuse resistance.

### Admin Security Surface Hardening

- Date window: `2026-01-29` to `2026-02-24`
- Evidence class: Admin auth/session hardening
- Evidence summary: CSRF controls, HTTPS requirements, session signing safeguards, OTP/TOTP support, login throttling, and proxy-header trust controls.

## Fabric and Distributed Execution Operations

### Fabric Setup, Provisioning, and Mode Separation

- Date window: `2026-02-10` to `2026-02-12`
- Evidence class: Infrastructure orchestration
- Evidence summary: Fabric setup gating, provisioner integration, VM vs container routing separation, and provisioning diagnostics.

### Fabric Autoscale Deployment Surface

- Date: `2026-03-13`
- Evidence class: Distributed worker capacity control and operator deployment controls
- Code anchors: `engine/core/fabric/autoscale.py`, `engine/admin/fabric/autoscale.py`, `engine/admin/lab/autoscale.py`
- Evidence summary: Autoscale reconcile/simulation controls, current worker-pool visibility, and heuristic capacity recommendation surface introduced across Lab and Fabric pages.

### WorkerHost as Execution Surface

- Date window: `2026-02-14` onward (with hardening on `2026-02-19`)
- Evidence class: Distributed execution surface and worker lifecycle control
- Code anchors: `engine/core/fabric/workerhost_client.py`, `engine/api/routes_workers.py`, `workerhost/README.md`
- Evidence summary: WorkerHost acts as container execution surface while Engine remains control plane; worker/host registration, heartbeat, inventory, and bearer-token protected lifecycle operations are used to separate authorization from execution.

### Provisioner Control Path

- Date window: `2026-02-10` onward
- Evidence class: External VM lifecycle integration
- Code anchors: `engine/core/fabric/provisioner_client.py`, `fabric/provisioner/README.md`
- Evidence summary: Provisioner URL/token/timeout resolution, token-gated worker provision/destroy calls, and controlled lifecycle orchestration.

### Tape Runtime Modularization Milestone

- Date: `2026-03-13`
- Evidence class: Agent-runtime modularity and capability packaging
- Code anchors: `engine/tapes/runtime.py`, `engine/tapes/resolver.py`, `engine/admin/runtime/tapes.py`, `tapes/*.json`
- Evidence summary: Tape Library and file-backed tape registration expanded to support packaged runtime capabilities, with governance/replay capture aligned to tape identity and runtime bindings.

## Operator Experience and Operational Surfaces

### Multi-Surface Admin Operations Layout

- Date window: `2026-02-19` onward
- Evidence class: Operator UX and control-plane navigation
- Evidence summary: Operational health/governance/jobs-audit views, grouped left-navigation model, and governance-centric operator dashboards.

### Execution Monitor Live Runtime Surface

- Date: `2026-04-11`
- Evidence class: Operator-facing execution observability maturity
- Code anchors: `engine/admin/pages_sections/execution_monitor.py` (and related admin runtime surfaces)
- Evidence summary: Execution Monitor now renders live active-workload telemetry with bounded completion visibility windows and progressive terminal-style output behavior for runtime operations review.

### Public Demo and Documentation Surfaces

- Date window: `2026-03-02` onward
- Evidence class: Public-facing documentation and demo transparency
- Evidence summary: Guided governance replay tour, architecture pack, changelog publication, technical disclosure pack, and standards/glossary references.

## Public-Safe Evidence Notes

- This register is intentionally high-level and public-safe.
- Detailed source code and full commit hashes remain private.
- Public chronology is anchored to dated changelog entries, disclosures, and commit fingerprints.
