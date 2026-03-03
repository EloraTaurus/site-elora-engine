# Engine Changelog

## ------------- 0.17 --------------

## 2026-03-03
### Admin
  - Add Governance Replay `Governance Incident Map` as a full-width admissibility topology surface above trace, with boundary-relevant nodes, authority-edge state (`aligned`/`drift`/`missing`), and node-level metadata drilldown.
  - Refine Incident Map layout to deterministic layered topology (`artifacts -> proposal -> commit -> delivery`) with reduced edge crossing, vertical authority drift edge (`authority_proposal -> authority_commit`), and stronger Commit boundary emphasis.
  - Remove non-admissibility `Entry` node from Incident Map so the surface stays boundary-focused instead of runtime-chronology-focused.
  - Add `Open incident map` full-screen overlay mode with backdrop/ESC close to reduce visual crowding and improve operator focus on topology analysis.
  - Park `Governance Incident Map` as `v1 beta` for redesign.
  - `GIM-01`: fixed SVG template redesign (no runtime routing logic).
  - `GIM-02`: strict bus lanes + zero overlap routing.
  - `GIM-03`: fullscreen-first map workflow with compact inline preview.
### Docs
  - Add deterministic `Governance Incident Map v1` specification (`engine/docs/OPERATORS/GOVERNANCE_INCIDENT_MAP_V1.md`) covering fixed topology, node/edge enums, data precedence, and non-goals.

## 2026-03-02
### Engine
  - Centralize runtime commit enforcement in `engine/services/commit_enforcement.py` so async and direct chat routes call the same commit path.
  - Emit explicit proposal/commit lifecycle events for replay clarity: `proposal.created`, `proposal.validated`, `commit.requested`, `commit.authorized`, `commit.denied`, `commit.executed`.
  - Add commit enforcement to direct `/chat` and `/gpt` routes so commit policy cannot be bypassed outside async job flows.
  - Extend commit snapshots with `config_snapshot`, `config_hash`, and `policy_hash` to improve deterministic replay fidelity.
  - Add worker-scoped commit policy overrides (`governance_worker_policy_map_v1`) and apply them at commit evaluation time.
  - Add authority-admissibility checks in commit evaluator (`authority_state` / epoch drift checks) behind policy control.
  - Extend authority drift capture with proposal-time vs commit-time authority snapshots (`authority_state_*`, `authority_epoch_*`) for deterministic admissibility replay.
  - Add scoped fail-closed authority snapshot enforcement (`governance_authority_scope_worker_types`) so selected worker types require proposal/commit authority snapshots.
  - Standardize missing authority fields at commit boundary to `not_captured` (no empty-string/null drift between capture and evaluation).
  - Bind decision class deterministically in commit input (`decision_class_id`, `decision_class_version`, `decision_class_hash`) and enforce evaluator checks for missing/mismatched decision class metadata.
  - Add commit decision HMAC signatures (when `RAG_SECRETS_KEY` is configured) for tamper-evident commit outcomes.
  - Add replay hash-chain fields (`prev_hash`, `event_hash`) and chain verification support for replay integrity checks.
  - Add computed `control_flow_v1` topology payload to replay API responses for stage-boundary visualization and deterministic flow-state reconstruction.
### Admin
  - Add Governance Replay purge control and API (`POST /admin/api/replay/purge`) for test-environment cleanup.
  - Add replay chain validity metadata to replay API response and integrity strip.
  - Add authority snapshot presence/drift metadata to replay API and Governance Replay summary/export output.
  - Add `admissibility_complete` and `decision_class_admissible` replay metadata surfaces to distinguish trace completeness from admissibility completeness.
  - Add show/hide toggle for topology surface in Governance Replay to support different operator review modes.
  - Fix Governance Policy page worker-type normalization bug that caused `/admin/governance/policy` to crash (502) when registry entries were dicts instead of plain strings.
  - Upgrade Governance Policy page from placeholder to V1 editor with global commit policy thresholds + snapshot versions.
  - Add worker-scoped policy mapping in Governance Policy V1 editor.
  - Add authority-admissibility toggle support in Governance Policy V1 editor.
  - Ensure pipeline editor auto-backfills Commit stage/library entry and commit->delivery wiring for older pipelines.
  - Add Commit user-stage message field to pipeline stage messaging editor.
### Docs
  - Add operator reference for inference/commit governance model and resilience roadmap: `engine/docs/OPERATORS/INFERENCE_COMMIT_GOVERNANCE.md`.

## 2026-02-28
### Engine
  - Introduce commit-stage enforcement so inference is treated as proposal-only until a final commit re-validation pass succeeds.
  - Add commit validation path to both `/chat-start` and `/gpt-start`, with explicit `blocked_commit_validation` termination on policy failure.
  - Persist per-job replay timeline events (`job_replay_events`) with risk/anomaly metadata for audit reconstruction.
  - Add job bucket persistence (`job_buckets`) to define worker scope guidelines and justification prompts.
  - Add deterministic commit contract evaluator (`commit_eval_v1`) with pure-function recompute semantics over `commit_input_v1` (no model rerun required).
  - Capture and persist per-job `commit_input_v1` + `commit_decision_v1` snapshots in job metrics for procedural replay.
  - Emit structured `commit.evaluated` events with decision, reason, violations, and evaluator version.
  - Capture provider telemetry in runtime metrics: provider name/model/version, latency, request ID, token usage, and provider API error codes.
### Admin
  - Extend pipeline runtime test with `test_type` selector (`GPT/RAG chat` and `Agent write action`) and commit-sequence coverage.
  - Add pipeline validation pack runner with pass/fail checklist and proof-bundle JSON export for demo/release evidence.
  - Add Fabric `Job Buckets` tab scaffold with super-admin create/update/delete controls.
  - Add `/admin/api/job-buckets` and `/admin/api/jobs/{id}/replay` endpoints.
  - Upgrade Job Inspector with replay timeline, collapsible trace details, anomaly highlighting, and run-to-run diff baseline.
  - Replace `Documentation` surface with `Operator Handbook` view that loads `engine/docs/OPERATORS/*.md` in panel/popup flipbook-style navigation via `/admin/api/operator-handbook`.
  - Add Lab `Commit Harness` page (`/admin/lab/commit-harness`) to load captured commit input, recompute decisions, and diff original vs recomputed outcomes.
  - Add `GET /admin/api/jobs/{id}/commit-input` and `POST /admin/api/lab/commit-recompute` for deterministic commit replay tooling.
  - Expand Governance Dashboard evaluated jobs table with provider telemetry columns (provider/model/latency/request ID/tokens/API error).

## ------------- 0.16 --------------

## 2026-02-24
### Engine
  - Harden admin session signing fallback by persisting `session_secret_v1` in `admin_meta` when `RAG_ADMIN_SESSION_SECRET` is unset, using race-safe initialization and first-writer-wins persistence semantics.
  - Strengthen admin session validation by rejecting suspicious token time windows and invalidating sessions for deleted admin users.
  - Protect admin login throttle state with a lock to avoid concurrent request races in the threaded HTTP handler.
  - Add explicit proxy-header trust control (`RAG_ADMIN_TRUST_PROXY_HEADERS`, default disabled) and unify HTTPS detection for admin transport checks and cookie `Secure` behavior.
  - Align legacy OTP secret decrypt fallback with the shared admin session-secret source.
  - Refine route-target normalization for API routing to ignore query/fragment without broadening matches for `//path` or semicolon path params.

## 2026-02-19
### Engine
  - Add admin-chat bridge endpoints (`/admin/chat-start`, `/admin/chat-status`) with authenticated session gating so internal dashboard chat no longer depends on public chat routes.
  - Add governance summary aggregation for 24h risk/cost telemetry (`blocked_baseline`, `blocked_injection`, `blocked_policy`, `terminated_window`, `token_churn_window`, queue depth).
  - Add `/admin/api/governance-summary` and `/admin/api/fabric-status` API surfaces for dashboard dependency/risk cards.
  - Harden WorkerHost control plane by enforcing bearer-token auth on worker lifecycle endpoints and wiring Engine client authorization headers.
  - Harden admin/browser surface with stricter security headers and expanded HTTPS enforcement across admin routes.
  - Fix path-boundary validation for admin assets and knowledge file editing by switching to safe resolved-path checks.
  - Upgrade OTP secret storage path to authenticated encrypted-at-rest format with legacy fallback support.
### Admin
  - Restructure Dashboard into three operator views: `Operational Health`, `Governance & Risk`, and `Jobs Audit`.
  - Add scaffold+live cards for Service Dependency Map, Queue & Concurrency, Guardrail Breakdown, Token Budget, Host Saturation, Config Drift, and Recovery Actions.
  - Add iconized grouped left navigation (`Operations`, `AI Runtime`, `Administration`) with per-area active accent styling.
  - Refresh admin palette toward phase-2 cyan/space theme for cards, tables, controls, and chat surfaces.
  - Update floating chat launcher to avatar-pill style, rename label to `Chat`, and add live availability indicator dot.

## 2026-02-14
### Engine
  - Add bootstrap-key first-run admin flow (`/admin/bootstrap`) to create initial `super_admin` and remove dependency on auto-generated bootstrap credentials.
  - Add Fabric module availability checks (WorkerHost/Provisioner reachability) and return clear module-unavailable responses when Fabric endpoints are not available.
  - Add container name support for Fabric worker requests with collision/format checks in WorkerHost before container launch.
  - Update WordPress chat worker Fabric defaults to Python runtime (`python:3.11-slim`) and migrate legacy template image values from `elora/wordpress-chat-worker:alpha`.
  - Add WordPress worker spawn metadata passthrough (`wp_site`, `wp_mode`, `wp_source`, `wp_timeout`) into WorkerHost environment for plugin-connected deployments.
  - Improve WorkerHost terminate behavior to remove Docker containers even after WorkerHost process restart (not just in-memory worker map).
### Admin
  - Add Operators scaffold page (`Users`/`Roles`) in left navigation for upcoming identity and governance controls.
  - Add Fabric workers table refinements: terminate-first workflow, cleaner action grouping, and CPU/memory display from host inventory with template fallback.
  - Keep Template Builder visible for all admins in read-only mode; restrict edit/update actions to `super_admin`.
  - Add optional container naming field in Fabric request forms and template test-launch forms.
  - Add sidebar usability improvements with scrollable navigation for long menu stacks.
### Platform
  - Remove static `wordpress_chat_worker` service from compose stack so WordPress chat worker is Fabric-managed.
  - Keep single-solution compose deployment path (`docker compose up`) without feature-profile splits for core/Fabric startup.

## ------------- 0.15 --------------

## 2026-02-12
### Engine
  - Split Fabric worker request routing by `provision_mode` (`vm` vs `container`) so container requests no longer call the VM Provisioner path.
  - Persist and surface request mode metadata on worker records for clearer runtime ownership.
  - Add container-provision request event path (`worker.container_provision_requested`) for WorkerHost-backed scheduling flow.
### Admin
  - Split Fabric Provisioner UI into explicit `Virtual Machine Provisioner` and `Container Provisioner` request forms.
  - Add worker `Mode` visibility in Fabric Workers table to distinguish VM and container lifecycle paths.
### Fabric
  - Add provisioning split schematics document (`fabric/ELORA_FABRIC_PROVISIONING_SPLIT_SCHEMATICS.md`) and index link for next-phase wiring.

## 2026-02-10
### Engine
  - Add Fabric setup gating so admin routes require initial Fabric configuration before worker operations.
  - Add Fabric setup persistence fallback (`meta` + env) for provisioner URL/token/timeout and engine public URL.
  - Add encrypted-at-rest handling for sensitive admin secrets (`fabric_provisioner_token`, `smtp_password`) via `RAG_SECRETS_KEY`.
  - Keep worker lifecycle observable during provisioning failures (`worker.provision_failed` events, list visibility retained).
  - Add Proxmox cloud-init snippet mode support for environments where API snippet upload is unavailable:
    - `prestage_dynamic` (local snippet directory write)
    - `ssh_publish` (SCP publish to Proxmox snippets path)
  - Add Proxmox worker network metadata pass-through (`worker_ipv4`, `worker_gateway`, `worker_dns`) for cloud-init VM config.
  - Improve Proxmox error diagnostics for snippet upload limitations and missing SSH tooling.
### Admin
  - Add Fabric setup UI flow and first-run token generation/reveal for provisioner integration.
  - Add worker bootstrap/reveal guidance improvements for initial provisioning and rotate/reissue flows.
### Platform
  - Integrate `fabric_provisioner` service into compose stack and engine dependency chain.
  - Add provisioner SSH publish prerequisites to deployment path (`openssh-client` install in service startup).
  - Move sensitive compose values to env-variable placeholders and add root `.env.example`.
  - Add root `.gitignore` rules for `.env` and local SSH key material.
  - Expand setup runbooks with Proxmox ACL scope, snippets storage requirements, privilege-separation notes, SSH key bootstrap, and parked-networking resume checklist.

## 2026-02-09
### Engine
  - Reuse existing jobs for the same chat session (instead of creating a new job per reply).
  - Move job cleanup to retention-based history (`RAG_JOB_RETENTION_SECONDS`) while keeping session TTL behaviour.
  - Add live `pipeline.runtime` event stream for chat runs (`run.started`, stage events, `run.completed`, `run.failed`).
  - Add WordPress/plugin-aware source attribution for runtime and audit metadata.
  - Add first-class normalized job source fields (`source_type`, `source_id`, `source_label`, `source_ref`) to persisted job records.
  - Map guardrail-blocked jobs to terminal `terminated` status for governance/audit accuracy.
  - Add polling compatibility for older clients by returning terminal blocked jobs as `status=done` with `audit_status=terminated`.
  - Emit structured runtime justification payloads (`decision`, `reason`, `confidence`, `sources_used`, `summary`).
  - Ensure successful GPT/RAG responses always produce non-empty decision/reason metadata.
### Admin
  - Add global operator status rail (environment, engine state, policy eval time, active model, operator).
  - Add Pipeline live runtime panel with source/mode filters and real-time stage highlighting.
  - Add runtime justification visibility in pipeline live output for audit drill-down.
  - Add explicit source visibility in Dashboard and Job Logs tables/inspectors (plugin URL, worker/agent identity).
  - Include normalized source metadata in jobs API payloads and CSV/JSON exports.
  - Fix Settings tabs to switch correctly without full page refresh and persist active tab state in URL.
  - Add page cleanup lifecycle hooks to prevent duplicate listeners/SSE streams after in-app navigation.
  - Improve Pipeline builder responsiveness: compact vertical stage list on smaller screens, stable ordering, no overlap.
  - Clamp stage rendering to visible canvas bounds and enable scrollable canvas for reduced-resolution displays.
  - Add full raw metadata view + copy JSON support in Logs for deeper operator/audit analysis.
### Platform
  - Add governance dashboard blueprint (`OPERATOR_DASHBOARD_GOVERNANCE_PLAN.md`) for SOC-style operations and audit views.

## 2026-02-05
### Engine
  - Add pipeline runtime scaffolding (nodes, registry, artifacts, events).
  - Add runtime test endpoint with artifact + event output.
  - Wire runtime test to Ollama-backed inference (placeholder replaced).
  - Add guardrail check node with configurable policy (abort/restricted).
  - Emit guardrail events and restricted responses on violation.
  - Capture request source headers (source/site/mode) for audit and response metadata.
  - Reduce pipeline seed template to 5-stage v1 baseline.
### Admin
  - Add runtime test output panel in Pipeline builder.
  - Add model override input for runtime testing.
  - Add global Do Not list and guardrail policy to Behaviour.
  - Clean up Behaviour and Settings layout for readability.
  - Visually mark unsupported runtime stages in the pipeline canvas.
  - Add right-side Node Inspector with tabs and audited edit mode.
  - Filter stage library/canvas to supported v1 stages.
  - Add pipeline reset flow with confirmation and audit logging.
  - Fix inspector runtime mapping via node id map.
  - Tighten pipeline sidebar spacing and make it sticky.

## 2026-02-03
### Engine
  - Enforce active pipeline minimum source requirements at runtime.
  - Add mandatory Justification stage to baseline pipeline and template seeds.
### Admin
  - Rename Workbooks nav to Workbook & Skills.
  - Add visual governance pipeline canvas (locked baseline).
  - Add pipeline builder workspace with stage palette and config preview (UI scaffolding).
  - Add pipeline control plane schema to admin SQLite (pipelines, stages, edges, versions, audit).
  - Add pipeline CRUD scaffolding (create pipeline, add stages, save snapshots).
  - Seed Core Governance Pipeline with default stages on bootstrap.
  - Add pipeline editing, edge management, and active pipeline selector.
  - Add canvas editor with click-to-edit stage modal + pipeline template seeding.
  - Consolidate workbook UI into a single pipeline builder with settings + viewer modals.
  - Split admin pages into modular files for maintainability.
  - Add stage library with system defaults + custom block creation.
  - Add best-fit auto-wire for pipeline edges.
  - Add drag-to-move pipeline nodes with position persistence.
  - Add workbook type selector (RAG-only for now) and model assignment controls.
  - Add type-specific settings for threshold/notify/approval/write-action stages.
  - Simplify pipeline UI to single-profile assignment (multi-profile planned).
  - Route Pipeline UI at `/admin/pipelines` with `/admin/workbooks` as legacy alias.
  - Add SMTP alerting config + test alert support (replaces sendmail).
  - Add SMTP connection test with last-test/error status.
  - Add alert email template editor (subject/body placeholders).
  - Persist Settings tabs and keep Alerts tab active after saves.
  - Split Settings into modular sections (general/alerts/visuals).
  - Add top-level tabs styling for Settings.
  - Refine Pipeline sidebar guidance and empty-state hints.
  - Split Pipeline builder into layout/modals/scripts modules for maintainability.

## 2026-01-02
### Engine
  - Add prompt-injection detection with safe refusal responses in chat.
  - Enrich `job_failed` logs with input excerpt, hash, and injection suspicion flag.

## ------------- 0.14 --------------

## 2026-01-31
### Engine
  - Memory entries now augment prompt context (when permitted) and are tracked in session info.
  - Behavior settings now drive system prompt and source gating for GPT/RAG.
  - Add soul reflection scheduler + manual trigger (writes soul.draft.md or soul.md).
  - Add assistant response logging (max N) to power soul reflections.
  - Add safe math shortcut for price-range questions using memory context.
  - Increase default fetch timeout for slow responses.
  - Standard tolerance now asks a clarifying question when sources are missing.
  - Soul reflection prompt now enforces reflective bullets (no user-facing replies).
  - Soul reflection manual trigger now runs async to avoid 502s.
### Admin
  - Add Memory section with audited entry creation and impact estimate.
  - Add Workbooks section (read-only listing placeholder).
  - Add Knowledge Base section with index stats visibility.
  - Add model access control tables (memory/workbooks/knowledge) for future permissions.
  - Add per-model permission controls for memory/workbooks/knowledge.
  - Add memory trend chips and usage logging in audit trail.
  - Add memory usage sparkline and allowed-profile badges for memory/workbooks/knowledge.
  - Add read-only knowledge base chunk preview browser.
  - Add model permission toggles and section spacing for memory/workbooks/knowledge.
  - Add knowledge pagination via "Show more" button.
  - Add knowledge base reindex action in admin.
  - Add WordPress plugin setup page in admin.
  - Color allowed-profile tags for memory/workbooks/knowledge.
  - Add authenticated health JSON at `/admin/health.json`.
  - Add Benchmarks page with memory impact and runtime stats.
  - Add benchmark run logging and KB retrieval/reindex timing.
  - Add busy overlay spinner for long-running admin actions.
  - Add Documentation page for security/configuration/operator guidance.
  - Documentation page now uses accordions for easier navigation.
  - Add memory edit and delete workflow with audit logging.
  - Expand docs with security intent, rationale, and misconfiguration risk notes.
  - Add Behavior page for personality, sources, guardrails, and drift alert settings.
  - Add soul.md toggle in Behavior and convert settings checkboxes to toggles.
  - Add soul.md preview in Behavior page.
  - Add soul.draft.md preview and live/draft toggle for scheduler target.
  - Add memory formatting guide with example in documentation.
  - Add audit log filters (category + time window) and job lifecycle events.
### Platform
  - Remove unauthenticated `/health` and `/gpt-health` endpoints.
  - Add signed `/health` for trusted clients (API key + signature).
  - Plugin status moved to status pills with indicator light.

## ------------- 0.13 --------------

## 2026-01-29
### Engine
  - Split API routing into admin/public/chat route modules for maintainability.
  - Expand posture list to reflect AI execution controls (policy, prompt boundaries, tools off by default).
### Admin
  - Add engine-hosted admin UI scaffolding with login and forced password change.
  - Bootstrap credentials file generation with one-time state flag in SQLite.
  - Signed session cookie and basic password policy (12+ chars).
  - Local-only reset script to re-enable bootstrap (`engine/admin/bootstrap_reset.py`).
  - Posture panel + safe config controls (public status + maintenance mode).
  - CSRF protection and HTTPS requirement for admin routes.
  - Basic login rate limiting; scrypt/PBKDF2 password hashing.
  - Optional OTP (TOTP) setup + recovery codes, enforced only when enabled.
  - Audit log table with login/config/OTP events.
  - IP allowlist support for `/admin` routes.
  - Audit log UI at `/admin/audit` with latest events.
  - OTP provisioning URI and recovery code regeneration.
  - Local-only bootstrap print command (`engine/admin/print_bootstrap.py`).
  - Dashboard UI refreshed with health-driven cards and audit highlights.
  - Dashboard now surfaces CPU model, RAM stats, GPU nodes, virtual nodes, and process memory.
  - Background image support for admin UI + Elora avatar banner message.
  - Uploadable background + avatar via admin UI (writes to admin assets directory).
  - Dashboard now read-only; configuration moved to /admin/settings with a system state banner.
  - Added /admin/security for security posture summary.
  - Added /admin/nodes for infrastructure overview.
  - Added /admin/logs placeholder with docker log guidance.
  - Unified layout so the left navigation stays consistent across pages.
  - Added Models section with read-only inference target summary + dashboard card.
  - Added model state indicator and per-model detail view (read-only).
  - Added a subtle content shimmer during in-app navigation.
  - Added separate public avatar upload for the status page.
  - Added public social link fields (LinkedIn/Discord) in settings.
  - Login now uses the admin background with softened overlay.
### Platform
  - Add lightweight HTML status page at `/` while keeping JSON health at `/health`.
  - Expand root status page into a capability + posture overview with safe health summary.
  - Refine status page copy, remove action links, and add intent/limits sections.
  - Add compact status/security/observability pill row for structure.
  - Rework layout into dashboard-style panels with social links sourced from admin settings.
  - Redesign status page to a hero + cards layout with direction panel and richer hierarchy.
  - Align status hero to show avatar status card and add infra-companion note.

## ------------- 0.12 --------------

## 2026-01-24
### Engine
  - Add short-lived `job_id` + `job_token` with TTL and minimal in-memory history.
  - Emit stage events for UI status and include session data in SSE done payload.
  - Add job-based start/status endpoints for polling.
  - Persist job state to local SQLite (`RAG_JOB_DB_PATH`).
  - Reduce engine default prompt to guardrails to avoid duplicating Modelfile system prompt.
  - Add intent tags, confidence buckets, and no-sources flags to job metadata.
  - Fallback to general guidance when no context is found.

## ------------- 0.11 --------------

## 2026-01-20
### Engine
  - Reorganize engine modules into `api/`, `core/`, and `services/`.
  - Require `RAG_API_KEY` from environment (no default fallback).
  - Verify `X-Elora-Signature` + `X-Elora-Timestamp` (HMAC of `timestamp\\nbody`).
  - Allow dev bypass only with `X-Elora-Dev: 1` from loopback clients.
  - Enforce `RAG_MAX_BODY_BYTES` payload cap.
  - Add `RAG_SIGNATURE_MAX_SKEW` for signature time window.
  - Allow `X-Elora-Signature`, `X-Elora-Timestamp`, `X-Elora-Dev` in CORS.
  - Include `dev_mode_header` and `dev_mode_allowed` in `/health` and `/gpt-health`.
### Platform
  - Add engine `README.md`, `ARCHITECTURE.md`, and `OPERATIONS.md`.
