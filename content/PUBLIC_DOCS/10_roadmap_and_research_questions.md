# Roadmap and Research Questions (Architect View)

## Near-term architecture priorities

1) Commit determinism hardening
- finalize complete commit-input contract coverage across all paths,
- enforce consistent capture of authority-at-proposal and authority-at-commit.

2) Evidence integrity
- move from tamper-evidence to stronger immutability guarantees,
- add periodic replay-chain verification with alerting.

3) Route and module decomposition
- split monolithic runtime handlers into bounded modules,
- isolate commit engine, replay persistence, and governance policy services.

4) Fabric readiness
- identity-first worker host trust,
- scoped capability tokens for worker->GPU interactions,
- deterministic telemetry handoff across nodes.

5) Research-engine maturity
- deepen public-safe research dashboards and report storytelling,
- improve operator understanding of continuity, intervention, and behavioural evidence,
- keep demo-safe documentation aligned with the real research direction without exposing internal playbooks.

## Mid-term transition priorities

- multi-VM control/data split with private engine control plane,
- pluggable inference backends (vLLM-ready path),
- retrieval architecture split (metadata vs vector index responsibilities),
- governance portability across local and remote execution tiers.
- trust-mode progression from software-only controls to hardware-backed attestation evidence.
- broader ERIS maturity for runtime posture interpretation under bounded controls.
- EBLS expansion so Elora can learn recognizable AI behaviours through non-neural methods and link them back to policy-relevant evidence.
- supervised Training and Education pathways for adding bounded capability skills not typically associated with inference control planes.

## Hardware attestation research direction (high-level)

- define evidence contract for hardware-backed node identity claims (when TPM/silicon features are present),
- keep commit/replay semantics unchanged while extending provenance with attestation artifacts,
- evaluate feasibility paths including LUNA board and OpenTitan-aligned flows.

## Open research/design questions

- What is the minimum authority claim set required for admissibility proofs?
- Which evidence fields must be cryptographically bound to survive legal/compliance scrutiny?
- How should decision classes evolve per worker type without policy sprawl?
- What replay completeness SLO should be enforced before production certification?
- How should risk-tier routing decisions be encoded once remote GPUs are introduced?
- Which non-neural learning methods best distinguish meaningful AI behaviour classes under constrained compute conditions?
- How should ERIS and EBLS remain separated so runtime self-intelligence never becomes execution authority?
- What evidence depth is sufficient for public disclosure of serious research capability without handing over private operational methods?

## Advanced acceptance criteria examples

- Commit decisions are reproducible for >= 99.9% of non-legacy jobs.
- Replay integrity checks detect and alert on chain mismatch within one polling cycle.
- Authority drift is explicitly captured and evaluated at commit for all privileged worker classes.
- Governance replay explains block cause in <= 10 seconds for top incident categories.
