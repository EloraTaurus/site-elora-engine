# Elora Engine Demo (Static)

Static public website and synthetic demo for Elora Engine. Capability guides,
curated technical documents and scripted demonstrations remain separate from
the private operational Engine.

## Included
- Explore (`demo/explore/`): static grouped directory with optional client-side filters
- Projects & Contributions (`demo/projects/`): related project work, research-data contributions and architectural exchange
- External Agent Integration (`demo/agent-integration/`) and Memory Delivery Research (`demo/memory-delivery/`): public scope and evidence guides
- Public demo status page (`demo/index.html`)
- Framework overview (`demo/overview/`) and architecture (`demo/architecture/`)
- Memory, Recall & Evidence (`demo/memory-recall/`): Engine-managed session
  recall, read-only Memory Atlas and a fictional source-inspection example
- Public documentation (`demo/docs/`) loaded from curated Markdown manifests
- Client-side demo chat (scripted responses only)
- Guided walkthroughs (`?tour=...&step=...`) for:
  - Engine snapshot
  - Incident response flow
  - Worker fabric flow
  - Build direction roadmap
- Admin demo with current section groups:
  - Operations: Dashboard, Monitoring, Fabric, Nodes, Security
  - AI Runtime: Models, Pipeline, Knowledge, Memory, Behavior, Plugin, Benchmarks
  - Administration: Operators, Settings, Documentation

## Safety
- No live endpoints
- No secrets
- No real operational data
- No backend writes

Purpose: represent current engine UX and structure with demo-safe content.

## Updating and reviewing

The public information pages use the `public-site` body class and shared
`style.css` shell: a framed pale-blue surface, desktop navigation rail and
collapsible mobile menu. Public evidence links connect Engineering, Public
Dashboard and Public Reports. The shell is scoped separately from synthetic
admin demos, the Lab and canary experiments. Public page heroes use
`elora-engineering.png`, copied unchanged from Engineering's portrait, with
horizontal and vertical fades and lower opacity on narrow screens. The older
`background.png` remains available to existing references. The cookie
policy uses matching
light colours in its standalone layout. Deploy the updated HTML pages together
with the shared stylesheet; this static-site presentation does not require an
Engine build or restart.

Update static HTML together with its related content sources; a Markdown edit
does not automatically regenerate a capability page. See `content/README.md`
for the runtime-loaded manifests and changelog streams. New public pages need
incoming links, canonical metadata and a sitemap entry.

Serve this directory with a local static HTTP server to check page links,
document loading, keyboard interactions and responsive layout. The website
uses its existing deployment process; local edits do not establish publication.
Keep implementation, controlled runtime observations, local validation and
pending live studies separately labelled. Do not copy private research exports
or operational identifiers into public examples.

Browser QA for the new guide is in `scripts/test_demo_memory_recall.cjs`.
With a local server serving `demo/`, run it with Node and Playwright available;
`ELORA_DEMO_PREVIEW_URL` can override its default loopback preview address.
It checks responsive layout, keyboard tabs, document deep links, incoming links,
manifest loading and the changelog without making Engine/model requests.
