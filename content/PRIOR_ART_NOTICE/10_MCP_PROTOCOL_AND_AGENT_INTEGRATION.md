# MCP Protocol & Agent Integration

Topic record prepared: 2026-10-27.

This record describes Elora's integration with the established Model Context
Protocol (MCP), its OAuth connection lifecycle and scoped Agent workflows. It
does not define a new MCP protocol or claim ownership of the underlying standard.
Memory experiments and public-report mechanisms have separate records in the
Engine Capability Register and Evidence Method.

The preparation date is not a verified first public disclosure date. The
archive's original 2026-03-09 date is not assigned retrospectively to this work.
Live publication of this local revision remains unestablished by preparing it.

## Connection and operation boundaries

External assistants retain their own inference provider and connect using a
distinct Agent identity. Owner consent binds the registered client, resource
and delegated scope. Existing identity, delegation and Governance checks still
apply to protected operations; a valid connection is not permission for every
operation.

The bounded demonstration exposes synthetic read-only evidence. Expiry,
revocation, owner changes and current permissions can stop access. Renewable
connection authority uses rotating credentials and replay handling. Protocol
compatibility and client recovery require their own versioned evidence; local
tests are not acceptance by every MCP client.

## Checked repository milestones

| Integration milestone | Checked repository date and fingerprint | Scope and limits |
| --- | --- | --- |
| OAuth-protected MCP demonstration | 2026-10-26, `3a8e61d8` | Delegated Agent identity, owner consent and protected synthetic reads; wider Research access is not established |
| Renewable Agent connections | 2026-10-26, `d818b826` | Expiring grants, rotating credentials, replay handling and per-operation permission checks; this does not guarantee an external runtime cutoff or universal latency bound |
| Agent-first task investigation | 2026-10-27, `3f032f90` | Owner-scoped task navigation, pagination and retained evidence; synthetic workflow implementation is separate from general autonomous execution |
| Human review and explicit observation escalation | 2026-10-27, `18d0b6d9` | Human-directed review and escalation in a scoped observation workflow; observation and review do not expand execution authority |

These fingerprints identify checked repository appearances, not an exhaustive
origin search, public disclosure timestamp, authorship proof or priority
determination. Later behaviour must not be projected back onto an earlier commit.

## Tasks, observations and evidence

Scoped task plans and ledgers retain trusted originals, separately labelled
adjustments, job/task attribution and stage/decision evidence. Integrity failures
can trigger containment and owner review in the synthetic workflow. Human
observation delivery, retry and explicit escalation remain separate decisions.

Read-only Provenance and Security previews project retained audit receipts,
including unknown historical fields. They do not establish shared threat-store
integration. Hashes and local append restrictions are not independent
authentication of an entire execution or proof of distributed atomicity.

## Foundations and related records

MCP, OAuth, PKCE, scoped access control, token rotation, transactional state and
append-style evidence are established protocols and techniques. This record
documents their Elora-specific assembly and bounded research use.

- [Public Agent overview](https://ai.elorataurus.com/agentic)
- [Governance Technical Register](../prior-art/?article=02_TECHNICAL_REGISTER.md): current-authority and evidence refinements.
- [Engine Capability Register](../prior-art/?article=06_ENGINE_CAPABILITY_REGISTER.md): memory and publication mechanisms.
- [Chronology and Evidence Matrix](../prior-art/?article=08_CHRONOLOGY_EVIDENCE_MATRIX.md): dated milestones and disclosure limits.
- [Engineering catalogue](https://ai.elorataurus.com/engineering): implementation scope and maturity.

Earlier unresolved historical fingerprints and frozen Standing results retain
their original status. This topic reorganisation does not change those records.
