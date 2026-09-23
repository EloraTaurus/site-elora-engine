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

## Threat Finding

A bounded evidence-backed security record derived from one or more atomic detections. It separates detection, classification, recommendation, actual action, policy result, confidence, and available provenance without becoming an authorization decision.

## Governance Session

An evidenced correlation boundary used to group related findings and investigation activity when the same exact session identifier is available. Evidence without session provenance remains explicitly ungrouped.

## Guardrail Defence Scorecard

An environment-qualified comparison record that separates model adherence, Elora interception, no-escape performance, and combined defence evidence. Standings are limited to sufficiently comparable runtime conditions.

## Threat Case

A governed investigation boundary that groups related atomic findings, evidence, controls, risks, and append-only case activity. Grouping does not rewrite the underlying findings or their source evidence.

## Decision Bridge

A bounded relation showing Threat Intelligence assessment and recommendation alongside the separately authoritative Governance evaluation, recommendation disposition, final runtime action, commit result, and decision reason.

## Residual-Risk Acceptance

An explicit, time-bounded and revocable authority record for a stated Threat Case risk. It cannot retroactively authorize a runtime action, remove a finding, or replace Governance Replay.

## Effective Runtime Permissions

The evidenced permission context available to a governed action, such as filesystem, network, external API, shell, memory, model-tool, or secret access. Missing producer evidence remains not recorded rather than inferred.

## Research Claim Ladder

A report-visible distinction between recorded evidence, derived calculation, interpretation, provisional support, and independent validation. Progression requires the evidence appropriate to that standing; a functioning instrument does not validate its own research claim.

## Evidence Passport

A bounded set of links and state references connecting a headline claim or grouped finding to its comparison cohort, validity evidence, limitations, and exact supporting run steps.

## Research Review Packet

A privacy-bounded orientation artifact for human or AI review. It summarizes proposition, claim standing, limitations, grouped findings, and evidence references without replacing the complete forensic report or copying protected payloads.

## Session Behaviour Trajectory

An ordered projection of evidenced behaviour observations across a governed research session. It can show recurrence and mitigation but does not by itself establish identity, intent, causation, escalation, circumvention, or compromise.

## Terminal Working-Memory Release

Evidence that disposable runtime state owned by a completed or failed workload reached its declared release boundary. It is distinct from deletion of durable reports, reviewed profiles, promoted learning, or canonical audit evidence.

## Governance Provenance

A session-level reconstruction that connects preparation, actor turns, execution lanes, lifecycle, Runtime Intelligence, TOCTOU, policy, guardrail, and commit evidence while preserving the distinct meaning and authority of each source record.

## Stage Replay

A focused turn-and-stage inspection view within Governance Provenance. It presents retained execution evidence but does not replace the wider session journey or create a new source of authority.

## Governed Testing Edge

A conversation-shaped Observer research surface that exposes run, AI Behaviour, memory, provider, lifecycle, and governance evidence. It does not turn conversational output into execution authority or replace the forensic report.

## TOCTOU Evidence State

Retained evidence about relevant check, state, use, and consequence moments. A difference or collision is an investigation signal and does not alone prove vulnerability, exploitation, causation, or impact.

## Prompt Composition Receipt

A content-free record of final prompt composition cost and effective runtime configuration after governed context fitting. It is distinct from provider token accounting and does not disclose prompt content.

## Provider Completion Integrity

The separation between transport success and a terminally complete model response. Incomplete output may be retained as diagnostic evidence but cannot be promoted as an approved answer or commit candidate.

## Sense

Elora's read-only runtime investigation workbench for model capabilities, managed-service ownership, resource evidence, storage diagnostics and recorded execution. Sense does not grant scheduling, policy, intervention or commit authority.

## Execution Atlas

An observational view of retained stages, pipeline nodes, provider attempts, operations, measurements and evidence relationships. Recorded order or shared execution context does not by itself establish dependency, causation or authority.

## Governed Workspace

A conversation-shaped human interaction surface for bounded document/webpage tasks, comparisons, model interaction and context research. Task output remains subject to Engine-owned admission, completion, approval and release decisions.

## Recall Claim

A bounded statement that relates retained conversation-memory evidence to a response or probe. A correct answer, compaction marker or generic source label alone does not establish that recall supplied the fact.

## Execution Evidence Record

A portable public-safe projection of one bounded captured execution story. It may include scoped authority, lifecycle, operation, measurement, outcome, integrity and gap evidence, but does not independently authenticate origin or certify whole-execution Governance.

## Governed Response Delivery

The boundary that keeps answer content internal until completed-response commit evaluation authorises release. Progress visibility or provider completion does not itself authorise delivery.

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
- Last updated: `2026-09-23`
- Changes to definitions should be additive, date-stamped, and backward-referenced in changelog entries.
