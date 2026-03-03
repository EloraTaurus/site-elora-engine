# Demo Content Source Map

These markdown files are the editable copy source for the static demo pages.

## Files

- `home.md`: copy used on the Home view in `demo/index.html` (`data-view="home"`)
- `about-elora.md`: copy used on the About view in `demo/index.html` (`data-view="about"`)
- `changelog.md`: rendered into the Home "Project Changelog" section via runtime markdown fetch
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
