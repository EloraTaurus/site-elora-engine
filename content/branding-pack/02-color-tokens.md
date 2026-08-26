# 02 Color Tokens

## Core Palette
- `--elora-glacier`: `#f7f9fd`
- `--elora-frost`: `#edf2fb`
- `--elora-ice`: `#d9e5f7`
- `--elora-cobalt`: `#3f6fbb`
- `--elora-violet`: `#7a83c8`
- `--elora-text`: `#2f4f79`
- `--elora-deep`: `#243e66`
- `--elora-muted`: `#4e6b93`

## Semantic Colors
- `--ok`: `#22b96f`
- `--warn`: `#c79736`
- `--danger`: `#c96383`
- `--panel`: `#ffffff`
- `--panel-2`: `#f3f8ff`
- `--line`: `#c8d9ee`

## Mandatory Text Rule
- Default dark text replacement target: `#7a83c8` only for non-critical decorative text.
- Body text and data text should stay at `--elora-text` or darker for readability.
- Policy outcomes, numbers, and table cells should not use pale gradients.

## Gradient Guidance
Use gradients sparingly:
- Hero heading only.
- Primary direction: light blue -> medium blue -> violet endpoint.
- Always pair with readable fallback and text-shadow.

## Shadows
- Card: `0 8px 18px rgba(63, 111, 187, 0.08)`
- Panel: `0 14px 28px rgba(56, 92, 138, 0.10)`
- Modal: `0 24px 56px rgba(44, 86, 132, 0.20)`
