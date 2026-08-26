export function buildTerminalLines(events, options = {}) {
  const narrative = options.narrative !== false;
  return events.map((event) => {
    const result = String(event.policy_evaluation?.result || "pass").toLowerCase();
    const marker =
      event.event_type === "violation"
        ? "🚫"
        : event.event_type === "enforcement"
          ? (result === "fail" ? "🚫" : result === "warn" ? "⚠️" : "✅")
          : ">";
    if (narrative) return `${marker} ${event.message || summarizeEvent(event)}`;
    return `${marker} ${summarizeEvent(event)}`;
  });
}

export function renderTerminalLines(events, options = {}) {
  return buildTerminalLines(events, options).join("\n");
}

function summarizeEvent(event) {
  const details = event.details || {};
  if (event.event_type === "network") {
    return `Network destination: ${details.destination || "unknown"}`;
  }
  if (event.event_type === "filesystem") {
    return `Filesystem path: ${details.path || "unknown"}`;
  }
  if (event.event_type === "process") {
    return `Process: ${details.binary || "runtime"}`;
  }
  if (event.event_type === "violation") {
    return `Violation: ${event.policy_evaluation?.violation_code || "policy_violation"}`;
  }
  if (event.event_type === "enforcement") {
    return `Enforcement: ${details.action || "blocked"}`;
  }
  return `${event.event_type || "event"} captured`;
}
