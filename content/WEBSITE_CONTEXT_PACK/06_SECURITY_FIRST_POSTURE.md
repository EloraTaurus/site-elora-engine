# Security-First Posture (Public)

## Design Principle

Elora is built with a governance-and-security-first stance:
- authorization boundaries are explicit,
- runtime decisions are explainable,
- replay evidence is structured for audit workflows.

## Runtime Security Signals and Controls

- Protected routes enforce token/session requirements.
- Signed-request patterns and strict header handling are used for trusted ingress paths.
- Source identity is captured and attached to job/audit records.
- Guardrail outcomes propagate to commit-stage enforcement (`allow` vs `terminated`).

## Cryptographic and Integrity Mechanisms

- Commit decisions support HMAC signing when configured.
- Replay events are hash-chained for tamper-evident sequencing.
- Integrity metadata is surfaced in governance replay to support operator verification.

## Operational Security Surfaces

- Admin security controls include auth/session hardening and OTP-capable flows.
- Governance policy controls support stricter admissibility modes by worker/source context.
- Fabric and distributed direction prioritizes identity-based trust over IP trust.

## Scope Note

This is a public-safe summary. Implementation details are intentionally high-level and do not expose sensitive configuration or private operational data.
