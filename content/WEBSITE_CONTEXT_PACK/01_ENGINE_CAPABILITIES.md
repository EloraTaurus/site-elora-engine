# Engine Capabilities (Current)

Last updated: 2026-03-07

First implemented (from changelog): 2026-02-28

## Runtime and Decision Path

- Proposal-first runtime flow with commit-stage validation.
- Unified commit enforcement across async and direct routes.
- Guardrail-aware termination states (`blocked_commit_validation`, `terminated`).

## Governance and Policy

- Governance dashboard and policy editor surfaces.
- Worker-scoped policy mapping (v1).
- Authority/admissibility checks with configurable strictness.

## Security-First Runtime Controls

- Request signing and token-based gatekeeping on protected paths.
- Header-aware source attribution for governance and audit context.
- Commit decision signing support (HMAC, when secrets are configured).
- Hash-chained replay events for tamper-evident decision trails.
- Session/auth hardening controls across admin/operator surfaces.

## Replay and Audit

- Replay timeline with risk and anomaly signals.
- Hash-chained event records for tamper-evidence.
- Deterministic recompute support using captured commit artifacts.

## Operator Surfaces

- Dashboard groups for overview, governance, observability, AI runtime, fabric, lab, and admin operations.
- Raw evidence visibility for operator and auditor workflows.
- Export paths for governance review/reporting.

## Integrations and Runtime Inputs

- WordPress plugin integration with source attribution.
- Provider telemetry capture (provider/model/latency/token/error fields).
- Fabric surfaces for worker and host lifecycle management.

## Implementation Timeline (Selected)

- Late January 2026: solo project baseline and initial runtime control-plane development.
- Q1 2026: proposal-to-commit enforcement and governance/replay operator surfaces implemented.
- March 2026: architecture-context publication and governance pipeline documentation added to the public site.
