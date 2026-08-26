# Governance Pipeline

Last updated: 2026-03-07

First implemented (from changelog): 2026-02-28

## What the Pipeline Represents

The governance pipeline describes how a runtime proposal becomes an admissible or blocked commit decision.
It is intentionally structured so operators can explain outcomes without rerunning the model.

## High-Level Flow

- Input and source context are captured.
- Inference produces a proposal.
- Governance checks evaluate policy, admissibility, authority, and guardrail conditions.
- Commit authorizes or blocks the final outcome.
- Decision evidence is recorded for replay and audit workflows.

## Why Commit Is the Boundary

Commit is treated as the authorization boundary, not a logging step.
This keeps policy enforcement deterministic and reduces ambiguity between generation and acceptance.

## Operator Value

- Faster triage of blocked outcomes.
- Clear mapping between decision class and policy effect.
- Replay-driven accountability for incident and governance review.

## Public-Safe Scope

This page is a high-level architecture narrative.
Production systems include deeper telemetry fields, richer evidence detail, and protected operational controls.

## Implementation Timeline (Selected)

- Q1 2026: governance flow stabilized around proposal -> checks -> commit authorization boundary.
- Q1 2026: replay evidence pathways and operator triage surfaces implemented.
- March 2026: Governance Pipeline architecture page published for public context.
