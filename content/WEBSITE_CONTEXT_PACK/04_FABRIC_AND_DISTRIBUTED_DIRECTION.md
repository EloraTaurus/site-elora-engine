# Fabric and Distributed Direction

## Fabric Trajectory

Fabric is being shaped as the execution surface for worker lifecycle and host orchestration.

Near-term focus:
- cleaner WorkerHost and Provisioner split,
- clearer VM vs container operational boundaries,
- safer lifecycle controls.

## Multi-VM Direction

Planned architecture direction includes stronger control/data plane separation:
- Engine as central policy/decision authority,
- Worker hosts as execution surfaces,
- GPU/inference infrastructure as dedicated compute tier,
- identity-based east-west trust instead of network-location trust.

## Strategic Outcome

The goal is not just scale.
The goal is scaled governance with deterministic admissibility behavior across distributed execution paths.
