# Public Documentation Copy

Source: `engine/docs/OVERVIEW.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Elora Engine Overview

## Purpose

Elora Engine is a security-first AI orchestration and control-plane project with a strong focus on governance, auditability, and operational clarity.

It is designed and operated independently on self-managed infrastructure, with an emphasis on deliberate evolution rather than fast feature churn.

## What exists today (high-level)

Elora currently includes a mix of live features, operator surfaces, and evolving modules across:

- admin dashboard and governance views
- jobs audit and replay surfaces
- chat/runtime routing and job orchestration
- Fabric worker and WorkerHost management
- pipeline/runtime configuration and execution visibility
- models, permissions, and profile mapping
- knowledge, memory, and workbook controls
- alerts, SMTP, and operational notifications
- security posture and admin controls (auth, OTP, sessions, guardrails)

## Core system shape

At a high level, Elora is organized into:

- `api/` - HTTP server and route handling (admin/public/chat/workers)
- `core/` - domain logic and stateful components (jobs, pipelines, fabric, memory, behavior, etc.)
- `services/` - service-layer operations (chat, RAG, indexing)
- `admin/` - admin UI pages, auth, audit views, and layout components

See:

- `../ARCHITECTURE.md` for detailed module responsibilities
- `../OPERATIONS.md` for deployment and environment details

## Documentation approach (working model)

This docs set is structured in layers:

1. `OVERVIEW.md` - what the platform is and how it is shaped
2. `FEATURE_INDEX.md` - feature inventory and implementation status
3. `FEATURES.md` - operator summary of current capabilities and in-development work
4. `OPERATORS/` - practical section-by-section operating guidance
4. Additional docs later:
   - API/integration references
   - runbooks
   - upgrade notes
   - troubleshooting

## Status labels used in docs

- `Live` - implemented and intended for active use
- `Partial` - implemented in part, with limitations
- `Scaffolded` - visible or structured, but not fully functional
- `Planned` - identified direction, not yet implemented
