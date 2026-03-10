# Public Documentation Copy

Source: `engine/docs/OPERATORS/INFERENCE_COMMIT_GOVERNANCE.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Inference + Commit Governance Model (V1)

## Why this exists

Elora treats inference as proposal generation, not authority to act.

- Inference stage: creates a proposal.
- Commit stage: decides admissibility (allow/deny) using deterministic checks.
- Delivery stage: only runs after commit authorization.

This separation prevents "model output == execution authority" failure modes.

## Runtime event contract (V1)

Replay captures explicit proposal/commit lifecycle events:

- `proposal.created`
- `proposal.validated`
- `commit.requested`
- `commit.authorized`
- `commit.denied`
- `commit.executed`

Legacy compatibility events may exist in parallel.

## Deterministic commit input

Commit decision is recomputed from stored commit input snapshots:

- request/proposal payload
- decision class snapshot
- policy snapshot
- config snapshot + hashes
- confidence/uncertainty/policy flags
- worker/source context

No external reads are required for recompute in Lab.

## Authority admissibility and drift

Governance concern:

- Authorization can be valid when proposal is created.
- It may become inadmissible before commit (revocation/delegation/state transition).

V1 includes admissibility checks in commit evaluation.

If required and not admissible, commit denies with authority-related failure classes.

## Tamper evidence

- Commit decisions are cryptographically signed when signing is enabled.
- Replay events are hash-chained.
- Replay APIs return chain-validity metadata.

This is tamper-evident, not immutable storage.

## What is still needed for stronger resilience

1. Immutable audit storage:
- append-only/WORM backend or signed off-box log sink.

2. Signed authority context at ingress:
- source/worker authority epoch and delegation claims must be signed.

3. Key rotation + signature metadata:
- include key identifiers and rotation windows for commit signatures.

4. Replay integrity SLO:
- periodic chain verification over recent jobs and alert on mismatch.

5. Policy version governance:
- enforce explicit policy version pinning for every commit.

## Operator checks

When investigating a blocked run:

1. Open Governance Replay and confirm:
- proposal and commit sequence is present.

2. Check integrity strip:
- policy snapshot present
- config snapshot present
- replay chain valid

3. Validate commit reason and violations:
- should match deterministic recompute in Lab Commit Harness.
