# Governance and Observability

## Governance Focus

Governance is treated as a first-class control surface, not a logging sidebar.

Key operator outcomes:
- explain why a job was blocked,
- identify which boundary failed,
- see risk and confidence context quickly,
- verify replay and admissibility completeness states.

## Observability Focus

Observability provides runtime sequence and diagnostics.
Governance provides acceptability and accountability assessment.

This separation reduces confusion between:
- “what happened” (observability), and
- “was it acceptable under policy” (governance).

## Replay Direction

Replay is moving toward stronger evidence coherence:
- canonical evidence bundles,
- less payload duplication,
- stricter completeness semantics,
- faster operator triage in under-10-second workflows.

Security relevance:
- signed/verified boundaries reduce silent tampering risk,
- hash-linked replay trails improve forensic confidence,
- policy and admissibility context is preserved with the decision record.
