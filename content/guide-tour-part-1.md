# Guided Tour Part 1 Copy

Page: `demo/admin/governance-replay.html`  
Tour logic: `demo/admin/app.js`

## SECTION: dashboard_page_static

### ops_environment_label
Environment

### ops_environment_value
PROD

### ops_engine_state_label
Engine State

### ops_engine_state_value
RUNNING

### ops_policy_eval_label
Policy Eval

### ops_policy_eval_value
2026-03-02 22:43:06.110Z

### ops_active_model_label
Active Model

### ops_active_model_value
elora:smollm2

### ops_operator_label
Operator

### ops_operator_value
elora-admin

### dashboard_explainer_text
The Governance Dashboard presents interpreted control-plane signals. It aggregates risk posture, termination states, and policy-relevant indicators. One evaluated job was terminated and is now the focus for replay investigation. Raw execution sequencing remains in Observability; governance focuses on admissibility and accountability.

### kpi_total_jobs
8

### kpi_terminated_jobs
1

### kpi_needs_review
1

### kpi_avg_confidence
0.86

### kpi_high_risk
1

### kpi_active_escalations
1

### signal_guardrail
Blocked (baseline): 0
Blocked (injection): 0
Blocked (policy): 1
Terminated jobs: 1

### signal_cost_token
Token churn (24h): 3120
Budget ceiling: 50000
Cost estimate: $0.0078
Over budget risk: low (ratio 0.0624)

### signal_config_drift
Runtime config hash: dcba2f74372b
Last config change: not tracked
Drift alerts: 0
Last drift event: none

### jobs_title
Recent Jobs (Evaluated)

### jobs_focus_note
Focus item for this tour: Job #35 (terminated, high risk).

## SECTION: tour_overlay_steps
Source: `TOUR_STEPS` in `demo/admin/app.js`

### step_1_title
Welcome To Governance Replay

### step_1_text
Welcome. I will guide you through how governance decisions are interpreted using structured synthetic records. This tour focuses on admissibility at the commit boundary rather than runtime mechanics.

### step_2_title
Governance Dashboard Context

### step_2_text
This surface represents the governance layer of the engine. It summarizes evaluated outcomes, risk posture, and termination states before any deep replay inspection. One job was terminated, so our objective here is triage and then targeted investigation.

### step_3_title
Operator Context Rail

### step_3_text
Begin with runtime context. Environment, engine state, policy evaluation timestamp, active model, and operator identity establish the authority frame under which decisions were evaluated. Governance always begins with captured context.

### step_4_title
KPI Summary

### step_4_text
These indicators summarize governance outcomes across the recent period. Terminated jobs, high-risk classifications, and confidence levels provide an immediate view of system posture before examining individual decisions.

### step_5_title
Governance Signals

### step_5_text
Guardrail breakdown, cost and token posture, and configuration drift monitoring are interpreted governance signals. They surface policy and operational risk without exposing raw execution traces.

### step_6_title
Evaluated Jobs

### step_6_text
Most evaluated jobs complete without governance intervention. One high-risk job was terminated and remains under review. Governance replay exists to explain why that decision was made.

### step_7_title
Focus Job Selected

### step_7_text
Job #35 was terminated during governance evaluation. We will now move to Replay Reviewer to investigate why that decision occurred.

### final_cta_button_label
Open Replay Reviewer

### exit_button_label
Exit tour
