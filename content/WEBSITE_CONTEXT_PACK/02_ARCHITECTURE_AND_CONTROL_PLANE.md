# Architecture and Control Plane

Last updated: 2026-09-06

First implemented (from changelog): 2026-02-28

## Control-Plane Model

Elora separates generation from authorization:
- Inference proposes.
- Commit authorizes or denies.

This prevents proposal-time output from being treated as final truth.

## Deterministic Commit Boundary

Commit decisions are evaluated from captured inputs/snapshots, not live mutable state.
Core direction:
- stable commit input contract,
- decision class + policy/config context binding,
- replayable allow/deny outcome with machine-readable checks.

## Why This Matters

This architecture is built for defensibility:
- lower policy bypass risk,
- clearer post-incident reconstruction,
- tighter operator accountability.

## Governance Provenance

The current `0.2.8` architecture reconstructs governance as a session-level evidence journey. Preparation, actor turns, governed and comparison lanes, runtime transitions, continuous TOCTOU state, policy, guardrails, and commit outcomes remain linked but semantically separate. Stage Replay is a focused inspection view within this wider provenance model.

## Governed Interaction and Provider Integrity

The Testing Edge brings conversation-shaped Observer interaction under run identity, AI Behaviour provenance, Memory Governance, readiness, context, provider, and completion evidence. Provider transport success is not sufficient for approval: incomplete output remains evidence and cannot become a commit candidate.

## Current Deployment Reality

Current production path is still single-VM oriented in many environments.
The architecture and roadmap are intentionally being shaped for multi-host separation next.

## Tape Runtime Layer

Elora is adding a tape-runtime layer so capability identity is explicit:
- workers act as generic runtime shells,
- tapes define capability contract and runtime behavior bindings,
- engine control plane authorizes tape load upstream,
- commit/replay capture tape identity for admissibility traceability.
