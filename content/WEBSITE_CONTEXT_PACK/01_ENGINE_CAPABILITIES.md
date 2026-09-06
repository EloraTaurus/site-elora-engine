# Engine Capabilities (Current)

Last updated: 2026-09-06

First implemented (from changelog): 2026-02-28

## Runtime and Decision Path

- Proposal-first runtime flow with commit-stage validation.
- Unified commit enforcement across async and direct routes.
- Guardrail-aware termination states (`blocked_commit_validation`, `terminated`).

## Governance and Policy

- Governance Provenance from period and session context into turns, lanes, lifecycle, Runtime Intelligence, TOCTOU, guardrail, and commit evidence.
- Stage Replay and Elora Decisions as focused views over separately retained source evidence.
- Governance dashboard and policy editor surfaces.
- Worker-scoped policy mapping (v1).
- Authority/admissibility checks with configurable strictness.

## Security-First Runtime Controls

- Request signing and token-based gatekeeping on protected paths.
- Header-aware source attribution for governance and audit context.
- Commit decision signing support (HMAC, when secrets are configured).
- Hash-chained replay events for tamper-evident decision trails.
- Session/auth hardening controls across admin/operator surfaces.

## Governed Interaction and Provenance

- Governed Testing Edge conversations with run identity, AI Behaviour provenance, Memory Governance, model/provider, token, lifecycle, and separated outcome evidence.
- Stage Replay timelines with risk, runtime, policy, guardrail, and commit signals.
- Hash-chained event records for tamper-evidence.
- Deterministic recompute support using captured commit artifacts.
- Managed public-safe Schematic provenance reports and optional JSON from the same bounded projection.

## Provider and Runtime Integrity

- Readiness queues and bounded pressure holds prevent overlapping or premature provider dispatch.
- Audited, opt-in recovery remains distinct from policy denial and automatic restart authority.
- Model-aware context selection uses available capability and resource evidence with conservative fallback.
- Terminal completion checks retain incomplete output as evidence rather than approving it as an answer.

## Operator Surfaces

- Dashboard groups for overview, governance, observability, AI runtime, fabric, lab, and admin operations.
- Raw evidence visibility for operator and auditor workflows.
- Export paths for governance review/reporting.

## Integrations and Runtime Inputs

- WordPress plugin integration with source attribution.
- Provider telemetry capture (provider/model/latency/token/error fields).
- Fabric surfaces for worker and host lifecycle management.
- WorkerHost bootstrap builder + downloadable host bundles for node onboarding.
- Host policy controls for workload gating (`allow_worker_deployments`, `allow_gpu_jobs`).
- Host runtime distribution actions (`Sync now`, `Update runtime`) with runtime hash tracking.
- Inference-node/model reporting from WorkerHosts (Ollama/vLLM detection path).

## Implementation Timeline (Selected)

- Late January 2026: solo project baseline and initial runtime control-plane development.
- Q1 2026: proposal-to-commit enforcement and governance/replay operator surfaces implemented.
- March 2026: architecture-context publication and governance pipeline documentation added to the public site.
- March 2026 (mid-late): Fabric host operations expanded with bootstrap builder, runtime update controls, and GPU host telemetry surfaces.
- August to September 2026: Governance Provenance, continuous TOCTOU reconstruction, governed Testing Edge interaction, provider-aware runtime integrity, and bounded provenance reporting entered the active `0.2.8` line.
