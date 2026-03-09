# Evidence Method (Public and Private)

This page describes how Elora Taurus maintains a verifiable implementation chronology while operating with a private engine repository.

## Public-Surface Evidence

- Public site changelog and dated release notes
- Public architecture and prior-art disclosure pages
- Public organisation presence and project activity timeline

## Private-Repository Evidence

- Short commit fingerprints published on the public disclosure page
- Full commit hashes retained offline in an internal evidence register
- Full diffs and tagged snapshots retained in private repository history

## Chain-of-Custody Practice

- Each milestone is recorded with an ISO date (`YYYY-MM-DD`)
- Each milestone maps to one or more commit fingerprints
- Milestones are cross-referenced to changelog entries and operator-facing capability surfaces
- Internal evidence bundles preserve full hashes, patch context, and release alignment notes

## Verification Approach

When needed, Elora can verify chronology by correlating:

- Public milestone date on this site
- Public changelog references
- Private commit fingerprint references
- Internal full-hash evidence archive

## Disclosure Boundary

Elora publishes enough information for technical chronology and architectural accountability without exposing private source code, sensitive implementation details, or internal operational identifiers.
