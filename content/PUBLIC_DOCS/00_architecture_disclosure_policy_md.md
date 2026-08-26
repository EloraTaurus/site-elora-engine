# Architecture Disclosure Policy

This public site follows an open-architecture, closed-implementation disclosure model.

## Why this policy exists

Elora publishes architectural and governance models so operators, reviewers, and peers can evaluate system design principles. At the same time, Elora withholds implementation-level runtime contracts that could unnecessarily increase attack-surface intelligence.

## Public disclosure scope (open)

- governance architecture and control-plane concepts
- proposal -> commit -> execution boundary model
- operator workflows and governance review surfaces
- security posture intent and control categories
- architectural capability summaries and technical chronology

## Private implementation scope (closed)

- internal API route contracts and exact endpoint mappings
- authentication header contracts and signing internals
- runtime configuration keys and infrastructure secrets contracts
- infrastructure topology, host layout, and service port mapping
- privileged recovery procedures and internal runbook commands

## Publication intent

This model is intentional. It allows public review of architecture and governance posture while preserving operational security for live environments.
