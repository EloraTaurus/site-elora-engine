# Site / Demo Changelog

## 2026-03-29
- Reduced public Lab dashboard polling load by switching website feed calls to `lab-status.json?lite=1`.
- Added on-demand report hydration (`/public/lab-job/{job_id}`) so replay steps are fetched only when a visitor opens a scorecard.
- Tightened Lab feed payload profile (fewer heavy replay fields in default poll path) to lower Engine CPU pressure during public traffic.

## 2026-03-24
- Updated website roadmap/maturity milestones with latest Fabric operations work (local WorkerHost deploy, runtime inventory/update checks, live ops footprint rail).
- Added high-level hardware attestation roadmap note to website architecture docs (`software` -> `hardware_backed` -> `hardware_deployed`), explicitly marked as research direction.
- Added public-safe mention of LUNA/OpenTitan exploration as future feasibility work (no implementation detail claims).

## 2026-03-19
- Added latest Engine changelog sync for Fabric/WorkerHost operations under `0.17`.
- Updated website context pack docs to reflect WorkerHost bootstrap builder, GPU host policy controls, and runtime distribution (`Sync now` / `Update runtime`) direction.
- Updated public WorkerHost documentation copy with runtime update path and inference-node detection notes.

## 2026-03-09
- Formally released `Technical Disclosure and Prior Art (v1)` as a public defensive publication surface.

## 2026-03-08
- Added dedicated Architecture context page: `Architectural Influences and Community Dialogue`.
- Wired new dialogue page into Architecture left-navigation manifest and pack README ordering.
- Added standalone `lab.html` public governance testing page powered by live public Lab status feed.
- Added Public Lab navigation link on Home and sitemap entry for `lab.html`.
- Switched Public Lab from menu layout to single-surface live dashboard presentation.
- Updated Public Lab visual treatment to image-first background with softened overlay and improved mobile readability.

## 2026-03-07
- Renamed `Features` navigation label to `Architecture` across public site pages.
- Added new primary route `architecture.html` and retained `features.html` as a compatibility redirect.
- Converted Architecture page to manifest-driven context reader with left navigation and Snapshot-first landing.
- Added `Governance Pipeline` page into architecture context pack navigation.
- Added `Elora Taurus - Founder Philosophy` mission section to About page and linked from Home CTA (`Read Mission Statement`).
- Updated global topbar tagline to: `AI Governance and Security for everyone - not just the largest organisations.`
- Added workflow banner image (`Elora Taurus Workflow Banner.png`) to Architecture page.
- Converted Security Claims Matrix from table format to markdown sections for HTML parser compatibility.
- Added architecture file metadata convention: `Last updated` and `First implemented (from changelog)` across context files.

## 2026-03-06
- Added governance policy V1 controls and dry-run/testing support in live engine context references.
- Expanded replay policy snapshot and resolved policy preview context for operator workflows.

## 2026-03-03
- Stage 4 updated with guided replay progression and deterministic commit-failure walkthrough.
- Trace view switched to accordion interaction, with per-stage JSON evidence.
- End-of-tour behavior improved with explicit demo completion actions and unlock flow.

## 2026-03-02
- Governance Replay tour introduced as the primary public walkthrough.
- Stage 3 and Stage 4 layouts aligned closer to live operator surface patterns.
- Home and About pages updated to reflect current platform direction and public-safe scope.
