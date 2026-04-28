# LLM Plugin Changelog

## 0.17 - 2026-04-25
- Elora CORE Policy Upgrade: added deterministic weighted signal fusion (`exams > echo > phyos`) producing unified `stability_score`, `confidence_score`, and `risk_score` with source-level evidence.
- Decision Escalation: replaced flat monitor mapping with escalation-aware policy stages (`monitor -> constrain -> repair -> terminate`) using recent risk trend and repeated instability checks.
- Learning-to-Action Gate: introduced confidence-gated policy bridge so learned signals only influence runtime policy when signal confidence thresholds are met.
- Exam Signal Enrichment: upgraded CORE exam feedback payload with `validated_score`, `extraction_confidence`, `grading_confidence`, and `signal_weight`.
- Evidence Surface: CORE snapshot now exports `signal_fusion`, `learning_action_bridge`, and `policy_engine` blocks for full traceability in JSON export.

## 0.16 - 2026-04-25
- Baseline Integrity: locked inflight baseline snapshot to immutable provider-default anchor values so learning/calibration/exam data cannot mutate baseline reference state.
- Exam Candidate Separation: added read-only exam-derived baseline candidates in CORE proof output to show possible baseline options without changing baseline defaults.
- Elora CORE ML Planning: added dedicated risk-control implementation plan for bucket cardinality growth, fallback buckets, minimum sample thresholds, maturity states, pruning/merge strategy, and bounded bucket serving rules.
- Learning Safety Controls: defined confidence gating and deterministic rollback policy requirements (eligibility gates, trigger criteria, rollback events, and traceability expectations).
- Signal Quality Framework: documented quality-first learning constraints (schema validity, freshness/completeness thresholds, outlier/drift handling) as a precondition for learner updates.
- Cross-Module Fusion Strategy: defined Exams + Echo + optional PhyOS signal fusion model with reliability weighting, disagreement handling, and confidence impact visibility.
- Optional Dependency Contract: formalized that PhyOS is capability-enhancing but non-blocking; learning remains operational without PhyOS, with reduced evidence surface explicitly surfaced in CORE.
- Documentation Pack: added `engine/docs/ELORA_CORE_ML/06-risk-controls-and-optional-phyos-plan.md` and linked it from the ML docs README.

## 0.15 - 2026-04-24
- Elora CORE Surface: added coordination/observability endpoints (`/admin/elora-core`, `/admin/api/elora-core`) to centralize module-level state, decisions, and learning signals.
- Architecture Boundary: documented that CORE is a deterministic/statistical control-view layer, not the location of module capability logic.
- Explainability Path: added end-to-end decision/action/signal tracing support so operator reasoning can be followed without reading internal module implementations.

## 0.14 - 2026-04-21
- Runtime Stability/Echo: added early-warning echo telemetry integration for live chat inference (`meta.echo`) with bounded pre/post generation checks.
- Runtime Noise Profiling: model-aware noise sampling and context-pressure sensitivity capture now feed stability diagnostics.
- Runtime Tuning Handoff: engaged Echo Frequency profiles can drive adaptive generation envelopes (`mirostat_tau`, `mirostat_eta`, temperature/top-p/output caps) for safer operating bands.
- Runtime Guardrails: added bounded contradiction/noise retry path and routing hooks for focus/grounding/constrain profiles before generation.
- Echo Learning Protocol: added first-run ramp-to-crackle profile format (`model + model_profile`) to support iterative baseline promotion and gradient-style retro tuning in subsequent runs.

## 0.13 - 2026-03-31
- Runtime Signals (Experimental): experimenting with proposal-stage runtime signals to detect drift earlier and reduce wasted compute. Commit boundary behavior remains unchanged.
- Fabric/Inference: bounded remote inference routing fallback added (`RAG_INFER_REMOTE_ROUTE_MAX_ATTEMPTS`, default `2`) so GPU host routing does not stall queue processing; requests fall back to engine CPU path when remote WorkerHosts are unreachable.
- Fabric/WorkerHost: host selection hardened to ignore stale/offline hosts, prefer `preferred_endpoint`, and attempt multiple eligible hosts before failing a spawn.
- Fabric/Failover: engine-host fallback toggle added (`fabric_engine_host_failover_enabled` / `RAG_FABRIC_ENGINE_HOST_FAILOVER_ENABLED`) for local WorkerHost deploy path when external WorkerHosts are unavailable.
- WorkerHost Relay: Ollama relay now supports both `GET` and `POST` (`/relay/ollama/{path}`), enabling both model discovery (`/api/tags`) and generation endpoints through the same authenticated edge.
- Ops/Deployment: added reusable Mac host-root WorkerHost deployment pack (`workerhost/deployment-pack`) with compose, env template, HTTP/HTTPS Caddy examples, and validation runbook.

## 0.12 - 2026-01-24
- UI: session timer shows when job-based state will clear.
- UX: stage indicator shows request progress (preparing, retrieving, generating).
- UX: polling-based responses for streaming mode.
- UX: restore open chat and in-flight job status after page navigation.
- Stability: rate limit exemptions for job status polling endpoints.
- UI: streaming bubble placeholder while waiting on responses.
- UI: message area background slightly lighter for contrast.
- UI: mobile chat panel centered with equal side padding.

## 0.11 - 2026-01-20
- Security: enforce HTTPS for site origin except localhost with dev mode enabled.
- Security: signed requests with `X-Elora-Timestamp` + `X-Elora-Signature`, dev header `X-Elora-Dev`.
- UI: status indicator colors (green online, yellow busy, red offline, pink dev, blank unauthorized).
- UI: unauthorized overlay copy (“Unauthorised access attempt.”).
- UI: busy banner (“Server performance deteriorated. Responses may fail or take longer.”).
- UI: queue count shown from `active_requests` in health payload.
- UI: status indicator also shown in chat header.
- Ops: frontend asset cache busting via `filemtime()`.
