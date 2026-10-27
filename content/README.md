# Demo Content Source Map

These markdown files are the editable copy source for the static demo pages.

## Files

- `home.md` and `about-elora.md`: editorial source material; current public pages use static HTML and require corresponding edits
- `changelog.md`: site/demo chronology; detailed Engine and public milestone streams are separate files
- `CHANGELOG_ENGINE.md`: public-safe detailed Engine stream used by the Changelog reader, with fallbacks to `CHANGELOG_PUBLIC.md` and `changelog.md`
- `CHANGELOG_DASHBOARD_TECHNICAL.md`: sanitized technical chronology for dashboard readers
- `WEBSITE_CONTEXT_PACK/`: rendered by `demo/architecture/` through its manifest (`00_SNAPSHOT.md` opens first)
- `PUBLIC_DOCS/`: rendered by `demo/docs/` through its manifest; a `doc` query selects only a manifest-listed article
- `WEBSITE_CONTEXT_PACK/14_MEMORY_RECALL_AND_EVIDENCE.md`: architectural memory/recall scope
- `PUBLIC_DOCS/17_engine_docs_operators_knowledge_memory_workbooks_md.md`: current public memory operator/evidence guide
- `demo/memory-recall/`: static capability page with a fictional browser-local example; no live Engine connection
- `guide-tour-part-1.md`: copy used in `demo/admin/governance-replay.html` and `demo/admin/app.js`
- `guide-tour-part-2.md`: copy used in `demo/admin/replay-reviewer.html` and `demo/admin/replay-reviewer.js`
- `guide-tour-part-3.md`: copy used in `demo/admin/stage-3-deep-dive.html` and `demo/admin/stage-3-deep-dive.js`

## Update workflow

The prior-art archive includes an additive October implementation supplement
prepared on 27 October 2026. Its compilation date does not establish a first
public disclosure date. Keep the manifest, reader fallback list and visible
revision date aligned; retain earlier archive and examination dates unchanged.

1. Edit copy in the relevant markdown file.
2. Keep section IDs unchanged so mapping stays clear.
3. Apply matching changes to static HTML/JS, incoming page links and sitemap metadata.
4. Check manifest references and public-safe claims, then preview the affected pages.

## Note

Most pages do not auto-load markdown at runtime and these files act as source-of-truth docs for copy iteration.
The architecture, documentation and changelog readers fetch their declared content at runtime.

`architecture/` loads from `WEBSITE_CONTEXT_PACK/manifest.json`.
For website feature context, update files under `demo/content/WEBSITE_CONTEXT_PACK/`.

## Feature packs (runtime-loaded)

`demo/governance-pack/` supports manifest-driven packs so you can add new engine feature areas without changing page code.

1. Create a folder in `demo/content/` (example: `MODEL_RUNTIME_PACK`).
2. Add `manifest.json` in that folder using this shape:

```json
{
  "title": "Model Runtime Pack",
  "description": "Public notes for runtime controls and model operations.",
  "section_intro": "Select an article from the left navigation to load it on the right.",
  "folder": "MODEL_RUNTIME_PACK",
  "articles": [
    { "file": "01_OVERVIEW.md", "title": "Overview" },
    { "file": "02_CONTROLS.md", "title": "Controls" }
  ]
}
```

3. Add the markdown files listed in `articles`.
4. Open the page with query param:
`governance-pack/?pack=MODEL_RUNTIME_PACK`

## Review scope — 2026-10-16

Memory/Observer content and related technical guides were refreshed against the
implemented session path and retained controlled-run observations. The harder
hundred-turn comparison remains locally prepared, with live validation pending.
The manifest update date is not a claim that every historical article was
revalidated. Keep older documents' own dates and historical release labels.
