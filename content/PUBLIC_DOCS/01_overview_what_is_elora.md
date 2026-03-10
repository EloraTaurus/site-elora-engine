# What Is Elora

Elora Taurus is an independent open architecture for AI governance.

The engine treats inference as proposal generation, not execution authority. Execution authority is enforced at a deterministic commit boundary where admissibility is evaluated against captured policy, configuration, and authority context.

## Core model

- Inference produces proposals.
- Commit authorizes or blocks outcomes.
- Execution occurs only after commit authorization.
- Replay reconstructs admissibility decisions without re-running models.

## Why this matters

This model supports accountable operations:

- policy-class blocking instead of silent failure
- deterministic decision explanation
- operator triage and forensic review
- governance telemetry separated from raw runtime telemetry
