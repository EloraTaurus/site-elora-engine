# Engine Changelog

Disclosure level: Public (high-detail technical summary). Internal route inventories, exact operational thresholds, and direct reproducibility playbooks are intentionally omitted.

Machine learning implementation anchors (public-safe):
- Initial ML foundation implementation: `2026-04-24` (Model Exams + CORE learning coordination)
- ML maturity expansion: `2026-04-25` (bucketed learning + weighted signal fusion progression)
- ERIS runtime-ML domain formalization: `2026-05-06`

## ------------- 0.2.0 --------------

## 2026-05-08
- Added trial interaction capture milestone coverage for Elora `[Question]` prompts and operator answers stored for analysis-only (non-persistent learning).
- Added permission-gated follow-up questioning milestone coverage (`[Question][Permission]`) with explicit consent states for safer bounded dialogue flow.
- Added operator quick-consent milestone coverage in admin chat (`Yes, proceed` / `Not right now` / `No`) to reduce ambiguity in consent interpretation.
- Added autonomous no-response follow-up milestone coverage for pending trial questions in active-operator windows.
- Added autonomous offline anti-spam milestone coverage so only one offline-targeted message is emitted before hold-until-active behavior.
- Added chat avatar rendering stability milestone coverage for fixed 1:1 presentation without flex compression artifacts.
- Added Curiosity governance hardening milestone coverage for Elora-only proposal origination and explicit human-confirmed preparation flow.

## 2026-05-07
- Added Curiosity governance milestone coverage for signal-proposal lifecycle controls (suggest, propose, approve, reject, cancel, delete) under split-authority review posture.
- Added approved-signal catalog integration milestone coverage so accepted Curiosity signals feed tracked learning-visibility surfaces.
- Added Curiosity auto-suggestion milestone coverage for detecting and proposing new signals from active focus recommendations.
- Added Curiosity operator UX milestone coverage for clearer proposal management and approval workflow handling in CORE.
- Added safe deletion guardrail milestone coverage to prevent pending/active-run proposal removal side effects.
- Added observer prefill and resume continuity milestone coverage for queue-origin learning runs.
- Added admin `Approve + Prepare` milestone coverage to preserve governed approval plus explicit pre-run human confirmation.
- Added CPU-safe model posture milestone coverage for Curiosity proposal prefill/dispatch behavior and operator-visible clamp explainability.

## 2026-05-06
- Added public-safe Elora Human Interaction milestone coverage for governed trial-mode operator chat.
- Added autonomous operator-messaging milestone coverage so Elora can post without requiring chat-window activity.
- Added safety-first runtime-priority milestone coverage where interaction remains secondary to active research/repair/runtime-critical work.
- Added anti-spam/autonomy-governance milestone coverage for bounded autonomous messaging cadence.
- Added offline delivery milestone coverage so Elora can leave operator-targeted messages for next sign-in.
- Added pending-message visibility milestone coverage with launcher unread count while chat is closed.
- Added message-retention milestone coverage by removing operator UI clear action from Elora interaction chat.
- Added public-safe milestone coverage for ERIS runtime-state expansion with stronger worker/process/pressure learning visibility.
- Added runtime intelligence visibility milestones aligned to Engine Health and Elora CORE workflows.
- Added cache-backed runtime-view milestone coverage for lower read pressure during active learning cycles.
- Expanded Glass Box chronology coverage with runtime-learning summaries, profile posture snapshots, and traceability visibility.
- Added deterministic Curiosity milestone coverage in Elora CORE with focus ranking and bounded run-history visibility.
- Added governed Curiosity queue milestone coverage with proposal, approval, rejection, and cancellation lifecycle controls.
- Added split-authority governance posture coverage for Curiosity approvals, including proposer/approver separation.
- Added Curiosity runtime posture-state visibility coverage (`idle`, `scheduled`, `triggered`, `queued`, `running`, `cooling_down`) with cooldown and execution-window context.
- Added runtime worker planning visibility upgrades for compute/RAM continuity diagnostics.
- Added Curiosity Research governance hardening coverage for mandatory learning-intent fields, proposal expiry/review lifecycle, and stale auto-archive behavior.
- Added Elora Translate observe-first trial milestone coverage with explicit operator-visible translation traceability.
- Added machine-language-gated reverse translation milestone coverage so human-readable outputs are not unnecessarily transformed.
- Added replay/report translation visibility milestone coverage for prompt/output comparison and translation-status auditability.
- Added research dashboard translation-tag milestone coverage (`translate.observe`, `translate.off`, `translate.active_scaffold`) for run-level filtering and comparison.

## 2026-05-05
- Added state-adapter-first control-plane milestone coverage for expanded read-scope aggregation and reduced high-fanout reads.
- Added architecture inventory/API-reduction milestone coverage for control-plane simplification progress.
- Added read-only `viewer` onboarding milestone coverage for public-safe demonstration posture.
- Added stricter disclosure-boundary milestone coverage for internal research/process documentation access.
- Added operator readability milestone coverage for state-view framing and outbound-integration clarity.
- Added loading UX unification milestone coverage to remove overlapping loader behavior on heavy surfaces.
- Added refresh-governance milestone coverage for event-driven updates, dashboard read deduplication, and navigation-exit cleanup.
- Added telemetry overhead reduction milestone coverage for bounded footprint sampling and role-aware polling behavior.
- Added scheduler idle-churn reduction milestone coverage for lower background wake pressure.

## 2026-05-02
- Added research dashboard pressure-reduction milestone coverage via leaner aggregated reads and selective payload posture.
- Added cache lifecycle hardening milestone coverage for stale pruning, bounded retention, and improved cache-footprint observability.
- Added research queue self-heal milestone coverage for stalled-run recovery and continuity safeguards.
- Added ML status semantics milestone coverage for clearer treatment of legacy vs active learning-state interpretation.
- Added recurring non-neural backlog learning milestone coverage for completed-run continuity.
- Added model-exam timeout resilience milestone coverage to reduce false-failure behavior during cold-start conditions.

## 2026-05-01
- Added request-on-entry plus event-driven refresh milestone coverage as the preferred heavy-surface update model.
- Added refresh-controller capability milestone coverage (state-change push, visibility refresh, debounce, bounded fallback).
- Added task-manager observability milestone coverage for active/background runtime diagnosis.
- Added background-loop observability milestone coverage with clearer lifecycle posture.
- Added runaway safeguard milestone coverage for unscheduled activity and idle overhead reduction.
- Added autoscale/control-loop efficiency milestone coverage for safer low-overhead background behavior.

## 2026-04-30
- Added observer runtime stability milestone coverage for fallback-path reliability hardening.
- Added observer model-trace visibility milestone coverage in step/report outputs.
- Added observer dashboard identity-tag milestone coverage for faster model-version inspection.
- Added learning/default profile-lane milestone coverage for side-by-side model behavior comparison.
- Added gated learning-promotion milestone coverage with deterministic eligibility checks before baseline merge posture.
- Added editable promotion-threshold workflow milestone coverage for safer operator review sequencing.

## 2026-04-28
- Added adaptive cache tracking/selection milestone coverage with stronger model-identity traceability.
- Added host-resource-aware pressure signal milestone coverage for CPU-first and constrained-compute operation.
- Added profile-bootstrap parsing resilience milestone coverage for smaller model-size naming formats.
- Added adaptive cache visibility milestone coverage through health-strip/feed readability and clearer low-utilization interpretation.
- Added stage-level observer routing milestone coverage with observer-selection visibility in run evidence.
- Added observer context hardening milestone coverage for improved grounded assessment behavior.
- Added observer quality/alignment scoring milestone coverage for deterministic governance-learning interpretation.
- Added observe-only policy-breach preview milestone coverage for no-block learning visibility.
- Added policy-template and control-hit provenance milestone coverage for governance-learning traceability.
- Added cumulative policy-control learning milestone coverage for longitudinal breach familiarity tracking.
- Added Governance Learning panel/widget milestone coverage across Observer Research and Elora CORE surfaces.
- Added compact readiness scoring milestone coverage for engine-only governance-learning evaluation.
- Added governance-training record/scenario milestone coverage for breach-vs-near-breach comparative evaluation.
- Added learned Echo threshold profile milestone coverage and improved correlation visibility.
- Added operator threshold confidence-band and stability-envelope visibility milestones.

## 2026-04-27
- Added learning-efficacy visibility milestone coverage in Engine Health.
- Added Pattern Analysis milestone coverage for recurring instability trends and transition-state interpretation.
- Added learning-integrity hardening milestone coverage (idempotent updates and duplicate-cleanup posture).
- Added observer stage-memory milestone coverage for iterative historical guidance in governance-learning workflows.

## 2026-04-26
- Added CORE model-intelligence milestone coverage for strengths/weaknesses and learned-parameter interpretation surfaces.
- Added Pattern Analysis module milestone coverage for runtime-pattern linkage and longitudinal model/profile trend visibility.
- Added Model Exams paired-evaluation milestone coverage for baseline-vs-learning comparison posture.

## 2026-04-25
- Added Elora CORE page-separation milestone coverage (`Overview`, `Machine Learning`, `Buckets`).
- Added bucketed-learning portability/hardware-aware continuity milestone coverage.
- Added reliability hardening milestone coverage for degraded-safe render behavior and section/toggle stability.
- Added Model Exams usability milestone coverage for lower-friction operator workflow.

## 2026-04-24
- Added dedicated Model Exams signal-generation milestone coverage (packs, runs, events, export direction).
- Added Elora CORE coordination/control-view milestone coverage with explicit boundary framing.
- Added CORE persona/readability milestone coverage as presentation-layer behavior only.
- Added Echo learning persistence and scheduled/on-demand refresh milestone coverage.

## Previous Versions (0.18 and earlier)

## ------------- 0.18 --------------

## 2026-04-22
- Added Adaptive Cache milestone coverage for bounded compaction/reconstruction and profile-aware tuning visibility.
- Added cache observability milestone coverage for reduction trends, activity trends, and constrained-compute impact indicators.
- Added cross-surface Echo-to-Cache linkage milestone coverage.
- Added Engine Health overview presentation milestone coverage for faster grouped operator scanning and chart readability.

## 2026-04-21
- Added dedicated Echo early-warning milestone coverage for instability precursor visibility.
- Added separate Echo Frequency learning milestone coverage for model operating-band research posture.
- Added bounded runtime stabilization handoff milestone coverage for safer adaptive response behavior.
- Added Echo documentation/research-method milestone coverage for grading/math/runtime framing.

## 2026-04-20
- Added security posture verification milestone coverage for admin/session boundary handling.
- Added filesystem/listing efficiency milestone coverage for lower repeated overhead.
- Added job-store efficiency milestone coverage under frequent polling conditions.

## 2026-04-17
- Added observer comparison-analysis milestone coverage with export chronology alignment.
- Added Engine State visibility milestone coverage and stronger constitutional-halt signal interpretation paths.
- Added intervention telemetry consistency milestone coverage across research/operator surfaces.

## 2026-04-15
- Added runtime/admin contention-reduction milestone coverage under active inference.
- Added governance/dashboard read-path efficiency milestone coverage.
- Added queue-worker recovery milestone coverage for safer long-run operations.

## 2026-04-14
- Added intervention escalation milestone coverage for broader same-cycle repair handling.
- Added failed-repair termination visibility milestone coverage and clearer repair-boundary interpretation.
- Added pre/post intervention comparison milestone coverage in reporting surfaces.

## 2026-04-12
- Added background reindex milestone coverage with progress-state visibility.
- Added admin render/read efficiency milestone coverage for configuration and system-info paths.

## 2026-04-11
- Added governance replay direct-load reliability milestone coverage.
- Added execution-monitor live runtime visibility milestone coverage.
- Added terminal-style output and compact telemetry milestone coverage for operations readability.

## 2026-04-09
- Added browser-assisted research hardening milestone coverage in public-safe form.
- Added research job lifecycle and model-consistency milestone coverage.
- Added observe-only intervention-probe milestone coverage for per-step potential-action interpretation.
- Added long-context continuity milestone coverage for multi-turn runtime operation.

## 2026-04-07
- Added speed-control milestone coverage for throughput-oriented research runs.
- Added dashboard-first research landing milestone coverage.
- Added graduated warning-band milestone coverage for constraint-first runtime interpretation.

## 2026-04-06
- Added report comparability/version milestone coverage.
- Added comparative visualization milestone coverage for stability/resource/intervention interpretation.
- Added queued-run orchestration milestone coverage for sequential long-window execution.

## 2026-04-05
- Added cross-strategy comparison and reference-delta reporting milestone coverage.
- Added observer signal dictionary milestone coverage for interpretation consistency.
- Added pre-inference planning parity milestone coverage across production/research paths.
- Added observer runtime/reporting/scenario/lifecycle milestone coverage in public-safe chronology form.

## 2026-04-03
- Added inflight runtime evidence milestone coverage and replay/readability improvements.
- Added asynchronous report-generation milestone coverage for constrained environments.
- Added bounded browser-assisted proposal-integrity and telemetry milestone coverage for experimental research paths.
