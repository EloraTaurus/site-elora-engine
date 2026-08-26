# Public Documentation Copy

Source: `engine/docs/OPERATORS/GOVERNANCE_INCIDENT_MAP_V1.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Governance Incident Map v1

## Intent
Render a deterministic admissibility topology from commit artifacts. This is a structural lens, not an event timeline replacement.

## Core constraints
- Fixed topology layout; no force graph or randomized node placement.
- Edges and states derived from commit artifacts only.
- Replay event order must not change map structure.

## Data precedence
1. `commit_input_v1`
2. `commit_decision_v1`
3. replay metadata fallback

## Node set (v1)
- Job
- Entry
- Proposal
- Authority (proposal)
- Decision Class Snapshot
- Policy Snapshot
- Config Snapshot
- Justification
- Authority (commit)
- Commit
- Delivery

## Node state enum
- `passed`
- `failed`
- `not_captured`
- `skipped`
- `not_evaluated`

`terminal` is a separate boolean flag (do not encode terminal in state string).

## Edge state enum
- `neutral`
- `aligned`
- `drift`
- `invalid`
- `missing`
- `authorized`
- `denied`

V1 uses:
- Authority edge: `aligned|drift|missing`
- Commit->Delivery edge: `authorized|denied`

## Required map semantics
- Commit is visual convergence point.
- Authority(proposal) -> Authority(commit) edge communicates drift/missing state.
- Commit->Delivery edge communicates authorization or severance.

## Interaction
- Click node opens inline metadata panel (no navigation).
- Panel should show relevant hashes, admissibility flags, and boundary context for selected node.

## Visual hierarchy
1. Decision Summary
2. Governance Incident Map
3. Policy Trace
4. Raw Evidence

## Non-goals (v1)
- No physics/animated graph layouts.
- No token/latency/event-noise metrics in map nodes.
- No arbitrary branching support.
