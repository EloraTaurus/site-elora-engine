# Architecture and Control Plane

Last updated: 2026-03-07

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

## Current Deployment Reality

Current production path is still single-VM oriented in many environments.
The architecture and roadmap are intentionally being shaped for multi-host separation next.
