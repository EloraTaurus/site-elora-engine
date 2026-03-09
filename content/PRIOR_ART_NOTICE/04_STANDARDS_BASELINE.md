# Standards Baseline (Public-Domain Foundations)

This disclosure relies on established standards and long-standing engineering patterns. It does not claim invention of these primitives.

## Core Cryptographic References

- SHA-256: [NIST FIPS 180-4 - Secure Hash Standard](https://csrc.nist.gov/pubs/fips/180-4/final)
- HMAC: [RFC 2104 - HMAC: Keyed-Hashing for Message Authentication](https://www.rfc-editor.org/rfc/rfc2104)
- HMAC (NIST profile): [NIST FIPS 198-1 - The Keyed-Hash Message Authentication Code](https://csrc.nist.gov/publications/detail/fips/198/1/final)
- TLS baseline transport assumptions: [RFC 8446 - TLS 1.3](https://datatracker.ietf.org/doc/html/rfc8446)
- Cookie/session baseline semantics: [RFC 6265 - HTTP State Management Mechanism](https://datatracker.ietf.org/doc/html/rfc6265)

## Authentication and Credential References

- TOTP MFA: [RFC 6238 - Time-Based One-Time Password Algorithm](https://datatracker.ietf.org/doc/html/rfc6238)
- HOTP background: [RFC 4226 - HMAC-Based One-Time Password Algorithm](https://datatracker.ietf.org/doc/html/rfc4226)
- Password hashing (scrypt): [RFC 7914 - The scrypt Password-Based Key Derivation Function](https://datatracker.ietf.org/doc/html/rfc7914)
- Password hashing (PBKDF2): [RFC 8018 - PKCS #5](https://datatracker.ietf.org/doc/html/rfc8018)
- Bearer token usage: [RFC 6750 - OAuth 2.0 Bearer Token Usage](https://datatracker.ietf.org/doc/html/rfc6750)

## Governance, Replay, and Integrity Context

- Merkle-tree style tamper-evident logging reference model: [RFC 6962 - Certificate Transparency](https://datatracker.ietf.org/doc/html/rfc6962)
- AI governance and traceability framing: [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)
- AI management system reference: [ISO/IEC 42001](https://www.iso.org/standard/81230.html)

## Security Practice References

- API security baseline guidance: [OWASP API Security Project](https://owasp.org/www-project-api-security/)
- Transport-layer guidance: [OWASP Transport Layer Protection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)
- Session security guidance: [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- CSRF guidance: [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- Cryptographic storage guidance: [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- Key-management lifecycle guidance: [NIST SP 800-57 Part 1 Rev.5](https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final)

## Public Availability Statement

These standards and concepts are publicly documented and widely implemented across security engineering, distributed systems, and audit/compliance tooling.

Elora Taurus references them as interoperable building blocks in an applied governance architecture record.
