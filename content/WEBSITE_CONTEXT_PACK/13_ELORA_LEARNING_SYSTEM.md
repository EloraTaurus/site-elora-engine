# Elora Learning System (Website Context)

## Purpose

Public-safe explanation of how Elora learns model behavior and governance adherence.

## Public Surface

- Route: `/elora-learning/`
- Research page card: `Elora Learning System`

## Public Data Pattern

- Read from a public-safe JSON snapshot:
  - `demo/content/public-model-wiki.json`
- Optionally replace with API-produced snapshot later.

## Allowed Public Fields

- Model/profile identifier
- High-level grade/stars
- Guardrail adherence stars (`code`, `md`, `sqlite3`)
- Strength/weakness summaries

## Disallowed Public Fields

- Raw prompts/proposals
- Internal policy bypass probes or sensitive control internals
- Private runtime metadata and secrets

## Future Direction

- Generate this JSON from engine profile APIs via a safe-export pipeline.
- Add signed/timestamped HTML exports for periodic public publication.
