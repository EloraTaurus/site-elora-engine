export function renderEvents(events) {
  return events
    .map((event) => {
      const result = event.policy_evaluation?.result || "pass";
      const code = event.policy_evaluation?.violation_code || "";
      return `
        <div class="event-row">
          <div class="event-head">
            <span class="event-seq">#${event.event_sequence}</span>
            <span class="event-type">${escapeHtml(event.event_type)}</span>
            <span class="event-result event-result-${escapeHtml(result)}">${escapeHtml(result)}</span>
          </div>
          <div class="event-meta">${escapeHtml(event.timestamp)}</div>
          <div class="event-details">${escapeHtml(JSON.stringify(event.details || {}))}</div>
          ${code ? `<div class="event-code">${escapeHtml(code)}</div>` : ""}
        </div>
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
