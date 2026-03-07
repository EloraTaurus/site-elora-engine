# Project Positioning

Last updated: 2026-03-07

First implemented (from changelog): 2026-01-29

## What Elora Is

Elora Engine is a governance-first AI runtime and control-plane project.

It is designed to answer a higher standard than “does the model respond?”
The key questions are:
- Was the response admissible under policy?
- Can the decision be reconstructed deterministically?
- Can an operator explain allow/deny quickly with evidence?

## What Changed

Elora is no longer a prototype chat wrapper.

It now includes:
- explicit proposal-to-commit enforcement,
- deterministic commit evaluation contracts,
- replay and audit surfaces with chain integrity metadata,
- operator-facing governance controls.

## Position in One Sentence

The Elora Taurus Project is transitioning from single-node implementation work into an auditable AI control-plane architecture.
