# Guided Tour Part 2 Copy

Page: `demo/admin/replay-reviewer.html`  
Tour logic: `demo/admin/replay-reviewer.js`

## SECTION: replay_page_static

### ops_environment_value
PROD

### ops_engine_state_value
RUNNING

### ops_policy_eval_value
2026-03-02 23:26:10.690Z

### ops_active_model_value
No recent model

### ops_operator_value
elora-admin (admin)

### replay_header_title
Governance Replay Review

### replay_header_intro
Decision Accountability Review. This surface reconstructs admissibility at the commit boundary and produces a risk-first governance explanation before full trace inspection.

### replay_input_job_placeholder
Job ID (required)

### replay_input_against_placeholder
Against Job ID (optional)

### replay_review_button
Review

### replay_action_1
Focus mode: off

### replay_action_2
Dense view: off

### replay_action_3
Print / Save PDF

### replay_action_4
Export report (.md)

### replay_action_5
Export report (.json)

### summary_card_1_title
10-Second Answer

### summary_card_1_body
Load a job to construct a deterministic governance answer from captured commit evidence.

### summary_card_2_title
Risk Snapshot

### summary_card_2_body
No replay loaded. Risk posture will be computed once a job is selected.

### summary_card_3_title
Run Diff

### summary_card_3_body
No comparison loaded. Run Diff evaluates structural differences between two admissibility contexts.

### trace_title
Policy Trace

### trace_body
No trace loaded. Policy evaluation details become available once a job is reconstructed.

### recent_jobs_title
Recent Jobs

## SECTION: tour_overlay_steps
Source: `TOUR_STEPS` in `demo/admin/replay-reviewer.js`

### step_1_title
Replay Reviewer Introduction

### step_1_text
This is the governance replay command surface. It reconstructs admissibility decisions from stored commit inputs rather than re-running inference. The objective is decision accountability, not runtime simulation.

### step_2_title
Replay Input Scope

### step_2_text
Enter a Job ID to reconstruct its commit evaluation context. An optional comparison ID enables differential analysis between two runs, which helps detect policy changes, configuration drift, or authority divergence. This defines the scope of governance review.

### step_3_title
Replay Action Controls

### step_3_text
Focus mode narrows the interface to decision-critical evidence while dense view expands structured detail. Print and export controls generate portable governance artifacts suitable for audit and record retention. Replay is designed to produce defensible evidence, not transient inspection.

### step_4_title
Decision Summary Layer

### step_4_text
The 10-Second Answer provides a concise admissibility explanation derived from captured commit inputs. Risk Snapshot summarizes classification and threshold posture. Run Diff highlights structural differences between evaluated contexts. This layer answers why before exposing full trace detail.

### step_5_title
Policy Trace Panel

### step_5_text
Policy Trace exposes the deterministic evaluation path: decision class, confidence and uncertainty thresholds, guardrail posture, and final admissibility outcome. This is structured policy evaluation under captured state, not narrative reasoning. It is the core evidence layer for governance audit.

### step_6_title
Recent Jobs Context

### step_6_text
Recent Jobs anchors the replay within operational context. Governance decisions are rarely isolated; surrounding outcomes provide signal about broader system posture and risk patterns. We will now select Job #35 for reconstruction.

### step_7_title
Stage 3 Handoff

### step_7_text
Job #35 was terminated during commit evaluation. The next stage examines proposal artifact, authority state, and policy thresholds that led to denial. Let us now deep dive into why Job #35 failed.

### final_cta_button_label
Open Stage 3 Deep Dive
