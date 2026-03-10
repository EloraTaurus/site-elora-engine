# Public Documentation Copy

Source: `engine/docs/OPERATORS/PIPELINE_COMMIT_VALIDATION_TEST_PLAN.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Pipeline Commit Validation Test Plan

## Goal

Provide repeatable checks that prove:

- inference is proposal-only
- commit gate enforces final policy
- blocked outcomes are explainable in audit replay

## Fast Demo (under 2 minutes)

1. Open `Pipeline` in admin.
2. In `Commit Validation Lab`, run:
- `Safe chat`
- `Blocked request`
- `Agent write proposal`
- `Agent write blocked`
3. Click `Run validation pack`.
4. Confirm:
- `Proof pack` shows pass count
- `Pass/Fail Checklist` updates for each test
- runtime JSON includes `commit.result`

## Production Validation (release gate)

1. Run validation pack on staging and production-candidate model.
2. Save evidence:
- screenshot of proof summary
- exported runtime output JSON
- job replay timeline for one blocked and one approved run
3. Verify blocked run has:
- `decision=blocked_*` and terminal status
- no delivery artifact when blocked
4. Verify approved run has:
- `decision=commit_approved`
- delivery artifact present
5. In Job Logs inspector, verify replay includes:
- stage timeline
- anomaly/risk labels
- raw detail payload per stage

## Failure Criteria

Fail release if any of the following is true:

- commit stage missing from runtime artifacts
- blocked scenario still produces delivery output
- approved scenario does not produce delivery output
- replay trace missing for executed jobs
