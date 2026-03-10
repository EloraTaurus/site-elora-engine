# Public Documentation Copy

Source: `engine/docs/OPERATORS/SECURITY_AND_ACCESS_CONTROL.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Security and Access Control

Status: Live / Partial

## Purpose and scope

Guide for admin auth, sessions, OTP, HTTPS enforcement, posture settings, and access boundaries.

## To document next

- admin bootstrap and first privileged-operator flow
- login, forced password change, OTP enable/disable/recovery
- session-signing behavior and rotation expectations
- reverse-proxy HTTPS trust requirements
- IP allowlist behavior and deployment caveats

## Authority scope recovery

Authority scope recovery procedures exist for cases where governance configuration locks administrative access. These procedures require direct engine access and are documented in private operator runbooks.

## Related docs

- `../../SECURITY_POSTURE_FAQ.md`
- `../../../HOW_TO_SETUP_ELORA_ENGINE.md`
