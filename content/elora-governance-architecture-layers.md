# Elora Governance Architecture Layers

Elora can be understood as a layered governance architecture that separates proposal generation from execution authority.

The layered model explains how requests move from trusted ingress through proposal generation and admissibility evaluation before any execution occurs.

## Core Boundary Model

Inference produces a proposal.

Execution occurs only after commit authorization.

The proposal-to-commit boundary is the core governance control surface.

## 1) Trust and Ingress Layer

### Description

This layer establishes trusted entry conditions before runtime processing starts.

### Responsibilities

- Validate request authenticity and transport posture.
- Enforce origin/payload and route boundary constraints.
- Capture source metadata for downstream accountability.

### Example Elora Components

- HMAC-signed request validation and timestamp-skew controls.
- HTTPS/admin transport checks and session/cookie hardening.
- Source attribution fields captured at ingress.

## 2) Proposal Generation Layer

### Description

This layer generates candidate outcomes from inference/runtime pipelines without granting execution authority.

### Responsibilities

- Produce candidate model outputs and intermediate artifacts.
- Emit runtime events for operator observability.
- Preserve proposal context for governance evaluation.

### Example Elora Components

- Runtime pipeline stages and proposal lifecycle signaling.
- Worker/runtime paths that produce proposal artifacts.
- Structured runtime metadata used by governance surfaces.

## 3) Legitimacy and Context Layer

### Description

This layer assembles the context required to evaluate whether a proposal is legitimate in current operational state.

### Responsibilities

- Bind policy snapshot, configuration state, and authority context.
- Attach decision-class and risk context required for admissibility.
- Normalize justification signals for consistent operator interpretation.

### Example Elora Components

- Policy snapshot and resolved-policy context.
- Authority state/epoch context and decision-class binding.
- Justification payload signals (decision, reason, confidence, sources).

## 4) Admissibility Evaluation Layer (Commit Boundary)

### Description

This is the authorization boundary. Proposals are evaluated for admissibility and are either committed or blocked.

### Responsibilities

- Re-evaluate proposal admissibility at commit time.
- Apply policy checks and fail-closed controls at boundary.
- Emit deterministic decision outputs suitable for replay.

### Example Elora Components

- Commit evaluator and commit-stage enforcement.
- `blocked_commit_validation` outcomes for denied proposals.
- Policy evaluation outputs and commit decision metadata.

## 5) Execution Layer

### Description

Only proposals that pass commit authorization transition into execution and delivery.

### Responsibilities

- Release authorized outcomes to destination surfaces.
- Preserve execution-state continuity with governance decisions.
- Keep execution path aligned with policy and worker constraints.

### Example Elora Components

- Commit-authorized delivery path for chat/runtime outputs.
- Worker/fabric execution controls post-authorization.
- Termination mapping for blocked outcomes in operator status surfaces.

## 6) Evidence and Replay Layer

### Description

This layer preserves decision chronology and supports deterministic reconstruction for operator review and audit.

### Responsibilities

- Persist replay events and decision evidence artifacts.
- Verify chronology/integrity of replayed decision paths.
- Provide summary-to-trace drill-down for operators.

### Example Elora Components

- Replay events, trace surfaces, and incident topology views.
- Hash-linked replay integrity fields and verification metadata.
- Governance replay UI flows (summary, risk snapshot, policy trace, evidence).

## Why This Layering Matters

This model keeps governance as an execution control plane, not an after-the-fact log layer.

- Proposal generation is separated from authorization.
- Commit is the admissibility boundary.
- Replay is the accountability mechanism for explaining allowed or blocked outcomes.
