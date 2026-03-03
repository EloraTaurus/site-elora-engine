# Replay, Forensics, and Accountability

## Two replay modes by intent

1) Observability replay (forensics)
- objective: reconstruct execution trace.
- focus: sequencing, timings, stage events, anomalies.

2) Governance replay (accountability)
- objective: justify outcome legitimacy.
- focus: decision class, policy checks, confidence/risk, blocking reason.

## Why this separation is advanced

Most systems provide log replay only. Elora provides legitimacy replay.

That enables a 10-second operator answer to:
- "Why was this blocked?"
- "Which rule or admissibility gate failed?"

## Evidence model

Replay value depends on captured context quality:
- proposal artifacts,
- commit input snapshots,
- commit decision outputs,
- policy/config context,
- risk/anomaly annotations.

## Integrity trajectory

Current trajectory includes tamper-evidence signals (hash-chained replay events, signed commit decisions).

Next maturity step is immutable/off-box evidence retention and periodic integrity attestations.

## Audit-grade expectation

A governance replay is considered defensible when:
- outcome is machine-reproducible from stored evidence,
- policy context is explicit,
- authority context is explicit,
- legacy/incomplete traces are clearly labeled as such.
