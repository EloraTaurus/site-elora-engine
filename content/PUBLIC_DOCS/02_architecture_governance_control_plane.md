# Governance Control Plane

## Design stance

Elora governance is implemented as a control-plane concern, not UI decoration.

Control plane responsibilities:
- define admissibility standards,
- evaluate proposal legitimacy,
- enforce policy outcomes,
- record decision evidence and rationale.

Execution plane responsibilities:
- process requests,
- run stage sequence,
- produce artifacts and telemetry.

## Domain separation

- Observability: "What happened?" (raw stage/event timelines).
- Governance: "Was it acceptable?" (policy, risk, confidence, admissibility, escalation).

This separation prevents structural drift where governance becomes a duplicate log viewer.

## Policy model shape (V1)

- Global policy + worker-scoped policy overlays.
- Decision-class thresholds for confidence/uncertainty and requirement gates.
- Guardrail modes and blocking flags.
- Operator-visible policy and integrity context in replay.

## Why this matters

Governance systems fail when policy is implicit or mutable without trace.

Elora reduces that risk by:
- snapshotting policy context,
- evaluating commit against captured context,
- exposing policy trace in operator workflows.
