# Evidence Method (Public and Private)

## Public catalogue and preview evidence

Record reviewed: 2026-10-27.

Publication indexes only deliberately exported public-safe artefacts. Hydration
extracts catalogue metadata and hashes without rewriting the evidence. A SHA-256
identifies exact published file bytes; it does not establish truth, authorship,
independent attestation or completeness of the underlying execution.

Matching HTML and JSON can be presented as one record. Run start/completion,
report export and publication dates are separate; missing retained values remain
unestablished and are not reconstructed from filesystem timestamps.

Supported compressed HTML can receive a bounded, integrity-checked derived
preview. The original download remains unchanged. Script-enabled report viewing
uses browser isolation and restricted network access; a usable preview is not
an additional examination result or a general safety certification.

Engineering's initial HTML and structured inventory are public projections of
the same documented scope. A report, catalogue entry and current serving build
remain distinct evidence identities. Existing Standing propositions, results
and claim ceilings are not changed by catalogue or website updates.

This page describes how Elora Taurus maintains a verifiable implementation chronology while operating with a private engine repository.

## Public-Surface Evidence

- Public site changelog and dated release notes
- Public architecture and technical-disclosure pages
- Public organisation presence and project activity timeline

## Private-Repository Evidence

- Short commit fingerprints published on the public disclosure page
- Full commit hashes retained offline in an internal evidence register
- Full diffs and tagged snapshots retained in private repository history

## External Timeline Evidence Channels

- Discord project messages (dated progress context)
- Facebook project posts (dated public status context)
- Public GitHub organisation/repository activity surfaces
- Public disclosure site updates (dated architecture/disclosure register revisions)

## Research Runtime Evidence Channels (Public-Safe)

- Dated changelog entries for observer-runtime milestones and report-surface changes
- Public disclosure updates describing capability chronology without release of direct reproducibility handles
- Report/export capability references (HTML/Markdown/JSON parity) as chronology anchors for evidence-surface development

## Chain-of-Custody Practice

- Each milestone is recorded with an ISO date (`YYYY-MM-DD`)
- Each milestone maps to one or more commit fingerprints
- Milestones are cross-referenced to changelog entries and operator-facing capability surfaces
- Internal evidence bundles preserve full hashes, patch context, and release alignment notes
- Experimental runtime-signal milestones are recorded with explicit control-boundary notes (proposal-stage scope, bounded adjustment behavior, commit boundary unchanged).
- Experimental observer-runtime milestones are recorded with explicit bounded-scope notes (research/operator context, evidence-first capture, non-production reproducibility controls withheld).

## Verification Approach

When needed, Elora can verify chronology by correlating:

- Public milestone date on this site
- Public changelog references
- Private commit fingerprint references
- External timeline evidence channels (Discord/Facebook/public posts)
- Internal full-hash evidence archive

## Evidence Classes

Every chronology entry should identify which question its evidence can answer:

1. **Earliest implementation evidence**: a private commit, historical code artifact or retained implementation record. This is not automatically public disclosure.
2. **Earliest public disclosure**: a dated public changelog, website page, report or release. A private commit date must not be substituted.
3. **Later formal demonstration**: a bounded examination or report showing a property for its recorded build, path, conditions and evidence. It is not the invention date of the underlying mechanism.
4. **Current implementation**: behaviour established in the current repository. Current presence is not evidence of historical presence.
5. **External / independent validation**: evidence produced under genuinely independent review. Elora's own tests, examinations and reports do not qualify merely because they are publicly accessible.

If a date or evidence class cannot be established, the register uses `unknown`, `not established` or an explicit evidence gap.

## Source Precedence and Conflicts

- Retained implementation history and exact artifacts are stronger for implementation dating than later summaries.
- Public pages and publication records are stronger for public-disclosure dating than private repository metadata.
- A formal examination's frozen proposition, raw retained result and claim ceiling control interpretation of that examination.
- Changelog/register conflicts are recorded rather than silently resolved.
- Filesystem times, filename dates and later export dates are not used to invent missing run dates.
- Short fingerprints are marked verified only when they resolve in the inspected repository history.

## Disclosure Boundary

Elora publishes enough information for technical chronology and architectural accountability without exposing private source code, sensitive implementation details, or internal operational identifiers.

This disclosure method is intentionally capability-first: it prioritizes dated proof of what exists and how boundaries behave, while avoiding publication of copy-ready runbooks for active research tracks.

Public Reports preserve the published projection and its limitations. Publication is operator choice, not certification, endorsement or independent validation.
