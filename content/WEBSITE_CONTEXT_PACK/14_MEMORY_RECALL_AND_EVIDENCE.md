# Memory, Recall and Evidence

Last updated: 2026-10-16

First implemented (from changelog): 2026-04-09 for Observer compaction;
Memory Atlas session inspection added in October 2026.

## The architectural distinction

Elora's Engine manages scoped retrieval and context admission. Stored records
can persist across process rotations while only a bounded selection reaches a
model request. Persistence describes retention; it does not imply unrestricted
model access to a database. An adapter may scan eligible storage internally.

The evidence path is stored, eligible, recalled, admitted and submitted. Each
transition has a separate meaning. Retained evidence of submission does not
establish internal model reliance or the truth of the source material.

## Memory Atlas

Memory Atlas is a read-only Sense view over retained session evidence, distinct
from Execution Atlas. Graph/list navigation links saved fragments, recorded
recall selections, model delivery checks and source inspection. It does not
replace the memory engine, infer a new authoritative knowledge graph, grant
permissions or promote notes into learning.

Corrections remain attributable to their source. A correction to one project's
reference is not a general user preference. Historical snapshots and missing
source/delivery evidence remain explicit rather than becoming invented state.
Delivery to Observer's separate opinion model is not instrumented by Atlas in
this version; the model-delivery view covers the selected actor request.

## Current research state

Bounded session storage, recall, compaction and inspection are implemented.
A controlled twelve-arm study completed with retained process-rotation and
provider-request evidence, with delivery-dependent model compliance. This is
scoped observation, not independent validation or proof of causality.

A hundred-turn-per-arm comparison of Native only and Native with Simplified
preparation is prepared locally (100 turns per arm, 200 total). It isolates session memory between arms and
retains it across planned rotations within an arm. Context pressure, corrections,
discarded distractors and local response tasks provide a harder workload.
Feature receipts and model task scores remain separate; growth must be observed
rather than inferred from enabling adaptive memory. This new study has no live
results yet; live validation remains pending.

## Separate future capabilities

General real-user memory across sessions is not established by this feature.
Synthetic-user studies are research rather than a product-availability claim.
NNLSL already exists separately, but a session-memory-to-NNLSL bridge is not
enabled here. Explicit consent, ownership, retention and learning standards
must precede any future user-memory or learning integration.

The public Memory, Recall & Evidence page uses fictional examples. Private
prompts, operational records and infrastructure details remain outside the
website boundary.
