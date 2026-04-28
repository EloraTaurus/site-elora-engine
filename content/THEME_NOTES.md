# Elora Theme Notes (Public Demo + Replay Surfaces)

Last updated: 2026-04-28

## Purpose
- Keep website, replay demo, and engine-facing admin surfaces visually aligned.
- Make future color adjustments quick and low-risk by editing shared tokens first.

## Primary Palette
- `--elora-glacier`: `#f7f9fd` (base light)
- `--elora-frost`: `#edf2fb` (page background blend)
- `--elora-ice`: `#d9e5f7` (soft borders)
- `--elora-cobalt`: `#3f6fbb` (primary accent/action)
- `--elora-violet`: `#7a83c8` (secondary accent/highlight)
- `--elora-text`: `#2f4f79` (default body text)
- `--elora-deep`: `#243e66` (stronger headings/contrast)
- `--elora-muted`: `#4e6b93` (secondary text)

## Semantic UI Tokens
- `--ok`: `#22b96f`
- `--warn`: `#c79736`
- `--danger`: `#c96383`
- `--panel`: `#ffffff`
- `--panel-2`: `#f3f8ff`
- `--line` / `--panel-border`: `#c8d9ee` family

## Shadow & Elevation
- Prefer soft blue elevation for cards and controls:
  - subtle: `rgba(63, 111, 187, 0.10)` range
  - stronger overlays/modals: `rgba(63, 111, 187, 0.16-0.20)` range

## Usage Guidance
- First edit token values in:
  - `demo/style.css`
  - `demo/admin/style.css`
  - `engine/admin-assets/admin-theme.css`
  - `admin-assets/admin-theme.css`
- Avoid one-off hex values unless truly isolated.
- For state pills, keep green/amber/red semantics but use light backgrounds and readable dark text.

## Accessibility Guardrail
- Keep body copy and table text at or darker than `#35597f` on white surfaces.
- Avoid very pale gradients on hero headings without either:
  - darker gradient endpoint, or
  - stronger text shadow.

