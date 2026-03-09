# Engine Capability Register (Beyond Governance)

This register documents non-governance capabilities implemented in Elora so the technical disclosure reflects the wider platform, not only governance-specific work.

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

## Security and Access Control Foundation

### Signed Request and Payload Controls

- Date: `2026-01-20`
- Evidence class: API security baseline
- Evidence summary: HMAC request signing, timestamp skew controls, payload caps, and strict API-key posture introduced for request integrity and abuse resistance.

### Admin Security Surface Hardening

- Date window: `2026-01-29` to `2026-02-24`
- Evidence class: Admin auth/session hardening
- Evidence summary: CSRF controls, HTTPS requirements, session signing safeguards, OTP/TOTP support, login throttling, and proxy-header trust controls.

## Runtime and Audit Observability

### Live Runtime Eventing and Justification Surfaces

- Date: `2026-02-09`
- Evidence class: Runtime observability and audit context
- Evidence summary: Pipeline runtime event stream, structured justification payloads, normalized source attribution, and operator-visible runtime metadata.

### Deterministic Job and Replay Persistence

- Date window: `2026-01-24` to `2026-02-28`
- Evidence class: Persistence and replayability
- Evidence summary: Job persistence, replay timeline events, retained runtime metadata, and recomputable commit-oriented records.

## Fabric and Distributed Execution Operations

### Fabric Setup, Provisioning, and Mode Separation

- Date window: `2026-02-10` to `2026-02-12`
- Evidence class: Infrastructure orchestration
- Evidence summary: Fabric setup gating, provisioner integration, VM vs container routing separation, and provisioning diagnostics.

### Worker Lifecycle Controls and Isolation Direction

- Date window: `2026-02-14` to `2026-02-19`
- Evidence class: Distributed worker operations
- Evidence summary: Worker lifecycle control hardening, bearer-token enforcement on worker endpoints, and control-plane authorization alignment.

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
