# Public Documentation Copy

Source: `workerhost/wordpress_chat_worker/README.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## WordPress Chat Worker

Thin worker service that proxies WordPress chat traffic to Elora Engine.

## Purpose
- Move WordPress request handling out of the engine edge path.
- Preserve existing chat/session continuity behavior.
- Add normalized worker source attribution metadata.

## Configuration domains
- Engine endpoint and worker identity metadata.
- Source and site attribution values.
- Runtime mode and timeout controls.

## Run
Install dependencies, then run the worker API service with your preferred process runner.
