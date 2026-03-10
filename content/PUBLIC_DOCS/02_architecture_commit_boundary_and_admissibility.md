# Commit Boundary and Admissibility

## Core principle

Authorization at proposal time does not imply admissibility at commit time.

A request may be valid when proposed and invalid when committed due to:
- revocation,
- delegation change,
- authority epoch drift,
- policy state transition.

## Elora model

- Inference node: constructs proposal artifacts.
- Commit node: evaluates admissibility via deterministic function over captured input (`commit_input_v1`).
- Delivery node: only executes after commit authorization.

## Deterministic admissibility contract

Commit is intentionally constrained:
- no network dependency,
- no model re-run,
- no hidden current-state reads beyond captured snapshots.

This creates procedural replayability.

## Authority drift handling

Elora captures proposal-time and commit-time authority context and checks for mismatch.

Representative drift outcomes:
- `authority_not_admissible`
- `authority_drift`
- `authority_not_captured`

These are governance-class violations, not generic runtime exceptions.

## Security posture implication

This moves system trust from "the model said yes" to "the control plane can still prove admissibility under captured state".
