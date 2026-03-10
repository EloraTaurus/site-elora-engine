# Public Documentation Copy

Source: `engine/SECURITY_POSTURE_FAQ.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Elora Engine Security Posture FAQ

Purpose
- Explain why specific security and governance controls exist in the engine.
- Document expected deployment behavior so future changes do not accidentally weaken posture.
- Provide operator-facing context for common setup friction (for example HTTPS/proxy behavior).

## What does "security posture" mean here?

In Elora, "security posture" means the default behavior and controls the engine enforces around:

- transport security (HTTPS expectations)
- authentication and signed requests
- admin session handling
- admin surface exposure
- secrets handling
- auditability and safe failure behavior

The goal is to make secure behavior the default, not an optional afterthought.

## Why does the admin UI enforce HTTPS so strictly?

Admin routes handle authentication, sessions, OTP setup, and configuration changes. These should not be allowed over plaintext HTTP.

The engine therefore treats admin HTTPS as required and will reject admin requests that do not meet the HTTPS check.

## Why can "HTTPS required" appear behind a proxy?

This usually means TLS is terminated at a reverse proxy, but the engine is not configured to trust forwarded transport headers in that environment.

Without trusted proxy forwarding, the engine sees the upstream hop as plain HTTP and correctly blocks admin traffic.

## Why is proxy-header trust disabled by default?

Blindly trusting forwarded headers is unsafe when requests can reach the engine directly or through an untrusted intermediary.

Defaulting proxy-header trust to disabled prevents spoofed forwarding values from bypassing admin transport checks.

Enable trusted proxy mode only when:

- the engine is behind a trusted reverse proxy
- direct external access to the engine port is controlled
- the proxy is responsible for TLS termination and header forwarding

## What is the admin session signing secret for?

It is the signing secret used for admin session cookies.

The engine uses it to:

- sign new admin session tokens
- validate existing session tokens
- support compatibility handling for legacy auth data

If the signing secret changes, existing admin sessions become invalid and users must log in again.

## What happens if a session signing secret is not explicitly set?

The engine can still operate safely by generating a strong fallback secret and persisting it in admin metadata so signing remains stable across restarts where persistent admin storage is retained.

Operational recommendation:

- set an explicit stable session signing secret in production

## What happens if the session signing secret changes or disappears?

Expected behavior:

- existing admin sessions are invalidated after restart/deploy
- users must sign in again
- new sessions continue to work using the current secret source

This is disruptive during live operations, which is why a stable secret is recommended.

## Why are login sessions checked for suspicious time windows?

Session validation rejects tokens that look structurally valid but have unusual timing, such as future-issued timestamps or expiry windows outside expected policy.

This helps defend against malformed or tampered tokens and reduces tolerance for unexpected session shapes.

## Why does the engine rate-limit admin login attempts?

To slow brute-force attempts and reduce noise against the admin surface.

Admin authentication includes rate limiting and anomaly checks as a baseline defense control.

## Why do some controls feel strict or inconvenient?

Because the engine is intentionally optimized for governed operation, not convenience-first defaults.

Examples:

- HTTPS required for admin routes
- proxy trust is opt-in
- session signing is explicit
- secrets persistence is handled carefully

These controls reduce ambiguity and make the engine easier to reason about during audits, upgrades, and incident response.

## Where should new posture decisions be documented?

Use this FAQ for operator-facing "why" explanations, and update these docs alongside changes:

- `HOW_TO_SETUP_ELORA_ENGINE.md` (deployment/setup requirements)
- `engine/OPERATIONS.md` (runbook and configuration domains)
- `engine/CHANGELOG_ENGINE.md` (what changed and when)
