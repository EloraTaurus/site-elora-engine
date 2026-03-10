# Public Documentation Copy

Source: `engine/ARCHITECTURE.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Architecture

Directory layout
```
engine/
  api/
    server.py        HTTP entrypoint and request handling
  core/
    config.py        Environment-driven settings
    profiles.py      Profile loading and resolution
    prompt.py        Prompt building helpers
    stats.py         Runtime and system metrics
  services/
    chat.py          Chat orchestration and response shaping
    inference.py     Inference backend client helpers
    rag.py           Retrieval indexing and context selection
```

Request flow (retrieval mode)
1. API ingress accepts a chat request.
2. Authentication and signed envelope checks pass.
3. Chat orchestration resolves profile and prompt context.
4. Retrieval layer embeds query text and fetches top context chunks.
5. Prompt builder composes final model input.
6. Inference client requests generation from the configured model backend.
7. Response includes sources and runtime stats.

Request flow (inference-only mode)
1. Same as retrieval mode but skip retrieval and call inference directly.

Security model
- API key authentication is required.
- Requests use signed envelopes with timestamp validation.
- Proxy trust for transport enforcement is explicit and opt-in.
- CORS is restricted to configured trusted origins.
- Payload size and request limits are enforced.
- Short-lived sessions are issued for bounded continuity.
- Polling jobs use local persistence with TTL controls.

Observability
- Runtime metrics track usage and request timing.
- Health/status surfaces expose bounded operational signals.

Data sources
- Curated local knowledge files.
- Optional URL-derived sources from managed source lists.
- Embeddings and retrieval index stored in local engine-managed persistence.
