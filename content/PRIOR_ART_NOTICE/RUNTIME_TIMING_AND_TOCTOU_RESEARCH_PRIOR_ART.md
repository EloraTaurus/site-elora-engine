# Runtime Timing and TOCTOU Research — Technical Disclosure and Prior Art

## Document Control

- Document type: Standalone technical disclosure and implementation chronology
- Project: The Elora Taurus Project
- Prepared: `2026-08-29`
- Primary repository: `EloraTaurus/llm-elora-engine` (private implementation repository)
- Primary evidence class: Git implementation history
- Supporting evidence classes: Engine, Observer and Research changelogs; retained research artifacts; operator-supplied private GitHub main-history exports; public-disclosure placeholders
- Status: Local implementation chronology and private GitHub official-update chronology correlated; independent public-disclosure anchors remain to be completed

## Purpose

This disclosure documents the evidenced technical lineage between Elora's established Runtime Intelligence temporal instrumentation and the TOCTOU-specific research introduced on `2026-08-27`.

The disclosure records Elora's particular implementation chronology and research application. It does not claim invention or ownership of TOCTOU, runtime monitoring, runtime verification, race conditions, elapsed-time measurement, process profiling, or any other established computer-science concept.

## Critical Historical Boundary

> Earlier temporal instrumentation is prior implementation evidence for Elora's Runtime Intelligence measurement substrate. It is not claimed as an earlier implementation of TOCTOU-specific research.

The chronology establishes four separate facts:

1. Elora independently implemented runtime and micro-process temporal instrumentation beginning in February 2026.
2. That instrumentation progressively evolved through Observer cycle timing, retained research evidence, Runtime Intelligence, engine-stage attribution, wall/CPU/wait attribution and micro-operation timing.
3. TOCTOU-specific measurement and interpretation were introduced separately on `2026-08-27`.
4. The TOCTOU work reuses and extends the established measurement substrate by adding explicit check/state/use/consequence boundaries, state-change evidence and TOCTOU-specific classifications.

No earlier runtime-timing milestone in this document is retrospectively relabelled as TOCTOU research.

## Evidence Method

### Primary implementation evidence

Git history is the primary evidence used for this chronology. Each implementation milestone is tied to a full commit hash, commit timestamp, relevant historical source file and an implementation behaviour visible in that revision.

The dates below are Git author and commit dates. For the verified milestones, author and commit timestamps match. A Git timestamp in a private local repository is implementation-history evidence; it is not, by itself, an independently timestamped public disclosure.

This disclosure keeps three evidence layers separate:

1. **Local implementation anchor** — the fine-grained commit in the local `.git` history where the implementation is evidenced.
2. **Private GitHub official update** — the later consolidated `main` commit showing that the implementation line was promoted into the project's official private GitHub repository.
3. **Public disclosure anchor** — a website page, public changelog, report, post, archive or other independently timestamped material that was actually made available to the public.

The first two layers support implementation provenance and repository chronology. They are not described as public prior art merely because they exist in Git.

### Supporting documentation evidence

The following current changelogs were reviewed:

- `engine/CHANGELOG_ENGINE.md`
- `engine/docs/RESEARCH/OBSERVER_CHANGELOG.md`
- `engine/docs/RESEARCH/CHANGELOG_RESEARCH.md`

For this disclosure:

- **Implementation date** means the date of the commit containing the relevant source or retained artifact.
- **Documentation date** means the date of the commit that added the matching changelog text.
- A date written in a changelog heading is not silently treated as the documentation date when Git shows that the text was added later.
- If a changelog has no matching entry, this is stated explicitly rather than repaired retrospectively.
- Existing historical changelog entries have not been modified for this disclosure.

### Terminology boundary

The early Observer implementation used **cycle** for an individual governed research interaction. This disclosure describes cycle timing as the predecessor of later stage/turn evidence, but does not silently rename the historical field or claim that the April implementation contained the June internal engine-stage map.

## Current Technical Distinction

| Historical Runtime Intelligence measurement | TOCTOU-specific research |
|---|---|
| Request and end-to-end runtime duration | Explicit check boundary |
| Embedding, retrieval and prompt-construction duration | State observed at check |
| Provider load, prompt-evaluation and evaluation phases | Decision boundary |
| Observer cycle wall and CPU duration | Proposal or execution/use boundary |
| Internal engine-stage duration | Final consequence boundary |
| Stage wall time and process CPU time | State propagation across boundaries |
| Inferred stage wait time | State collision evidence |
| Micro-operation timing and attribution | Stale-state evidence |
| Runtime evidence retention and report projection | Consequential stale-state execution classification |

Historical Runtime Intelligence answers questions such as **how long did runtime work take, which phase or stage consumed time, and how was elapsed time divided between measured wall, CPU and inferred wait?**

The TOCTOU research asks a different question: **did relevant state remain consistent between a recorded check and a later use or consequence, and what evidence supports the resulting bounded classification?**

## Verified Chronology

### 1. Request and micro-process timing

- Implementation date: `2026-02-03`
- Commit: `dcd225277d3306f9213eee13b914476c534586ce`
- Commit subject: `Plan agentic pipeline builder`
- Earliest reachable source: `engine/services/chat.py`
- Evidence class: Measured request and sub-process timing returned with runtime telemetry

The historical source calculates and retains:

- request `duration_ms`;
- embedding `embed_ms`;
- retrieval `retrieval_ms`;
- prompt-construction `prompt_ms`;
- aggregate `total_ms`;
- provider `eval_duration_ns`;
- provider `prompt_eval_duration_ns`;
- provider load/evaluation counts used with the timing evidence.

This is the earliest reachable Git evidence that Elora measured request-level and micro-process runtime timing. The calculations use actual elapsed timestamps and provider-reported phase durations; they are not merely UI labels or forecasts.

It does **not** establish Observer cycle timing, the later internal engine-stage profile, or TOCTOU-specific research.

#### Changelog correlation

- `CHANGELOG_ENGINE`: No timing-specific matching entry was found. The current `2026-02-03` heading was introduced later by formatting commit `8ac029ceacf240f4202a1ca6357a22b1b27344c5` on `2026-03-03`; its surviving entries do not document the micro-process timing in `engine/services/chat.py`.
- `OBSERVER_CHANGELOG`: Not applicable and no matching entry; Observer did not yet exist. The file was first added on `2026-04-06`.
- `CHANGELOG_RESEARCH`: Not applicable and no matching entry. The file was first added on `2026-04-09`.
- Discrepancy preserved: implementation evidence exists in source history without a contemporaneous timing-specific changelog entry.

#### Supporting Governance Replay export — not a separate implementation milestone

- Embedded run date: `2026-03-06 21:44:44` to `21:45:22 UTC`
- Artifact: `governance-replay-job-50.json` (private retained export)
- Artifact SHA-256: `ce520c36641703cc6e85b99314bf13a24f2a42beba7db8bfbdefeac1a43d67c6`
- Replay contract: `replay_v1`; control flow: `control_flow_v1`; commit evaluator: `commit_eval_v1`
- Evidence class: Timestamped Governance Replay and proposal-to-commit boundary reconstruction

The export retains 13 hash-chained events across intake, policy gate, drafting, proposal, justification and commit boundaries. It records `36,981 ms` total duration, `36,966.49 ms` provider latency, proposal creation and validation timestamps, commit request and denial timestamps, 15 commit checks, three recorded violations, a valid replay chain and an explicit `blocked_commit_validation` outcome caused by `commit_policy_violation`.

This artifact corroborates that Elora retained temporal evidence across a governed proposal-to-commit lifecycle by `2026-03-06`. It is supporting evidence for decision-boundary chronology, not the earliest timing implementation and not a replacement for the source commits above.

The export also records the proposal and commit authority snapshots as `not_captured`. That absence is material: it demonstrates that timestamped replay and commit-boundary evidence existed while the state-propagation evidence later required for TOCTOU-specific interpretation was not present in this record. The export is therefore **not** evidence of an early TOCTOU implementation.

The artifact is not currently committed to the implementation repository or published. Its embedded timestamps, matching local filesystem time and digest support retained-artifact identification, but do not independently establish a public-disclosure date. Raw proposal text and protected configuration content should remain private; only this bounded metadata summary belongs in the public disclosure.

### 2. Observer cycle wall/CPU timing

- Implementation date: `2026-04-05`
- Commit: `da7b1d6d271feaf843c44f0e8397cc2824e91fdc`
- Commit subject: `Add observer execution targets and runtime telemetry logging`
- Primary source: `engine/core/lab_observer.py`
- Related source: `engine/admin/lab/observer_harness.py`
- Evidence class: Observer cycle measurement and retained research event

The Observer runtime introduced `_resource_start()` and `_resource_stop()` measurements using monotonic elapsed timing and process CPU timing. It retained `time_to_complete_ms` inside each cycle's `runtime_metrics`, included the metrics in run summaries and emitted `observer.cycle_runtime` research events.

This is the earliest verified Observer cycle-level temporal instrumentation. The historical unit was a **cycle**, not the later internal engine-stage timing map.

#### Changelog correlation

- `CHANGELOG_ENGINE`: The current `2026-04-05` Research/Observer entry documents per-step runtime-metric persistence and runtime telemetry. The matching text was committed later the same day in `28aed00b0b631e96df05fb2b5e265da5fd16d596` at `17:11:45 +01:00`; the implementation commit was at `15:17:28 +01:00`.
- `OBSERVER_CHANGELOG`: Versions `0.1.0-alpha` to `0.3.0-alpha` are headed `2026-04-05` and mention the initial runner, research storage, runtime resource telemetry and per-step reports. Those entries were documented on `2026-04-06` by `b4cf19dc6041b5367d63f2a25a69a8ffeeb1353d`.
- `CHANGELOG_RESEARCH`: No matching `2026-04-05` entry was found; the file did not yet exist.
- Discrepancy preserved: the Engine documentation followed the implementation later the same day, while the Observer changelog was created the following day and back-referenced the `2026-04-05` milestone.

### 3. Earliest retained JSON research timing evidence

- Implementation/evidence commit date: `2026-04-07`
- Commit: `3afcff1432314632a1be2fe5b1ba2ecb957cc8cf`
- Commit subject: `Add long-run observer research scenarios and reporting telemetry`
- Retained artifact: `Research results/observer_cycle_1775514868283.json`
- Related retained reports: `Research results/observer_cycle_1775514868283_report.html` and other Observer report artifacts in the same commit
- Evidence class: Durable research artifact containing measured timing values

The JSON retains concrete `runtime_metrics.time_to_complete_ms` values for individual baseline and regulated cycles. Examples include `185800.623`, `26350.181`, `37795.8` and `142341.116` milliseconds. The artifact also carries timing values into comparison rows and aggregate analysis.

This is the earliest committed JSON artifact found that demonstrates measured Observer cycle timing was retained as research evidence rather than existing only in executable source.

The Git date establishes that the artifact was committed by `2026-04-07`. It does not independently prove when the run began or when a public reader could first access the artifact.

#### Changelog correlation

- `CHANGELOG_ENGINE`: A `2026-04-07` section exists, but it documents constraint-first interpretation, warning-state policy, dashboard redesign and Observer speed control. It does not identify this JSON timing artifact.
- `OBSERVER_CHANGELOG`: No `2026-04-07` entry and no timing-artifact-specific entry were found.
- `CHANGELOG_RESEARCH`: No `2026-04-07` entry was found; the file did not yet exist.
- Discrepancy preserved: the durable JSON evidence has a Git commit anchor but no matching historical changelog entry.

### 4. TTFT and provider evaluation-phase research timing

- Implementation date: `2026-04-24`
- Commit: `4a91d269471cf67cba1e4937d22598ae128f95ac`
- Commit subject: `Stabilize Echo learning mode and scorecard signals`
- Primary source: `engine/core/model_exams.py`
- Related sources: `engine/core/research_store.py`, `engine/core/model_exam_packs/`
- Evidence class: Model-exam research metrics and export fields

Model Exams calculated and retained:

- `ttft_ms`;
- `prompt_eval_ms`;
- `eval_ms`.

The metrics were used in scoring and exposed through research exports. TTFT included provider phase evidence with a bounded fallback when direct phase evidence was unavailable; this provenance distinction should remain visible when interpreting individual records.

#### Changelog correlation

- `CHANGELOG_ENGINE`: The Model Exams section was documented later the same day by `8b0540a65691ad363ebc7aaccf22919fe7fc0c55` at `15:48:19 +01:00`. It records adaptive latency baselines and timing history, but does not enumerate all three source fields. The implementation commit was at `13:56:15 +01:00`.
- `OBSERVER_CHANGELOG`: No `2026-04-24` or Model Exams timing entry was found.
- `CHANGELOG_RESEARCH`: The `2026-04-24` Model Exams entry was added by the same later documentation commit, `8b0540a65691ad363ebc7aaccf22919fe7fc0c55`, and records the research lane and adaptive latency baseline system.
- Discrepancy preserved: the implementation predates the matching Engine and Research changelog text by approximately two hours; the changelogs describe latency baselining but not every retained phase field.

### 5. Formal Runtime Intelligence terminology and subsystem surface

- Implementation date: `2026-05-06`
- Commit: `7065f25db16fdf192f7045b519be9dff0b4d02c0`
- Commit subject: `Add ERIS runtime state and intelligence surfaces`
- Primary sources: `engine/runtime_state/`, `engine/admin/elora_core/runtime_intelligence_page.py`
- Related sources: `engine/api/admin_routes/elora_core.py`, `engine/core/state_aggregator.py`
- Evidence class: Named Runtime Intelligence subsystem and operator surface

This commit introduced formal Runtime Intelligence terminology and ERIS runtime-state surfaces. It is a naming and subsystem milestone, not the beginning of temporal instrumentation: the February and April evidence predates the formal Runtime Intelligence label.

#### Changelog correlation

- `CHANGELOG_ENGINE`: `ERIS Runtime Intelligence System (Initial Delivery)` was documented later the same day by `e83035ad7e5aedbf199ee485aa47768457ffb36c` at `16:36:37 +01:00`. The implementation commit was at `16:09:52 +01:00`.
- `OBSERVER_CHANGELOG`: No matching `2026-05-06` Runtime Intelligence entry was found.
- `CHANGELOG_RESEARCH`: No matching `2026-05-06` entry was found; the nearest dated research entry is `2026-05-05` and concerns state-adapter migration rather than this implementation.
- Discrepancy preserved: formal terminology was implemented before its same-day Engine changelog entry and was not contemporaneously mirrored into the Observer or Research changelogs.

### 6. Provider and model-load phase timing retained in Observer evidence

- Implementation date: `2026-06-16`
- Commit: `d31d1626d5eac37d0c7e60b6a137839a3a98b42f`
- Commit subject: `Surface Observer telemetry in research reports`
- Primary source: `engine/core/elora_observer/runtime.py`
- Report sources: `engine/core/research/reporting/rendering_markdown.py`, `engine/core/research/research_report.py`
- Verification source: `engine/core/test_research_dashboard_archive_counts.py`
- Evidence class: Observer persistence and report projection of provider timing

Observer runtime metrics retained `observer_provider_total_duration_ns` and `observer_provider_load_duration_ns` from the Governor/provider runtime seam. The report renderers projected the provider/backend, latency, load and token evidence into human-readable research output.

This milestone extends the earlier provider-phase instrumentation into direct Observer evidence. It is still runtime-phase measurement, not state-consistency or TOCTOU interpretation.

#### Changelog correlation

- `CHANGELOG_ENGINE`: The `2026-06-16` section was updated in the same commit and records that Observer Governor telemetry was flattened into runtime metrics and rendered in HTML and Markdown reports.
- `OBSERVER_CHANGELOG`: No matching June entry was found. The file jumps from `0.9.14-alpha (2026-05-08)` to `0.9.15-alpha (2026-07-04)`.
- `CHANGELOG_RESEARCH`: No matching June entry was found. The file jumps from `2026-05-19` to `2026-07-04`.
- Discrepancy preserved: contemporaneous Engine documentation exists; the two research-specific changelogs contain a June documentation gap.

### 7. Explicit internal engine-stage timing map

- Implementation date: `2026-06-22`
- Commit: `a3f6264825a865e8570e92d0d5495676d37303ae`
- Commit subject: `Record Observer cycle and engine-stage timing evidence`
- Primary source: `engine/core/elora_observer/runtime.py`
- Report sources: `engine/core/research/reporting/rendering_markdown.py`, `engine/core/research/research_report.py`, `engine/admin/research/report.py`
- Runtime consumer: `engine/core/inference_governor/runtime.py`
- Evidence class: Explicit internal engine-stage elapsed timing

The implementation added:

- `observer_cycle_total_ms`;
- `observer_cycle_engine_overhead_ms`;
- `observer_engine_stage_timings_ms`;
- `observer_engine_stage_count`.

Measured internal phases included proposal runtime, metrics finalisation, translation post-processing, vitality advisory, semantic analysis, historical-prior lookup, dead-stage evaluation and intervention processing.

This is the earliest verified explicit internal engine-stage timing map. It is distinct from the April cycle-level wall/CPU measurement.

#### Changelog correlation

- `CHANGELOG_ENGINE`: `Observer Cycle Timing Evidence For Governor Runtime Analysis` was added in the same implementation commit and enumerates the timing fields and measured phases.
- `CHANGELOG_ENGINE`: A same-day report follow-up, `81fd75dbb90a4ecd9da999f46892c16a15f337ea` at `13:44:14 +02:00`, documented a dedicated stage-timing breakdown in HTML, Markdown and Admin reports.
- `OBSERVER_CHANGELOG`: No matching June entry was found.
- `CHANGELOG_RESEARCH`: No matching June entry was found.
- Discrepancy preserved: implementation and Engine documentation are contemporaneous; Observer and Research changelog coverage is absent.

### 8. Stage wall/CPU/inferred-wait runtime profiles

- Implementation date: `2026-06-26`
- Commit: `ea2024e990fd0d960c5dc63e8eeb6eb363f91daa`
- Commit subject: `Add observer stage runtime profiling`
- Primary source: `engine/core/elora_observer/runtime.py`
- Verification source: `engine/core/test_observer_runtime_stage_profiles.py`
- Design record: `Codex/Inference Governor/OBSERVER_RUNTIME_PROFILING_WORKER_TIMING_V0_2_5.md`
- Evidence class: Additive stage resource-time attribution

The implementation preserved `observer_engine_stage_timings_ms` and added `observer_engine_stage_runtime_profiles`. Each profile could retain:

- `wall_time_ms` from elapsed monotonic time;
- `cpu_time_ms` from process CPU time;
- `wait_time_ms`, inferred as non-negative wall time less process CPU time;
- supporting CPU, memory, execution-core and measurement-source context where available.

The inferred-wait value is an attribution residual. It is not direct proof of a particular queue, lock, network, storage or provider wait cause.

#### Changelog correlation

- `CHANGELOG_ENGINE`: `Observer Runtime Profiling Foundation` was added in the same commit and explicitly records wall, process CPU and estimated wait evidence.
- `OBSERVER_CHANGELOG`: No matching June entry was found. A later `0.9.55-alpha (2026-08-19)` report-layout entry refers to retained wall, CPU and wait evidence but explicitly states that capture and schemas were unchanged; it is later presentation documentation, not the implementation date.
- `CHANGELOG_RESEARCH`: No matching June entry was found. A later `2026-08-19` entry likewise describes presentation of retained wall/CPU/wait evidence without claiming new capture.
- Discrepancy preserved: the Engine changelog is contemporaneous; direct Observer/Research changelog documentation appears only later as report-surface context.

### 9. Micro-operation attribution inside stages

- Implementation date: `2026-06-28`
- Commit: `3f3413870110ddc872ea9544acc647c4cccf13e8`
- Commit subject: `Add semantic operation attribution to Runtime Intelligence`
- Measurement source: `engine/core/elora_observer/runtime.py`
- Intelligence projection: `engine/core/inference_governor/observer_runtime_intelligence.py`
- Report sources: `engine/core/research/research_report.py`, `engine/admin/research/report.py`
- Verification sources: `engine/core/test_observer_runtime_stage_profiles.py`, `engine/core/test_research_dashboard_archive_counts.py`
- Evidence class: Operation-level attribution nested inside stage profiles

The implementation introduced `observer_stage_operation_breakdown_v0_1` and `operation_breakdown` evidence within the Semantic stage profile. Operation records included wall, CPU and inferred wait timing, parent-stage share, total-runtime share and bounded supporting workload/complexity evidence.

This is the earliest verified micro-operation attribution inside the explicit Observer engine-stage profiles. It extends the temporal measurement hierarchy from cycle to stage to nested operation.

#### Changelog correlation

- `CHANGELOG_ENGINE`: `Runtime Intelligence Semantic Operation Attribution` was added in the same commit and documents the nested operation evidence and its Runtime Intelligence projections.
- `OBSERVER_CHANGELOG`: No matching June entry was found. The later `0.9.55-alpha (2026-08-19)` entry confirms operation attribution remained available in stage-led reports but describes a presentation reorganisation rather than initial implementation.
- `CHANGELOG_RESEARCH`: No matching June entry was found. The later `2026-08-19` section similarly describes operation attribution and raw evidence as retained report content rather than new measurement.
- Discrepancy preserved: the implementation and Engine record are contemporaneous, while Observer/Research references are later and concern retained presentation.

### 10. First TOCTOU-specific measurement and interpretation contract

- Implementation date: `2026-08-27`
- Commit: `f09328f7fe0212f28cc297cdef192d9085bccdc9`
- Commit subject: `Measure Governance runtime windows with observe-only TOCTOU evidence`
- Observer boundary instrumentation: `engine/core/elora_observer/toctou_runtime.py`
- TOCTOU evidence interpretation: `engine/core/runtime_threat_intelligence/toctou.py`
- Evidence contract: `engine/core/runtime_threat_intelligence/contracts.py`
- Finding/Case propagation: `engine/core/runtime_threat_intelligence/store.py`, `engine/core/runtime_threat_intelligence/case_report.py`, `engine/admin/threat_intelligence/case_report.py`
- Architecture documentation: `engine/docs/ARCHITECTURE/TOCTOU_RUNTIME_WINDOW_EVIDENCE.md`
- Verification: `engine/core/test_observer_toctou_runtime.py`, `engine/core/test_runtime_threat_intelligence_toctou.py`, `engine/core/test_runtime_threat_case_report.py`
- Evidence class: Explicit check/state/use/consequence measurement and bounded classification

This commit introduced the `elora_toctou_runtime_evidence_v1` contract and explicit intervals including `check_to_use_ms`. It added check, decision, execution/use and consequence boundaries; bounded state fingerprints and fresh observations; and classifications including measured window, exposure, state collision, confirmed stale state and consequential stale-state execution.

The implementation also retained important evidence limits:

- process-local intervals use monotonic timing;
- wall-clock-only propagation evidence retains a clock limitation;
- a measured window is not by itself a vulnerability;
- state change is not by itself stale-state use;
- stale-state evidence is not by itself evidence of adverse consequence;
- pressure correlation does not establish that runtime pressure caused a collision;
- fresh use/consequence observations cannot rewrite the completed Governance decision.

This is the first verified TOCTOU-specific implementation in the reviewed Git history.

#### Changelog correlation

- `CHANGELOG_ENGINE`: `TOCTOU Governance Runtime Window Evidence` was added in the same commit and records the contract, state fingerprints, fresh observations, Case projection, evidence hierarchy and tests.
- `OBSERVER_CHANGELOG`: `0.9.68-alpha (2026-08-27)` was added in the same commit and records the Observer boundary, monotonic intervals, state evidence and Case propagation.
- `CHANGELOG_RESEARCH`: No `2026-08-27` or matching TOCTOU entry was found in the current file.
- Discrepancy preserved: the Engine and Observer changelogs are contemporaneous; the Research changelog has no matching entry and has not been backfilled by this disclosure.

## Lineage Summary

The verified implementation progression is:

```text
2026-02-03  Request and micro-process timing
      ↓
2026-04-05  Observer cycle wall/CPU timing
      ↓
2026-04-07  Measured cycle timing retained in JSON research evidence
      ↓
2026-04-24  TTFT and provider evaluation-phase research timing
      ↓
2026-05-06  Formal Runtime Intelligence subsystem terminology
      ↓
2026-06-16  Provider/model-load phase timing retained in Observer evidence
      ↓
2026-06-22  Explicit internal engine-stage timing map
      ↓
2026-06-26  Stage wall/CPU/inferred-wait profiles
      ↓
2026-06-28  Micro-operation attribution inside stages
      ↓
2026-08-27  New TOCTOU-specific check/state/use/consequence research
```

The TOCTOU implementation therefore has a documented temporal measurement substrate behind it, while remaining a separate and later research interpretation.

## Chronology, Private Repository Promotion and Public Disclosure Register

The local checkout used for the implementation review has no configured Git remote and no locally visible remote-tracking refs. The operator subsequently supplied four exports from the GitHub Desktop/main checkout:

- `ELORA_GIT_GRAPH.txt`;
- `ELORA_GIT_HISTORY.txt`;
- `ELORA_GIT_TIMELINE.txt`;
- `ELORA_GITHUB_MAIN_HISTORY.txt`.

The exports identify a consolidated private GitHub `main` chronology with `origin/main` at `41db8155cad7ca2a02ec613419c7baebbb6ed3d2` on `2026-08-27`. The GitHub main commits differ from the fine-grained implementation commits cited above. They are therefore recorded as later **official private-repository update anchors**, rather than substituted for the primary local implementation hashes.

The supplied exports contain commit metadata and changed-file lists, not commit patches. A row below means that the first supplied private `main` update after the implementation milestone contains the relevant source path. It does not, without a patch or reachable remote, prove byte-for-byte equivalence with the fine-grained implementation commit.

### Private GitHub official-update correlation

| Implementation milestone | Local `.git` implementation anchor | Official private GitHub main update | Correlation |
|---|---|---|---|
| Request and micro-process timing | `dcd225277d3306f9213eee13b914476c534586ce` — `2026-02-03` | `5b2d1b790a64e79635b7a6efd0eaef8c26f2da34` — `2026-02-04 03:04:07 +01:00` — `Engine rebuild` | Private main history records `engine/services/chat.py` as modified. Patch verification remains pending. |
| Observer cycle wall/CPU timing | `da7b1d6d271feaf843c44f0e8397cc2824e91fdc` — `2026-04-05` | `bc2fa615f3612c4f67fe35e835906a4346d9bc97` — `2026-04-05 18:07:01 +01:00` — `Research Module and Observer Runtime` | Main history records `engine/core/lab_observer.py` as added. |
| Retained JSON research timing | `3afcff1432314632a1be2fe5b1ba2ecb957cc8cf` — `2026-04-07` | No matching artifact path in supplied main history | The next Research main commit, `edc16d0be29657fcda0d8e369fe55b19a49b2f0a` on `2026-04-08`, changes Observer source and reporting but does not list `Research results/observer_cycle_1775514868283.json`. The JSON remains private retained evidence, not established public report evidence. |
| TTFT/provider evaluation research timing | `4a91d269471cf67cba1e4937d22598ae128f95ac` — `2026-04-24` | `7ca5ab1ebb4435f7bb1934fad36c0237cdd77602` — `2026-04-24 16:01:02 +01:00` — `Elora CORE and Model Exam Function` | Main history records `engine/core/model_exams.py` and Model Exam reporting/storage surfaces as added. |
| Formal Runtime Intelligence terminology | `7065f25db16fdf192f7045b519be9dff0b4d02c0` — `2026-05-06` | `e3ae111ba5b81fb0ef118ee812eaf0bc00e61b52` — `2026-05-06 17:27:00 +01:00` — `Curiosity and Runtime Intelligence` | Main history records `runtime_intelligence_page.py` and the `engine/runtime_state/` subsystem as added. |
| Provider/model-load phase timing in Observer | `d31d1626d5eac37d0c7e60b6a137839a3a98b42f` — `2026-06-16` | `96740ff8e3b569eaac0ff7c0a081390f5c2f48b6` — `2026-06-16 20:38:34 +02:00` — `Inference Gov Works / NNSL` | Main history records Observer runtime and Research HTML/Markdown report sources as modified. |
| Internal engine-stage timing map | `a3f6264825a865e8570e92d0d5495676d37303ae` — `2026-06-22` | `aead9586a6d533054e6273c3d9c30dc435080b52` — `2026-06-23 18:28:17 +02:00` — `Optimisation Works` | First supplied later main commit records the Observer runtime, report renderers, Governor runtime and changelogs as modified. Exact patch equivalence remains pending. |
| Stage wall/CPU/inferred-wait profiles | `ea2024e990fd0d960c5dc63e8eeb6eb363f91daa` — `2026-06-26` | `4dca845ed0b21225c7d85bcdaa41aad90060df30` — `2026-06-26 16:33:58 +02:00` — `Version 0.2.5` | Main history records Observer runtime as modified and `test_observer_runtime_stage_profiles.py` as added. |
| Micro-operation attribution | `3f3413870110ddc872ea9544acc647c4cccf13e8` — `2026-06-28` | `1b53e6c701202d3fb7dadccf1dc05fbff51ff981` — `2026-06-28 13:45:06 +02:00` — `Runtime Telemetry Updates` | Main history records Observer runtime, profiling modules, Runtime Intelligence projection and reports as added or modified. |
| TOCTOU-specific contract | `f09328f7fe0212f28cc297cdef192d9085bccdc9` — `2026-08-27` | `41db8155cad7ca2a02ec613419c7baebbb6ed3d2` — `2026-08-27 19:42:38 +01:00` — `Threat Intelligence Settings + TOCTOU Measuring` | Strong supplied main-history correlation: the commit adds both TOCTOU modules, both focused test modules and the TOCTOU architecture document, and modifies the Engine/Observer evidence paths. The graph export identifies this commit as `HEAD -> main, origin/main, origin/HEAD`. |

These supplied records document when the implementation line was promoted to the project's private GitHub repository as an official update. Because the repository is intentionally private, the updates support provenance and repository chronology but are not asserted as public disclosure or public prior art.

### Private GitHub repository status

- Repository: `EloraTaurus/llm-elora-engine`
- Visibility: Private by design
- Role in this record: Official repository promotion/update chronology
- Latest supplied branch state: `main`, `origin/main` and `origin/HEAD` at `41db8155cad7ca2a02ec613419c7baebbb6ed3d2`
- Evidential boundary: Repository timestamps corroborate the private development record; they do not establish public availability.

The following public-evidence placeholders should be completed without changing either the local implementation chronology or the private GitHub promotion chronology:

### Public GitHub disclosure

- Status: `Not applicable while the implementation repository remains private`
- Public commit or tree URL: `Not applicable`
- Verification note: Private GitHub official updates are recorded above as provenance evidence, not public-disclosure evidence.

### Public changelog publication

- Status: `Verified live on 2026-08-29`
- Published changelog URL: `https://elorataurus.com/changelog/`
- Public evidence verified: The dedicated **Runtime Timing and TOCTOU Research Disclosure** card, its bounded distinction and its links to the disclosure and public evidence reports were visible on the live page.
- Source: `demo/changelog/index.html`; matching long-form entries are retained in `demo/content/CHANGELOG_ENGINE.md` and `demo/content/changelog.md`.
- Publication/update date: `2026-08-29` (first directly verified live on that date; no more precise independent server publication time is claimed here).
- Milestones covered: Historical Runtime Intelligence timing substrate; separate `2026-08-27` TOCTOU-specific research contract; public evidence links; private/public evidence boundaries.
- Public wording boundary: Existing public timing reports evidence the historical measurement substrate and are not retrospectively described as TOCTOU research.

### Public report evidence

- Status: `Verified live on 2026-08-29`
- Observer Research sample URL: `https://ai.elorataurus.com/research-evidence.html`
- Observer Research source anchor: `engine/research-evidence.html`; earliest local commit `70abc128d387bb062235b9c5bceb808016c2f1fc` on `2026-06-28 22:50:26 +02:00`; current local SHA-256 `92795e147c8e13725dd80c12c9f52d0e86bba05fba8de77f1b5fee36813be243`.
- Observer Research evidence: Public sample run, 48/48 cycles, 96 captured steps, per-step `time_to_complete_ms`, public wall-clock range and CPU/RAM envelope.
- Runtime Intelligence report URL: `https://ai.elorataurus.com/published-evidence.html`
- Runtime Intelligence report ID: `ORI-2026-0001782760906508`; generated and described as published on `2026-06-30`; Observer `0.8.0-alpha`; telemetry schema `0.8.0-alpha`; pipeline `0.2.0`.
- Runtime Intelligence source anchor: `engine/published-evidence.html`; earliest local commit `9c2d2d4326c1b10171a446c7fcd7302e8b401e24` on `2026-06-28 22:58:29 +02:00`; current local SHA-256 `422abc69b34c1b5f40916fd5647c46894dde26da7cc2bb284803845ea77750f9`.
- Runtime Intelligence evidence: stage duration, dominant-stage attribution, local CPU attribution, provider/proposal wait and inferred-wait evidence, evidence completeness and bounded diagnosis confidence.
- Evidential boundary: These reports publicly evidence the historical temporal measurement substrate. They are not claimed as TOCTOU-specific reports, and the local SHA-256 values have not yet been compared byte-for-byte with the deployed HTTP response bodies.
- Redaction/distribution boundary: Public sample/public telemetry subset; infrastructure identifiers, raw prompts, private traces and protected policy logic excluded.

### Website disclosure

- Status: `Verified live on 2026-08-29`
- Page URL: `https://elorataurus.com/prior-art/?article=RUNTIME_TIMING_AND_TOCTOU_RESEARCH_PRIOR_ART.md`
- Base Prior Art page first-publication statement: `2026-03-09`
- Runtime Timing and TOCTOU article: first directly verified live on `2026-08-29`; this is not backdated to the base page's first-publication date.
- Later material revision dates: `2026-08-29` private-repository chronology clarification and public-evidence correlation.
- Archived snapshot: `https://web.archive.org/web/20260829214749/https://elorataurus.com/prior-art/?article=RUNTIME_TIMING_AND_TOCTOU_RESEARCH_PRIOR_ART.md` — route shell and the then-current pre-supporting-section article revision; see playback boundary below.

### Other independently timestamped public evidence

- Status: `Verified — independently timestamped changelog disclosure captured; supplemental full-article recapture recommended`
- Evidence type: Internet Archive Wayback Machine snapshots
- Publisher/platform: Internet Archive
- Prior Art route snapshot: `https://web.archive.org/web/20260829214749/https://elorataurus.com/prior-art/?article=RUNTIME_TIMING_AND_TOCTOU_RESEARCH_PRIOR_ART.md` at `2026-08-29 21:47:49 UTC`.
- Direct Markdown snapshot: `https://web.archive.org/web/20260829214750/https://elorataurus.com/content/PRIOR_ART_NOTICE/RUNTIME_TIMING_AND_TOCTOU_RESEARCH_PRIOR_ART.md` at `2026-08-29 21:47:50 UTC`.
- Changelog snapshot: `https://web.archive.org/web/20260829230655/https://elorataurus.com/changelog/` at `2026-08-29 23:06:55 UTC`.
- Verified independent evidence: The archived changelog visibly contains the **Runtime Timing and TOCTOU Research Disclosure** card and its distinction between historical timing instrumentation and the later TOCTOU-specific research. The archived response identifies the same deployed HTML revision as the live page through `ETag "6a93569b-447e"` and origin last-modified time `2026-08-29 22:00:59 UTC`.
- Milestone(s) supported: Public publication of the Runtime Timing/TOCTOU disclosure summary, evidence links and historical non-retrospective boundary by `2026-08-29 23:06:55 UTC`.
- Earlier-capture boundary: The `21:47:50` direct-Markdown capture correctly retained the older `11,741`-byte source last modified at `21:45:41 UTC`. The expanded live source was published later at `22:00:59 UTC` and is `40,765` bytes. The older archive is not evidence of the subsequently added Governance Replay supporting section or checked changelog item.
- Recommended follow-up: Archive the expanded direct Markdown resource and deep-link page again so the complete current article body is independently retained as well as its already archived changelog disclosure.
- Relationship to private implementation evidence: The archive independently timestamps a public route; it does not replace local `.git`, private GitHub official-update or retained-artifact evidence for implementation dates.

## Claims and Non-Claims

This disclosure supports the following implementation-history statement:

> Elora implemented temporal Runtime Intelligence measurement at request, micro-process, Observer-cycle, provider-phase, internal-stage and nested-operation levels before introducing a separate TOCTOU-specific research contract on 27 August 2026.

This disclosure does **not** claim:

- ownership or invention of TOCTOU;
- ownership or invention of runtime monitoring or runtime verification;
- ownership or invention of race-condition detection;
- ownership or invention of elapsed-time, wall-time, CPU-time or wait-time measurement;
- that the February to June timing instrumentation was already TOCTOU research;
- that every measured runtime window demonstrates a vulnerability;
- that a state change establishes stale-state execution;
- that stale-state execution establishes adverse impact or exploitation;
- that private local or GitHub history alone establishes a public-disclosure date or public prior art.

The intended disclosure is limited to Elora's dated implementation sequence, evidence-retention architecture and application of established temporal and state-consistency concepts to governed AI runtime research.

## Verification Notes

- Full hashes are retained here because this is an implementation-evidence register. Public-facing summaries may use short fingerprints so chronology can be referenced without exposing the private repository.
- Historical file paths are recorded as they existed at the cited commits. Later refactoring does not change the implementation date of the earlier evidence.
- Retained JSON proves that measured values were committed as evidence; it does not substitute for an independent public timestamp.
- Changelog absence is recorded as absence. This disclosure does not alter historical changelog text to create apparent contemporaneous documentation.
- A later report or changelog reference can corroborate continuity, but it does not replace the earlier implementation commit as the primary date anchor.

## Completion Checklist

- [x] Verify all ten implementation commits and dates.
- [x] Identify historical source and artifact paths.
- [x] Separate temporal instrumentation from TOCTOU-specific interpretation.
- [x] Cross-reference the Engine changelog.
- [x] Cross-reference the Observer changelog and retain its June gap.
- [x] Cross-reference the Research changelog and retain its missing entries.
- [x] Distinguish implementation dates from later documentation dates.
- [x] Preserve non-claim boundaries for established computer-science concepts.
- [x] Correlate local `.git` implementation anchors with official private GitHub repository updates.
- [x] Add public changelog publication evidence.
- [x] Add public report evidence.
- [x] Add website disclosure evidence.
- [x] Add other independently timestamped public evidence.
