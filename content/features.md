# Elora Engine Features and Direction

Started as a solo build in late January 2026, Elora has evolved into a governance-first AI control-plane project focused on admissibility, replayability, and operator accountability.

## What Elora Can Do Today (Engine)

### Runtime and Commit Boundary

- Proposal-first runtime flow with commit-stage validation.
- Unified commit enforcement across direct and async execution paths.
- Guardrail-aware terminal outcomes including blocked commit states.

### Governance and Replay

- Governance surfaces for risk, decision framing, and operator triage.
- Replay timeline with risk/anomaly context and evidence-oriented review.
- Deterministic recompute direction using captured commit artifacts.
- Governance and observability are treated as separate surfaces: runtime sequence vs admissibility/accountability assessment.

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
- Stage-level trace walkthrough with structured JSON evidence views.
- Governance Architecture Pack article reader.
- Dedicated public changelog page.

## In Active Build / Planned Next

- Admissibility completeness hardening (decision-class and authority coverage).
- Evidence model stabilization (canonical bundles, reduced duplication).
- Deeper policy traceability (`rule_id`, version, reason, severity outputs).
- Faster operator-speed governance review/report workflows.
- Expanded worker fabric and distributed execution walkthroughs.
- WorkerHost bootstrap builder and host lifecycle operations (`sync`, runtime update, token recycle/remove) for distributed node management.
- GPU-aware host telemetry and inference-node/model reporting for compute-aware routing.

## Scope and Claims Guidance

- Public pages are representative and synthetic by design.
- Use "supports" / "when configured" phrasing for config-dependent controls.
- Replay trails are currently tamper-evident, not immutable.
- Production deployments expose deeper telemetry and controls than this demo.
