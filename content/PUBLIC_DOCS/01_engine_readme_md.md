# Public Documentation Copy

Source: `engine/README.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Elora Engine

Purpose
The Elora engine is a custom-built Python control plane for governed AI workflows. It accepts chat requests, fetches context from curated knowledge sources, performs inference, and returns structured responses to connected clients.

Goals
- Keep processing on self-managed infrastructure.
- Maintain explicit governance boundaries between proposal and execution.
- Ground responses in curated knowledge via retrieval.
- Provide predictable, secure, and observable behavior.

Non-goals (for now)
- Multi-user persistence or per-user memory.
- External SaaS dependencies for core inference or storage.
- Unbounded autonomous actions.

Entrypoints
- Runtime service bootstrap for API and orchestration.
- Health and status surfaces for operational monitoring.

High-level flow
1. A client sends a request through the engine ingress surface.
2. The engine validates authentication and request integrity.
3. For retrieval-enabled mode, the engine fetches relevant context from indexed sources.
4. The engine builds a prompt and calls the configured inference backend.
5. The response is returned with optional sources and runtime stats.

Current capabilities
- Retrieval across curated files and URL-derived sources.
- Inference-only mode (no retrieval).
- Streaming and non-streaming responses.
- Health and busy status reporting.
- Signed request verification for guarded ingress.
- Short-lived session continuity across page loads.

Where to look next
- `ARCHITECTURE.md` for module responsibilities and data flow.
- `OPERATIONS.md` for deployment and runtime guidance.
- `SECURITY_POSTURE_FAQ.md` for operator-facing posture rationale.
- `docs/README.md` for structured overview and operator guide scaffolding.
