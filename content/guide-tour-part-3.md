# Guided Tour Part 3 Copy

Page: `demo/admin/stage-3-deep-dive.html`  
Tour logic: `demo/admin/stage-3-deep-dive.js`

## SECTION: replay_loaded_view_static

### ops_environment_value
PROD

### ops_engine_state_value
RUNNING

### ops_policy_eval_value
2026-03-02 23:34:39.931Z

### ops_active_model_value
No recent model

### ops_operator_value
elora-admin (admin)

### replay_job_id
35

### replay_against_job_id
34

### replay_decision
blocked_commit_validation

### replay_blocking_stage
Commit

## SECTION: tour_overlay_steps
Source: `TOUR_STEPS` in `demo/admin/stage-3-deep-dive.js`

### step_1_title
Stage 3 Deep Dive

### step_1_text
We are now reviewing a loaded replay artifact for Job #35. This stage moves from high-level triage into direct evidence inspection. The goal is to establish why this outcome was blocked.

### step_2_title
Decision Outcome And Risk

### step_2_text
The decision summary confirms a terminated outcome with blocked_commit_validation at the commit boundary. Risk snapshot and run-diff provide immediate posture context and indicate where divergence appears against comparison run #34.

### step_3_title
Policy Trace Reconstruction

### step_3_text
Policy Trace shows the deterministic sequence from proposal through commit. The key operator task is to verify that the commit-stage block is policy-class behavior under captured context, not a runtime failure.

### step_4_title
Artifact Record

### step_4_text
The synthetic JSON view represents machine-readable replay output available to operators. In the live system, full structured artifacts support deeper drill-down, export, and policy-forensics workflows.

### step_5_title
Activate Focus Mode

### step_5_text
Final step: click Focus mode to pivot the view to decision-critical evidence only. This demonstrates operator narrowing from broad replay context to commit-boundary accountability.

