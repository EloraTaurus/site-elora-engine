# 03 UI Patterns

## Header / Navigation
- Default: transparent on hero.
- On scroll: apply a light backdrop to preserve readability over content.
- Nav pills use thin blue border and white/ice fill.

## Hero
- Keep hero copy left, visual right on desktop.
- Avoid backdrop card behind hero text unless readability fails.
- If readability drops, first increase text contrast and sharpen shadow before adding a full panel.

## Buttons
- Primary button: cobalt fill with white text.
- Secondary button: white/ice fill with cobalt text and line border.
- Disabled button: muted text and lighter border; explicit "Coming Soon" label.

## Cards / Tables
- Use white panel with `--line` border.
- Table headers slightly stronger text than body.
- Keep status pills semantically colored, but with soft backgrounds.

## Tour Panel / Modals
- White modal background.
- Clear section heading.
- Keep action row short and predictable: `Previous`, `Next`, `Close`.

## Gallery Pattern
- One active image at a time.
- Caption panel directly below image.
- Dot navigation and prev/next controls always visible.
