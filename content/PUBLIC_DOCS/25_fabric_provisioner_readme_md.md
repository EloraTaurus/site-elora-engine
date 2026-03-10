# Public Documentation Copy

Source: `fabric/provisioner/README.md`

Note: This is a public documentation copy for the demo site. Sensitive runtime identifiers, secrets, and private deployment details are intentionally excluded from this website.

## Elora Fabric Provisioner (Alpha Skeleton)

This service is a separate infrastructure adapter.
It is not part of `engine/` and runs independently.

## Purpose

1. Accept worker provisioning requests from Elora Engine.
2. Generate bootstrap payloads for worker environments.
3. Integrate with infrastructure APIs to clone/start/destroy worker VMs.

Current alpha mode:
1. Stub mode supports API contract testing.
2. Infrastructure mode supports clone/start/destroy with automated bootstrap attachment.

## Service surfaces

1. Health/status surface.
2. Provision request surface.
3. Destroy request surface.

Requests are authenticated using a service-to-service token.

## Quick start (public-safe)

1. Create env file from template.
2. Install dependencies.
3. Start the provisioner service with your process manager.

## VM target model (current goal)

Use worker templates that are cloud-init capable and can bootstrap into a container worker runtime.

Bootstrap flow currently:
1. install container runtime
2. enable container runtime service
3. write worker bootstrap environment
4. pull and run worker image

No manual SSH bootstrap steps should be required after template setup.

## Infrastructure mode (minimal)

Configure:
1. provisioner mode selection
2. infrastructure API endpoint and credentials
3. target node and storage settings
4. worker-template mapping by worker type

### Snippet/bootstrap delivery modes

1. API upload mode
2. pre-staged dynamic mode
3. SSH publish mode

### Required template settings

Template VM must be cloud-init capable:
1. cloud-init drive attached
2. bootable OS disk present
3. guest agent recommended
4. network defaults suitable for bootstrap

## Worker image build

Build and publish the worker image using your standard container build pipeline, then ensure it is reachable by provisioned worker VMs.
