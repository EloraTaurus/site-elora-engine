# Public Documentation Copy

Source: `workerhost/README.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Elora WorkerHost (Core Execution Plane)

Status: Pre-alpha
Version: 0.01

WorkerHost is the container execution surface for Elora Fabric.

It is intentionally separate from:

1. `engine/` (control plane, policy, audit)
2. `fabric/provisioner/` (VM lifecycle extension)

## Scope

WorkerHost handles:

1. spawn container workers
2. terminate container workers
3. inspect worker runtime state
4. host health reporting
5. authenticated runtime update pull/apply

WorkerHost does not:

1. make policy decisions
2. execute autonomous planning
3. perform VM provisioning

## Contracts

1. OpenAPI: `workerhost/openapi.yaml`
2. Events: `workerhost/events.md`

## Local skeleton run

Create a Python environment, install requirements, and run the WorkerHost API service with your preferred process runner.

## Engine callback wiring (host identity + breakout inventory)

Configure WorkerHost with:

1. engine control-plane endpoint
2. shared host registration credential
3. unique host identity
4. host type/capabilities metadata
5. heartbeat and inventory intervals
6. optional inference-node detection endpoints (Ollama/vLLM)

When configured, WorkerHost posts registration, heartbeat, and inventory updates to engine callback surfaces, enabling breakout-zone style host + container inventory.

WorkerHost also supports a control-plane runtime update path where Engine can provide a hashed runtime bundle and the host can apply/restart through authenticated host actions.

## WordPress chat worker (migration bridge)

A dedicated WordPress chat worker exists under `workerhost/wordpress_chat_worker/`.

It exposes chat/session continuity and health surfaces and forwards requests to Engine with normalized source attribution metadata.

This allows WordPress plugin traffic to move to a worker endpoint without breaking engine chat runtime behavior.
