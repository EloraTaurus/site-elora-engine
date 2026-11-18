# MCP Protocol & Agent Integration

Topic record prepared: 2026-10-27. November extension prepared: 2026-11-18.

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

## November extension: external work and shared review

This extension records targeted repository appearances through 18 November, not an exhaustive earliest-origin search. Later mechanisms are not assigned to the October demonstration or the archive’s March date. First public disclosure of this extension is not established by local preparation.

| Capability | Checked repository date and fingerprint | Evidence and limits |
| --- | --- | --- |
| External task ledger and approval/acceptance | 2026-11-05, `95592331c`, `deb044e43` | Structured external proposals and reviewed work; reports remain Agent claims, not server-observed execution |
| MCP Apps task review | 2026-11-09, `e17b47b55`, `1f8196d19` | Exact-task human consent; selection and connection consent are not task approval |
| Human-authorised closure | 2026-11-10, `6b76e8a06`; 2026-11-12, `7726335fd` | Acceptance, explicit delegation and actual closure remain distinct; current checks and final Agent comment remain required |
| Shared read-only board and Preview | 2026-11-13, `104c9e45f`, `9fcb649fd` | Shared presentation with scoped reads; Preview is not a login test |
| Module-owned grants and suspension | 2026-11-15, `05a0365da`, `e5349337a`; 2026-11-16, `1bfd07106` | Saved feature/resource grants survive suspension without allowing access |
| Sign-off and shared ticket editing | 2026-11-18, `7b3402725`, `3c0f7fb10`, `da82c6327` | Shared Grid/List details and on-demand editing; deployment and human acceptance remain separate |
| Advisory priority and human assignment | 2026-11-18, `93b6f8a59` | Agent advice is separate from audited human decisions and cannot grant execution authority |

Project and parent-ticket associations organise work without transferring task approval, acceptance or closure authority. Added tasks require fresh reviewed scope while earlier evidence remains retained. Shared components serve roles and collaborators; backend permissions cover direct reads, counts, filters, links, fields and mutations rather than relying on hidden buttons.

Local tests recorded in the changelog exercise exact revisions, scoped shared views, Preview, direct mutation denial and responsive review. They are project validation records, not independently rerun results for this documentation update or proof of universal enforcement.

The 18 November record includes a reported live widget interruption. Action-local feedback, saved-state reconciliation and visibility recovery are locally prepared; actual-host human acceptance remains pending. Reconnection does not repeat a decision or restore revoked authority. No successful live closure is inferred from a deployment report.

MCP Apps, consent, least privilege, human review, revision checks, append-style records and workflow state machines remain established foundations. This record describes Elora’s bounded assembly, not ownership of those techniques, novelty, certification or universal client interoperability.
