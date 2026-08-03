# Threat Intelligence Architecture

Elora Threat Intelligence is an evidence and investigation domain for AI runtime security research. It detects and interprets bounded threat signals, creates evidence-backed findings, groups related evidence into governed Cases, and connects those records to the authoritative Governance and Replay evidence.

## Record hierarchy

1. **Detection** - an atomic detector result with bounded evidence and provenance.
2. **Finding** - an evidence-backed security record that separates classification, recommendation, actual action, policy result, confidence, and risk context.
3. **Governance Session** - an exact evidenced correlation boundary for related findings. Evidence without a session identifier remains ungrouped.
4. **Threat Case** - the governed investigation boundary containing related findings and append-only case activity.
5. **Case Report** - a bounded review projection across the Case, attack map, runtime timeline, evidence, controls, related records, and activity history.

Atomic findings remain available beneath a grouped Case. Grouping does not rewrite source evidence.

## Detection and interpretation

The live deterministic detector can review bounded prompt and final-output surfaces. Semantic Observation and learned Threat Interpretation can add evidence-only context after repair processing, but they cannot intervene or become Governance authority.

Threat Intelligence research packs provide repeatable scenarios for evaluation. Trial Rails remain separately controlled so passive monitoring does not silently inject adversarial content into an ordinary Observer run.

## Governance decision bridge

Threat Intelligence records what it assessed and recommended. Governance records the final commit decision and reason.

The decision bridge can show:

- threat severity and downstream Governance severity,
- recommended action and recommendation disposition,
- Governance evaluation and final runtime action,
- commit decision and decision reason,
- operator identity and bounded permission scope where evidenced,
- applicable policy basis,
- and any separately recorded residual-risk acceptance.

Missing authority, policy, permission, or acceptance evidence remains `not recorded`. It is not inferred as safe.

## Residual-risk acceptance

Authorized operators can create time-bounded and revocable residual-risk acceptance evidence for a Threat Case. Acceptance history is append-only.

Risk acceptance cannot:

- retroactively approve a runtime commit,
- remove or rewrite a Threat Finding,
- replace an Elora Decision,
- or stand in for Governance Replay.

## Guardrail Defence

Guardrail Defence scorecards separate model adherence, Elora interception, no-escape performance, and combined environment defence. Historical standings are restricted to sufficiently comparable execution conditions so model conclusions are not detached from runtime context.

## Assurance mapping

Case Reports can map available evidence to the EU AI Act, NIST AI RMF, UK AI principles, and ICO AI/data-protection guidance using evidence-present, partial, and not-evidenced states.

These mappings support operational assurance and audit preparation. They do not establish legal compliance, conformity, legal advice, or independent certification.

## Authority boundary

Threat Intelligence detects, interprets, recommends, correlates, and records. Governance owns consequence-bearing authorization at commit.

Threat Intelligence cannot grant permission, rewrite Governance outcomes, self-promote a detector, or manufacture missing provenance.
