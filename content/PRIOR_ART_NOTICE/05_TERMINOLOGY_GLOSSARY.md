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

## Definition Governance

- First published in public disclosure: `2026-03-09`
- Last updated: `2026-03-09`
- Changes to definitions should be additive, date-stamped, and backward-referenced in changelog entries.
