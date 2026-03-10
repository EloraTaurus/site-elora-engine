# Public Documentation Copy

Source: `workerhost/events.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## WorkerHost Event Contract (v0.01)

WorkerHost emits structured lifecycle events back to Elora.

## Envelope

```json
{
  "event": "worker.spawned",
  "host_id": "host-alpha-01",
  "worker_id": "wrk_123",
  "ts": "2026-02-10T20:00:00Z",
  "detail": {}
}
```

Required envelope fields:

1. `event`
2. `host_id`
3. `worker_id`
4. `ts`
5. `detail`

## Event Types

1. `worker.spawn.requested`
2. `worker.spawned`
3. `worker.spawn.failed`
4. `worker.terminated`
5. `worker.terminate.failed`
6. `worker.status.changed`
7. `worker.resource.limit_hit`
8. `host.health.changed`

## Example Payloads

### worker.spawned

```json
{
  "event": "worker.spawned",
  "host_id": "host-alpha-01",
  "worker_id": "wrk_123",
  "ts": "2026-02-10T20:00:00Z",
  "detail": {
    "worker_type": "wordpress_api_worker",
    "profile_name": "wordpress-alpha-v1",
    "runtime_id": "container_abc123",
    "resources": {
      "cpu": "0.5",
      "memory": "256m"
    }
  }
}
```

### worker.spawn.failed

```json
{
  "event": "worker.spawn.failed",
  "host_id": "host-alpha-01",
  "worker_id": "wrk_123",
  "ts": "2026-02-10T20:00:10Z",
  "detail": {
    "code": "image_pull_failed",
    "message": "Failed to pull image",
    "retryable": false
  }
}
```

### worker.resource.limit_hit

```json
{
  "event": "worker.resource.limit_hit",
  "host_id": "host-alpha-01",
  "worker_id": "wrk_123",
  "ts": "2026-02-10T20:10:00Z",
  "detail": {
    "resource": "memory",
    "limit": "256m",
    "observed": "262m"
  }
}
```

## Policy Notes

1. WorkerHost reports events only.
2. Engine decides retry, quarantine, or termination policy.
3. WorkerHost must not auto-restart workers unless explicitly instructed by Engine policy.
