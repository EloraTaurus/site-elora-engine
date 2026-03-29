# Public Documentation Copy

Source: `engine/docs/FEATURES.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Elora Engine Features (Current + In Development)

Last updated: 2026-03-29

Purpose: operator-facing summary of what Elora has today and what is actively being built.

Status labels:
- `Live` = operational and in use.
- `Partial` = usable but not fully complete.
- `In Development` = active build, iteration, or hardening in progress.
- `Planned` = defined direction, not yet built.

## Platform Surfaces

| Area | Current State | In Development |
|---|---|---|
| Dashboards | `Live/Partial` multi-dashboard admin navigation (`Overview`, `Dashboards`, `Governance`, `AI Runtime`, `Fabric`, `Observability`, `Lab`, `Operators`, `Settings`) | Consolidation and UX simplification across dashboard groups |
| Observability | `Partial` job timeline and replay-oriented views, runtime event visibility, raw evidence panels | Replay forensics polish, compact operator-first incident triage |
| Governance | `Partial` governance dashboard, policy editor v1, replay review, decision/admissibility metadata, commit boundary visibility | Governance Incident Map redesign, policy traceability depth (`rule_id/version`), stricter admissibility completeness |
| AI Runtime | `Partial` models, pipeline controls, behavior, memory, knowledge, plugin controls | Runtime dashboard maturity, profile mapping improvements, context and retrieval controls |
| Fabric | `Partial` WorkerHost + Provisioner surfaces, worker lifecycle controls, template/provisioning scaffolds | Clear VM vs container split hardening, worker-host telemetry depth, safer lifecycle actions |
| Lab | `Partial` commit harness and runtime validation surfaces | Expanded deterministic test packs and release proof workflows |

## Core Engine Capabilities

| Capability | Current State | In Development |
|---|---|---|
| Commit Enforcement | `Live/Partial` centralized commit enforcement across async/direct paths, proposal-first flow, blocked commit termination | Additional hard fail-closed modes and stricter parity checks |
| Replay Integrity | `Partial` hash-chained replay events, chain validation, replay metadata (`trace_complete`, admissibility fields) | Canonical evidence bundle deduplication, stronger completeness contracts |
| Deterministic Recompute | `Partial` `commit_input_v1` + `commit_decision_v1` capture and lab recompute support | Contract hardening for authority and decision class admissibility |
| Policy Controls | `Partial` policy editor v1 with worker-scoped mapping and authority toggles | More granular policy classes and richer rule-level outputs |
| Risk & Confidence | `Partial` confidence/risk surfacing in governance and replay views | Better operator-first anomaly/risk prioritization and class-based policies |

## Data and Runtime Features

| Area | Current State | In Development |
|---|---|---|
| Jobs + Auditing | `Live/Partial` job records, risk/confidence summaries, source normalization, export support | Cleaner evidence model and faster operator diagnosis flow |
| Provider Telemetry | `Partial` provider/model/latency/token/error capture in job metrics | Consistent multi-provider schema and routing-aware analysis |
| Knowledge + Memory | `Partial` knowledge/memory admin surfaces and profile controls | Bucket/profile ergonomics and retrieval/memory strategy hardening |
| Pipeline Runtime | `Partial` extended canonical runtime stages with pre-inference evidence capture (`prompt`, `memory`, `knowledge`) and commit-aware flow | Runtime-type overlays, skipped-stage clarity, deeper governance-native stage controls |

## Integrations

| Integration | Current State | In Development |
|---|---|---|
| WordPress Plugin | `Partial` plugin-connected chat path, source attribution, governance-aware outcomes | Move more plugin workload into managed Fabric worker lifecycle |
| WorkerHost | `Partial` local host/container lifecycle APIs and dashboard controls | Distributed host registration, stronger host-level telemetry and controls |
| Provisioner | `Partial` VM provisioning path and operator setup guides | Environment hardening and safer production-ready workflows |

## Security and Access

| Area | Current State | In Development |
|---|---|---|
| Admin Auth/Sessions | `Live/Partial` admin auth, session handling, OTP path, bootstrap controls | Continued hardening and operational runbook coverage |
| Secrets and Signing | `Partial` encrypted-at-rest secrets path and optional HMAC signing for commit decisions | Wider signature coverage and stricter verification/reporting surfaces |
| Guardrails | `Partial` guardrail-driven blocked/terminated outcomes integrated with commit path | Broader rule coverage and clearer governance explainability |

## What This Means Today

Elora is already operating as a governance-first runtime with:
- proposal-first commit enforcement,
- replay and admissibility evidence surfaces,
- operator dashboards across governance/observability/runtime/fabric,
- and active progression toward stronger deterministic control-plane behavior.

The current development priority is hardening evidence integrity, admissibility completeness, and operator-speed governance workflows.
