# Security Claims Matrix

Purpose: keep feature-page security messaging strong and defensible.

| Claim | Backing Mechanism | Current Status |
|---|---|---|
| Elora enforces a real decision boundary, not direct model passthrough | Proposal-first flow with commit-stage authorization/deny logic | Live / Hardening |
| Blocked outcomes are explicit and auditable | `blocked_commit_validation` + terminal `terminated` outcomes in job/governance surfaces | Live |
| Replay trails are tamper-evident | Hash-chained replay events (`prev_hash` / `event_hash`) + chain validity metadata | Live / Hardening |
| Commit outcomes can be cryptographically signed | HMAC-signed commit decision support when secrets key is configured | Partial (config-dependent) |
| Sensitive paths are not open by default | Token/session-protected admin and protected runtime routes | Live |
| Ingress is identity-aware, not anonymous text-only | Header/source attribution and request identity context captured in job/audit metadata | Live / Partial |
| Governance decisions are replayable from captured state | Captured commit artifacts (`commit_input_v1`, `commit_decision_v1`) + lab recompute tooling | Partial |
| Policy strictness can be mapped by worker/source context | Worker-scoped policy mapping + authority/admissibility controls | Partial |
| Drift between proposal and commit authority is visible | Authority snapshot fields and drift metadata in governance replay | Partial / Hardening |
| Operator review supports rapid incident reasoning | 10-second governance answer, policy trace, risk/anomaly context, raw evidence views | Partial |

## Public Messaging Guardrails

Use these phrasing rules on the website:
- Say "supports" or "when configured" for cryptographic signing features.
- Say "tamper-evident" (not "immutable") for current replay chain behavior.
- Say "in active hardening" for admissibility completeness and authority coverage.
- Avoid implying formal certification unless formally completed.
