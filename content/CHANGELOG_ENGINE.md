# Engine Changelog

Disclosure level: Public (technical summary for reduction-to-practice; direct reproducibility details intentionally redacted).
Policy: `engine/docs/OPERATORS/CHANGELOG_DISCLOSURE_POLICY.md`.

## ------------- 0.18 --------------

## 2026-03-31
### Runtime Signals (Experimental)
  - Add proposal-stage runtime signal experimentation focused on earlier drift detection and reduced wasted compute.
  - Add operator control/visibility surface for this experiment (`internal route`) with bounded settings.
  - Commit boundary behavior remains unchanged.
### Fabric / WorkerHost Resilience + Mac Edge Deployment
  - Add bounded remote route attempts for inference host selection via `runtime setting` (default `2`) to prevent long queue stalls on unreachable WorkerHosts.
  - Add engine-host fallback toggle `runtime setting` so inference can fall back to local engine capacity when external WorkerHosts are unavailable.
  - Harden WorkerHost selection to prefer healthy/stale-filtered candidates and consistently use preferred endpoint resolution during assign/terminate/delete lifecycle calls.
  - Add Admin Runtime toggle wiring for engine-host failover and fix runtime setting persistence for module toggles.
  - Extend WorkerHost relay support to include model-discovery and generation passthrough behavior for broader endpoint compatibility.
  - Add Mac home-IP deployment pack templates for host-root Docker runs (unified WorkerHost + Caddy + Ollama examples, HTTP/HTTPS Caddy variants, and env template).
### Governance Reports / Full Pipeline Trace
  - Increase governance AI report replay read depth (`internal route`) from 250 to 1000 events.
  - Append deterministic `Pipeline Steps (Full Trace)` section to generated markdown reports so captured stage flow is preserved end-to-end.
  - Add `trace_steps` metadata to report response for quick verification of included replay depth.
### Governance Replay / Lean Progressive Loading
  - Add replay-event pagination support (`limit` + `offset`) to `internal route`.
  - Add replay pagination payload (`total`, `returned`, `has_more`, `next_offset`) for UI incremental loading.
  - Set Governance Replay initial load window to 250 events and add explicit `Load more steps` action for full-trace inspection on demand.
  - Reduce replay CPU/DB pressure by limiting expensive replay-chain verification and diff-comparison work to first-page replay loads (`offset=0`).
  - Add replay event counting helper in job store to support efficient pagination without full-trace payloads on each request.
### Pipeline Audit Unification (Master 22-Stage)
  - Unify runtime replay stage typing for normal chat/gpt jobs to canonical master pipeline stage types (`worker_capacity`, `worker_registration`, `worker_assignment`, `tape_assignment`, `tape_loaded`, `worker_authorized`, `tape_unloaded`, `worker_unassigned`).
  - Add terminal-stage canonical reconciliation so completed/failed runs emit explicit coverage for all 22 canonical stages (executed or `node.skipped`) and always include `Archival` stage evidence.
  - Extend Lab simulator replay generation to emit canonical 22-stage pipeline coverage and archival completion semantics.
  - Add canonical pipeline coverage object to governance replay API metadata (`metadata field`) with expected/present/missing counts and missing stage list.
  - Add canonical pipeline coverage object to public Lab payloads (`pipeline_coverage`) so website/report surfaces can verify 22-stage capture completeness.
### Lab / Temperature Harness + Engine Scaling Test
  - Add `Temperature Harness` page (`internal route`) to run prompt sweeps across static temperatures and dynamic strategy in one run.
  - Add temperature harness API:
    - `internal API action`
  - Add dynamic temperature strategy controls (`temperature_strategy=dynamic`, `temperature_min`, `temperature_max`) with runtime metadata capture under response `meta.temperature`.
  - Add harness scoring/ranking layer for per-run comparison:
    - score breakdown (length, sentence structure, repetition, refusal penalty, temperature bias, latency normalization)
    - scoring profiles (`balanced`, `precision`, `creativity`)
    - ranked output + recommended run
    - `dynamic_vs_best_static_delta` summary metric.
### Lab / Modularity and Route Decomposition
  - Extract temperature harness execution/scoring from monolithic admin routes into reusable core module:
    - `internal module`
  - Add dedicated Lab POST route dispatcher:
    - `internal module`
  - Wire `routes_admin.py` to dispatch temperature harness POST through `handle_lab_post(...)` instead of inline route logic.
  - Add public wrapper `resolve_temperature_strategy(...)` in chat service to avoid cross-module dependence on private temperature helper internals.
### Lab / Inflight Tuning Harness + Baseline Snapshot
  - Add `Inflight Tuning Harness` page (`internal route`) for repeated prompt-set runs that score bounded runtime tuning outcomes.
  - Add Lab API endpoint:
    - `internal API action`
  - Add harness aggregation output:
    - recommended bounded baseline config
    - recommendation confidence score
    - scenario-level score uplift + compute-savings summaries
    - per-scenario top run evidence.
  - Add persistent immutable default snapshot capture for inflight settings (`inflight_default_snapshot_json`) so original defaults can be preserved before later tuning changes.

## 2026-03-29
### Public Lab API Performance Optimization
  - Optimize `internal route` for lower CPU impact under public dashboard polling.
  - Add lightweight mode via `?lite=1` to omit replay-step payloads from default Lab page polling.
  - Add on-demand single-job replay endpoint:
    - `internal API action`
    - used only when opening a specific report/scorecard.
  - Reduce aggregation pressure by tightening scan/sample limits for Lab status computation:
    - smaller scan ceiling
    - capped integrity sample window
    - reduced replay-event reads in summary paths.
  - Increase public lab status cache TTL to reduce recomputation frequency during repeated page visits.

### Master Pipeline Surface (Read-only + Extended Canonical Stages)
  - Lock Pipeline UI into master read-only mode (structure editing disabled).
  - Enforce backend guard so structural pipeline POST actions are blocked in master mode; keep stage-message editing + runtime-test endpoints available.
  - Expand Pipeline page visualization to an extended canonical stage chain that includes:
    - prompt capture
    - memory/knowledge resolve
    - policy snapshot
    - worker capacity/registration/queue
    - worker/tape assignment and unload lifecycle
    - proposal + approval + archival stages
  - Add canonical-stage rendering with `present` vs `virtual` support so runtime surface stays consistent even when not all stage records are persisted.
  - Add visual legend for:
    - present/virtual nodes
    - visual/non-visual stages
    - active/failed/neutral node states
  - Expand Pipeline stage-message settings to cover extended stages.
  - Update pipeline seed template and stage type registry to include the extended canonical stage model.
### Sensitive Runtime Evidence / Controlled Disclosure
  - Add first-class pre-inference runtime evidence stages:
    - `prompt.captured`
    - `memory.resolved`
    - `knowledge.resolved`
  - Add encrypted sensitive-input artifact store (`job_sensitive_inputs`) in Jobs DB with:
    - prompt hash
    - encrypted raw prompt
    - prompt metadata
    - memory access summary
    - knowledge access summary
  - Add deterministic runtime input capture wiring in chat job flows (`internal route`, `internal route`) so prompt/memory/knowledge evidence is captured before inference and replayed as pipeline events.
  - Add post-retrieval knowledge evidence update so commit evaluation can include resolved knowledge artifact summaries.
  - Extend commit input/signals with runtime input evidence fields:
    - `runtime_inputs.prompt_hash`
    - `runtime_inputs.prompt_metadata`
    - `runtime_inputs.memory_access`
    - `runtime_inputs.knowledge_access`
    - memory/knowledge snapshot hashes
  - Add controlled prompt decrypt API:
    - `internal API action`
    - explicit `reason` required
    - super-admin only (default deny for other roles)
    - all attempts logged (`requested`, `authorized`, `denied`, `executed`).
  - Extend admin job/replay payloads with default-safe sensitive summary (hash + metadata counts only; no plaintext prompt exposure by default).
### Security Key Health Alerts
  - Extend admin security self-check to evaluate key strength and review posture for:
    - `runtime setting`
    - `runtime setting`
  - Add key-health findings list and review status into Settings -> Security.
  - Include security self-check object in `internal route` payload for operational surfaces/alerts.

## 2026-03-28
### Execution Monitor / Runtime Visibility
  - Add dedicated top-level `Execution Monitor` sidebar surface in Admin navigation (moved out of Observability group).
  - Set Engine-side Execution Monitor scaffold to `live` default mode to align with upcoming WorkerHost runtime stream wiring.
  - Add Execution Monitor governance strip in demo scaffold (`Worker Assigned -> Tape Loaded -> Inference -> Proposal -> Justification -> Commit -> Execution`) with commit-state highlighting (`approved`, `pending`, `denied`).
  - Add guided Execution Monitor intro/start flow and demo lifecycle simulation:
    - worker assignment
    - approval-required holds
    - policy violation termination
    - container recycle notifications.
  - Add operator approval controls in demo execution panel (`Approve` / `Deny`) with timeout-driven enforcement simulation.
  - Add terminal line streaming in demo execution panel so runtime output appears progressively (terminal-like) instead of full instant dump.
  - Add narrative toggle (`Narrative: On/Off`) for presentation-friendly vs concise terminal output.
  - Add Execution Monitor demo background image support via `demo asset`.
### Admin UX / Deployment Traceability
  - Add deploy/build stamp to all admin pages through shared layout:
    - `runtime setting`
    - `runtime setting`
    - rendered UTC timestamp.
  - Add Execution Monitor demo build/version stamp line for quick deploy verification in static site updates.
### Reliability / Diagnostics
  - Fix admin layout runtime-footprint render crash (`cpuPct` NameError) in shared layout script path.
  - Add explicit warning-log output for WorkerHost route `400` rejections to surface register failure reasons in server logs.

## ------------- 0.17 --------------

## 2026-03-24
### Runtime Modularity / Security Scaffold
  - Add `Settings -> Runtime` section for runtime mode selection scaffold:
    - `software`
    - `hardware_backed`
    - `hardware_deployed`
  - Add attestation-policy scaffold settings:
    - `runtime_require_signed_actions` (`off`/`warn`/`block`)
    - `runtime_require_hardware_attestation` (`off`/`warn`/`block`)
  - Add add-on module toggles in Runtime settings:
    - `module_fabric_enabled`
    - `module_lab_enabled`
  - Extend module manifest response to include enabled/disabled state and honor runtime toggle values.
  - Enforce Lab module toggle on admin Lab routes/APIs (disabled module returns explicit denial).
  - Add admin security self-check tab with runtime status for:
    - secrets key presence
    - session secret storage mode/protection
    - session-version enforcement
    - trusted proxy header gate.
  - Add security DB schema visibility in Settings (Admin/Jobs/RAG DB path + table inventory + error state) for faster deployment diagnostics.
  - Include DB file size visibility in security schema overview.
  - Add runtime dependency inventory in Settings -> Runtime:
    - Python/pip/platform visibility
    - component requirement manifest vs installed-package comparison
    - runtime method inventory (for example `ollama_http`, custom engine API)
    - explicit `latest version check` state (not performed offline).
  - Add `Check updates` action in Runtime settings (`internal route`) for on-demand latest-version comparison against PyPI metadata.
  - Add runtime update risk summary counters (matches, mismatches, missing, outdated, unversioned) with live refresh after update checks.
  - Add live admin runtime footprint feed in ops rail (`internal route`) showing Engine RSS/CPU seconds plus active/total Fabric hosts/workers.
  - Harden session secret initialization path to avoid DB persistence when meta encryption key is unavailable.
  - Make `runtime setting` fallback deterministic from `runtime setting` when env override is not supplied.
### Fabric Local Bootstrap
  - Add Engine-side local WorkerHost deploy helper (`deploy_local_workerhost`) that can:
    - issue bootstrap token + pending host record
    - write local compose + env bundle under a host-scoped runtime workspace path
    - attempt `docker compose up` (fallback `docker-compose`) from Engine host runtime.
  - Add Fabric Provisioner UI action `Deploy local WorkerHost` for one-click local bootstrap.
  - Add auto-skip behavior: local deploy is skipped when active/registered WorkerHosts are already detected.
  - Reduce secret-at-rest exposure for local deploy by generating compose/env bootstrap files in ephemeral temp storage and deleting them after successful start.

## 2026-03-23
### Lab / Public Replay Fairness
  - Increase public replay-step capture depth for Lab jobs from 14 to 80 events so longer multi-step runs render with fuller evidence context.
  - Fix Lab defense aggregation for drift/unauthorized detections by including simulator metrics fallbacks (`blocked_reason`, `drift_hits`, `unauthorized_hits`) when violation tokens are sparse.
  - Fix public 30-day Lab rollup scan to page beyond the 500-row job query cap; large runs now contribute to totals/percentages correctly.
  - Add evaluable-run denominator for integrity metrics (`Decision Integrity`, `Replay Coverage`, `Admissibility`, `Snapshot`) to prevent unfair 0% scoring from legacy/non-evaluable runs.
  - Add integrity transparency counters in public payload: `evaluable_runs` and `total_lab_runs`.
  - Fix mutation-stop percentage math in public UI to use expected-or-attempt denominator fallback, preventing `0%` with non-zero stop counts.
  - Fix simulator expected-outcome logic so live policy snapshot denials are scored as expected blocks in live-policy runs (prevents false fail verdicts).

## 2026-03-22
### Lab / Engine Crusher + Batch Model
  - Add `Engine Crusher` harness for high-volume deterministic load simulation:
    - API: `internal API action`
    - UI controls for total jobs and per-job delay pacing.
  - Add fixed 7-run batch structure in suite runs:
    - 1 guaranteed allow
    - 5 mixed
    - 1 guaranteed fail
  - Add guaranteed multi-step mixed scenario that can inject mutation request at step 7/8 for long-path governance validation.
  - Tune mixed-case anomaly rates and enforcement toggles to reduce over-blocking bias and produce realistic allow/block distribution.
  - Extend simulator metrics capture with control flags (`allow_mutation`, `block_on_*`) to support expected-vs-actual scoring and accurate public defense ratios.

## 2026-03-20
### Lab / Agent Simulation
  - Add `Agent Simulator` lab harness (`internal route`) to run deterministic multi-step agent loops without model inference.
  - Add lab APIs:
    - `internal API action`
    - `internal API action`
  - Persist simulator runs as normal jobs (`source classification`) so outcomes flow into existing Jobs + Replay surfaces.
  - Emit per-step governance artifacts for the simulated loop: proposal, justification, commit requested/authorized/denied, execution state transition, tape unload, worker release, and run completion.
  - Support harness scenarios:
    - `letter_loop` (no side effects)
    - `file_mutation` (state-change path)
    - `forced_failure` (deterministic commit denial).
  - Add configurable simulation stress controls:
    - `drift_rate` (randomized task/prompt drift)
    - `unauthorized_request_rate` (simulated restricted-data asks)
    - `commit_attack_rate` (simulated commit bypass attempts)
    - per-signal block toggles and reproducible `random_seed`.
### Fabric / WireGuard Readiness
  - Add WorkerHost network identity capture in register/heartbeat (`transport_class`, `wg_ip`, `wg_peer_pubkey`, `wg_endpoint`).
  - Add host identity drift event `host.identity_drift` when `wg_ip` changes between heartbeats.
  - Add derived host transport fields in Fabric host payloads (`preferred_endpoint`, `transport_class`, `transport_risk`, `auth_token_bound`).
  - Prefer `preferred_endpoint` in inference route binding (WireGuard endpoint when provided), with transport metadata attached to replay source and inference route events.
  - Add Fabric Worker Hosts transport visibility:
    - transport/risk tag per host row
    - transport fields in host inspect dialog
    - host-surface warning when public/non-WireGuard host transport is present.
  - Extend bootstrap/env docs with optional WireGuard transport settings.

## 2026-03-19
### WorkerHost / Fabric GPU Readiness
  - Begin admin route modularization for Fabric lifecycle by extracting WorkerHost + host-token POST handlers from monolithic `routes_admin.py` into `internal module` and dispatching through shared admin route callbacks.
  - Continue Fabric modularization by extracting worker lifecycle/config POST handlers (`request/revoke/recreate/terminate/delete/bootstrap-rotate`, template update, job buckets, Fabric setup save) into `internal module`.
  - Extend WorkerHost registration/heartbeat payloads with:
    - host policy (`allow_gpu_jobs`, `allow_worker_deployments`)
    - inference node inventory (`ollama` / `vllm` health and model counts)
    - inference model identity (`model_names`) per detected node
    - dynamic capabilities (`inference:*`, `gpu_node` when healthy nodes are detected).
  - Add WorkerHost runtime settings:
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
  - Update Fabric worker request host selection to respect host-policy controls (`allow_worker_deployments`, `allow_gpu_jobs` when `requires_gpu=true`).
  - Surface host policy + inference-node health summary in Fabric Worker Hosts table.
  - Surface per-host installed inference models in Worker Hosts table, with offline hosts visually greyed for quick diagnostics.
  - Extend WorkerHost register/heartbeat payloads with host resource telemetry (`cpu_cores`, `memory_total_mb`, `disk_total_mb`, `disk_free_mb`) and persist in host metadata.
  - Redesign Fabric Worker Hosts landing surface with quick-capacity cards and clickable host inspect dialog (created/last seen/CPU/RAM/disk/inference-node count).
  - Add WorkerHost bootstrap issuance flow in Fabric:
    - create pending host records with one-time per-host registration token
    - optional expected endpoint binding at bootstrap
    - copy-ready `.env` and compose snippets generated by Engine.
  - Add pending-host lifecycle controls in Fabric:
    - recycle pending host bootstrap token (`internal route`)
    - remove pending/offline host records (`internal route`).
  - Align host offline lifecycle handling between UI and backend:
    - host stale/offline grace now standardized to ~120s for recycle/remove eligibility.
  - Add super-admin override controls for stuck host records:
    - `force recycle` on bootstrap token recycle
    - `force remove` on host removal.
  - Improve host lifecycle failure visibility:
    - recycle/remove failures now return explicit reason text in admin notice redirects.
  - Add downloadable WorkerHost bootstrap bundle ZIP (`internal route`) containing:
    - tokenized `.env`
    - full compose stack
    - WorkerHost runtime files (`app.py`, `profiles.py`, `requirements.txt`)
    - Linux/macOS/Windows placement instructions.
  - Update WorkerHost bootstrap placement guidance to prefer user-home deployment path on Linux (`~/workerhost`) to match typical local compose workflows.
  - Add Host token rotation UI/API (`internal route`) and persist to `fabric_host_token`.
  - Refactor Provisioner bootstrap UX into `Start builder` flow (dialog-driven) with explicit node profile inputs:
    - `Node Name`
    - `Node Endpoint`
    - `Node Type` (`gpu_node`/`standard_node`/`sandbox_node`)
    - `Allowed Workloads` (`standard`/`gpu`/`sandbox`)
    - deployment permissions (`allow_worker_deployments`, `allow_gpu_jobs`).
  - Persist node profile and host policy metadata at host bootstrap issuance for downstream host selection controls.
  - Harden bootstrap-token handling UX so token is no longer rendered in visible plaintext on bootstrap result page; token is delivered via downloaded bundle `.env`.
### Tape Vault / Runtime Dependency Checks
  - Add Vault-first tape path config with legacy compatibility:
    - `runtime setting`
    - `runtime setting` (legacy `runtime setting` still supported)
    - `runtime setting`.
  - Add Tape runtime dependency metadata (`runtime_dependencies`) to tape registry schema.
  - Add tape-runtime readiness checks (`missing_runtimes`, `runtime_ready`) on catalog and registered tape payloads.
  - Extend Tape Library UI with runtime-check status for catalog and installed tapes plus dependency visibility on tape detail.
  - Add `tape_runtime_policy.missing_runtime_action` snapshot field and evaluator check `tape_runtime_dependencies` (warn/block/terminate policy action model).
### WorkerHost Lifecycle / Update Operations
  - Fix bootstrap-download `502` path by restoring missing Fabric host-token import in admin route wiring.
  - Normalize WorkerHost endpoint handling across bootstrap, registration, and runtime (`host:port` and `http://host:port` now treated consistently) to prevent false endpoint mismatch on re-register.
  - Relax host bootstrap-token reuse semantics for same-host restart/re-register flows (no forced rotate on every container restart; still enforces token/hash/expiry/endpoint checks).
  - Add Fabric host action `Sync now` (`internal route`) to trigger immediate host refresh from control plane.
  - Add WorkerHost authenticated sync endpoint (`internal API action`) for on-demand heartbeat + inventory push.
  - Add WorkerHost runtime pull/update path:
    - Engine endpoint `internal API action`
    - host-authenticated runtime bundle response with hash diff (`bundle_hash`, `update_available`, optional bundle payload)
    - WorkerHost auto-apply + optional auto-restart on runtime update.
  - Extend generated WorkerHost bootstrap `.env` with runtime sync controls:
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`.
  - Update bootstrap compose generation to be endpoint-port aware (uvicorn + published port align to selected host endpoint) and writable runtime mount (`./workerhost:/app/workerhost`) for update application.
  - Improve WorkerHost resource telemetry reliability across Linux/macOS by adding non-`/proc` memory fallback (`sysconf`) and disk fallback (`shutil.disk_usage`).
### WorkerHost Runtime Distribution / Remote Operations
  - Add shared WorkerHost runtime bundle builder (`internal module`) so runtime package hash and payload generation are centralized across Engine routes.
  - Add Fabric host runtime update control-plane path:
    - admin action `internal API action`
    - client call `workerhost_client.update_host_runtime(...)`
    - WorkerHost endpoint `internal API action` for authenticated pull/apply/restart flow.
  - Add `Update runtime` action in Fabric Worker Hosts UI to trigger runtime pull + restart without manual file copy.
  - Include WorkerHost `runtime_hash` in host heartbeat stats for runtime consistency tracking across hosts.
  - Expand WorkerHost profile registry with `standard_worker` baseline profile so scheduler-spawned standard workers can be provisioned across WorkerHost nodes.
### Tape / Scheduler Controls
  - Add/seed `admin_chat_tape` and enforce GPU requirement on seed tape records for admin-runtime GPU routing tests.
  - Enforce host workload compatibility during container worker placement by evaluating required workload class (`standard`/`gpu`/`sandbox`) alongside host policy flags.

## 2026-03-15
### Governance / Tape Provenance Hardening
  - Extend commit capture to include `tape_hash` across source context, normalized job source metadata, and `commit_input_v1` (`tape`, `signals`, `context`).
  - Add deterministic `tape_hash_admissibility` check in commit evaluator with explicit violations:
    - `tape_hash_not_captured`
    - `tape_hash_mismatch`
  - Add replay metadata flag `tape_snapshot_present` so replay surfaces can distinguish tape identity completeness from generic trace completeness.
  - Enhance replay-event immutability enforcement at storage layer with SQLite trigger `trg_job_replay_events_no_update`; replay events were already append-only by flow design, and this adds DB-level protection against accidental/unauthorized updates.
  - Add commit-phase worker registration re-check after assignment (`worker.registration.checked` with `phase=commit`) to handle late worker registration state transitions safely.
  - Extend commit signals with `worker_registered_at_assignment`, `worker_registered_at_commit`, and `worker_registration_drift`.
  - Add deterministic `worker_registration_drift` commit check; drift is tolerated only when commit-time registration is valid, and denied when registration regresses before commit.
### Admin Security Hardening
  - Protect `session_secret_v1` at rest by routing admin session secret storage through encrypted meta handling.
  - Replace transient DB-error fallback behavior for session key material with filesystem-backed stable fallback (`admin_session_secret.v1`) to reduce cross-process/session-validation drift.
  - Add per-user session invalidation (`session_version`) and enforce it in session tokens; password/OTP security changes now revoke existing sessions for that user.
  - Sanitize bootstrap endpoint host derivation (`Host` / `X-Forwarded-Host`) and continue enforcing trusted-proxy semantics via `runtime setting`.
### Fabric / Autoscale Stability
  - Make autoscale action feed retrieval non-blocking to remove 20s page stalls when no recent autoscale events are present.
  - Promote workers to `active` on successful registration (while retaining `worker.registered` event) so capacity assignment can reuse newly registered workers immediately.
### Admin / Replay
  - Surface tape-admissibility integrity on Replay Review: `tape snapshot` and `tape hash admissible` in integrity strip, focus summary, and export/print reports.
  - Extend Replay API metadata with tape fields (`tape_id`, `tape_hash`, `tape_snapshot_present`, `tape_hash_admissible`) derived from commit artifacts/checks.
  - Add Replay V2 timeline stats for tape completeness (`Tape snapshot`, `Tape hash admissible`) and support both `{ replay: ... }` and direct replay payload shapes.
### Admin / Policy UX
  - Add `Admissibility Quickstart` panel to Policy & Enforcement with two operator presets:
    - `Internal Admin (balanced)`
    - `External Worker (strict)`
  - Add live admissibility checklist to reduce misconfiguration risk before saving/running live tests.
### Tape Capability Contracts (Advisory vs Mutating)
  - Extend Tape manifests/registry schema with execution-contract fields:
    - `operation_mode` (`advisory` or `mutating`)
    - `requires_gpu`
    - `requires_human_signoff`
    - `requires_backup`
    - `requires_rollback_plan`
    - `requires_execution_grant`
  - Add policy-controlled mutation enforcement (`mutation_policy`) into commit snapshots and resolved-policy preview:
    - toggle enforcement
    - required safeguards (signoff, backup, rollback, execution grant, GPU lease)
    - missing-control action (`block_commit`/`audit`/`terminate`)
  - Add deterministic `tape_operation_controls` commit check with explicit violations (e.g. `human_signoff_missing`, `backup_artifact_missing`, `execution_grant_missing`, `gpu_lease_missing`).
  - Extend source/commit evidence capture with resource-control hints (`resource_profile`, `execution_grant_id`, `gpu_lease_id`, `human_signoff_id`, `backup_artifact_id`, `rollback_plan_id`) for admissibility replay.
### Human Signoff Workflow
  - Add `job_approval_requests` queue with expiring approve/reject action tokens for mutating tapes that fail on `human_signoff_missing`.
  - Add `Human Approval Queue` governance page (`internal route`) with pending and recent request actions.
  - Add approval action link endpoint (`internal route`) for no-login email approvals/rejections with expiry enforcement and explicit expired-link messaging.
  - Add approval notification email flow with decision context and one-click approve/reject links.
  - Add sidebar notification badge backed by `internal route`.
  - Extend settings alerts panel with approval controls:
    - `approval_recipients`
    - `approval_public_base_url`
    - `approval_link_ttl_seconds`
  - Add approval delivery diagnostics and fail-closed signaling when signoff cannot be delivered (`human_loop_delivery_unavailable`).
  - Add replay event `approval.delivery_failed` with missing email config fields and delivery error context.
### Lab / Dry-Run Harnesses
  - Add `Tape Runtime Harness` (`internal route`) with repeatable scenarios for:
    - tape hash admissibility
    - worker registration drift
    - mutating-tape control prerequisites (signoff/backup/rollback/grant/GPU lease)
  - Add `Approval Lifecycle Harness` (`internal route`) to seed synthetic signoff requests and validate approve/reject/expired token paths.
  - Extend Approval Harness with delivery checks and a live email path test; when delivery is not possible it surfaces missing fields and policy violation context.
  - Extend Governance Policy dry-run payload handling to model tape-runtime controls and hints:
    - `tape_operation_mode`, `tape_requires_*`, `*_present`
    - `worker_registered_at_assignment`, `worker_registered_at_commit`, `worker_registration_drift`
    - `recommended_cpu`, `recommended_memory_mb`, `max_tokens_hint`, `resource_profile`
### Tape Templates
  - Add starter tape manifest template at `internal module` with resource hints and governance control fields.

## 2026-03-13
### Runtime Architecture
  - Start Tape-runtime refactor groundwork by adding Fabric Tape registry primitives (`fabric_tapes` table with seeded `gpt_rag_tape` plus list/get/upsert helpers).
  - Add worker tape assignment primitives (`assign_worker_tape`) and expose loaded tape fields on worker payloads (`loaded_tape_id`, `loaded_tape_version`, behavior/memory/knowledge bindings).
  - Add `Tape Library` admin surface (`internal route`) with tape create/update, worker tape assignment, and installed tape inventory table.
  - Add `internal API action` for admin-side tape listing.
  - Add `AI Runtime -> Tapes` navigation and dashboard shortcut.
  - Switch Tape Library to file-backed registration flow: tape definitions are dropped as JSON manifests and then registered (UI creation disabled).
  - Add tape catalog discovery from configurable runtime locations with deterministic tape-hash registration.
  - Introduce runtime root-path migration toward generalized defaults while preserving legacy fallback behavior.
  - Update compose mounts/env defaults to generalized runtime paths while keeping legacy installs functional through explicit overrides or fallback detection.
### Worker Identity / Registration
  - Extend `internal route` flow to accept tape context (`tape_id`, `tape_version`, `behavior_profile_id`, `memory_source`, `knowledge_source`) and persist it on successful registration.
  - Enforce worker registration guard: workers now require a loaded tape before registration is accepted.
  - Add default tape bootstrap metadata to newly requested workers (`gpt_rag_tape`, behavior/default pools) to keep current provisioning flow operable while tape assignment is formalized.
### Governance Replay Evidence
  - Extend source/commit capture to include tape identity and runtime bindings from ingress headers:
    - `X-Elora-Tape-Id`, `X-Elora-Tape-Version`, `X-Elora-Behavior-Profile-Id`, `X-Elora-Memory-Source`, `X-Elora-Knowledge-Source`.
  - Include tape metadata in `commit_input_v1` (`tape` block, `signals`, and `context`) for governance replay/admissibility lineage.
  - Add deterministic `tape_loaded` commit check and `require_tape_loaded` decision-class flag wiring.
  - Add registered-worker tape fallback during commit capture so replay evidence resolves tape bindings from worker registry when headers are absent.
### Governance Policy
  - Switch policy override mapping from worker-type-centric to tape-centric (`governance_tape_policy_map_v1`) so governance constraints follow Tape identity rather than ephemeral worker shells.
  - Update Governance Policy UI to auto-list registered Tape IDs and save Tape policy mappings.
  - Extend resolved-policy preview API to accept `tape_id` and evaluate merged policy in worker+tape context.
### Autoscale / Worker Scheduling
  - Add inference-capacity scheduling gate before worker assignment in async chat flows:
    - `idle_worker_available` -> assign worker
    - no idle worker + headroom available -> spawn `standard_worker`
    - no capacity -> queue with wait loop and timeout
  - Add queue-stage runtime events for inference capacity waiting (`inference.capacity.queued`) and worker-capacity checks (`worker.capacity.checked`).
  - Add resource-aware spawn guardrails (CPU load/core, memory available, disk free, CPU token cap) to avoid uncontrolled worker spin-up on constrained hosts.
  - Add optional on-demand spawn controls via new config keys:
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
    - `runtime setting`
### Fabric / Lab
  - Expand Autoscale Lab with:
    - current worker pool table
    - capability tag visibility
    - simulated influx runner (`job_count`) to test scale-up behavior
    - heuristic min/max recommendation snapshot (CPU/memory/GPU-aware baseline)
  - Add Fabric Autoscale deployment page (`internal route`) with autoscale controls and worker-pool visibility.
  - Add reusable autoscale simulation API path through existing admin POST handlers (`internal route`) and target-aware redirects for Fabric/Lab entrypoints.
### Docs
  - Add `internal module` (autoscale + worker/tape operating model).
  - Add `internal module` (control-plane layers and canonical proposal->commit pipeline notes).

## 2026-03-08
### Public API
  - Add public Lab status feed endpoints: `internal API action` and `internal API action` for website-facing validation dashboards.
  - Add optional public feed token gate via `runtime setting` (supports `X-Elora-Public-Token` header or `?token=` query for server-to-server pulls).
  - Add signed payload support on public Lab status feed when `runtime setting` is configured (`signature.alg = hmac-sha256`).
### Governance/Lab
  - Add curated, sanitized public test summary payload (`tests_available`, `tests_results`, 24h summary, recent job surface) without exposing prompts, raw operator content, or admin-only internals.
### Admin
  - Refactor Governance Replay V2 into a timeline-first investigation surface with replay dashboard + investigation split:
    - `internal route` -> Replay Dashboard (Beta)
    - `internal route` -> Replay Investigation (Beta)
  - Add clickable replay dashboard job timeline + recent jobs table routing into Replay Investigation via query (`job_id`).
  - Update Replay Investigation layout to emphasize event flow: full-width timeline, risk legend, pipeline stage chips, 2/3 replay events + 1/3 evidence.
  - Replace timeline modal with anchored event popovers (non-blocking, no dim overlay, click-outside/ESC close).
  - Add compact sidebar mode recovery UX with persistent edge expand button and logout hint modal overlay.

## 2026-03-07
### Admin
  - Add Governance Replay V2 scaffold page (`internal route`) with timeline-first session review layout: 10-second answer, risk snapshot, replay controls, pipeline strip, timeline lanes, event stream, and evidence panel.
  - Add `Replay V2 (Beta)` navigation entry under Governance while keeping legacy Replay Review available for fallback.
### Governance
  - Wire Replay V2 scaffold to existing replay/job APIs for initial read-only loading (`internal route`, `internal route`) as migration bridge ahead of dedicated replay module rollout.

## 2026-03-06
### Engine
  - Extend policy snapshot payload toward `policy_snapshot_v1` shape with explicit confidence, guardrail, authority, source-trust, and risk policy blocks.
  - Add policy snapshot label map support (`policy_labels_json`) for human-readable governance explanations.
  - Add `chat_admission_mode` policy gate (`allow|block`) to make policy enforcement directly testable from operator workflows.
  - Add `policy_evaluations` output from commit evaluator for rule-by-rule pass/fail evidence.
### Admin
  - Expand Governance Policy & Enforcement page with V1 policy controls (policy version, confidence floor, uncertainty ceiling, authority capture/drift actions, source trust, risk thresholds, labels JSON).
  - Add explicit operator test guidance on policy page for blocking/allowing chat via policy.
  - Add Policy page section descriptors (Policy Definition, Worker Overrides, Resolved Policy, Policy Testing) to make inheritance flow clearer.
  - Add "Replay policy snapshot" loader on Policy page to pull captured `commit_input_v1` policy from a past job for incident debugging.
  - Add Resolved Policy Preview panel to Governance Policy page for per-worker merged policy snapshot inspection.
  - Add Policy Dry-Run Tester on Governance Policy page to evaluate commit-policy outcomes without running a full chat job.
  - Add `internal API action` for policy evaluation previews with structured + human-readable outputs.
  - Add `internal API action` to preview final resolved policy snapshot and hash context.
  - Add Policy controls for worker capability enforcement: `Require capability scope`, `Capability policy version`, and `Unknown capability action (block_commit|warn)`.
  - Upgrade authority/registered worker scope inputs to search-and-add chip pickers with inline registry/active badges and unknown-value highlighting.
  - Extend Policy Dry-Run Tester with capability inputs (`capability_scope`, `worker_capabilities`) to validate capability-scope commit behavior.
  - Add Lab `Policy Test Matrix` harness (`internal route`) to run repeatable governance dry-run scenarios and compare decision/violation outcomes before live route testing.
  - Extend Lab `Policy Test Matrix` with worker type/ID selectors, policy combination overrides (`decision_overrides`, `policy_overrides`), and profile-based tuning recommendation (`permissive|balanced|strict`) scored against worker risk target.
  - Add human-readable policy failure statements in Governance Replay trace using `policy_evaluations`.
  - Add Governance `AI Report (Alpha)` page (`internal route`) with explicit token/caution declaration and report-style selection.
  - Add `internal API action` to produce markdown governance filings from RAW replay/job evidence via runtime model.
  - Reduce AI report token churn by introducing deterministic `report_input` preparation (compact evidence object, capped event/policy depth, precomputed explanations, template-anchored prompt).
  - Add report generation modes (`summary`, `operator`, `governance`, `forensic`) with bounded evidence depth and output budgets.
  - Add `Download .md` action for generated AI reports in Governance `AI Report (Alpha)`.
### Platform
  - Start route modularization by extracting governance policy snapshot resolution helpers into `/engineinternal admin route` and reusing them from admin API handlers.
  - Add `internal route` module manifest endpoint to separate `core` vs `addon` runtime surfaces (initial scaffold for optional module architecture).
  - Start `routes_admin.py` decomposition by moving Governance and Lab GET routing blocks into `/internal module` and `/internal module`.
  - Continue decomposition by moving Governance POST/API handlers (policy dry-run, AI report generation, replay purge, global policy save, worker policy map save) into `/internal module`.

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
  - Add deterministic `Governance Incident Map v1` specification (`internal module`) covering fixed topology, node/edge enums, data precedence, and non-goals.

## 2026-03-02
### Engine
  - Centralize runtime commit enforcement in `internal module` so async and direct chat routes call the same commit path.
  - Emit explicit proposal/commit lifecycle events for replay clarity: `proposal.created`, `proposal.validated`, `commit.requested`, `commit.authorized`, `commit.denied`, `commit.executed`.
  - Add commit enforcement to direct `internal route` and `internal route` routes so commit policy cannot be bypassed outside async job flows.
  - Extend commit snapshots with `config_snapshot`, `config_hash`, and `policy_hash` to improve deterministic replay fidelity.
  - Add worker-scoped commit policy overrides (`governance_worker_policy_map_v1`) and apply them at commit evaluation time.
  - Add authority-admissibility checks in commit evaluator (`authority_state` / epoch drift checks) behind policy control.
  - Extend authority drift capture with proposal-time vs commit-time authority snapshots (`authority_state_*`, `authority_epoch_*`) for deterministic admissibility replay.
  - Add scoped fail-closed authority snapshot enforcement (`governance_authority_scope_worker_types`) so selected worker types require proposal/commit authority snapshots.
  - Standardize missing authority fields at commit boundary to `not_captured` (no empty-string/null drift between capture and evaluation).
  - Bind decision class deterministically in commit input (`decision_class_id`, `decision_class_version`, `decision_class_hash`) and enforce evaluator checks for missing/mismatched decision class metadata.
  - Add commit decision HMAC signatures (when `runtime setting` is configured) for tamper-evident commit outcomes.
  - Add replay hash-chain fields (`prev_hash`, `event_hash`) and chain verification support for replay integrity checks.
  - Add computed `control_flow_v1` topology payload to replay API responses for stage-boundary visualization and deterministic flow-state reconstruction.
### Admin
  - Add Governance Replay purge control and API (`internal API action`) for test-environment cleanup.
  - Add replay chain validity metadata to replay API response and integrity strip.
  - Add authority snapshot presence/drift metadata to replay API and Governance Replay summary/export output.
  - Add `admissibility_complete` and `decision_class_admissible` replay metadata surfaces to distinguish trace completeness from admissibility completeness.
  - Add show/hide toggle for topology surface in Governance Replay to support different operator review modes.
  - Fix Governance Policy page worker-type normalization bug that caused `internal route` to crash (502) when registry entries were dicts instead of plain strings.
  - Upgrade Governance Policy page from placeholder to V1 editor with global commit policy thresholds + snapshot versions.
  - Add worker-scoped policy mapping in Governance Policy V1 editor.
  - Add authority-admissibility toggle support in Governance Policy V1 editor.
  - Ensure pipeline editor auto-backfills Commit stage/library entry and commit->delivery wiring for older pipelines.
  - Add Commit user-stage message field to pipeline stage messaging editor.
### Docs
  - Add operator reference for inference/commit governance model and resilience roadmap: `internal module`.

## 2026-02-28
### Engine
  - Introduce commit-stage enforcement so inference is treated as proposal-only until a final commit re-validation pass succeeds.
  - Add commit validation path to both `internal route` and `internal route`, with explicit `blocked_commit_validation` termination on policy failure.
  - Persist per-job replay timeline events (`job_replay_events`) with risk/anomaly metadata for audit reconstruction.
  - Add job bucket persistence (`job_buckets`) to define worker scope guidelines and justification prompts.
  - Add deterministic commit contract evaluator (`commit_eval_v1`) with pure-function recompute semantics over `commit_input_v1` (no model rerun required).
  - Capture and persist per-job `commit_input_v1` + `commit_decision_v1` snapshots in job metrics for procedural replay.
  - Emit structured `commit.evaluated` events with decision, reason, violations, and evaluator version.
  - Capture provider telemetry in runtime metrics: provider name/model/version, latency, request ID, token usage, and provider API error codes.
### Admin
  - Extend pipeline runtime test with `test_type` selector (`GPT/RAG chat` and `Agent write action`) and commit-sequence coverage.
  - Add pipeline validation pack runner with pass/fail checklist and proof-bundle JSON export for runtime module evidence.
  - Add Fabric `Job Buckets` tab scaffold with super-admin create/update/delete controls.
  - Add `internal route` and `internal route` endpoints.
  - Upgrade Job Inspector with replay timeline, collapsible trace details, anomaly highlighting, and run-to-run diff baseline.
  - Replace `Documentation` surface with `Operator Handbook` view that loads `internal module` in panel/popup flipbook-style navigation via `internal route`.
  - Add Lab `Commit Harness` page (`internal route`) to load captured commit input, recompute decisions, and diff original vs recomputed outcomes.
  - Add `internal API action` and `internal API action` for deterministic commit replay tooling.
  - Expand Governance Dashboard evaluated jobs table with provider telemetry columns (provider/model/latency/request ID/tokens/API error).

## ------------- 0.16 --------------

## 2026-02-24
### Engine
  - Harden admin session signing fallback by persisting `session_secret_v1` in `admin_meta` when `runtime setting` is unset, using race-safe initialization and first-writer-wins persistence semantics.
  - Strengthen admin session validation by rejecting suspicious token time windows and invalidating sessions for deleted admin users.
  - Protect admin login throttle state with a lock to avoid concurrent request races in the threaded HTTP handler.
  - Add explicit proxy-header trust control (`runtime setting`, default disabled) and unify HTTPS detection for admin transport checks and cookie `Secure` behavior.
  - Align legacy OTP secret decrypt fallback with the shared admin session-secret source.
  - Refine route-target normalization for API routing to ignore query/fragment without broadening matches for `//path` or semicolon path params.

## 2026-02-19
### Engine
  - Add admin-chat bridge endpoints (`internal route`, `internal route`) with authenticated session gating so internal dashboard chat no longer depends on public chat routes.
  - Add governance summary aggregation for 24h risk/cost telemetry (`blocked_baseline`, `blocked_injection`, `blocked_policy`, `terminated_window`, `token_churn_window`, queue depth).
  - Add `internal route` and `internal route` API surfaces for dashboard dependency/risk cards.
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
  - Add bootstrap-key first-run admin flow (`internal route`) to create initial `super_admin` and remove dependency on auto-generated bootstrap credentials.
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
  - Add provisioning split schematics document (`fabric module`) and index link for next-phase wiring.

## 2026-02-10
### Engine
  - Add Fabric setup gating so admin routes require initial Fabric configuration before worker operations.
  - Add Fabric setup persistence fallback (`meta` + env) for provisioner URL/token/timeout and engine public URL.
  - Add encrypted-at-rest handling for sensitive admin secrets (`fabric_provisioner_token`, `smtp_password`) via `runtime setting`.
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
  - Move job cleanup to retention-based history (`runtime setting`) while keeping session TTL behaviour.
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
  - Route Pipeline UI at `internal route` with `internal route` as legacy alias.
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
  - Add authenticated health JSON at `internal route`.
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
  - Remove unauthenticated `/health` and `internal route` endpoints.
  - Add signed `/health` for trusted clients (API key + signature).
  - Plugin status moved to status pills with indicator light.

## ------------- 0.13 --------------

## 2026-01-29
### Engine
  - Split API routing into adminpublic status route route modules for maintainability.
  - Expand posture list to reflect AI execution controls (policy, prompt boundaries, tools off by default).
### Admin
  - Add engine-hosted admin UI scaffolding with login and forced password change.
  - Bootstrap credentials file generation with one-time state flag in SQLite.
  - Signed session cookie and basic password policy (12+ chars).
  - Local-only reset script to re-enable bootstrap (`internal module`).
  - Posture panel + safe config controls (public status + maintenance mode).
  - CSRF protection and HTTPS requirement for admin routes.
  - Basic login rate limiting; scrypt/PBKDF2 password hashing.
  - Optional OTP (TOTP) setup + recovery codes, enforced only when enabled.
  - Audit log table with login/config/OTP events.
  - IP allowlist support for `internal route` routes.
  - Audit log UI at `internal route` with latest events.
  - OTP provisioning URI and recovery code regeneration.
  - Local-only bootstrap print command (`internal module`).
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
  - Persist job state to local SQLite (`runtime setting`).
  - Reduce engine default prompt to guardrails to avoid duplicating Modelfile system prompt.
  - Add intent tags, confidence buckets, and no-sources flags to job metadata.
  - Fallback to general guidance when no context is found.

## ------------- 0.11 --------------

## 2026-01-20
### Engine
  - Reorganize engine modules into `api/`, `core/`, and `services/`.
  - Require `runtime setting` from environment (no default fallback).
  - Verify `X-Elora-Signature` + `X-Elora-Timestamp` (HMAC of `timestamp\\nbody`).
  - Allow dev bypass only with `X-Elora-Dev: 1` from loopback clients.
  - Enforce `runtime setting` payload cap.
  - Add `runtime setting` for signature time window.
  - Allow `X-Elora-Signature`, `X-Elora-Timestamp`, `X-Elora-Dev` in CORS.
  - Include `dev_mode_header` and `dev_mode_allowed` in `/health` and `internal route`.
### Platform
  - Add engine `README.md`, `ARCHITECTURE.md`, and `OPERATIONS.md`.
