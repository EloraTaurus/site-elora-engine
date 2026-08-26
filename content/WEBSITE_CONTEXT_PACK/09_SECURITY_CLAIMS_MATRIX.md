# Security Claims Matrix

Last updated: 2026-03-07

First implemented (from changelog): 2026-02-28

Purpose: keep website security messaging strong, accurate, and defensible.

## Claims and Backing

### Decision boundary is real (not direct model passthrough)

- Backing mechanism: proposal-first flow with commit-stage authorization/deny logic.
- Current status: live, in active hardening.

### Blocked outcomes are explicit and auditable

- Backing mechanism: `blocked_commit_validation` and terminal `terminated` outcomes in governance/job surfaces.
- Current status: live.

### Replay trails are tamper-evident

- Backing mechanism: hash-chained replay events (`prev_hash`, `event_hash`) and chain validity metadata.
- Current status: live, in active hardening.

### Commit outcomes can be cryptographically signed

- Backing mechanism: HMAC signing support for commit decisions when secrets are configured.
- Current status: partial, configuration-dependent.

### Sensitive paths are protected by default

- Backing mechanism: token/session-protected admin and protected runtime routes.
- Current status: live.

### Ingress is identity-aware

- Backing mechanism: source/header attribution and request identity context in job/audit metadata.
- Current status: live, partial depth by route.

### Governance decisions are replayable from captured state

- Backing mechanism: captured commit artifacts (`commit_input_v1`, `commit_decision_v1`) and recompute tooling.
- Current status: partial.

### Policy strictness can be mapped by worker/source context

- Backing mechanism: worker-scoped policy mapping and authority/admissibility controls.
- Current status: partial.

### Proposal-vs-commit authority drift is visible

- Backing mechanism: authority snapshot fields and drift metadata in governance replay.
- Current status: partial, in hardening.

### Operator review supports rapid incident reasoning

- Backing mechanism: 10-second governance answer, policy trace, risk/anomaly context, and raw evidence views.
- Current status: partial.

## Public Messaging Guardrails

- Use "supports" or "when configured" wording for cryptographic signing features.
- Use "tamper-evident" (not "immutable") for current replay-chain behavior.
- Use "in active hardening" for admissibility completeness and authority coverage.
- Avoid implying formal certification unless formally completed.
