# Public Documentation Copy

Source: `engine/OPERATIONS.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Operations

Runbook (container deployment)
- Start core services for engine runtime, inference backend, and network proxy.
- Verify engine and inference health endpoints respond as expected.
- Keep content/index mounts portable to simplify migration and backup.

Runbook (local Python)
- Start the runtime entrypoint from project root.
- Ensure the configured inference backend is reachable.

Required configuration domains
- API authentication and request-signing settings.
- Profile and model defaults.
- Content/index storage locations.
- CORS and transport policy settings.
- Payload/token/session/job retention limits.
- Warmup and busy-threshold controls.

Profiles
- Profiles map runtime modes to model and prompt settings.
- Chat orchestration resolves profile from request metadata.

Reindexing
- Reindex operation refreshes retrieval embeddings from configured sources.
- Content changes require reindex before retrieval results reflect updates.

Common failure points
- Authentication/signature mismatch.
- Inference backend unavailability or model load delays.
- Busy threshold reached under sustained concurrency.
- Session/job expiry requiring new continuity context.
