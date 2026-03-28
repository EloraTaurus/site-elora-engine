import { renderTerminalLines } from "./terminal.js";
import { renderEvents } from "./events.js";

export function renderExecutionView(root, worker, events, stats, options = {}) {
  const narrative = options.narrative !== false;
  const violations = events.filter((event) => event.event_type === "violation");
  const warnings = events.filter((event) => event.policy_evaluation?.result === "warn");
  const awaitingApproval = worker.status === "approval";

  root.querySelector("[data-worker-title]").textContent = `${worker.worker_id} · ${worker.status}`;
  root.querySelector("[data-terminal-feed]").textContent = renderTerminalLines(events, { narrative });
  root.querySelector("[data-events-list]").innerHTML = renderEvents(events) || "<div class=\"empty\">No events yet.</div>";
  root.querySelector("[data-governance-strip]").innerHTML = renderGovernanceStrip(worker, events);

  root.querySelector("[data-policy-panel]").innerHTML = `
    <div class="kv"><span>Violations</span><strong>${violations.length}</strong></div>
    <div class="kv"><span>Warnings</span><strong>${warnings.length}</strong></div>
    <div class="kv"><span>Last action</span><strong>${events.at(-1)?.event_type || "none"}</strong></div>
    ${awaitingApproval ? `
      <div class="approval-box">
        <div class="approval-title">Approval Required</div>
        <div class="approval-actions">
          <button class="approval-btn approval-allow" data-approval-action="approve" data-approval-worker="${worker.worker_id}">Approve</button>
          <button class="approval-btn approval-deny" data-approval-action="deny" data-approval-worker="${worker.worker_id}">Deny</button>
        </div>
      </div>
    ` : ""}
    <div class="policy-list">
      ${violations
        .map((event) => `<div class=\"policy-item\">${event.policy_evaluation?.violation_code || "violation"}</div>`)
        .join("") || "<div class=\"policy-item\">No violations</div>"}
    </div>
  `;

  root.querySelector("[data-stats-panel]").innerHTML = `
    <div class="kv"><span>Runtime seconds</span><strong>${Number(stats.runtime_seconds || 0).toFixed(1)}</strong></div>
    <div class="kv"><span>Event count</span><strong>${stats.event_count || events.length}</strong></div>
    <div class="kv"><span>Violation count</span><strong>${stats.violation_count || violations.length}</strong></div>
    <div class="kv"><span>Monitoring mode</span><strong>${stats.monitoring_mode || "scaffold"}</strong></div>
  `;
}

function renderGovernanceStrip(worker, events) {
  const stageOrder = ["Worker Assigned", "Tape Loaded", "Inference", "Proposal", "Justification", "Commit", "Execution"];
  const commitState =
    worker.status === "violation" ? "denied" :
    worker.status === "approval" ? "pending" :
    worker.status === "running" ? "approved" :
    "idle";
  const terminal = events.at(-1)?.event_type || "";
  const stageFromEvent =
    terminal === "process" ? "Inference" :
    terminal === "network" || terminal === "filesystem" ? "Proposal" :
    terminal === "governance" ? "Justification" :
    terminal === "enforcement" || terminal === "violation" ? "Commit" :
    "Worker Assigned";
  const activeIndex = stageOrder.indexOf(stageFromEvent);

  return stageOrder
    .map((stage, index) => {
      const done = index < activeIndex;
      const active = index === activeIndex;
      let cls = "stage";
      if (done) cls += " done";
      if (active) cls += " active";
      if (stage === "Commit") cls += ` commit-${commitState}`;
      return `<div class="${cls}">${stage}</div>`;
    })
    .join("");
}
