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

## Terminology Baseline for Governance Language (Pre-2025)

The following language families were already established in open standards and widely used practice before 2025.

### 1) "Admissibility before execution" / "admissibility gates"

- Standards baseline:
  - XACML decision + enforcement split (PDP/PEP) in OASIS standards, where policy is evaluated and then enforced before access/action proceeds.
  - NIST Zero Trust Architecture formalizes the same pattern: access is granted via policy decision point and policy enforcement point.
  - Kubernetes admission control uses explicit pre-persistence gate checks after authn/authz and before object creation.
- Industry application:
  - API gateways, service meshes, IAM systems, and Kubernetes platforms commonly implement pre-action policy gates using PDP/PEP or admission-controller patterns.
- Pre-2025 anchors:
  - RFC 3198 (2001)
  - OASIS XACML 3.0 (2013)
  - NIST SP 800-207 (2020)
  - Kubernetes admission-controller model (documented by CNCF/Kubernetes before 2025)

### 2) "Execution authorization before action"

- Standards baseline:
  - NIST ABAC defines authorization as attribute/policy evaluation before operations are allowed.
  - XACML and related policy frameworks define explicit authorization decision and enforcement stages.
  - NIST Zero Trust uses the same authorize-then-enforce architecture as a core access pattern.
- Industry application:
  - Enterprise ABAC/RBAC deployments, zero-trust access brokers, and policy engines (e.g., policy-as-code deployments) all use authorize-before-action controls.
- Pre-2025 anchors:
  - RFC 3198 (2001)
  - NIST SP 800-162 ABAC (2014)
  - OASIS XACML 3.0 (2013)
  - NIST SP 800-207 (2020)

### 3) "Structural refusal"

- Standards baseline:
  - "Deny by default", "fail securely", and "force all requests through access control checks" are long-standing security engineering controls.
  - "Fail-safe defaults" (permission-based allow, default deny) is a classic principle in secure-systems design.
- Industry application:
  - Secure-by-default access control in web/API systems, infrastructure policy checks, and enterprise governance programs routinely implement structural deny/fail-safe behavior.
- Pre-2025 anchors:
  - Saltzer & Schroeder secure design principles (1975; fail-safe defaults)
  - OWASP access-control guidance (deny by default / fail securely, published well before 2025)

## Defensive Positioning Note

If challenged language asserts exclusivity over phrases like admissibility-gated release, structural refusal, or pre-action authorization, the standards record shows those concepts are long-established, cross-industry control patterns predating 2025.

Elora-specific prior art is therefore positioned as implementation chronology, architecture composition, and governance-surface integration, not invention of foundational access-control primitives.

## Crosswalk: Equivalent Language Families (Elora + Industry)

These terms are commonly used as near-equivalents across standards, platforms, and security programs:

- **Admissibility gate**:
  - policy gate
  - policy evaluation gate
  - admission control
  - pre-action policy check
  - authorization checkpoint
- **Proof before execution**:
  - verification before release
  - pre-execution validation
  - policy/evidence check before action
  - assess-before-enforce
- **Continuity**:
  - runtime continuity
  - operational resilience
  - fault-tolerant progression
  - bounded recovery and resume controls
- **Binding**:
  - policy binding
  - context binding
  - identity-bound decisioning
  - request-to-decision integrity linkage
- **Proposal before execution**:
  - request under evaluation
  - candidate output
  - pending authorization artifact
  - pre-commit candidate
- **Execution governance**:
  - policy-governed execution
  - governance-enforced runtime control
  - auditable policy-constrained execution
- **Authority before execution**:
  - authorization prior to action
  - approval-before-release
  - decision authority checkpoint
- **Execution authorization**:
  - policy decision
  - access decision
  - allow/deny decision
  - permit/deny determination
- **Deny before consequence**:
  - block before side effects
  - preventive denial
  - fail-safe denial before execution impact
- **Structural refusal**:
  - deny by default
  - fail-safe default
  - fail securely
  - block on policy mismatch
- **Commit control**:
  - commit boundary control
  - release authorization control
  - final authorization gate
  - enforce-before-commit
- **Execution boundary**:
  - policy enforcement point (PEP)
  - authorization enforcement point
  - commit boundary
  - release gate

## Phrase-Variant Index (Public Reviewer Search Aid)

These phrase variants are included so reviewers can map public claims to established standards language without implying exclusivity over wording.

- `admissibility before execution`:
  - admission control before persistence
  - policy evaluation before action
  - authorize then enforce
- `authority before execution`:
  - authorization prior to action
  - approval-before-release
  - decision authority checkpoint
- `proof before execution`:
  - pre-execution verification
  - verification before release
  - evidence check before side effects
- `execution governance`:
  - policy-governed execution
  - governance-enforced runtime control
  - policy-constrained execution path
- `commit control`:
  - final authorization gate
  - commit-boundary enforcement
  - release-control checkpoint
- `deny before consequence`:
  - deny by default before side effects
  - preventive denial before execution impact
  - fail-safe block before action
- `binding`:
  - policy binding
  - context binding
  - request-to-decision binding
- `continuity`:
  - runtime continuity
  - bounded recovery/resume
  - operational continuity controls

## Neutral Legal and Disclosure Position

- This document is a technical and standards-baseline record, not a legal conclusion.
- Elora recognizes the legitimacy of individual architecture approaches, intellectual-property claims, and the right to assert those claims.
- Elora also notes that the security and governance industry it operates within has long-established foundational primitives that predate modern AI-specific narratives.
- This standards baseline is provided to map that shared historical foundation using dated, publicly available references.

## Primary Source Links (Pre-2025)

- RFC 3198 (2001): Terminology for Policy-Based Management (PDP/PEP): https://www.rfc-editor.org/rfc/rfc3198
- OASIS XACML 3.0 Core (2013): PDP/PEP authorization architecture and deny-biased enforcement model: https://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-cos01-en.pdf
- NIST SP 800-162 ABAC (2014): authorization-by-attributes before operations: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-162.pdf
- NIST SP 800-207 Zero Trust Architecture (2020): access granted through PDP/PEP: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf
- Kubernetes Admission Control docs (pre-persistence gate after authn/authz; public CNCF documentation): https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/
- OWASP Access Control guidance (deny by default / fail securely): https://devguide.owasp.org/en/04-design/02-web-app-checklist/07-access-controls/
- Saltzer & Schroeder (1975) secure design principles (fail-safe defaults): https://web.cs.wpi.edu/~cs557/f14/papers/saltzer1975_alt.html

## Additional Historical Grounding for Commit/Control Boundaries

### Transaction Processing and Commit Semantics

- ACID transaction principles and commit semantics are longstanding database/transaction-processing foundations.
- These concepts establish explicit pre-commit validity and durable commit control as core system behavior.
- Historical anchors:
  - Jim Gray, *The Transaction Concept: Virtues and Limitations* (1981)
  - Gray & Reuter, *Transaction Processing: Concepts and Techniques* (1991)

### Formal Methods and Model Checking

- Formal specification and verification methods have long used pre-action proof/validation framing for correctness and safety properties.
- This includes temporal logic approaches for concurrent/distributed systems and model-checking workflows for safety/liveness guarantees.
- Historical anchors:
  - Leslie Lamport, *The Temporal Logic of Actions* (1994)
  - Broad model-checking lineage in software/hardware verification before modern AI-era governance language.

### Distributed Consensus and Quorum Lineage

- Consensus protocols established pre-2025 authority/commit ordering in replicated systems, including quorum-driven decision acceptance.
- These patterns ground commit control as a distributed-systems primitive rather than an AI-specific invention.
- Historical anchors:
  - Paxos lineage (Lamport; widely deployed pre-2025)
  - Additional consensus families (e.g., PBFT, Raft) with explicit quorum and commit semantics.

### Secure Workflow and Orchestration Lineage

- Workflow orchestration standards have long modeled controlled step transitions, approval paths, and policy-bound process execution.
- Historical anchors:
  - WS-BPEL 2.0 (OASIS Standard, 2007)
  - Enterprise workflow/governance patterns predating AI-specific execution-governance narratives.
