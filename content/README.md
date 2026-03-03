# Demo Content Source Map

These markdown files are the editable copy source for the static demo pages.

## Files

- `home.md`: copy used on the Home view in `demo/index.html` (`data-view="home"`)
- `about-elora.md`: copy used on the About view in `demo/index.html` (`data-view="about"`)
- `changelog.md`: rendered into the Home "Project Changelog" section via runtime markdown fetch
- `features.md`: rendered into `demo/features.html` for current vs planned capability status
- `guide-tour-part-1.md`: copy used in `demo/admin/governance-replay.html` and `demo/admin/app.js`
- `guide-tour-part-2.md`: copy used in `demo/admin/replay-reviewer.html` and `demo/admin/replay-reviewer.js`
- `guide-tour-part-3.md`: copy used in `demo/admin/stage-3-deep-dive.html` and `demo/admin/stage-3-deep-dive.js`

## Update workflow

1. Edit copy in the relevant markdown file.
2. Keep section IDs unchanged so mapping stays clear.
3. Share the updated markdown back and I will apply it into HTML/JS.

## Note

Most pages do not auto-load markdown at runtime and these files act as source-of-truth docs for copy iteration.
Exception: `changelog.md` is fetched and rendered at runtime on Home and Changelog views.

`features.md` should be kept aligned with `context/WEBSITE_CONTEXT_PACK/` (recommended website order in that pack's `README.md`).

## Feature packs (runtime-loaded)

`demo/governance-pack.html` now supports manifest-driven packs so you can add new engine feature areas without changing page code.

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
`governance-pack.html?pack=MODEL_RUNTIME_PACK`
