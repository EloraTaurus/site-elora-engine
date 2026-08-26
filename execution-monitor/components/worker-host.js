export function renderWorkerHosts(hosts, expandedHosts) {
  return hosts
    .map((host) => {
      const expanded = expandedHosts.has(host.host_id);
      const statusClass = host.status === "online" ? "status-online" : "status-offline";
      return `
        <section class="host-group" data-host-id="${escapeHtml(host.host_id)}">
          <button class="host-header" data-host-toggle="${escapeHtml(host.host_id)}">
            <span class="host-chevron">${expanded ? "▾" : "▸"}</span>
            <span class="host-name">${escapeHtml(host.name || host.host_id)}</span>
            <span class="host-status ${statusClass}">${escapeHtml(host.status)}</span>
            <span class="host-count">${host.workers.length} workers</span>
          </button>
          <div class="host-workers" ${expanded ? "" : "hidden"}>
            <div class="worker-grid" data-worker-grid="${escapeHtml(host.host_id)}"></div>
          </div>
        </section>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
