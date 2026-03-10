# Public Documentation Copy

Source: `engine/docs/FEATURE_INDEX.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Elora Engine Feature Index

Purpose: maintain a clear inventory of engine/admin capabilities and their current implementation status.

Companion summary: `FEATURES.md` (current + in-development operator pack).

## Status Legend

- `Live` - implemented and operational
- `Partial` - implemented with limitations / incomplete workflows
- `Scaffolded` - visible structure or UI exists, but not fully wired
- `Planned` - intended direction, not yet implemented

## Feature Areas

| Area | Current Status | Primary Surface | Operator Guide |
|---|---|---|---|
| Admin Dashboard and Governance | Partial | Admin control plane | `OPERATORS/ADMIN_DASHBOARD_AND_GOVERNANCE.md` |
| Jobs Audit and Replay | Partial | Governance replay and jobs views | `OPERATORS/JOBS_AUDIT_AND_REPLAY.md` |
| Fabric / Workers / WorkerHosts | Partial | Worker operations and host inventory | `OPERATORS/FABRIC_AND_WORKER_OPERATIONS.md` |
| Pipelines and Runtime Controls | Partial | Pipeline and runtime controls | `OPERATORS/PIPELINES_AND_RUNTIME.md` |
| Models / Permissions / Profiles | Partial | Model and behavior controls | `OPERATORS/MODELS_AND_PROFILES.md` |
| Knowledge / Memory / Workbooks | Partial | Knowledge, memory, workbook controls | `OPERATORS/KNOWLEDGE_MEMORY_WORKBOOKS.md` |
| Security / Auth / OTP / Sessions | Live / Partial | Security and authentication workflows | `OPERATORS/SECURITY_AND_ACCESS_CONTROL.md` |
| Alerts / SMTP / Rules | Partial | Alerting and notification controls | `OPERATORS/ALERTS_AND_NOTIFICATION_POSTURE.md` |
| Configuration / Assets / Public Status | Partial | Configuration and status surfaces | `OPERATORS/CONFIGURATION_AND_PUBLIC_STATUS.md` |
| Public/API Chat Runtime Endpoints | Partial | Public chat runtime surfaces | `OPERATORS/PUBLIC_API_AND_CHAT_RUNTIME.md` |

## Notes for maintaining this index

- Update status labels when behavior materially changes (not just UI polish).
- Link detailed docs before marking an area `Live`.
- Prefer honest `Partial` over optimistic `Live` for governance-sensitive workflows.
- Use `engine/CHANGELOG_ENGINE.md` for change history and this file for current state.

## Next docs to add (recommended)

1. `RUNBOOKS/INCIDENT_RESPONSE.md`
2. `RUNBOOKS/BACKUP_AND_RESTORE.md`
3. `API/REQUEST_SIGNING_AND_AUTH.md`
4. `API/FABRIC_WORKER_CONTRACTS.md`
5. `UPGRADES/DEPLOY_UPDATE_CHECKLIST.md`
