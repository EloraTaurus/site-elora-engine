# Public Documentation Copy

Source: `engine/docs/FEATURES.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Elora Engine Features (Current + In Development)

Last updated: 2026-08-26

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
| Research | `Partial` guided dashboard, public-safe run reports, bounded Review Packets, claim-state evidence, and curated walkthroughs | Independent-label calibration, broader run exemplars, and stronger causal-validation design |
| Observer Research | `Partial` bounded run lifecycles, stage evidence, logical jobs, Research Verdicts, evidence passports, comparison cohorts, and durable reports | Broader outside review, scenario packs, public-safe evidence depth, and independent validation |
| Learning | `Partial` ERIS runtime intelligence, NNLSL, supervised teaching, Model Exam evidence, and governed learning-memory Decisions | EBLS behaviour-learning expansion, Model Wiki growth, and additional supervised capability teaching |
| Threat Intelligence | `Live/Partial` live bounded detection, grouped Cases, atomic findings, Governance Session investigations, Case Reports, decision/authorization bridging, and Session Behaviour Trajectories | Broader provenance, recommendation trend analysis, saved Case views, signed export governance, and formal incident correlation without transferring authority from Governance |
| Guardrail Defence | `Live/Partial` environment-qualified model-adherence and Elora-interception scorecards | Larger comparable evidence windows and expanded public-safe reporting |
| Elora Decisions | `Live/Partial` categorized operational decision histories with bounded relations to source evidence | Wider producer coverage and notification delivery controls |
| Runtime Governance | `Partial` observe, reason, recommend, and governed-intervention evidence plus managed report and learning-memory lifecycles | Wider producer coverage and richer reviewer-facing decision narratives |
| Engine Protocol | `Partial` versioned language-neutral boundaries and deterministic conformance work for selected Engines | Expanded portable implementations and compatibility evidence |
| AI Runtime | `Partial` models, pipeline controls, behavior, memory, knowledge, plugin controls | Runtime dashboard expansion, profile mapping improvements, context and retrieval controls |
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
| Constitutional Governance | `Partial` constitutional halt signaling, repair-aware escalation visibility, and commit-bound refusal posture | Deeper constitutional evidence linkage and broader halt-class modelling |
| Cognitive Artifact Research | `Partial` bounded cognitive-state and artifact-trace research surfaces connected to report outputs | Expanded public-safe behavioural interpretation views and cross-run comparison |
| Threat Evidence Boundary | `Live/Partial` separate threat and Governance severity, detection, recommendation, recommendation disposition, Governance rationale, policy result, actual action, confidence, and provenance evidence | Wider producer coverage and stronger completeness reporting |
| Research Claim Discipline | `Partial` recorded-to-validated claim ladder, evidence passports, comparison coverage gates, exclusions, and instrument self-audit exceptions | Larger independently labelled cohorts and stronger causal-validation evidence |
| Report Evidence Boundary | `Partial` export-safe projections, integrity-labelled packaging, bounded review packets, and governed report generation | Expanded selective review formats and independent verification workflows |

## Data and Runtime Features

| Area | Current State | In Development |
|---|---|---|
| Jobs + Auditing | `Live/Partial` job records, risk/confidence summaries, source normalization, export support | Cleaner evidence model and faster operator diagnosis flow |
| Provider Telemetry | `Partial` provider/model/latency/token/error capture in job metrics | Consistent multi-provider schema and routing-aware analysis |
| Knowledge + Memory | `Partial` knowledge/memory admin surfaces and profile controls | Bucket/profile ergonomics and retrieval/memory strategy hardening |
| Pipeline Runtime | `Partial` extended canonical runtime stages with pre-inference evidence capture (`prompt`, `memory`, `knowledge`) and commit-aware flow | Runtime-type overlays, skipped-stage clarity, deeper governance-native stage controls |
| Continuity and Learning Momentum | `Partial` queued continuity flows, long-run research persistence, and bounded autonomous progression tracking | Broader continuity policy controls and richer momentum evidence |
| Echo Behaviour Signals | `Partial` Echo instability cues and frequency-learning visibility for runtime interpretation | Stronger Echo-linked report narratives and additional model/profile comparisons |

## Integrations

| Integration | Current State | In Development |
|---|---|---|
| WordPress Plugin | `Partial` plugin-connected chat path, source attribution, governance-aware outcomes | Move more plugin workload into managed Fabric worker lifecycle |
| WorkerHost | `Partial` local host/container lifecycle APIs and dashboard controls | Distributed host registration, stronger host-level telemetry and controls |
| Provisioner | `Partial` VM provisioning path and operator setup guides | Environment hardening and safer production-ready workflows |
| Training and Education Worker | `Partial` bounded lesson progression, guided examples, and symbolic communication research surfaces | Expanded teaching curricula and supervised capability formation workflows |

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
- ERIS runtime intelligence for bounded posture interpretation,
- Threat Intelligence findings and append-only investigation activity,
- Guardrail Defence evidence separating model and Elora defence layers,
- Elora Decisions for grouped operational review,
- claim ladders, evidence passports, and bounded Review Packets for qualified research interpretation,
- governed report and learning-memory lifecycles with terminal release evidence,
- research dashboards that expose deep evidence without handing over private implementation detail,
- and active progression toward stronger deterministic control-plane behavior.

The current development priority is hardening evidence integrity, admissibility completeness, behaviour-learning depth, threat-investigation maturity, and operator-speed governance workflows.
