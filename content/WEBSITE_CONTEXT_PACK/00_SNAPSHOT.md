# Snapshot

Last updated: 2026-09-06

First implemented (from changelog): 2026-02-28

This snapshot is the quickest way to understand Elora's current posture.

## What Exists Today

- Governance-first runtime flow with explicit proposal-to-commit boundary.
- Commit-stage admissibility decisions that can block outcomes by policy class.
- Session-level Governance Provenance with Stage Replay, turn/lane structure, Runtime Intelligence, continuous TOCTOU state, guardrails, and commit evidence.
- Governed Testing Edge conversations with AI Behaviour provenance, Memory Governance, and provider/completion evidence.
- Bounded provider-readiness, pressure-hold, recovery, context-selection, and completion-integrity controls.
- Security-first admin/runtime posture with hardened auth and transport controls.

## What This Public Site Shows

- A guided Governance Replay tour with synthetic decision evidence.
- A public-safe Governance Provenance capability guide for the current `0.2.8` line.
- Public architecture and positioning context in document form.
- A changelog and feature narrative aligned with current build direction.

## What Is In Active Build

- Wider Governance Provenance and Testing Edge public walkthrough coverage.
- Admissibility completeness hardening and broader producer evidence coverage.
- Expanded fabric/distributed control-plane workflows and tours.
- WorkerHost runtime distribution and runtime-hash consistency checks across hosts.
- GPU-aware host operations with inference-node/model visibility in Fabric.
- Engine-local WorkerHost deployment bootstrap for first-node setup.
- Runtime dependency inventory + update-check visibility in Settings.
- Live ops footprint rail for Engine and Fabric host/worker runtime posture.
- Pre-inference runtime evidence capture (`prompt`, `memory`, `knowledge`) with deterministic commit/replay linkage.
- Master read-only pipeline surface with extended canonical stage map across runtime modes.
- Early hardware-attestation track planning (`software` -> `hardware_backed` -> `hardware_deployed`) under application for funding.

## Implementation Timeline (Selected)

- Late January 2026: Elora Taurus project build begins.
- Q1 2026: proposal-to-commit governance boundary, replay surfaces, and audit-first operator workflows implemented (active hardening continues).
- March 2026: public Architecture context, Governance Pipeline documentation, and guided replay demo published on website.
- March 2026 (mid): WorkerHost bootstrap builder + runtime update flow added for distributed host operations.
- March 2026 (late): Engine-local WorkerHost deploy path and runtime inventory/ops telemetry added.
- March 2026 (late): Runtime pipeline expanded to explicitly capture prompt/memory/knowledge checks before inference and carry these signals through commit/replay.
- Research track opened: hardware-backed attestation exploration (including LUNA and OpenTitan feasibility work).
- August 2026: Governance Provenance and continuous TOCTOU research introduced over retained session evidence.
- September 2026: governed Testing Edge, AI Behaviour pack provenance, model-aware context governance, provider readiness/recovery evidence, completion integrity, and public-safe Schematic provenance reporting entered the active `0.2.8` line.

## Scope Note

This is a public-safe representation.
Production environments include deeper telemetry, broader controls, and richer operational detail than this demo.
