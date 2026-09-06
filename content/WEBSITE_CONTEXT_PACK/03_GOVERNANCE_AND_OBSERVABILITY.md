# Governance and Observability

Last updated: 2026-09-06

First implemented (from changelog): 2026-02-19

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

## Governance Provenance and Stage Replay

Governance Provenance now provides the wider evidence journey:
- period, date, session, turn, and lane structure,
- lifecycle, Runtime Intelligence, policy, guardrail, and commit evidence,
- continuous TOCTOU state with bounded interpretation,
- Stage Replay for focused turn-level inspection,
- public-safe Schematic HTML and optional JSON from one disclosure projection.

The governed Testing Edge adds conversation-shaped research interaction while retaining run identity, selected AI Behaviour, Memory Governance, provider context, and outcome provenance. It does not replace the forensic report or grant conversational output authority.

Security relevance:
- signed/verified boundaries reduce silent tampering risk,
- hash-linked replay trails improve forensic confidence inside the wider provenance journey,
- policy and admissibility context is preserved with the decision record.
