import { renderTerminalLines } from "./terminal.js";
import { renderEvents } from "./events.js";

export function renderExecutionView(root, worker, events, stats) {
  const violations = events.filter((event) => event.event_type === "violation");
  const warnings = events.filter((event) => event.policy_evaluation?.result === "warn");

  root.querySelector("[data-worker-title]").textContent = `${worker.worker_id} · ${worker.status}`;
  root.querySelector("[data-terminal-feed]").textContent = renderTerminalLines(events);
  root.querySelector("[data-events-list]").innerHTML = renderEvents(events) || "<div class=\"empty\">No events yet.</div>";

  root.querySelector("[data-policy-panel]").innerHTML = `
    <div class="kv"><span>Violations</span><strong>${violations.length}</strong></div>
    <div class="kv"><span>Warnings</span><strong>${warnings.length}</strong></div>
    <div class="kv"><span>Last action</span><strong>${events.at(-1)?.event_type || "none"}</strong></div>
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
