# Snapshot

Last updated: 2026-03-24

First implemented (from changelog): 2026-02-28

This snapshot is the quickest way to understand Elora's current posture.

## What Exists Today

- Governance-first runtime flow with explicit proposal-to-commit boundary.
- Commit-stage admissibility decisions that can block outcomes by policy class.
- Replay-capable governance surfaces with tamper-evident chain metadata.
- Security-first admin/runtime posture with hardened auth and transport controls.

## What This Public Site Shows

- A guided Governance Replay tour with synthetic decision evidence.
- Public architecture and positioning context in document form.
- A changelog and feature narrative aligned with current build direction.

## What Is In Active Build

- Admissibility completeness hardening and stricter authority coverage.
- Canonical evidence bundles and deeper rule-level policy trace detail.
- Expanded fabric/distributed control-plane workflows and tours.
- WorkerHost runtime distribution and runtime-hash consistency checks across hosts.
- GPU-aware host operations with inference-node/model visibility in Fabric.
- Engine-local WorkerHost deployment bootstrap for first-node setup.
- Runtime dependency inventory + update-check visibility in Settings.
- Live ops footprint rail for Engine and Fabric host/worker runtime posture.
- Early hardware-attestation track planning (`software` -> `hardware_backed` -> `hardware_deployed`) under application for funding.

## Implementation Timeline (Selected)

- Late January 2026: Elora Taurus project build begins.
- Q1 2026: proposal-to-commit governance boundary, replay surfaces, and audit-first operator workflows implemented (active hardening continues).
- March 2026: public Architecture context, Governance Pipeline documentation, and guided replay demo published on website.
- March 2026 (mid): WorkerHost bootstrap builder + runtime update flow added for distributed host operations.
- March 2026 (late): Engine-local WorkerHost deploy path and runtime inventory/ops telemetry added.
- Research track opened: hardware-backed attestation exploration (including LUNA and OpenTitan feasibility work).

## Scope Note

This is a public-safe representation.
Production environments include deeper telemetry, broader controls, and richer operational detail than this demo.
