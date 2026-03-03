# Risk Model and Operator Workflow

## Risk is a first-class output

Elora treats risk as operationally actionable output rather than passive analytics.

Risk signals combine:
- confidence floors,
- uncertainty bounds,
- policy flags,
- guardrail outcomes,
- escalation criteria.

## Operator workflow objective

An operator should be able to answer "What happened and what action is required?" in under 10 seconds for common governance incidents.

## Practical workflow layers

Layer 1: Dashboard triage
- high-risk jobs,
- terminated outcomes,
- active escalations,
- drift signals.

Layer 2: Governance replay
- decision summary,
- blocking stage and reason,
- policy/admissibility trace.

Layer 3: Forensic replay
- stage-level event reconstruction,
- anomaly timeline,
- run-to-run differences.

## Governance ergonomics principle

UI density should increase with depth:
- summary first,
- evidence next,
- raw traces last.

This preserves operator speed without hiding complexity.
