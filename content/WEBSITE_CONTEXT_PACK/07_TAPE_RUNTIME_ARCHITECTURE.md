# Tape Runtime Architecture

Last updated: 2026-03-13

First implemented (from changelog): 2026-03-13

## Purpose

Elora introduces Tapes to separate execution infrastructure from capability identity:
- Workers are generic runtime shells.
- Tapes are packaged capability bundles loaded into workers.

This keeps runtime modular while preserving governance-grade traceability.

## What a Tape Represents

A Tape is a plugin-style runtime artifact with:
- identity (`tape_id`, version),
- manifest-defined compatibility/runtime contract,
- behavior profile bindings,
- policy/governance binding context.

Tapes are registered artifacts, not ad-hoc runtime code.

## Runtime Binding Model

At runtime, the Engine resolves worker + tape assignment:
- Worker provides execution capacity.
- Tape provides capability behavior contract.
- Policy snapshot still governs admissibility at commit.

This supports capability expansion without creating one worker type per agent/task.

## Replay and Admissibility Relevance

Tape identity is captured in decision evidence so replay can validate:
- which capability bundle was active,
- which version was loaded,
- what policy context was bound at commit.

This closes a traceability gap between “worker executed” and “what executable capability contract it executed under.”

## Behavior, Memory, and Knowledge

Current direction:
- Tape can bind runtime behavior profile.
- Tape uses existing memory/knowledge pools in v1.
- Future iterations can deepen tape-level resource isolation as needed.

## Governance Position

Tape permissibility is resolved by Engine control-plane authorization, then enforced through deterministic commit evaluation.

In short:
- upstream control decides what can load,
- commit boundary decides what can execute.
