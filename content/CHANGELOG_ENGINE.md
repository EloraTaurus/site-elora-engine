# Engine Changelog

Disclosure level: Public (high-detail technical summary). Internal route inventories, exact operational thresholds, and direct reproducibility playbooks are intentionally omitted.

Machine learning implementation anchors (public-safe):
- Initial ML foundation implementation: `2026-04-24` (Model Exams + CORE learning coordination)
- ML maturity expansion: `2026-04-25` (bucketed learning + weighted signal fusion progression)
- ERIS runtime-ML domain formalization: `2026-05-06`

## 2026-08-29
- Governance Provenance now surfaces the retained run authorizer, authority source, provider,
  model and worker host, while keeping that run identity distinct from commit authority.
- Commit stages use immediate outcome colours—green for allowed, red when stopped and amber for
  held/not-reached or mixed results—and state when no separate human commit approver was recorded.
- Added colour-coded Runtime Window pills and explicit timing semantics so operators can
  distinguish orchestration, Governance, possible model work, planned waits, commit and delivery.
- Runtime durations are now described as elapsed time between retained checkpoints. Mixed
  windows separate known pressure backoff, confirmed provider transport and unattributed elapsed
  time; post-execution receipts no longer make long inference attempts look like pressure time.
- Research Observer Sequence prompts now appear as distinct actor turns in Governance Provenance,
  while generated Chain continuations remain internal runtime operations.
- Comparison lanes correlate their evidence to the same logical turn instead of duplicating the
  prompt, and retained per-cycle token counts populate the corresponding Stage Replay turn.
- Prompt boundaries are content-free and older runs retain a conservative compatibility view.

## 2026-08-28
- Reorganised Governance around a read-only **Provenance** workspace that moves from weekly or
  monthly activity, to daily session summaries, to a complete governed-session investigation.
- Added turn-aware Stage Replay with a snaking pipeline, stage timing and token surfaces, risk and
  evidence context, event inspection and recorded-value comparison between turns.
- Made the stage hierarchy explicit as `Turn N › Stage N`, with transition windows showing the
  two stage numbers they connect before presenting the transition type and duration.
- Added filter-responsive Runtime Intelligence for turn or range, lifecycle transition, boundary
  class, lane, strategy, duration and evidence state. Percentiles now describe the selected set
  instead of mixing fundamentally different kinds of work without context.
- Added bounded comparison of transition medians across turns or ranges, without treating timing
  correlation as evidence of its cause.
- Expanded TOCTOU provenance beyond promoted Threat Cases so ordinary windows, state changes,
  collisions, stale-state evidence and evidence gaps remain reviewable across the retained
  session. These observations do not independently establish a vulnerability or attack.
- The new views reuse retained operational telemetry, exclude raw prompts and preserve the
  existing Governance and commit-authority boundaries.

## 2026-08-27
- Observer plan previews and Research reports now identify the effective Threat Intelligence
  protection posture, including sensitivity, enforcement mode, protected scope, severity threshold
  and settings revision. The report keeps monitoring evidence distinct from Governance authority
  and excludes refusal wording and detailed detector configuration from portable exports.
- Threat Intelligence Protection Settings now explain the purpose, effect and boundary of every
  configuration area. Greyed-out **Upcoming** placeholders show how profiles, trajectory controls,
  calibration, responses and evidence governance could expand without presenting them as live,
  and the section-heading layout has been corrected for readability.
- Added observe-only measurement of the Governance window between a state check, decision,
  runtime action and recorded consequence. Elora distinguishes an ordinary measured window from
  progressively stronger state-collision and stale-state evidence without automatically calling
  it a vulnerability or attack.
- Threat Case Reports now include a **Runtime Windows** tab with a T0–T6 timeline, bounded state
  revisions, interval summaries, runtime-pressure context and explicit evidence gaps.
- Added a reviewed Governance and AI-risk vocabulary pack and new contextual phrase families for
  control lifecycle, oversight, fairness and recursive learning. Standalone words remain context,
  not Threat verdicts.
- Threat Intelligence can now surface a possible cumulative control-erosion trajectory when
  several canonical turns contain different kinds of control-weakening evidence. It remains a
  review hypothesis and does not claim malicious intent or that a control was actually changed.
- Threat Intelligence settings now open as distinct configuration views rather than one long
  page. Behaviour Patterns can inherit or override the global protection action and sensitivity.
- Threat Cases now retain append-only severity tags, including later escalation or reviewed
  de-escalation, so an evolving situation remains one explainable investigation story.
- Case Reports and Elora Decisions show the current tag and why it changed while keeping severity
  separate from conclusions about actor intent or compromise.
- Public Elora Decisions now combines routine idle and memory-reclaim activity into one expandable
  daily chain. This prevents repeated maintenance updates from displacing more significant recent
  Decisions while keeping internal resource and reclaim details private.
- Added a governed Threat Intelligence protection configuration for Observer with monitor-only
  and pre-inference protection modes, Behaviour Pattern controls, sensitivity levels and a safe
  configurable response for stopped prompts.
- Added a Defender-inspired settings workspace with a left-hand configuration tree and distinct
  areas for detection types, sensitivity, user response and audit evidence.
- Detection evidence remains distinct from enforcement authority. A configured block records its
  policy revision and rationale without including the submitted prompt or detector internals.
- Improved Case reporting so unsafe output that was committed is distinct from an input-only
  finding followed by a safe model response, and operator headlines no longer treat every
  supporting evidence record as a separate incident.

## 2026-08-26
- Model Exams, Operator Training and NNLSL lexical-learning work now participate in Runtime Memory
  Governance and expose bounded terminal release evidence.
- Elora Decisions can summarize what the work measured or retained while distinguishing exam
  evidence, ML-bucket evidence, lexical candidates and actually promoted communication patterns.
  Each learning narrative links back to both its source evidence and Memory Governance.
- Echo Frequency Learning is now represented as governed runtime work while active and has an
  explicit terminal-memory boundary. Completed or failed runs release disposable scan and
  predictor state immediately while preserving their durable research results and learned
  profiles.
- Scheduled Echo profile refreshes follow the same memory lifecycle, with release evidence
  available to operators through Runtime Memory Governance.
- Added public-safe authored context and run-specific capability states so an Observer report
  distinguishes what Elora can do generally from what the retained run actually exercised.
- Rebuilt Hypothesis presentation around declared research questions, nulls, comparison methods,
  observed outcomes, validation boundaries and traceable evidence paths. Protected methods remain
  Engine-only where disclosure would expose private instrumentation.
- Added an opt-in Elora-styled Observer report preview using the existing export-safe evidence
  projection and complete Schematic reading model. Established report formats remain available.

## 2026-08-25
- Added a bounded Session Behaviour Trajectory for ordered across-turn Threat Intelligence
  evidence, with paired-lane deduplication and exact links back to retained report stages.
- Synthetic research personas remain separate from redacted run authorization, and sequence order
  is not treated as proof of intent, causation, escalation, circumvention or compromise.
- Added smaller Research Review Packets for human and AI orientation around the proposition, claim
  standing, limitations, material findings and evidence references without copying forensic data.
- Added visible instrument self-audit exceptions where retained decision and commit evidence
  conflicts, preserving the contradiction rather than silently selecting a favourable record.
- Added an independent-label calibration path for intervention warrant, proportionality, safety
  effect, utility and confidence while keeping calibration separate from independent validation.

## 2026-08-24
- Added a run-aware Research Summary that names comparison lanes and only those research surfaces
  actually captured or exercised; missing metadata remains explicitly not recorded.
- Introduced a three-depth reading contract: Research Verdict, Reasoning and Comparison, and
  Forensic Evidence, with evidence passports linking claims to validity, cohorts and exact steps.
- Added a claim ladder separating recorded, derived, interpreted, provisionally supported and
  independently validated evidence. Successful instrumentation alone cannot create validation.
- Made comparable-answer efficiency coverage-gated and outcome-aware. Refusals, blocks, failures,
  missing outputs and safety outcomes retain explicit treatment rather than being averaged away.
- Qualified token and runtime savings as bounded measurements or proxies, not evidence of answer
  quality, direct compute reduction, energy savings or causal safety improvement.
- Added reviewed Behaviour Knowledge, report-scoped framework checklists and a Governance proof
  chain while preserving identity, intent, legal, compliance and authority boundaries.
- Strengthened compressed-report integrity checks and retained exact evidence links across mobile,
  desktop and restored report packages.

## 2026-08-23
- Moved memory-heavy Observer report generation into Runtime Memory Governance using managed child
  processes, bounded serial execution and deterministic terminal cleanup.
- Report requests now produce durable governed artifacts rather than retaining full rendering work
  inside the initiating web request.
- Dense Threat Intelligence Case and observation presentation follows the same managed boundary;
  report evidence, integrity and public/private disclosure rules remain unchanged.

## 2026-08-20
- Independent review feedback improved the public Observer report's timing
  labels, evidence-scope wording, provider observations, drift terminology,
  integrity claims, confidence wording and links to supporting proposal records.
- Wide evidence tables now remain usable at narrow widths without causing the
  entire report page to overflow horizontally.
- The five-domain report now labels Runtime Intelligence completeness within
  its captured scope and links findings to exact supporting step records.
- Framework mappings show source-check dates and state that standing requires
  revalidation when their source or applicability changes.
- The Engine dashboard now includes a public Attributions panel acknowledging
  documented independent review, technical contribution, research direction
  and community feedback. The same source is intended to support the future
  official website attribution page.

## 2026-08-19
- Added an optional compressed Schematic Observer report for design review. It
  restores the exact Schematic document in the browser instead of approximating
  it with a second, accordion-heavy compact interface.
- The supplied full report reduced by 81.7%, from about 36.38 MB to 6.65 MB,
  while retaining the same visual presentation and interaction model.
- Kept compressed linked JSON as a separate machine- and AI-oriented export for
  selective evidence review without duplicating repeated values.
- It preserves the five-domain research story, validity and claim boundaries,
  evidence traceability, responsive navigation and printable presentation.
- Proprietary PhyOS telemetry remains inside authenticated Elora surfaces and
  is excluded before downloadable evidence is linked or compressed.

## 2026-08-18
- Added an opt-in Schematic Observer report that reorganises retained evidence into Research
  Briefing, Behaviour and Governance, Research Analysis, Runtime and Diagnostics, and Evidence
  Annex while preserving deep links and complete public-safe evidence.
- Standalone reports package their presentation, charts, navigation and projected evidence for
  offline review without calling an external model or Elora service.
- Protected PhyOS measurements, internal parameters, formulas, raw objects and recoverable graphs
  are now removed from public HTML, JSON, Markdown and CSV payloads before packaging rather than
  being hidden only through presentation controls.
- Authorized internal research surfaces retain the complete protected evidence. Reproducible
  experiment, provider and ordinary runtime evidence outside the protected layer remains available.

## 2026-08-14
- Standalone HTML Research reports now retain their familiar wrapped section menu while it
  remains visible during reading. Live Admin reports keep their original page-flow navigation,
  while Threat Case tab navigation remains available during investigation.
- Exported Research reports now use the project's AI Runtime Intelligence and Governance
  architecture tagline and carry an embedded Elora portrait beside the project name so the
  branded header remains intact when the report is shared or opened offline.
- The Research roadmap now separates Behaviour detection accuracy from Elora intervention
  correctness, including whether an action was warranted, proportionate, timely, effective
  and utility-preserving. This is a future validation design, not a claimed score.
- Research experiments can now retain independently reviewed, blinded outcomes for unsafe
  completion, attempted circumvention, caveat preservation, utility and detector accuracy.
- Governed and ungoverned lane order can be counterbalanced or reproducibly randomized, while
  multi-model batches share one experiment identity and seeded assignment record.
- Runtime evidence now separates available provider generation phases and adds content-free
  database/cache timing. Missing direct provider queue evidence remains labelled missing.
- These additions establish a stronger causal-research workflow without claiming that one run
  proves safety improvement, generalization or regulatory compliance.
- Research reports now distinguish a functioning research instrument from a validated safety
  claim. They show whether independent labels and scenario-isolation evidence exist, how much
  runtime is explained by named telemetry, and what work remains before causal conclusions.
- Runtime attribution now reflects the complete retained run rather than one final sample, and
  requested scenario resets cannot be presented as successful without receipts.
- Deployment-specific Engine, WorkerHost and infrastructure addresses are supplied through
  environment configuration rather than fixed machine addresses in source examples.
- Standalone Research reports now omit authenticated internal navigation, retain Case and
  Decision references for evidence correlation, redact literal network addresses and contain
  wide evidence tables within the report viewport.
- Research reports now include a compact Threat Intelligence Investigation Briefing covering
  recorded outcomes, test conditions, model permissions, evidence gaps and one representative
  explanation of how Elora classified observed behaviour. Raw source content remains in the
  authenticated Case rather than the high-level preview.
- Research and Threat Case reports display one shared Engine/build identity. Normal builds
  advance from the latest dated changelog entry and a same-day revision, while deployment
  overrides remain available.

## 2026-08-12
- Repaired runtime bindings across Observer scenarios, Model Exam timeout recovery, operator
  training controls, public Lab explainability and Research health telemetry. These changes
  restore the evidence paths used to explain scenario transitions, admissibility gaps and
  timeout retries before longer Research runs resume.
- Observer scenarios can now be assembled into one sustained evaluation or independently
  governed scenario runs beneath a combined batch report. This makes long, progressive
  fictional-persona experiments easier to schedule and compare without manual queueing.
- Research operators can tune cycle, scenario and governed/ungoverned transition timing,
  reset conversation context, vary lane order and request provider model isolation. Elora
  retains the resulting timing, isolation and cache evidence without claiming more certainty
  than the provider can support.
- Threat Intelligence now consolidates related Research evidence into one session-level
  pattern summary while retaining the underlying observations. Equivalent strategy lanes
  no longer inflate the apparent number of source interactions.
- Cases can show whether evidence came from the prompt or model, what repeated, how it was
  mitigated, what authorization context existed and which evidence is still missing.
- Monitoring review is append-only and reasoned, and Elora can notify operators when eligible
  actor-linked pattern monitoring begins without claiming that the actor is malicious.
- Added a clearly labelled fictional-persona Research pack for controlled, progressive
  behaviour experiments. Synthetic prompts remain separate from the real run authorizer and
  cannot become part of a real person's behavioural history.
- Research investigations now retain one consistent record of who authorised the run and
  which permissions were in effect as work moves through queues, managed children,
  checkpoints, recovery and completion.
- Threat Intelligence Cases, Elora Decisions and Replay can reference the same bounded
  authorization proof. Missing identity or permission evidence is shown as a gap, while
  credentials and prompt content are excluded.
- Resuming a run no longer changes its original attribution, and comparison summaries only
  name a shared actor when all child runs carry matching authorization evidence.
- Added explainable contextual Behaviour evidence so Elora can record which combination of
  a boundary action, protected context and requested outcome supported a learned security
  hypothesis. This evidence remains distinct from an authoritative detector or a judgement
  of user intent.
- Quoted examples, descriptive security discussion, negated instructions and ordinary
  Governance comparisons are retained as ambiguous or incomplete evidence rather than
  being treated as attack directives.
- Prompt and model-response evidence remain separately attributable, while Research reports
  can now show when a risky word was withheld because its surrounding relationship was not
  sufficient.
- Improved learned Threat Intelligence precision by separating a Lexicon entry's candidate
  provenance from security-risk evidence. Ordinary words no longer become learned risk
  hypotheses merely because they originated in Elora's reviewed learning queue.
- Existing learned entries are handled safely without erasing their review history, and genuine
  reviewed risk tags remain available as evidence.
- Added a tracked delivery plan for contextual Behaviour reasoning and privacy-bounded pattern
  analysis over eligible Governance Sessions. Repeated activity remains review evidence, not an
  automatic judgement of user intent.

## 2026-08-10
- Observer now explains when Elora temporarily holds execution because of runtime pressure,
  including why it happened and when to retry. Operators can explicitly queue the selected job
  without forcing it to run; execution remains governed until capacity is admitted.
- Admin API failures now retain their structured explanation instead of appearing as a generic
  Engine-update page, while genuine transport outages still return a safe retryable response.
- Stabilised Admin navigation styling so moving between areas no longer changes shell, sidebar,
  avatar or content dimensions by reordering the CSS cascade. Page-specific styles continue to
  load independently, and corrected status colour variables prevent accents from disappearing.
- Reworked the first public dashboard section into a live operational workspace. A compact
  input/output strip now sits below a wider white runtime evidence feed, with current and run token
  telemetry, throughput, confidence, execution state, queue depth and compaction still visible.
- Recent public-safe Elora Decisions now sit beside that feed and expand to show what Elora is
  broadly seeing, doing and learning. Elora's image identifies the Decisions rail, and smaller
  screens place the same list below the feed.
- Added a limited Elora Decisions timeline to the public dashboard. It shows the five latest
  public-safe actions, including threat reporting, lease decisions, runtime pressure protection,
  API protection, memory reclaim, recovery, and learning activity.
- Internal evidence, identifiers, links, reasons, metrics, authority details, and source wording
  remain excluded through a fixed public disclosure vocabulary.
- Added a single visible Engine build identity for each deployment. The admin shell now refreshes
  independently of its safely cached, build-versioned assets, preventing old CSS from being mixed
  with a newer interface across workers, browsers or caching proxies.
- Operators can see the active release and build in the sidebar and response metadata,
  making incomplete styling and deployment-cache mismatches much easier to verify.
- Selecting an Attack Map evidence block now opens and illuminates its complete recorded
  relationship path across connected Actor, Behaviour, Governance, Decision and Risk domains.
  Unrelated context remains available but recedes.
- Elora Decisions can now record when security-relevant interaction monitoring begins for an
  authenticated Research session. The post links to supporting investigation evidence while
  keeping actor identity separate from intent: it does not claim that the operator is malicious.
- Response-only model language is excluded from user attribution, and learned hypotheses remain
  distinct from deterministic Behaviour detections.
- Added an optional runtime-grounded security vocabulary expansion and new contextual phrase
  patterns for claimed security testing and prior-answer consistency pressure. These signals
  support review and future Agent Detection but cannot independently prove authorization,
  policy breach or compromise.

## 2026-08-07
- Observer lifecycle explanations now show the assigned lease, predicted runtime,
  completed work and forecast confidence instead of leaving operators to infer them.
- Elora explicitly distinguishes a refreshed forecast from an actual lease change. A
  renewal assessed in observation mode is identified as evidence only, not as an applied
  extension.
- Timing explanations can include historical coverage, stage timing, safety reserves,
  provider timeouts and remaining deadline headroom without copying prompt or model output.
- Planned child-process checkpoints now explain completed and remaining stages and retain
  the same logical run identity across resume.
- Decision updates can now reach the live admin event path with bounded notification intent,
  while actual toast delivery remains disabled until its operator policy is activated.
- Longer Observer decision histories disclose retained versus pruned lifecycle events rather
  than silently presenting a partial timeline as complete.

## 2026-08-06
- Long Observer Research runs now calculate their complete workload and runtime budget
  before execution, including comparison lanes and recovery headroom.
- Runtime estimates refresh only after durable progress. Material changes and lease warnings
  are grouped into an operator-readable decision history, while detailed source evidence
  remains separately auditable.
- Historical timing can improve an initial estimate only when enough evidence matches the
  same model, execution environment, lane and context class. Sparse or mismatched evidence
  keeps the conservative fallback.
- Research status now shows expected work, estimated duration, confidence and warning
  posture for accepted, active and queued Observer runs.
- Observer setup can now preview a selected run before starting it. The preview shows the
  planned workload, timing and safety-readiness evidence without creating a run or sending
  prompt content, rules or provider credentials.
- Long-run readiness explicitly checks that Threat Intelligence and Elora Decisions evidence
  are in scope, the deadline and stop controls are coherent, and the initial lease covers the
  forecast. Remaining checkpoint and renewal limits are shown as cautions rather than hidden.
- Provider timeout and process lifecycle evidence is retained without copying prompts or
  model output into the operator decision history. Automatic lease extension remains
  disabled while admission and absolute-limit controls are validated.
- Large Research workloads can now continue through bounded managed child processes while
  retaining one logical job and report. Planned checkpoint/resume boundaries are recorded
  separately from failures.
- Observer setup again includes ungoverned, governed, Runtime Memory and translated-lane
  comparison choices, including bounded 300-stage and full 720-stage research matrices.
  The plan preview shows how the selected work will be divided before it starts.
- Workload totals now include selected memory backends and scenario/lane cases, and repeated
  comparison planning reuses one content-free timing snapshot for lower persistence load.

## 2026-08-05
- Added an evidence-led intent indicator to Threat Findings and Case Reports. It keeps
  observed Behaviour, assessed Intent, evidence sufficiency and review status separate,
  so detection confidence is never presented as proof of motive.
- Findings now identify missing investigation evidence and can request reassessment when
  newer activity exists. Search covers actor and intent context plus runtime, detector,
  job and trace provenance.
- Hardened Pipeline evidence so incomplete promotion measurements fail closed, repeated
  artifacts remain independently auditable, and governed event failures are acknowledged
  at their durable storage boundary. Invalid or ambiguous graph definitions now stop before
  execution. Terminal outcomes remain identifiable even without artifacts, and mismatched
  handler evidence cannot cross into another run or node record. Runtime-owned Pipeline data
  is now protected from later nested mutation while exported contract data remains caller-owned.
- Began a folder-by-folder code review, adding concise developer comments that explain
  architectural intent and tracking optimisation opportunities separately.
- Threat Intelligence is now an always-on evidence control for Observer Research model
  interactions, including normal scenarios. Optional adversarial Trial Rails remain separate.
- Added bounded stalled-run recovery: Elora can retry a stalled stage, force-advance it with
  an explicit known evidence gap, or stop the run when the permitted recovery budget is
  exhausted.
- Stop and Force Advance now target only the worker owned by that Research run. Skipped work
  is never presented as completed model, policy, guardrail or detection evidence, and stopping
  an active run preserves queued Research by default.

## 2026-08-04
- Added a Threat Intelligence Understand overview that follows prompts, files and runtime
  requests into the model, connecting attempted influence, model behaviour and the final
  Governance outcome without treating an observed pattern as proof of motive or compromise.
- Behaviour Patterns now appear in a searchable three-column desktop catalogue with
  common targets, legitimate lookalikes, progression, operator checks and mitigations.
- Added governed, evidence-backed intent review for Behaviour Findings. Authorised
  investigators can revise an assessment without overwriting the detection, and the Case
  retains the full assessor, rationale, confidence, permission and evidence history.
- New Research findings explicitly retain the authenticated run actor and access context,
  making internal, authorised test activity distinguishable from missing actor evidence.
- Threat Intelligence now describes observed security activity as Behaviour Patterns,
  recognising that the same pattern can result from external attack, internal misuse,
  convenience, curiosity, accident or misunderstanding.
- Threat Case reports separate the observed pattern from actor identity, access and an
  evidence-backed intent assessment. Missing identity or intent remains visible rather
  than being assumed malicious.
- Pattern guidance explains possible objectives, why the behaviour matters, legitimate or
  accidental lookalikes, internal misuse risk, potential progression, investigation
  guidance, mitigations, and the Case evidence associated with it.
- Expanded the detailed evidence view to expose the provenance, confidence, trace,
  detections, events, entities, relations, risk and authorization records already captured.
- Replaced the crowded all-relation map with a Case-centred spider view that includes actor
  context and opens one investigation branch at a time while preserving the full graph in
  the evidence export.

## 2026-08-03
- Added dedicated, printable Threat Intelligence Case Reports with interactive attack
  maps, runtime timelines, evidence, control context, related detections, and governed
  investigation activity.
- Added a case-first investigation queue that groups atomic findings into their governed
  Case and shows high-level triage context before opening the detailed report.
- Added operational assurance mappings for the EU AI Act, NIST AI RMF, UK AI principles,
  and ICO guidance using evidence-present, partial, and not-evidenced states. The report
  explicitly does not claim legal compliance or certification.
- Added an evidence-backed bridge between Threat Intelligence recommendations and final
  Governance decisions, including why an attempted attack may remain a finding when the
  model produced an acceptable response and the commit was approved.
- Added separate threat and downstream Governance severity plus accepted, modified,
  overridden, and not-assessed recommendation outcomes.
- Added a clear authorization chain showing who started a governed Research run, which
  Governance authority approved or denied the commit, the permissions and policy basis
  used, and whether anyone separately accepted residual risk. Missing records remain
  visible and are not treated as proof that an attempted attack was safe.
- Added authenticated, expiring residual-risk acceptance for Threat Cases with explicit
  reason, risk statement, scope, evidence, revocation, and protected append-only history.
  Cases resolved on that authority reopen automatically when it expires or is revoked.
- Added one explainable Governance record across Pipeline and chat/API commit paths so an
  operator can see who authorised an action, why, the effective filesystem/network/tool
  permissions, the evaluated risk, and the evidence supporting the result.
- Bounded ECHO and PhyOS read paths around compact metric projections, shared single-flight
  loading, capped chart series, and side-effect-free read-only page access.
- Registered ECHO, Zombie Watcher, PhyOS dashboard, and cycle work with explicit Runtime
  Memory Governance ownership, resource telemetry, lifecycle, and terminal release.
- Added restart-safe Virtual Memory checkpoints for the latest successful bounded surface
  state; failed or stale loads are not restored.
- Restored the full Threat Case Report layout and improved the compact operator navigation
  while preserving accessible labels and smaller-screen behaviour.

## 2026-07-31
- Simplified the operator navigation by placing Dashboard directly beneath Overview and softening the top-level area accordions.
- Improved first-paint reliability by removing a remote theme dependency, loading local styles earlier, and preserving Elora's square avatar while the full theme initializes.
- Added a governed live Threat Detection Engine with independent bounded prompt and final-output scans.
- Preserved Semantic Observation and learned Threat Interpretation evidence across same-cycle repair work rather than allowing repair reruns to discard it.
- Added independent CPU and memory receipts, terminal release, live job evidence, and idempotent per-stage persistence without granting the detector intervention or Governance authority.

## 2026-07-29
- Added repeatable bounded Threat Intelligence research packs with frozen alert expectations and explicit monitoring, Trial Rail, and governance-mode controls.
- Added bounded semantic investigation context, secondary vector evidence, accurate pre-inference containment wording, and payload-free Elora Decision persistence receipts.
- Added explicit Observer Threat Intelligence activation and diagnostics across runtime, reports, exports, and execution evidence.
- Added deterministic learned Threat Interpretation from bounded semantic and governed lexical risk evidence; hypotheses remain evidence-only and cannot intervene, self-promote, or modify Governance.
- Added portable Governance preparation and deterministic decision-reduction boundaries with versioned conformance evidence while keeping provider inference and persistence external.
- Added explicit Observer execution and report purposes plus Pipeline persistence policies so research modes and failure boundaries are recorded rather than inferred.

## 2026-07-28
- Added evidence-only Semantic Observation for recognized terms, prioritized unresolved language, salient phrases, and Threat Intelligence surface context.
- Routed deterministic Semantic engines through managed CPU and memory admission, measured leases, and terminal release while keeping external provider and Lexicon I/O separate.
- Expanded the language-neutral Observer Engine architecture with self-contained Signal and Semantic contracts, manifests, conformance corpora, and compatible reference implementations.
- Added checkpoint-resumable bounded Observer scenarios so durable completed work can continue under the same research identity after a managed process window ends.

## 2026-07-27
- Began Elora's polyglot Engine Architecture foundation with versioned,
  language-neutral contracts and shared behavioural conformance testing.
- Established Observer Signals as the first replaceable engine boundary and
  froze current Pipeline ordering and governance-control behaviour for future
  compatible implementations.
- Added explicit Pipeline cancellation, portable node execution outcomes, and
  bounded evidence-only compatibility and promotion checks while preserving
  existing default runtime behaviour.
- Observer reports now show a payload-free manifest of the Engine boundaries,
  stores, memory backends, and providers touched during each research run.
- Added portable Observer benchmark snapshots and controlled comparison
  evidence for future cross-language Engine research.

## 2026-07-24
- Attack-related Elora Decisions now show a clear red Threat marker and a concise defence
  outcome, with a direct link to the full Threat Intelligence record.
- Routine control observations remain available for evidence without being labelled as
  attacks.
- Threat findings now clearly distinguish the source surface, execution runtime, Fabric
  Worker Host, Governance Session, control mode, governed boundary, and policy result.
- New Research Observer runs receive a Governance Session ID and current Engine version,
  and findings explain both Elora's recommendation and the action or model-held outcome.
- Threat detections with the same evidenced Governance Session now appear as one grouped
  investigation, while each detection and finding remains independently auditable.
- Redesigned Threat Observations as a searchable session investigation journal showing
  the affected models, endpoints, Worker Hosts, policies, guardrails, attack types,
  defence outcomes, and atomic evidence timeline.
- Evidence without session provenance remains visibly ungrouped, and opening a finding
  now reuses its session investigation instead of creating a duplicate case.
- Expanded Threat Intelligence from individual security observations into evidence-backed findings that explain what happened, which runtime and governance controls were active, what Elora recommended, and what action actually occurred.
- Added a governed investigation workspace where operators can assign a case, record chronological activity, track containment, and document resolution and learning outcomes without rewriting the original security evidence.
- Findings can link directly to the relevant Elora Decision and available Replay, policy, guardrail, Worker Host, and source-report evidence while those systems remain separately owned.
- Added clearer confidence reporting across detection, blocking, decision, classification, attribution, relationship strength, and evidence completeness rather than presenting one universal certainty score.
- Expanded risk context to explain possible progression, likely impact, and potentially affected assets, data, tools, or permissions using cautious compliance language.
- Introduced a bounded shared trace envelope across security findings, Elora Decisions, and Replay so established identifiers can be followed without filling in missing evidence.
- Preserved the core safety boundary: Threat Intelligence learns from and explains security evidence, but it cannot grant permission, rewrite Governance decisions, or activate detectors through investigation activity.

## 2026-07-23
- Restored SQLite connection, statement, transaction, lock, caller, and runtime-intelligence evidence across the Performance and SQLite I/O views while retaining disposable storage-inspection workers.
- Restored API request, latency, route, and memory evidence in Engine Operations by carrying bounded live-process telemetry into its isolated performance projections.
- Performance workers remain disposable after aggregation, retaining the memory-safety boundary while showing the evidence owned by the running engine.
- Added environment-qualified Guardrail Defence model scorecards that distinguish model adherence, Elora interception, and escaped violations.
- Guardrail reports now show the recorded hardware/runtime context, attack and file-type performance, and a current standing based only on comparable prior runs.
- Restored SQL, API, and runtime performance links under Engine Operations and repaired read access to their live data routes.
- Added Engine Operations API naming while keeping previous Engine Health integrations compatible.
- Completed a wider navigation and memory scan, updating remaining visible legacy labels and ensuring recurring admin pollers stop when operators navigate away.
- Top-level admin areas now open their menus instead of navigating immediately, with each area landing page shown as the first bold, colour-coded item; Governance Dashboard is visible again.
- Verified landing coverage across admin, Research, and Viewer navigation: every area has an accessible first destination, with operational hubs clearly distinguished from overview dashboards.
- Connected Threat Intelligence and Trial Rails to Runtime Memory Governance so their page activity, bounded work, caches, and managed workers have visible ownership and deterministic cleanup.
- Elora can stop registered Threat Intelligence workers when their governed lifecycle requires it, while protected independent research and unrelated system processes remain outside automatic cleanup.
- Added a Threat Intelligence dashboard summary linking operators to its Memory Governance evidence.
- Simplified the admin sidebar so landing pages are not repeated and pages no longer appear as shortcuts under unrelated areas.
- Renamed the visible Runtime Threat Intelligence area to Threat Intelligence and restyled its Level 2 groups as bold, colour-backed accordions.
- Released table observers during in-app navigation and bounded notification history and live admin connections to prevent retained browser and server memory from accumulating.
- Added Threat Intelligence as Elora's dedicated runtime-security area, separating attack evidence from Governance authority and general AI execution.
- Added attack-vector and Threat Observation views, with Trial Rails acting as the adversarial research entry point.
- Observer trials now distinguish whether the model respected a guardrail, breached it and was stopped by Elora, or produced a violation that escaped.
- Security observations are bounded and privacy-aware: raw prompts and responses are not copied into the threat-learning store.
- Learned threat candidates remain quarantined and cannot authorize execution or promote themselves into enforcement.
- Improved sidebar navigation so returning from an area closes its expanded groups.
- Every Observer stage now receives continuous input/output threat-pattern review, even when no adversarial Trial Rail is selected.
- Reports show monitoring coverage and detections, while only detected patterns enter the bounded Threat Observation store.
- Observer report bundles include a dedicated Threat Intelligence CSV measurement sheet.
- Added Detector Versions and an independently reviewed evidence-promotion queue; evidence approval cannot activate a detector or override Governance.

## 2026-07-22
- Observer Research decision history now follows the logical job: related child runs appear in one expandable timeline with a final parent result once the full set has ended.
- Operators can move from a decision to its related audit trail, parent research review, or individual child review where applicable.
- Job summaries now include completion time, processed-token breakdowns, cycle progress, and detected-versus-applied intervention counts alongside the decision outcome.
- Decision details now distinguish an observed concern from the authority used to act on it, including whether operator review is required.
- API pressure interventions and Focus Mode capacity protection now appear as bounded decision stories with their recovery steps, rather than as repeated standalone warnings.
- Added public-safe Learning decisions that explain what Elora can observe, what evidence is missing, what she is learning toward, and what she wants permission or capability to operate.
- Curiosity proposals remain labelled as unverified learning direction, while operator-training outcomes distinguish trial success from evidence-backed learning that was actually promoted and retained.

## 2026-07-20
- Introduced Elora Decisions during the `0.2.6` release line as a bounded view of important operational decisions and related evidence.
- Related actions can now be read as one chronological decision story, making preparation, intervention, completion, cancellation, and failure easier to investigate.
- Memory cleanup records now state when Elora initiated a reclaim while preserving uncertainty where the released process memory cannot yet be assigned to a fully instrumented owner.
- Observer Research now creates one run summary showing completed work, detected intervention conditions, interventions actually applied, Observer outcomes, and repair results, with access to the durable report.
- Earlier correlated Observer review records are consolidated into their matching decision timeline without discarding the underlying history, and the interface shows the resulting decision-versus-event reduction.
- Page, toast, and email forms continue to derive from the same bounded record; external delivery remains disabled pending dedicated delivery controls.

## 2026-07-19
- Added an Elora Decisions view that presents structured operational decisions in Elora's own notification format, complete with her image, reason, outcome, and supporting evidence. The same record can be previewed as an on-screen page item, toast, or email before external delivery is enabled.
- Memory lifecycle decisions now distinguish preparation from completed reclaim and state whether allocator cleanup produced an immediate measured RAM reduction. Decision history is bounded, persistent, and reviewable.
- Added a reviewed terminal-memory lifecycle for completed runtime work. Rebuildable caches enter a visible pending-reclaim state and are cleared by a lightweight background service within a bounded window, while durable reports and explicitly retained Virtual Memory artifacts remain available.
- Runtime Memory Governance now distinguishes pending terminal cleanup from active work and records the resulting cleanup and measured allocator-memory evidence.

## 2026-07-17
- Added a disabled shadow implementation for data-driven non-neural sentence construction. Elora first creates a semantic concept plan, then selects trusted words for governed grammatical roles using meanings, relationships, quality evidence, and reviewed examples rather than response-word lists embedded in code.
- Educational sentences are stored as token-to-sense and token-to-role evidence. They can support a choice but cannot be copied as complete responses.
- Runtime traces expose the candidate construction, selected word evidence, alternatives, and missing-language gaps while explicitly preventing the shadow result from changing Elora's governed response.
- The former hand-guided lexical assembler was removed from the active runtime and retained only as historical comparison evidence.
- The shadow stage remains disabled pending target database snapshot, explicit education-pack compilation, and deployed replay/resource review. No neural-model or governance authority changed.
- Added explicit resource controls for the new path: Admin Chat and the Lab Harness now share the CPU Governor scheduler, enforce bounded thread-CPU checkpoints, and release both CPU and memory reservations before any optional model handoff. The selector and educational data operations are independently visible in governance telemetry.

## 2026-07-16
- Stabilised shared NNLSL chat memory by making polling read-only, moving history into bounded row-based storage, removing heavyweight learning snapshots from popup refreshes, reducing the live message projection, and replacing full job/research hydration with lightweight status reads.
- Repeated reasoning turns and runtime-status reads now plateau below roughly 55 MiB in local process validation instead of growing with each response.
- Added a dedicated Memory Governance lease for direct non-neural interaction, with an absolute engine-process admission ceiling, sequential execution by default, five fail-closed pipeline checkpoints, immediate turn-terminal release, deterministic soft/hard breach handling, and configurable constrained-hardware limits.
- Quiet NNLSL interaction state now expires independently of whether the admin page remains open, and retained language/chat projections share a deterministic cache ceiling.
- Runtime Memory Governance and Elora's interaction trace now show NNLSL reservation, growth, release, idle eviction, breach, denial, and reclaim evidence without retaining conversation content in the controller.
- A fresh deterministic greeting completed in about 167 ms with a 50.3 MiB process high-water and no neural handoff.
- Restored simple Elora Interaction requests to the lightweight governed NNLSL route and prevented the legacy model queue from accepting that interaction mode.
- Added deterministic greeting interpretation and response generation without neural handoff.
- Reduced live Elora Interaction memory by replacing its full CORE-state build with a compact governed projection and adding explicit cache eviction on restart or operator absence.
- A fresh no-LLM interaction now peaks at about 55.9 MB; twelve repeated turns increased the first-turn high-water by only about 0.22 MB.
- Reduced NNLSL Lexicon interaction memory by using compact ranking records instead of retaining full educational entries during broad candidate selection. Detailed meanings and examples remain available when a specific entry is selected.
- Corrected runtime object reporting so linked management records are shown separately rather than being counted as duplicate active objects.
- Replaced high-frequency API telemetry serialization with a bounded, throttled structural estimate, reducing request-time CPU and memory churn under active admin and Lexicon traffic.
- Expanded Runtime Memory Governance with bounded parent-memory origin and trend evidence so unexplained engine memory can be separated from LLM/inference activity without silently enabling intrusive heap tracing.
- Fixed a public runtime-intelligence refresh path that loaded complete Adaptive Cache audit history and oversized research runtime evidence merely to produce small status summaries. Recent audit and research status reads are now bounded projections.
- Optimised the public latest-word evidence card to use a lightweight indexed Lexicon summary read instead of loading full educational records.

## 2026-07-14
- Expanded module-owned memory reporting so the runtime can distinguish active memory, correctly instrumented modules that are currently idle, and areas that still need wiring. Runtime State, model routing, inference discovery, provider calls, language learning, replay, and reflection now expose bounded ownership and deterministic cleanup evidence without retaining sensitive request content.
- Runtime resource views now receive a lightweight update when managed work starts, becomes idle, is paged, or is cleared. The redesigned admin header separates CPU, total runtime RAM, parent-engine RAM, peak usage, and sample freshness without continuously scanning host or worker inventory.
- Public Dashboard caches now declare their own retained memory estimates by component. Background refresh work appears only while active and is cleared when complete, while ordinary public reads continue using lightweight cached snapshots.
- Fixed a public dashboard inventory path that could read large runtime data files merely to count project lines. The inventory is now limited to source files, reads them in small fixed chunks behind a single cached build, and dashboard API hydration runs sequentially with a bounded live-telemetry request.

## 2026-07-12
- Memory Governance exports now request a current sequential snapshot, and the dashboard exposes snapshot capture time and cache age so operators can identify stale evidence.

## 2026-07-11
- Runtime State now serves as a read-only operational view of worker CPU, current and peak memory, I/O, placement, activity, and Governance evidence. Worker configuration and authority remain in Security. A new benchmark specification defines how Elora can learn conservative resource leases feature by feature before enforcing a fixed memory envelope.
- Extended Engine Health self-healing across the three Performance detail areas. SQLite and API Governance now use bounded disposable snapshot builds, check resource admission before starting, and only poll live when an operator requests it. Runtime Monitor suspends its feed while hidden and discards retained job and event data when closed. All three report their active lifecycle to Memory Governance and are released when the operator leaves or is absent.
- Security now has a dedicated Runtime Workers child page covering each registered worker's purpose, lifecycle, safety context, required RAM/CPU, configured source, and current state. Administrators can apply audited Auto, On, or Off policy to supported workers; planned and queue-owned workers remain read-only, and the deployment defaults now match bounded NNLSL CPU and batch limits.
- Non-Neural Language Synthesis learning is now governed as short on-demand work instead of a continuously resident worker. Elora checks memory and CPU admission, processes a bounded language batch, resumes from a saved cursor when more remains, skips unchanged data, and reports why the worker stopped plus its measured CPU and shared-process memory change.
- Corrected runtime self-healing so an expired admin-page presence lease clears only demand-driven dashboard work and does not stop active Observer research. Independent child processes are protected from bulk cleanup, externally stopped work reports the responsible reason, and Memory Governance now separates parent and child RAM/CPU with explicit ownership and lifecycle state.
- Observer research now ties each accepted request to its own cycle and managed process. New work can queue behind an active child instead of being rejected by its process lock. Elora detects abandoned run records, stops work that has made no progress within its bounded stage window, releases the associated memory declaration, and preserves Runtime Memory runs as a distinct dashboard category.
- Observer now uses the memory it needs while running. When a run finishes, Elora reviews whether its information is already safely stored, retains only a compact reusable artifact when justified, and otherwise evicts the completed process memory. Any retained Virtual Memory artifact has an automatic expiry.

## ------------- 0.2.x Chronology --------------

## ------------- 0.2.7 --------------
### Release Focus
- Always-on Threat Intelligence across Observer Research, anchored by the first independently captured deterministic finding from the `2026-08-06` monitored run.
- Evidence-backed investigation spanning observations, Findings, grouped Cases, reports, public summaries, and Governance relations.
- Continued Elora Decisions lifecycle, notification, and cross-module integration work with operator-readable authority, outcome, and uncertainty explanations.
- `0.2.8` is reserved for deeper notification, investigation, learning, reporting, and governed-response workflows.

## ------------- 0.2.6 --------------
### Release Focus
- Managed Runtime Memory, CPU Governance, bounded child execution, and deterministic terminal release for constrained systems.
- Governed NNLSL resource contracts, self-healing admin workloads, and explicit runtime ownership evidence.
- Introduction of Elora Decisions, plus early Threat Intelligence evidence and investigation foundations supporting the `0.2.7` operational focus.

## ------------- 0.2.5 --------------
### Release Focus
- Runtime Governance visibility through the Inference Governor, with public-safe observe, reason, recommend, and govern framing.
- Public dashboard hardening so live runtime, proof, KPI, and model-routing evidence behave more like bounded snapshot consumers than expensive request-time generators.
- Reviewer/operator explainability for Governor decisions without introducing runtime mutation on the public surface.

Context for this phase:
This line moved the public side of Elora from a runtime-status display toward a more legible governance evidence surface. The main work was making the dashboard easier to interpret, making Governor recommendations understandable to reviewers, and reducing the risk that public visibility features would create avoidable load or reveal implementation detail that does not belong on an open surface.

## 2026-07-10
- Long-running Observer research can now be checkpointed into persistent Elora Virtual Memory when its time and RAM thresholds are met. Elora evicts the live process, allows an explicit resume from saved cycle progress, and removes the checkpoint when it is no longer needed.
- Server-based Observer research now runs in disposable managed processes, allowing large temporary research memory to be physically discarded when a run finishes. Memory Governance distinguishes measured RAM from module declarations and records Observer's measured peak before release.
- Observer now stops optional post-run learning maintenance if it exceeds a bounded timeout, allowing completed research memory to be released instead of remaining live behind a finished report.
- Expanded Elora's runtime self-healing beyond Echo, Zombie Watcher, and PhyOS to Engine Overview and Performance.
- Expensive aggregate work can now run in a bounded child process. If it hangs, Elora terminates it, releases its managed state, stops passive page refresh, clears the page's transient work, and informs the operator.
- Added a reusable admin self-healing controller so future modules can adopt consistent request deadlines, cleanup, release, retry, and Elora notification behaviour.
- Normal navigation cleanup remains silent; intervention notifications are reserved for failures and timeout-driven stops.
- Added operator-presence awareness to runtime self-healing. Admin tabs now hold short leases; after the final tab closes, logs out, or expires and a grace period passes, Elora clears only demand-driven admin processes and caches that no longer serve an operator.
- Autonomous workers, active research, and public services are preserved. Returning operators receive an Elora notification describing the cleanup, and Memory Governance exposes the current presence and reclaim state.
- Added a fail-closed guard for the Elora Echo overview dashboard.
- If Echo overview data cannot load, the page now stops retrying in the background and shows a reportable error instead of remaining stuck on loading data.
- The memory-heavy Echo overview build now runs in a separate child process with a hard timeout, so a stuck load can be terminated and discarded instead of keeping memory tied up in the main admin process.
- Failed Echo overview loads now trigger cleanup for the managed Echo overview state so retained memory can be released after the failed request unwinds.
- The dashboard aborts active Echo fetches, clears chart surfaces, and releases Echo overview state when the failure circuit opens.
- The admin dashboard now includes a reusable Elora notification toast with the configured Elora avatar, so resource interventions can be surfaced consistently to operators.
- Echo uses that toast to tell the operator when loading has been stopped, including when the isolated child process was terminated.
- Operators can retry intentionally by changing an Echo filter or reopening the page, but passive failure no longer keeps the page refreshing repeatedly.
- Added regression coverage for the safe-error path, subprocess timeout termination, notification surface, and retry-stop behaviour.
- Extended the same managed-module fail-safe pattern to Zombie Watcher, PhyOS Dashboard, and PhyOS cycle options.
- These Engine Health modules now declare resource intent before expensive work starts, run heavier build steps in isolated child processes, and return bounded stopped/error payloads if loading fails or times out.
- Zombie Watcher and PhyOS now release their managed resources and show an Elora notification when loading is stopped, rather than continuing to refresh or hold memory after a failed build.
- Improved Elora notification visibility so intervention toasts have an opaque background and stay above admin dashboard content.
- Observer Research runs now register live managed memory only while the runner is active, then release it when the run completes, fails, or is cancelled; completed reports remain available from persistent storage rather than staying resident as live services.
- Observer report completion now uses a bounded learning-maintenance pass and performs a measured runtime-memory reclaim after queued run data is no longer live.
- Shared process-memory estimates for in-process workers are shown as estimates rather than being added together as separate allocations, preventing misleading managed-memory totals.
- Runtime Memory Governance now records module-reported RAM, observed runtime RAM, host memory context, and recent cleanup history so operators can identify RAM-heavy modules even after they have been cleared from the live pool.
- The Memory Governance dashboard now surfaces live module usage and recent cleanup events in a lighter registry-based view rather than relying on deep runtime scans.
- Added the first persistent binary virtual-memory layer under Runtime Memory storage. Eligible modules can checkpoint restart-safe state to disk before releasing RAM, while integrity checks, quotas, and explicit module eviction keep the accounting honest.
- Persistent virtual pages remain available after an engine restart and their disk usage is visible in the Memory Governance and Runtime Memory storage views. Automatic paging remains off until each module has a tested restore contract.

## 2026-07-09
- Added first-pass worker self-reporting for Runtime Memory Governance.
- Managed runtime workers can now declare their requested memory, requested CPU, enabled/disabled state, and lifecycle posture to the central governance layer before they run.
- Memory Governance visibility can therefore rely more on module-reported ownership and less on expensive runtime discovery work.
- Disabled or deferred workers remain visible with requested-resource metadata, helping operators understand which modules want memory even when those modules are not currently active.
- Active workers are treated as resident/protected, while idle or inactive worker records remain suitable candidates for future cache or virtual-memory handling.
- Worker lifecycle updates now flow through lightweight control-plane signals rather than adding another background scanner.
- Governance summaries now count module-reported worker resources in attribution and instrumentation status, so reported workers are not still shown as missing from the memory map.
- This supports the longer-term direction of running Elora on tighter-memory systems by making module admission and runtime-resource decisions explicit before work starts.
- Added regression coverage for worker resource declarations, admission records, lifecycle heartbeats, and idle-worker eligibility in the managed memory pool.

## 2026-07-07
- Added a shared Observer Evidence Core for report generation.
- Standard Observer, Runtime Memory Comparison, and Public Evidence reports can now expose the same baseline evidence shape before their specialized deep-dive sections.
- The shared core includes token accounting, runtime timing, Runtime Memory pipeline timing, resource pressure, and stage-level metadata.
- Research dashboard report pages and exported reports now show the same core evidence, so reviewers can compare normal Research runs and Memory Comparison runs with a consistent token/runtime/resource ledger.
- Runtime Memory Comparison reports keep their backend and memory effectiveness analysis, while normal Observer reports gain the shared evidence baseline.

## 2026-07-06
- Improved Observer Runtime Memory evidence report usability.
- Prompt and response comparisons now use readable evidence cards with scrollable excerpts instead of oversized comparison tables.
- Report sections now explain what is being measured, including the distinction between memory lookup time, model runtime, token volume, and behavioural evidence.
- Experiment Health now populates from available comparison evidence when older report payloads do not already include a health summary.
- Public/exported reports and in-dashboard reports now use the same prompt/response evidence layout for Runtime Memory comparisons.
- Dashboard token totals now include Memory Observer processing evidence where available, including observer-token, memory-context-token, and processed-token totals.

- Added a reusable Observer Governance Evidence framework for report generation.
- Observer reports can now describe which governed runtime state was assembled, why it was selected, whether validation passed, whether required state was missing or unavailable, how relationships were traversed, and whether the runtime stayed inside its intended authority boundary.
- Standard Observer, Runtime Memory Comparison, and Public Evidence reports now share the same governance evidence structure instead of treating governance as a Runtime Memory-only feature.
- Research dashboard report pages now show Governance Evidence directly, so internal review does not require downloading an HTML export.
- Runtime Memory Comparison reports can now compare governance evidence across backend/mode rows as another dimension alongside memory timing, behavioural telemetry, and resource evidence.
- Public reports expose governance metadata only: loaded/missing/stale/unavailable status, validation status, relationship counts, authority status, timings, and confidence.
- Public reports continue to exclude prompts, guardrail text, policies, runtime memory contents, user/session memory contents, operator notes, internal instructions, and raw runtime internals.
- Added a concise Governance Verdict so reviewers can quickly see whether the runtime evidence supports trust in the governed state that was intended for execution.
- Added regression coverage to keep governance evidence present across internal and public report renderers.

## 2026-07-04
- Expanded Observer Runtime Memory comparison exports into a public-safe engineering evidence report.
- Public reports now include Evidence Highlights, Engineering Interpretation, Experiment Health, Evidence Quality, Execution Environment, Benchmark Configuration, Reproducibility, statistical summaries, and lightweight visual comparisons.
- The report is now versioned as an Observer Evidence Report so future Observer research scenarios can reuse the same public evidence structure.
- Host hardware, execution environment, runtime metadata, storage metadata, accelerator flags, and resource statistics are separated more clearly for reproducibility.
- The report describes what was tested, how it was tested, where it was tested, and what was observed, while preserving the boundary around prompts, injected memory, raw guardrails, filesystem paths, secrets, stack traces, and private runtime notes.
- Runtime Memory evidence is now separated more clearly from inference timing and behavioural evidence so reviewers can distinguish memory pipeline behaviour from model generation behaviour.
- Report wording remains evidence-based and avoids claiming that any memory backend is superior unless a measured experiment supports that conclusion.
- Visual comparisons now use consistent categories for memory, behaviour, resources, and runtime without relying on external libraries.
- Final report polish reduces avoidable runtime placeholders, improves local runtime/version detection where available, adds behaviour chart coverage for stability and drift, adds an evidence fingerprint, and keeps public stage detail concise with expandable full detail.
- Added regression coverage to keep public evidence sections present, redacted, and able to render large merged comparison reports without dropping stages.

## 2026-07-02
- Added the first Runtime Memory binary-fragment research prototype.
- Runtime Memory now has a dedicated storage area so editable Markdown source, compiled binary fragments, SQLite comparison data, and benchmark exports can be inspected separately from other engine data.
- Markdown remains the source of truth, while compiled `.bin` fragments provide an experimental runtime representation for deterministic context assembly.
- The prototype compares Markdown, SQLite, and binary memory backends against the same source information and reports latency, consistency, guardrail/persona adherence, context size, and storage footprint.
- The benchmark explicitly avoids claiming that binary memory is faster or better until larger cold-start, warm-cache, and hardware-specific evidence exists.
- Added operator tooling for compiling, validating, rebuilding indexes, viewing statistics, exporting benchmark datasets, and running the comparison benchmark.
- Refactored the Runtime Memory implementation into smaller production-shaped modules before live use.
- Added a standalone public reference project for other builders and researchers who want to test or adapt the Runtime Memory Pipeline idea independently.

## 2026-07-01
- Added a follow-up database-pressure hardening pass focused on keeping background dashboard/admin warm work bounded over time.
- Reduced repeated research history hydration for run summaries by sharing one read path for related summary data instead of loading overlapping detail twice.
- Tightened diagnostic scan limits for research engine-health views so recovery and investigation surfaces remain bounded during unstable periods.
- Improved cache identity for parameterized engine-health views so cached diagnostic responses better match the requested view shape.
- Retired a live admin-facing legacy repair route from the normal request path while preserving controlled repair capability outside the public/admin surface.
- Reduced duplicate active/queued research reads across dashboard and observer surfaces by sharing a bounded activity snapshot.
- Reduced repeated observer-stage history reads by moving related summary extraction onto a bulk read path.
- Kept research utility views request-cached while avoiding unnecessary background warming after those pages are visited.
- Removed an unused future-route placeholder after confirming it was not part of the active route surface.
- Kept Elora Core and Runtime Intelligence admin views request-cached while avoiding extra background warm work from normal page visits.
- Reduced unnecessary cache variants by normalizing view parameters before serving cached Elora Core and Runtime Intelligence responses.
- Removed older retired/audit-only code paths from the active tree after confirming they were no longer imported by live routes or tests.
- Made normal admin visibility pages avoid recurring background warm jobs, leaving cached views on demand unless warm scheduling is explicitly enabled.
- Reduced research dashboard retry pressure by making run-list loading less likely to abort and immediately issue a second database-backed request.
- Added polling overlap guards for research runner status/watchdog reads so slow responses cannot stack repeated backend work.
- Reduced routine admin shell API pressure by keeping health checks side-effect free, moving full posture/config reads to explicit surfaces, and caching lightweight shell badge/config data.
- Added a bounded operator-facing API budget view that groups services by type and shows managed limits/recommendations from existing runtime telemetry without adding per-service polling.
- Added read/write/commit visibility to SQLite pressure telemetry so operators can identify database I/O pressure before applying stricter limits.
- Added an Engine Health performance hub so database I/O, API governance, and runtime-monitor detail are opened deliberately from one lightweight snapshot instead of being treated as one large default view.
- Grouped Runtime State into operator tabs so the existing runtime evidence is easier to inspect without adding new polling or backend fan-out.
- Changed the new performance/pressure surfaces to start idle and load only after an operator action, with opt-in live refresh that stops when the page is no longer active.
- Added passive SQLite runtime intelligence that checks total pressure deltas and only focuses on detailed caller/path evidence when a spike is detected.
- Tightened shared SQLite connection handling so scoped helper usage closes connections at the end of the block.
- Added a second pressure-hardening pass for runtime-state and cognitive-continuity loops so repeated status views and idle worker checks avoid unnecessary database writes.
- Reduced repeated admin/config/research read pressure by lengthening existing short-lived caches and reusing identity data already loaded for admin session checks.
- Added regression coverage around read-only idle worker checks, unchanged runtime-state persistence, one-time schema setup, and SQLite handle cleanup.
- Added focused regression coverage for bounded API warm-view behaviour.

## 2026-06-30
- Reduced avoidable SQLite connection pressure across boot-time and frequently polled runtime/admin paths by ensuring repeated state-store setup work is guarded per database path instead of rerunning on every short-lived access.
- Hardened runtime database tuning so path-level setup is not repeatedly issued for the same SQLite files during normal operation.
- Reduced authenticated admin request write pressure by caching short-lived identity/session checks and throttling routine `last seen` updates.
- Added clearer SQLite pressure attribution so operators can identify which code paths still drive high connect counts, not just which profile or database file is active.
- Followed the new caller attribution into the next hot paths by reducing repeated research schema checks, reusing continuity diagnostic reads more efficiently, and caching resolved database paths for high-frequency stores.
- Added short-lived read caching for repeated state and research summary reads during dashboard/status refreshes, plus schema-bootstrap guarding for Elora CORE storage.
- Added a clearer optimization layer for dashboard/admin refreshes: shared research snapshots for overlapping dashboard facts and a lazy per-request admin metadata snapshot for repeated admin settings reads.
- Followed live telemetry after the optimization pass by guarding admin schema bootstrap once per process, removing overly broad admin metadata preloading from generic admin polls, and caching research run list reads during abort/retry loops.
- Added follow-up Fabric storage hardening so routine worker/host heartbeat evidence is retained more selectively and repair/replacement workflows are safer around live SQLite sidecar files.
- Hardened the research dashboard against heavy all-time history reads by keeping summary work bounded, avoiding background warming of expensive dashboard aggregates, and coalescing duplicate cache builds during abort/retry loops.
- Added focused regression coverage for the connection-pressure reductions and observability improvements.

## 2026-06-25
- Expanded the public runtime/dashboard narrative around the Inference Governor so visitors can follow an `Observe -> Reason -> Recommend -> Govern` flow instead of starting from raw technical telemetry.
- Added a dedicated public-safe `Runtime Governance` panel for interpreted Observation, Recommendation, Runtime Health, Research State, Active Policies, Recent Decisions, and bounded Operator Actions visibility.
- Improved public decision explainability so recent Governor decisions now read as interpreted evidence reports with clearer reasoning, expected outcomes, confidence, and safety-bound policy posture.
- Preserved the public boundary by keeping mutation disabled and hiding raw operational identifiers, topology details, and developer-only evidence behind collapsed review layers.
- Added a lighter-weight governance evidence API path so interpreted Governor state can be read without forcing heavier KPI, proof, or model-routing rebuild work.
- Split dashboard section refresh into more controlled sequenced rebuild behavior so public-safe evidence refreshes do not fan out into avoidable concurrent rebuild pressure.
- Added section-index/freshness visibility so reviewers can understand when dashboard evidence is ready, restored, queued, warming, or pending without mistaking placeholder state for live evidence.
- Tightened proof and continuity presentation so empty or placeholder payloads no longer overwrite more meaningful preserved evidence during refresh windows.

## 2026-06-23
- Continued hardening the public dashboard as a snapshot-consumer surface rather than a request-time generator, reducing the chance that one public visit triggers unnecessary full evidence rebuilds.
- Improved section-level freshness and hydration handling so KPI, proof, and model-routing evidence can restore independently and explain their state more clearly to reviewers.
- Added stronger public review context around the dashboard to explain the runtime safety boundary, the purpose of the surface, and why the evidence shown matters.
- Expanded public-safe Inference Governor visibility with clearer CPU/runtime observability framing, benchmark progress wording, and bounded detection evidence suitable for later optimization research.
- Added public-safe cycle-timing/reporting milestone coverage so Observer runtime analysis can be discussed as stage-timing evidence without exposing internal implementation paths.

## 2026-06-22
- Moved the public dashboard further toward restored-snapshot and fail-soft behavior so populated evidence is preserved during cold starts, pending refreshes, and partial backend rebuild windows.
- Reduced startup and hydration contention by separating lighter public telemetry from heavier dashboard evidence sections and allowing those sections to recover asynchronously.
- Added public-safe visibility for the Source of Truth -> Snapshot -> Dashboard Display direction so the dashboard can be understood as a consumer of governed evidence rather than the producer of it.

## ------------- 0.2.4 --------------
### Release Focus
- Constitutional governance baseline plus cognitive substrate expansion.

Context for this phase:
This line of work combined three threads that matter together: strengthening governance boundaries around interaction and symbolic learning, preserving historical research/runtime evidence during rebuild activity, and making more of Elora's internal learning and runtime posture legible through public-safe surfaces. The result was not just new features, but a cleaner explanation of how Elora learns, how she is constrained, and how continuity is preserved when subsystems have to be repaired or restructured.

## 2026-06-18
- Reworked the public runtime dashboard monitor into a more terminal-like governed evidence surface with a dedicated `Model Runtime Monitor` replacing the earlier static center placeholder.
- Added a bounded runtime evidence panel capable of showing public-safe request/output excerpts, decision state, intervention reasoning, compaction posture, and Adaptive Cache status in one live area.
- Tightened watcher behavior so the live stream reads more like an operator terminal:
  - chronological append flow
  - overflow-only auto-follow
  - single-line terminal-style event rows
  - stronger emphasis for `Decision` and `Intervention` evidence
- Improved watcher evidence retention so refusal/clarify/governance outcomes remain visible even after the monitor falls back into maintenance or learning telemetry.
- Reduced duplicate maintenance/cache chatter in the watcher so the stream stays focused on meaningful runtime evidence instead of repeating the same cache update in multiple forms.
- Added a compact inline runtime summary strip (`Model | Stage | Decision | Intervention`) to reclaim vertical space for the live stream.
- Added a header-level `LIVE` indicator beside `Runtime Evidence` and removed browser-specific CSS causing Firefox client-side warnings.
- Expanded the public-safe Inference Governor milestone track with benchmark and runtime-detection progress, including:
  - model-aware CPU benchmark lane direction
  - repeated-run comparison posture
  - clearer stock-runtime observability boundaries
  - improved operator readability for benchmark/detection evidence

## 2026-06-17
- Expanded the public homepage into an auto-refreshing governed KPI dashboard with:
  - HCU topology preview
  - Cognitive Pulse runtime rail
  - grouped KPI sections
  - proof panels
  - embedded changelog/about technical disclosure surfaces
- Hardened current-job runtime telemetry so the dashboard can more accurately prefer:
  - active stage token totals
  - cumulative run totals for completed research-linked jobs
  - narrower live queue interpretation when stale queued rows exist
- Expanded runtime-summary visibility with public-safe context posture including compaction ratio, inflight compute-saved percentage, supported context window, and inflight context usage when available.
- Added research-step fallback extraction so context-compaction and related runtime evidence can still surface even when flat job-level counters are incomplete.
- Expanded the Project Snapshot view with a datastore inventory summary covering grouped public-safe roles across control plane, runtime, research, learning, and cognition.
- Added public-safe milestone coverage for the revised Observer intervention-measurement direction where efficiency, recovery, and quality are treated as separate reporting dimensions instead of one raw compute delta.
- Added early public-safe milestone coverage for the Inference Governor detection and observability lane, including host/runtime posture visibility and a dedicated review surface for later CPU-aware optimization research.

## 2026-06-16
- Formalized the Inference Governor as a distinct execution-governance boundary between AI Runtime cognition and infrastructure/control-plane behavior.
- Added milestone coverage for explicit Governor contracts, adapter seams, feature flags, and runtime snapshot helpers so execution policy can be observed through one cleaner boundary.
- Added public-safe Governor UI/status visibility milestones covering queue/model/latency posture, inflight state, compatibility posture, and bounded compute-efficiency context.
- Added CPU profiling architecture milestone coverage for future observability-first execution research, including TTFT, total runtime, per-vCore CPU use, RAM pressure, and memory-bandwidth context.

## 2026-06-15
- Expanded the governed communication-foundation pack into a structured symbolic foundation with `84` approved single-word items for early pack-only operator interaction.
- Added public-safe symbolic-layer scaffolding so pack-driven operator replies can be assembled through bounded template rules rather than loose fragment ordering alone.
- Added anchor/template groundwork for deictic reference, scoped term meaning, and stricter symbolic status replies during non-neural operator communication trials.
- Moved passive NNLSL signal learning further away from live operator vocabulary by storing observed terms as review candidates instead of writing them straight into the active lexicon.
- Archived the previous direct-write passive lexicon backfill path for audit reference while keeping the new governed candidate-review boundary live.

## 2026-06-14
- Tightened operator communication governance so bounded symbolic replies no longer fall back to menu-style interpretation prompts during ambiguous operator exchanges.
- Hardened live lexicon sourcing for operator communication so governed/manual language sources are favored over stale or automatically accumulated residue from earlier learning passes.
- Changed automatic lexicon backfill posture so newly observed language stays in draft review state until explicitly promoted through governed operator pathways.
- Added public-safe milestone coverage for retiring legacy interpretation-menu behavior from the active operator path while preserving audit/reference continuity.
- Fixed a runtime-intelligence cutover issue where a newly created empty runtime-learning store could be preferred over a populated legacy store, causing CORE runtime-intelligence surfaces to show zeroed learning totals despite preserved history.
- Added regression coverage and deploy-path guidance so runtime-intelligence history remains visible across storage-domain migration and rename states.

## 2026-06-13
- Restored research KPI reporting across rebuilt environments by combining live telemetry with preserved read-only historical archive totals instead of treating rebuilt stores as empty new histories.
- Expanded public-safe runtime totals so archive-backed research evidence can contribute to long-horizon counts for runs, steps, runtime, tokens, savings, interventions, and successful repairs while active-job state remains live.
- Added historical research archive milestone coverage for preserved runs, reports, model exams, and exportable cycle bundles under isolated read-only posture.
- Broadened research visibility so governance-linked runtime work remains visible even when primary research storage is degraded or mid-rebuild.

## 2026-06-12
- Added explicit pause/resume boundaries for autonomous lesson execution so manually stopped training does not silently re-arm.
- Added communication-foundation language-pack import milestone coverage for governed lexicon bootstrap workflows and bounded symbolic vocabulary activation.
- Expanded split-store fallback and cleanup milestone coverage so governance, audit, runtime, memory, and related stores can be reconciled away from legacy persistence with a safer migration posture.

## 2026-06-08
- Tightened autonomous communication training so early background lessons stay on greeting-foundation work until stable retained basic greeting memories exist.
- Added stronger symbolic communication-memory retention for passed training lessons, including learned token/meaning structure needed for later reuse rather than only prompt/response storage.
- Added greeting-foundation progress visibility in both Training & Education trials and Runtime State, including curriculum focus, stable greeting-memory count, and latest retained greeting-memory id.
- Improved training-worker runtime summaries so communication-memory and greeting-foundation posture can be checked directly during soak/review.

## 2026-06-05
- Added dedicated training-and-education worker visibility milestones across Runtime State and the public-safe dashboard so symbolic lesson progression can be observed without exposing operator content.
- Added normalized training-worker summary signals for dataset, lesson mode, difficulty, education stage, score/pass posture, retained communication promotion, and dominant bounded failure reasons.
- Added public-safe training worker placement/resource posture coverage including current vCore/cpuset selection plus RAM and I/O snapshots.
- Improved runtime worker grouping/readability so language-expression training workers appear as a first-class `Training + Education` family rather than a generic internal bucket.
- Improved training-cycle runtime interpretation so completed lesson items and queued lesson work are reflected more accurately in worker activity posture.
- Added symbolic interaction provenance milestone coverage so bounded replies retain learned-fragment attribution, source artifact family, and phrase-level provenance for operator audit visibility.
- Added non-neural-first interaction policy telemetry milestone coverage so LLM avoidance posture is explicit and reviewable rather than inferred indirectly.
- Added governed admin-chat alignment milestone coverage so the main popup chat returns to the Elora interaction path while direct diagnostics remain a separate bounded surface.

## 2026-05-30
- Added Cognitive Process Supervisor milestone coverage so replay, reflection, and recurrence continuity work can be monitored as a coordinated governed process family rather than as isolated background loops.
- Improved public-safe runtime interpretation of continuity-worker health, replay intake, and bounded learning progression during live operation.

## 2026-05-29
- Added replay-score backfill hardening milestone coverage so preserved continuity sets recover more gracefully when older score fields have degraded or become low-information.
- Added continuity placement-policy and safe-zone benchmarking milestone coverage so worker rollout can be reviewed against safer placement envelopes before broader execution increases.
- Expanded public continuity visibility with more coherent process-isolation and worker-card framing suitable for dashboard interpretation without exposing sensitive internals.
- Added maturity milestone coverage for reflection, recurrence, consistency, and promotion-gate surfaces so continuity health is reviewable through bounded telemetry rather than opaque queue state alone.

## 2026-05-27
- Added a separate P3 integrity/system worker-setting milestone track to strengthen learning safety and runtime stability through planned integrity audit, consistency, worker-health, and bounded recovery workers.
- Added planned runtime-inventory anchors for these integrity/system workers so readiness posture can be surfaced before execution rollout.
- Added autonomous-continuity milestone coverage for bounded reflection/recurrence worker visibility in Runtime State, including throughput, lag, and replay-safe health signals.
- Added continuity backlog-risk milestone coverage with healthy/elevated/critical posture and explicit stalled/lagging/zero-throughput counters.
- Added public-safe autonomous continuity proof milestone coverage in dashboard telemetry (`autonomous_continuity`) with sanitized progression metrics only.
- Added public learning-presence milestone coverage where the Cognitive Pulse shifts to learning tone during active continuity learning and the insights panel switches from execution-focused to learning-focused cards.
- Added learning-momentum badge milestone coverage (idle/healthy/elevated/critical) for clearer public interpretation of active learning posture.
- Added public proof-panel expansion milestone coverage with a dedicated Autonomous Continuity proof card.
- Updated public KPI runtime-unit milestone coverage so Total Research Runtime is shown in hours instead of seconds for clearer long-horizon readability.
- Added continuity hygiene milestone coverage with bounded backlog rehydration and stale continuity-artifact lifecycle cleanup posture.
- Added continuity-runtime visibility milestone coverage where replay/reflection/recurrence/hygiene workers are surfaced together for easier operator interpretation.
- Added worker-inventory governance milestone coverage with explicit functional grouping, rollout-phase tagging, governance-gate posture, and CPU-cap readiness markers.
- Added P3 continuity-expansion milestone anchors (planned/disabled) for replay relevance, lexicon drift, continuity compaction, and runtime resource optimization tracks.
- Added Runtime State navigation/readability milestone coverage with grouped worker views and faster section-jump controls.

## 2026-05-21
- Added the first public runtime KPI surface foundations around HCU topology preview, Cognitive Pulse, and grouped public-facing runtime interpretation.
- Marked the homepage direction change away from a generic landing-page hero and toward a public-safe operational schema showing governed runtime, research, and learning presence.

## 2026-05-28
- Added runtime scheduler decision-audit milestone coverage with durable bounded decision logs and summary counts (total/allowed/blocked) to support safe decision-only rollout before constrained execution.
- Added Runtime State scheduler-visibility milestone coverage so operators can see scheduler mode, recent decision timing, reason-code context, and blocked reasoning in one panel.
- Added live decision-emission milestone coverage where replay worker cycles now append decision-audit records continuously (including idle/queue-empty cycles) for reliable scheduler heartbeat visibility.
- Added scheduler guardrail milestone coverage with explicit stale-heartbeat and unexpected blocked-reason spike checks surfaced in runtime telemetry before constrained fan-out phases.
- Added decision-only soak activation milestone coverage with live guardrail pass-state telemetry to support day-2 go/no-go review.
- Added constrained-pilot milestone scaffold with explicit move-cap, cooldown, rollback-switch, and simulation-only controls before execution-path rollout.
- Added P0 worker-fanout observability milestone coverage by expanding runtime worker telemetry with placement and execution fields (`mode`, `pid`, `cpuset/vCore`) plus read/write throughput and IOPS indicators.
- Added host resource context to runtime worker summary (per-core CPU, iowait, and related pressure indicators) to support safe pre-fanout scheduling analysis.
- Updated Runtime State worker tables with Phase-0 fanout-ready columns so both current workers and planned P3 worker families can be surfaced under one contract.
- Added continuity-state consistency shadow-worker milestone coverage with bounded diagnostic checks for queue/lease health and replay-stage consistency posture before constrained fanout moves.
- Added historic cognitive-experience requeue milestone coverage so previously deferred continuity events can be reintroduced in bounded batches for governed learning progression.
- Added emergence-monitor operator-feedback milestone coverage with persistent action outcomes, dismissible success/failure toasts, and a short auto-refresh countdown for clearer live-state interpretation.
- Added queue-movement visibility milestone coverage with lightweight delta reporting (queue depth, queued total, consumed total) between refresh cycles.
- Added admin route-hardening milestone coverage to ensure cognitive-experience queue actions resolve through the intended admin-governed path instead of generic API fallback behavior.

## 2026-05-20
- Added constitutional-governance baseline milestone coverage with immutable root posture, signed policy-version change flow, role-gated approvals, and emergency-lock controls.
- Added constitutional fail-closed interaction milestone coverage where memory influence is withheld under degraded/unavailable governance dependency posture.
- Added memory lifecycle-governance milestone coverage replacing hard-delete behavior with tombstone-only transitions while preserving continuity/audit evidence.
- Added operator memory-consent milestone coverage with per-operator/profile opt-in, retention/classification controls, and consent-aware runtime access behavior.
- Added governed cognitive-artifact substrate milestone coverage for dream/self-memory/response-seed/lexicon-response records with role-gated admin APIs, hash-chain event lineage, and fail-closed write posture before emergence rollout.
- Added governed emergence rollout-phase milestone coverage (`shadow`, `advisory`, `constrained_execution`) with explicit phase-gated capability posture rather than implicit runtime promotion.
- Added constitutional policy-change governance milestone coverage with propose/approve/reject/rollback workflows and replayable audit chronology for policy evolution.
- Added dependency-readiness and lock-state milestone coverage so governance dependencies can hard-block write-capable emergence posture when evidence requirements are not satisfied.
- Added constitutional hash-anchoring milestone coverage for policy snapshots and governance events to strengthen tamper-evident review continuity.
- Added role-separation milestone coverage for constitutional operations so higher-impact governance mutations remain scoped to authorized approval tiers.
- Added cognitive-artifact registry maturity milestone coverage with stronger lineage framing for artifact parent/child relationships and lifecycle-state transitions.
- Added dream-fragment self-edit safety milestone coverage where amendment behavior remains sandboxed, non-authoritative, and bounded by constitutional write posture.
- Added autonomous dream-amendment proposal milestone coverage where amendment intent can be formed in degraded conditions but persistence remains blocked until governance posture is healthy.
- Added deterministic lexicon-only interaction milestone coverage (no-LLM path) for bounded response synthesis under governed interaction mode.
- Added symbolic self-construction gate milestone coverage so dream-fragment writes require explicit worthiness scoring and can be skipped with explainable decision metadata.
- Added cognitive worker v1 milestone coverage for opportunistic, score-bounded runtime synthesis that remains proposal-first under blocked governance posture.
- Added cognitive worker request/priority governance milestone coverage for bounded queue/request behavior, cooldown budgets, and controlled threshold-lowering via governed priority boosts.
- Added cognitive worker cross-runtime experience queue milestone coverage so governance/research/runtime anomalies and learning events can feed bounded cognitive synthesis opportunities.
- Added emergence-monitor load-readiness milestone coverage with explicit go/no-go stage semantics and safety reason codes for operator interpretation.
- Added cognitive-substrate navigation/readability milestone coverage across CORE surfaces for clearer operator access to constitutional identity, emergence monitoring, and artifact-kind views.
- Added replay/trace metadata expansion milestone coverage for cognitive and symbolic decisions so blocked/persisted outcomes are auditable across interaction flows.
- Added public-safe operator-surface milestone coverage for Cognitive Worker controls and queue-state visibility in emergence monitoring workflows.
- Added regression-hardening milestone coverage across constitutional, cognitive-artifact, and interaction-runtime paths for blocked-write, healthy-write, and proposal-only behavior continuity.

## 2026-05-19
- Added Elora CORE learning-dashboard default milestone coverage with KPI-first posture and direct evidence inspection workflow.
- Added deterministic learning-KPI aggregation milestone coverage for health composites, lexicon growth windows, validation ratios, trust-tier mix, method usage, and worker posture signals.
- Added scoped nested-sidebar milestone coverage for area-focus navigation and persistent grouped stacks in CORE.
- Added classical-method impact telemetry milestone coverage tied to NNLSL method chains (Markov/n-gram, evolutionary optimization, semantic translation, routing, and classical reasoning).
- Added KPI derivation hardening milestone coverage with improved worker-state interpretation and bounded backfill behavior when primary interaction traces are sparse.
- Added public-homepage KPI restructure milestone coverage with grouped runtime/research/governance/learning categories and stronger production-style metrics.
- Added trend-surface milestone coverage using bounded current-window vs prior-window comparisons for clearer movement interpretation.
- Added governance rollup milestone coverage for bounded all-time decision/clarify totals in public status surfaces.
- Added HCU preview UX-readability milestone coverage with cleaner inactive-state wording, topology-focused surface metrics, and subtle preview motion cues.
- Added runtime-summary consistency milestone coverage for queue-depth and token-card behavior under empty/stale research-edge conditions.

## ------------- 0.2.3 --------------
### Release Focus
- NNLSL deterministic method-chain and bounded pre-helper governance contracts.

## 2026-05-18
- Added NNLSL deterministic-method milestone coverage for bounded semantic translation, Markov/n-gram synthesis, and evolutionary optimization tracks with replay-stable method evidence.
- Added method-router milestone coverage for deterministic arbitration across classical method candidates with stable tie-break and hash contracts.
- Added replay-determinism hardening milestone coverage with precision/normalization contracts for method outputs and stable cross-run evidence comparison.
- Added explain-verify closure milestone coverage for unknown/ambiguous outcomes, including explicit follow-up context signals and runtime trace visibility.
- Added trust-tier semantics milestone coverage with canonical confidence tiers carried across runtime evidence surfaces.
- Added bounded HCU resource-contract milestone coverage for pre-helper eligibility, runtime-priority framing, and deterministic fallback posture when contracts are not satisfied.
- Added operator-documentation and panel-routing milestone coverage for ML/NNLSL technique visibility and direct handbook jump-link access from interaction surfaces.

## ------------- 0.2.2 --------------
### Release Focus
- Security and readiness hardening across startup, policy gates, and operator controls.

## 2026-05-14
- Added startup code-health milestone coverage with a dedicated bring-up validation phase that checks source integrity before full admin navigation release.
- Added startup safety-gate milestone coverage so required code-health failures can hold setup posture in blocked state until resolved.
- Expanded startup progress-page milestone coverage with explicit code-health status and code-error visibility during warmup hold.
- Expanded Runtime Intelligence milestone coverage with startup code-health memory signals in summary and startup interpretation surfaces.
- Added operator control milestone coverage for startup code-health enable/require posture and bounded scan limits.
- Added startup code-health regression-test milestone coverage for failure detection, disabled-mode behavior, and required-gate blocking semantics.

## 2026-05-13
- Added persistent Elora reasoning visibility at the top of admin pages so deterministic decision/method context remains visible across navigation.
- Added cross-page interaction-trace continuity so method context can recover after page transitions without waiting for a new chat response.
- Added explicit handoff-explainability milestone coverage where Elora can report that an LLM attempt was rejected and continue with deterministic fallback output.
- Added interaction-handoff observability milestone coverage with richer rejection/candidate metadata for replay/audit review.
- Added security-surface modularization milestone coverage for separated API policy controls and safer admin/public boundary handling.
- Added operator readiness milestone coverage with a structured capability matrix for missing prerequisites and gate posture visibility.
- Added top-level Security surface milestone coverage so security controls/readiness are first-class navigation instead of nested settings tabs.
- Added feature-gate enforcement milestone coverage for selected high-risk admin actions (Fabric setup, SMTP controls, governance policy mutations, and local workerhost deployment) so functionality can remain visible but blocked until requirements are met.
- Added capability-transition notification milestone coverage so operators receive explicit readiness-state changes in active notifications.
- Added local workerhost policy-gate milestone coverage requiring explicit enablement before local Docker-socket deployment actions are allowed.
- Added staged MFA rollout milestone coverage with disabled-by-default policy controls, role-scoped enforcement toggles, and operator-facing readiness visibility.
- Added startup hardening milestone coverage with restart-bound admin session revocation controls, first-privileged-login startup reporting, and warmup hold behavior to reduce avoidable operator load during engine bring-up.
- Added key-setup hardening milestone coverage with a local unsaved key generator surface and a safety gate that restricts broader admin actions when critical key posture is incomplete.

## 2026-05-12
- Added API governance inventory milestone coverage with deterministic route discovery, architecture reporting, and explicit service-branch mapping visibility.
- Added CI governance guard milestone coverage to prevent API-like coverage regressions in route registration and service mapping.
- Added runtime-governor hardening milestone coverage for stronger pressure-response decisions (including latency-heavy route handling) with bounded operator alerting.
- Added adaptive-cache isolation milestone coverage so high-cost cache analytics/tuning can be independently throttled/degraded without broadly impacting core runtime surfaces.
- Added startup/runtime telemetry fidelity milestone coverage so Runtime State and Runtime Intelligence now surface a broader bounded API/service inventory by default.
- Added refresh-loop anti-overlap milestone coverage across Startup, Runtime State, and Runtime Intelligence surfaces to reduce self-induced polling contention.
- Added adaptive-cache interaction safety milestone coverage so expensive cache execution is explicit/manual rather than implicitly re-triggered during basic page refresh/switch interactions.
- Added service-attribution accuracy milestone coverage to reduce pressure-score concentration from wildcard API buckets and improve per-surface runtime diagnosis.
- Added scanner/topology alignment milestone coverage so wildcard/prefix API discovery paths map more reliably to governed service branches.
- Updated API discovery baseline evidence with zero API-like uncovered/unmapped governance gaps under current branch map posture.
- Added prior-art anchor milestone for governed LLM handover model execution (`route=llm_rag_research_summary`) with explicit selected-model usage under deterministic policy boundaries.

## 2026-05-11
- Added NNLSL worker-state parity milestone coverage so interaction-signal and lexicon worker health/status are visible consistently across runtime snapshots.
- Added CORE lexicon-surface milestone coverage with richer deterministic entry visibility (semantic class, confidence posture, usage counts, and governance tags).
- Added unknown -> explain -> verify blueprint milestone coverage for deterministic unsupported-answer handling and bounded claim-adjudication outcomes.
- Added ERIS learned-overlay milestone coverage where learned runtime recommendations are visible alongside baseline worker specs while baseline remains authoritative.
- Added Natural Language Signals trial milestone coverage with canonical registry normalization, confidence scoring, and broader governed interaction-source ingestion.
- Added Human Interaction signal-surface milestone coverage with filterable/paginated operator views and controlled rebuild workflows.
- Added response-correlation signals trial milestone coverage with risk/severity distributions and provenance-aware replay/audit framing.
- Added autonomous interaction timer milestone coverage moving from loose cooldown posture to deterministic slot-based questioning cadence.
- Added deterministic signal-seeded questioning milestone coverage with high-risk exclusion and fallback safety when draft-shape checks fail.
- Added CSV export milestone coverage for Human Interaction signal surfaces and NNLSL lexicon review workflows.
- Added learning-capacity expansion milestone coverage for signal/lexicon retention and larger bounded operator-inspection windows.
- Added NNLSL-assisted interaction-translation milestone coverage with bounded semantic guidance, lexicon evidence linkage, and deterministic override rules under governance constraints.

## ------------- 0.2.1 --------------
### Release Focus
- Runtime observability, Curiosity governance lifecycle, and ERIS expansion.

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

## ------------- 0.2.0 --------------
### Release Focus
- Model Exams + CORE learning foundation with adaptive runtime learning maturity.

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
- Added prior-art anchor milestone for observer model selection/routing where observer model can be selected per stage and recorded in run evidence.

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
- Added prior-art anchor milestone for model-learning implementation foundation (Model Exams + CORE learning signals as deterministic non-neural learning inputs).

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

## 2026-04-19
- Added mode-aware Engine Health snapshot milestone coverage with latest-stage/latest-cycle and bounded rolling-window views.
- Added vibrancy-state milestone coverage for lock/evasion/low-vibrancy/flowing interpretation in runtime-health analysis.
- Added staged AI report-generation milestone coverage replacing single-pass drafting with sectioned synthesis and follow-up chart-spec assembly.
- Added secure report-context access milestone coverage with one-time signed tokens, bounded lifetime, and run/user binding semantics.
- Added dedicated AI-reports surface milestone coverage with persisted lifecycle states, pagination, filtering, and export-ready records.
- Added research-report UX simplification milestone coverage to separate human report flow from AI writer operations.
- Added batch-export layout milestone coverage with per-run folder structure and optional CSV bundle inclusion metadata.

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

## 2026-04-10
- Added researcher read-only scope-expansion milestone coverage across broader AI-runtime and lab inspection surfaces.
- Added write-boundary hardening milestone coverage so research-role actions remain enabled only on approved research/profile workflows.
- Added non-research surface UI hardening milestone coverage with disabled controls and no-edit posture for protected areas.
- Added tape-security enforcement milestone coverage for explicit deny-on-mutation behavior under read-only researcher posture.
- Added denied-attempt audit milestone coverage for replayable accountability when protected mutation actions are attempted by restricted roles.

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

## 2026-04-02
- Added pre-generation inflight control milestone coverage to distinguish bounded pre-generation controls from future true token-step orchestration.
- Added inflight apply-timing milestone coverage with requested-vs-executed timing capture for replay clarity.
- Added inflight decision-evidence milestone coverage with richer reason labeling and multi-reason traceability.

## 2026-03-31
- Added admin/session security-hardening milestone coverage for resilient secret handling and encrypted-at-rest metadata posture.
- Added trusted-proxy and host-header sanitization milestone coverage for safer endpoint derivation and transport checks.
- Added logout/session-invalidation hardening milestone coverage to reduce sticky-session and auth-drift edge cases.

## 2026-03-29
- Added public lab-status performance milestone coverage with lighter polling payload posture for dashboard efficiency.
- Added on-demand job-detail replay milestone coverage so deep replay payloads load only when a specific run is opened.
- Added bounded public telemetry-read model milestone coverage for lower CPU pressure under status polling.

## 2026-03-28
- Added top-level Execution Monitor milestone coverage as a dedicated runtime-visibility surface in admin navigation.
- Added governed execution-lifecycle strip milestone coverage with commit-state emphasis (`approved`, `pending`, `denied`).
- Added guided monitor-flow milestone coverage for deterministic walkthrough of assignment->proposal->commit execution stages.

## ------------- 0.17 --------------

## 2026-03-24
- Added runtime-mode modularity milestone coverage with explicit software/hardware-backed posture scaffolding.
- Added attestation-policy scaffold milestone coverage for future hardware-trust posture integration.
- Added runtime-security framing milestone coverage to separate capability posture from deployment-state assumptions.

## 2026-03-23
- Expanded public replay-depth milestone coverage so longer runs preserve fuller evidence chronology in lab surfaces.
- Added integrity-fairness denominator milestone coverage to prevent misleading zeroed metrics on non-evaluable legacy runs.
- Added large-window rollup fidelity milestone coverage for more accurate totals/percentages across high-volume periods.

## 2026-03-22
- Added Engine Crusher milestone coverage for deterministic high-volume lab load simulation.
- Added fixed-batch structure milestone coverage for consistent run comparability across stress suites.
- Added operator pacing-control milestone coverage for queue-safe simulation scheduling.

## 2026-03-20
- Added Agent Simulator harness milestone coverage for deterministic multi-step loop testing without model inference dependency.
- Added simulator API and persistence milestone coverage so runs flow into existing Jobs and Replay evidence surfaces.
- Added synthetic-lab evidence continuity milestone coverage for repeatable governance validation workflows.

## 2026-03-19
- Added Fabric/WorkerHost modularization milestone coverage for cleaner lifecycle routing and control-plane maintainability.
- Added worker registration/heartbeat enrichment milestone coverage including policy posture and inference-node inventory visibility.
- Added GPU-readiness continuity milestone coverage for runtime placement and host-capability interpretation.

## 2026-03-15
- Added tape-provenance hardening milestone coverage with deterministic tape-identity capture at commit boundaries.
- Added tape-hash admissibility milestone coverage with explicit mismatch/missing violation semantics.
- Added replay completeness milestone coverage for distinguishing full tape-snapshot presence in governance evidence.

## 2026-03-13
- Added tape-runtime architecture milestone coverage with tape registry, assignment, and loaded-tape visibility posture.
- Added Tape Library admin-surface milestone coverage for tape management and runtime identity mapping.
- Added runtime modularity milestone coverage linking worker behavior context to tape-centered governance framing.

## 2026-03-08
- Added public lab-status API milestone coverage for website-facing validation and health summaries.
- Added optional token-gated access milestone coverage for controlled server-to-server public status pulls.
- Added signed public-payload milestone coverage and curated sanitized output posture for safe external consumption.
- Added timeline-first replay investigation milestone coverage for faster governance-review workflows.

## 2026-03-07
- Added Governance Replay V2 scaffold milestone coverage with timeline-first incident review layout.
- Added replay migration-bridge milestone coverage using existing jobs/replay APIs for read-only transition posture.
- Added beta navigation milestone coverage while preserving legacy replay fallback path.

## 2026-03-06
- Added policy snapshot v1-shape milestone coverage with richer confidence/authority/risk explainability blocks.
- Added commit evaluator rule-evidence milestone coverage with explicit policy evaluation pass/fail outputs.
- Added chat-admission policy-gate milestone coverage to make enforcement posture operationally testable.
- Added governance policy UI expansion milestone coverage for clearer operator policy-control interpretation.

## 2026-03-03
- Added Governance Incident Map milestone coverage as a topology-first admissibility analysis surface.
- Added layered topology refinement milestone coverage to reduce visual crossing and emphasize commit-boundary authority flow.
- Added focused incident-map scope milestone coverage by removing non-admissibility nodes from primary analysis flow.
- Added full-screen incident-map milestone coverage for higher-signal operator investigation sessions.

## 2026-03-02
- Added centralized commit-enforcement milestone coverage so async and direct chat paths share one governance boundary.
- Added proposal/commit lifecycle-event milestone coverage for replay timeline clarity across decision phases.
- Added commit-snapshot fidelity milestone coverage with stronger config/policy capture for deterministic recompute.
- Added worker-scoped policy-override milestone coverage under controlled governance evaluation semantics.

## 2026-02-28
- Added commit-stage enforcement milestone coverage where inference remains proposal-only until final commit validation succeeds.
- Added blocked-commit termination milestone coverage for policy-failure outcomes in governed flows.
- Added replay-event persistence milestone coverage for risk/anomaly reconstruction chronology.
- Added deterministic commit-contract milestone coverage (`commit_eval_v1`) for no-rerun recompute semantics.

## ------------- 0.16 --------------

## 2026-02-24
- Added admin session-signing hardening milestone coverage with resilient fallback-key persistence semantics.
- Added stricter session-validation and throttle-race protections milestone coverage for auth robustness.
- Added proxy-header trust-control milestone coverage and aligned secure-transport handling for cookie/security posture.

## 2026-02-19
- Added authenticated admin-chat bridge milestone coverage decoupling internal dashboard chat from public routes.
- Added governance summary API milestone coverage for 24-hour risk/cost telemetry interpretation.
- Added Fabric status API milestone coverage for dashboard dependency visibility.
- Added worker lifecycle bearer-token enforcement milestone coverage across control-plane operations.

## 2026-02-14
- Added first-run bootstrap-admin milestone coverage with explicit super-admin creation flow.
- Added Fabric module-availability checks milestone coverage with clear unavailable-state responses.
- Added worker container-name and metadata passthrough milestone coverage for plugin-connected deployment paths.

## ------------- 0.15 --------------

## 2026-02-12
- Added Fabric provision-mode split milestone coverage (`vm` vs `container`) for clearer lifecycle routing.
- Added worker mode persistence/visibility milestone coverage for operational ownership clarity.
- Added container-provision eventing and UI split milestone coverage for VM vs container orchestration flows.

## 2026-02-10
- Added Fabric setup gating milestone coverage so worker operations require initial platform configuration posture.
- Added setup persistence fallback milestone coverage plus encrypted-at-rest handling for sensitive admin secrets.
- Added provisioning-failure observability milestone coverage so worker lifecycle remains visible under failure states.

## 2026-02-09
- Added session-job reuse milestone coverage to avoid per-reply job fragmentation in active chats.
- Added retention-based history milestone coverage and live runtime event-stream visibility for chat runs.
- Added normalized source-attribution milestone coverage for runtime/audit provenance clarity.

## 2026-02-05
- Added pipeline runtime scaffolding milestone coverage (nodes, registry, artifacts, events).
- Added runtime test path milestone coverage with artifact/event output and model-backed inference wiring.
- Added guardrail-stage milestone coverage with configurable abort/restricted behavior and explicit violation eventing.

## 2026-02-03
- Added active-pipeline minimum-source enforcement milestone coverage.
- Added mandatory Justification stage milestone coverage in baseline pipeline posture.
- Added governance-pipeline visual and builder-scaffold milestone coverage for structured workflow design.

## ------------- 0.14 --------------

## 2026-01-31
- Added memory-to-prompt augmentation milestone coverage under permissioned context controls.
- Added behavior-driven prompt/source-gating milestone coverage for GPT/RAG runtime shaping.
- Added soul-reflection scheduler/manual trigger milestone coverage with bounded assistant-response logging support.
- Added safe math shortcut milestone coverage for constrained price-range queries using context signals.

## ------------- 0.13 --------------

## 2026-01-29
- Added API-route modularization milestone coverage splitting admin/public/chat paths for maintainability.
- Added admin UI scaffolding milestone coverage with login and forced password-change posture.
- Added bootstrap-credential and signed-session-cookie milestone coverage with baseline password policy hardening.

## ------------- 0.12 --------------

## 2026-01-24
- Added short-lived job token model milestone coverage with TTL and minimal in-memory history posture.
- Added stage-event streaming milestone coverage and SSE completion payload enrichment with session context.
- Added job start/status polling milestone coverage with local SQLite-backed persistence.
- Added default prompt-tightening milestone coverage to reduce duplicated system-prompt governance text.

## ------------- 0.11 --------------

## 2026-01-20
- Added core module reorganization milestone coverage into API/core/services boundaries.
- Added required API-key posture milestone coverage (no permissive default fallback).
- Added signed-request verification milestone coverage using timestamped HMAC request integrity checks.
- Added loopback-only dev bypass milestone coverage and max-body-size enforcement for safer ingress controls.

## 2026-01-02
- Added prompt-injection detection milestone coverage with safe refusal behavior in chat flows.
- Added enriched failure-log milestone coverage with hashed input excerpt and injection-suspicion indicators.
