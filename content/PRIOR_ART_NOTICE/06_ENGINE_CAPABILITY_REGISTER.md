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

## Operator Experience and Operational Surfaces

### Multi-Surface Admin Operations Layout

- Date window: `2026-02-19` onward
- Evidence class: Operator UX and control-plane navigation
- Evidence summary: Operational health/governance/jobs-audit views, grouped left-navigation model, and governance-centric operator dashboards.

### Public Demo and Documentation Surfaces

- Date window: `2026-03-02` onward
- Evidence class: Public-facing documentation and demo transparency
- Evidence summary: Guided governance replay tour, architecture pack, changelog publication, technical disclosure pack, and standards/glossary references.

## Public-Safe Evidence Notes

- This register is intentionally high-level and public-safe.
- Detailed source code and full commit hashes remain private.
- Public chronology is anchored to dated changelog entries, disclosures, and commit fingerprints.
