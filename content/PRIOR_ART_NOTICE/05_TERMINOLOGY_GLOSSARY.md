# Terminology Glossary (Project Definitions)

The definitions below are provided so reviewers can map terminology to implementation behavior.

## Execution Boundary

The point where a proposed output/action is either authorized or denied for release. In Elora, commit evaluation is the primary authorization boundary.

## Proposal

A model/runtime output candidate that has not yet crossed the authorization boundary.

## Commit

The authorization decision phase that evaluates admissibility, policy posture, and required context before allowing outcome release.

## Admissibility

Whether the proposal satisfies required governance conditions at commit time (policy checks, trust constraints, authority checks, and context completeness).

## Blocked Commit Validation

A terminal governance outcome where commit evaluation denies authorization and blocks release.

## Justification Payload

Structured evidence fields persisted for review (for example: decision, reason, confidence, sources, and summary metadata).

## Replay Integrity Chain

Hash-linked replay/event evidence fields used to detect tampering and support deterministic reconstruction of decision chronology.

## Authority Drift

A mismatch or evolution between captured authority context at proposal time and commit time.

## Decision Class

A typed governance context used for admissibility decisions and evaluator consistency checks.

## Risk Band

The operational severity label assigned to a run or decision context to support triage and escalation behavior.

## Operator Review Surface

UI/API surfaces used by human operators to inspect evidence, replay chronology, and policy outcomes.

## Elora Decision

A bounded, categorized record that groups related operational events into a reviewer-readable decision story. It supplements rather than replaces event-level replay evidence and does not create execution authority.

## NNLSL

Elora's Non-Neural Language and Symbolic Learning domain. It uses governed lexical, semantic, relationship, educational, and construction evidence for bounded deterministic language work, with explicit gaps and separately governed neural handoff.

## Shadow Evidence

Traceable experimental evidence that is available for evaluation but is explicitly prevented from influencing live output, promotion, governance, or execution authority.

## External Phrase Mapping (Reviewer Aid)

The phrases below are included as reviewer mapping aids. They are not exclusive to any single implementation lineage.

- `proof before execution` -> pre-execution validation, policy/evidence check before action
- `continuity` -> runtime continuity, bounded recovery/resume behavior
- `binding` -> policy/context/identity binding across decision stages
- `execution governance` -> policy-governed execution with auditable controls
- `authority before execution` -> authorization prior to release/action
- `admissibility` -> governance-condition satisfaction at authorization boundary
- `deny before consequence` -> preventive deny/block before side effects
- `commit control` -> final authorization gate at release boundary

## Highlight Terms (Dispute-Mapping Index)

These terms are intentionally listed as reviewer mapping keywords:

- `proof before execution`
- `continuity`
- `binding`
- `execution governance`
- `authority before execution`
- `admissibility`
- `deny before consequence`
- `commit control`

Interpretation rule:

- phrase differences do not change the underlying control primitive when the architecture still performs policy evaluation and authorization before execution.

For standards-level lineage and dated sources, see:
- `04_STANDARDS_BASELINE.md`

## Definition Governance

- First published in public disclosure: `2026-03-09`
- Last updated: `2026-07-20`
- Changes to definitions should be additive, date-stamped, and backward-referenced in changelog entries.
