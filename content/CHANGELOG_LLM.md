# LLM Plugin Changelog

## 0.14 - 2026-04-21
- Runtime Stability: added bounded echo/noise diagnostics for earlier detection of unstable response trajectories.
- Runtime Tuning: enabled optional learned operating-band handoff to generation controls (`mirostat` and output envelope limits) under guarded behavior.
- Runtime Safety: strengthened pre/post generation checks for contradiction/noise escalation with bounded retry behavior.
- Echo Learning: added profile-aware first-run ramp protocol to support repeatable baseline promotion in later tuning runs.

## 0.13 - 2026-03-31
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
