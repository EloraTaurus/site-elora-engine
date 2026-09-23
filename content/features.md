# Elora Engine Features and Direction

Started as a solo build in late January 2026, Elora has evolved into a research engine with governance capability, focused on admissibility, provenance, governed interaction, runtime evidence, and operator accountability.

## What Elora Can Do Today (Engine)

### Runtime and Commit Boundary

- Proposal-first runtime flow with commit-stage validation.
- Unified commit enforcement across direct and async execution paths.
- Guardrail-aware terminal outcomes including blocked commit states.

### Governance Provenance, Decisions, and Replay

- Session-level Governance Provenance across preparation, actor turns, execution lanes, runtime state, TOCTOU evidence, guardrails, and commit outcomes.
- Elora Decisions for bounded lifecycle narratives and Stage Replay for focused evidence inspection.
- Deterministic recompute direction using captured commit artifacts.
- Observation, interpretation, recommendation, policy, guardrail, and commit authority remain separately labelled.

### Governed Interaction and Runtime Integrity

- Testing Edge conversations with run identity, AI Behaviour provenance, Memory Governance, lifecycle, model/provider, token, and outcome evidence.
- Provider-readiness queues, bounded pressure holds, explicit recovery state, and no overlapping dispatch.
- Conservative model-aware context selection with observable fallback when capability is unknown.
- Terminal completion checks that prevent incomplete provider output from becoming an approved answer.
- Managed public-safe Governance Provenance reports and optional JSON from one bounded projection.

### Sense and Execution Atlas

- Unified runtime investigation for model capabilities, module ownership, Inference Governor, Memory Governance, Performance and Storage Governor.
- Read-only execution maps across retained stages, pipeline work, provider attempts and operation evidence.
- Scoped thread/process CPU, wall-time and provider-elapsed evidence with missing values preserved as unknown.
- Explicit separation between recorded order, ownership, inferred relationship, causation and authority.

### Workspace, Context and Recall

- Governed document and webpage review with persistent follow-ups, comparisons, charts and evidence-backed hold/release explanations.
- Adaptive Context and benchmark surfaces that distinguish requested configuration from actual admission.
- Advisory model-thinking profiles and separate thinking/answer presentation within shared context limits.
- Bounded conversation compaction, session recall, fact tracing and correction-aware evidence without treating correct output as proof of recall.

### Portable Execution Evidence

- Shared captured execution stories reusable across Sense, Governance and reports.
- Public Execution Evidence Records with certificate-style summaries, interactive annexes and matching allow-listed JSON.
- Scoped authority, lifecycle, measurement, operation and outcome evidence with explicit gaps and unsupported claims.
- Report-local aliases, stable non-secret references and checksums without claims of signing, independent authenticity or certification.

### Security and Integrity Posture

- Protected routes with token/session requirements on sensitive paths.
- Signed-request and strict header handling patterns for trusted ingress.
- Source attribution captured for governance/audit context.
- Hash-chained replay trails for tamper-evident sequencing.
- Commit decision signing support when secrets are configured.

### Operator and Platform Surfaces

- Active operator surfaces across overview, governance, observability, AI runtime, fabric, and lab.
- Provider/model/latency/token/error telemetry capture.
- WordPress integration and source-aware request context paths.

## What Is Available On This Public Website Today

- Governance Replay guided tour using synthetic records.
- Governance Provenance capability guide for the current `0.2.8` architecture.
- Sense and Execution Atlas capability guide.
- Governed Workspace capability guide.
- Elora Execution Evidence Records capability guide.
- Stage-level trace walkthrough with structured JSON evidence views.
- Governance Architecture Pack article reader.
- Dedicated public changelog page.

## In Active Build / Planned Next

- Admissibility completeness hardening (decision-class and authority coverage).
- Evidence model stabilization (canonical bundles, reduced duplication).
- Deeper policy traceability (`rule_id`, version, reason, severity outputs).
- A complete public-safe Governance Provenance and Testing Edge walkthrough.
- Expanded worker fabric and distributed execution walkthroughs.
- WorkerHost bootstrap builder and host lifecycle operations (`sync`, runtime update, token recycle/remove) for distributed node management.
- GPU-aware host telemetry and inference-node/model reporting for compute-aware routing.

## Scope and Claims Guidance

- Public pages are representative and synthetic by design.
- Use "supports" / "when configured" phrasing for config-dependent controls.
- Replay trails are currently tamper-evident, not immutable.
- Production deployments expose deeper telemetry and controls than this demo.
