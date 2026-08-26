export function renderWorkerCard(worker) {
  const statusClass = {
    running: "worker-running",
    idle: "worker-idle",
    approval: "worker-approval",
    warning: "worker-warning",
    violation: "worker-violation",
  }[worker.status] || "worker-idle";

  return `
    <button class="worker-card ${statusClass}" data-worker-open="${escapeHtml(worker.worker_id)}">
      <div class="worker-card-head">
        <strong>${escapeHtml(worker.worker_id)}</strong>
        <span class="worker-status-pill">${escapeHtml(worker.status)}</span>
      </div>
      <div class="worker-meta">job: ${escapeHtml(worker.job_id || "none")}</div>
      <div class="worker-meta">tape: ${escapeHtml(worker.tape_id || "unknown")}</div>
      <div class="worker-stats">
        <span>${Number(worker.event_count || 0)} events</span>
        <span>${Number(worker.violation_count || 0)} violations</span>
      </div>
    </button>
  `;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
