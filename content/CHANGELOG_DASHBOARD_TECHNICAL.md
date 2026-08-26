# Dashboard Technical Changelog

This changelog is intended for a dashboard-facing technical audience.

It is more detailed than the high-level public changelog, but it remains sanitized for safe external display.

## Editorial rules

Include:

- module names
- feature names
- implementation themes
- validation and behavior detail

Exclude:

- local file paths
- internal directory layouts
- infrastructure hostnames and deployment references
- full route inventories
- sensitive environment/configuration names
- copy-reproducible security implementation sequences

## 2026-07-06

- Runtime Memory comparison reports now render prompt/response evidence as bounded comparison cards rather than a very wide table.
- Prompt and response excerpts now use independent scrollable panes, reducing overlap and keeping large text evidence readable in the dashboard.
- Prompt/response cards now show key context beside the excerpt, including backend, mode, stage, memory timing, runtime timing, token count, fragment count, guardrail adherence, prompt leakage, and persona drift.
- Report sections now include explanatory subtitles so reviewers can distinguish memory lookup timing, inference/runtime timing, behaviour scoring, and token-driven runtime differences.
- Experiment Health now derives report-readiness values from available evidence when older comparison payloads do not already include populated health metadata.
- Public/exported Runtime Memory evidence reports now use the same prompt/response card layout and health fallback as the dashboard report view.
- Dashboard token totals now include Memory Observer observer tokens, memory context tokens, and processed-token totals where available, improving comparison summaries beyond raw model input/output counts.
- Regression coverage was added for Runtime Memory report rendering, dashboard archive totals, public dashboard telemetry, and research scenario compatibility.

## 2026-07-05

- Runtime Memory comparison reports now open through the standard Observer report experience rather than only through dedicated comparison export links.
- Runtime Memory comparison evidence exports continue to support JSON, internal HTML, and public-safe HTML.
- Comparison report presentation now more closely matches the public Observer evidence report design.
- Wide evidence tables now scroll horizontally so stage, prompt, response, and backend-comparison data remain readable at dashboard scale.
- Prompt and response evidence rows use a wider layout to reduce unnecessary report height.
- Backend job dashboard rows now derive Runtime Memory comparison parent state from the associated child Observer runs.
- Completed Runtime Memory comparison batches no longer appear as queued simply because the parent mirror record did not execute direct stages.
- Public dashboard research telemetry now resolves Runtime Memory comparison parents and aggregates child-run input/output token totals.
- Regression coverage was added for comparison status hydration, dashboard token aggregation, and research job visibility.

## 2026-07-04

- Observer Runtime Memory comparison reports were expanded into public-safe evidence reports suitable for portfolio, research, and dashboard review.
- Public report sections now include:
  - Report Version
  - Experiment Health
  - Evidence Quality
  - Evidence Highlights
  - Engineering Interpretation
  - Execution Environment
  - Execution Configuration
  - Benchmark Configuration
  - Reproducibility
  - Statistical Summary
  - Visual Comparisons
- The report is now versioned as an Observer Evidence Report and includes schema, generated timestamp, observer version, benchmark version, and public evidence id support.
- Host hardware, execution environment, runtime metadata, storage metadata, and accelerator flags are separated so reproducibility evidence is easier to interpret.
- Resource statistics now include average, peak, minimum, and sample count for CPU/RAM/GPU plus best-effort storage activity counters where available.
- Visual comparisons use lightweight HTML/CSS only and cover memory pipeline time, persona drift, prompt leakage, guardrail adherence, runtime comparison, CPU usage, and RAM usage.
- Visual comparison bars use semantic categories for memory, behaviour, resources, and runtime.
- Behaviour charts now source available telemetry for persona drift, guardrail adherence, prompt leakage, response stability, and drift rather than showing avoidable empty values.
- Runtime labels now resolve common automatic local-runtime placeholders where possible, and version metadata is detected when local runtime executables expose it.
- Public stage comparison defaults to a first-stage preview with complete stage detail available behind an expandable section.
- Evidence reports now include a SHA-256 fingerprint for generated-evidence integrity tracking.
- Report wording is constrained to measured observations and avoids unsupported backend-superiority claims.
- Public rendering continues to exclude prompts, injected memory content, raw guardrails, private memory, filesystem paths, local runtime identifiers, secrets, stack traces, and private operator notes.
- Large merged comparison reports retain all stage rows so public evidence output matches the canonical Observer comparison data.

## 2026-06-17

- Observer intervention measurement framework v2 proposed to separate `Efficiency`, `Recovery`, and `Quality` into distinct reporting layers instead of treating raw compute deltas as the sole measure of intervention value.
- Outcome model drafted for deterministic classification across:
  - `compute_saved`
  - `compute_neutral`
  - `compute_spent_recovery`
  - `failed_recovery`
  - `successful_recovery`
  - `quality_improved`
  - `quality_degraded`
- Research dashboard direction updated to support a score-triad summary:
  - `Efficiency Score`
  - `Recovery Score`
  - `Quality Score`
- Homepage KPI direction expanded so recovery-oriented metrics can appear alongside efficiency metrics without implying that negative token savings always indicate poor intervention performance.

## 2026-06-05

- Interaction provenance closure extended lexicon-only operator replies so expression lineage is visible at artifact and phrase level.
- Non-neural-first policy telemetry now records whether LLM use was allowed, needed, or used, enabling more exact audit interpretation of governed interaction behavior.
- Runtime natural-language worker visibility expanded to surface the latest symbolic reply preview together with provenance and policy posture.
- Phrase and sentence learning telemetry now differentiates simple word assembly from learned phrase or sentence-like blends.

## 2026-05-29

- Replay scoring hardening corrected low-information replay collapse in large backfilled continuity sets by inferring bounded baseline scores when stored values were zeroed.
- Runtime scheduler visibility expanded with candidate scoring ratios, inferred-score counts, and promotion gating surfaces for continuity worker health.
- Public continuity proof telemetry was expanded to expose worker placement and learning momentum in a sanitized form suitable for dashboard rendering.
- Continuity worker rendering was split into clearer worker cards and public proof summaries so operational learning activity can be interpreted without exposing internal runtime details.

## 2026-05-27

- Autonomous continuity metrics became first-class runtime surfaces with throughput, lag, risk tier, and proof visibility.
- Public proof payloads were expanded to include continuity worker telemetry in a safe summarized form.
- Homepage pulse and insights logic gained a learning-mode switch so runtime presence can visually reflect continuity activity without operator interaction.
- Long-horizon runtime totals were normalized for clearer public readability.

## 2026-05-22

- Public dashboard telemetry service introduced a dedicated sanitized telemetry layer for KPI and runtime rendering.
- Runtime token visibility improved so homepage input/output counters resolve through stage-aware logic rather than job-level fallback alone.
- Cognitive Pulse gained API-driven tone, amplitude, density, queue disturbance, replay spikes, event dots, and pill lifecycle states.
- Public status rendering was refactored toward a cohesive runtime surface with:
  - HCU topology preview
  - Cognitive Pulse
  - Execution insights
  - KPI groups
  - safe proof extracts
- Runtime insight cards were added and later merged into the pulse surface so live execution interpretation reads as one continuous operational rail.
- Poll cadence was made adaptive to reduce unnecessary load during idle periods while remaining responsive under queue pressure and active runtime work.
- Soundtrack playback support and public-safe audio serving were added as optional ambient dashboard features.

## 2026-05-20

- Constitutional readiness and emergence gating became visible operator concepts with explicit phased rollout states and fail-closed policy behavior.
- Memory influence and cognitive artifact flows were brought under stricter constitutional control with replayable policy posture and gated runtime capabilities.
- Cognitive artifact handling expanded with sandboxed amendment paths, provenance, and role-aware lifecycle visibility.

## 2026-05-18

- NNLSL deterministic method coverage expanded across translation, Markov/N-Gram, evolutionary optimization, trust-tier semantics, and method-router arbitration.
- HCU resource-contract gating and replay-stable method metadata became part of the governed execution model.
- Operator-facing technique-map and method-trace surfaces were expanded so bounded reasoning paths can be inspected more directly.

## 2026-05-14

- Research and Observer reporting gained stronger comparability, richer scenario traceability, and more structured KPI surfaces for runtime, efficiency, and stability interpretation.
- Startup and runtime readiness surfaces were hardened to make code-health and operational posture more visible.
- Interaction visibility and handoff explainability expanded so deterministic and governed paths are easier to distinguish during live use.

## Intended dashboard use

This changelog is suitable for:

- a “Technical Changelog” drawer or panel on the dashboard
- a deeper “What changed in Elora” modal
- a public-facing transparency page for technically minded readers

It is not intended to replace:

- the internal engineering changelog
- operator runbooks
- implementation playbooks

## Maintenance policy

1. Internal changelog entries should still be written first.
2. Dashboard technical entries should be derived from those internal entries.
3. Each derived entry should preserve:
   - module names
   - feature names
   - behavior changes
   - implementation-level substance
4. Each derived entry should remove:
   - file paths
   - infrastructure references
   - sensitive routing/configuration specifics
