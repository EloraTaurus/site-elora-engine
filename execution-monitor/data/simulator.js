import { DEMO_SCENARIOS } from "./demo-data.js";

export function scenarioForWorker(worker) {
  if (worker.status === "violation") return "violation";
  if (worker.status === "approval") return "approval";
  if (worker.status === "warning" && worker.__driftWarning) return "drift_warning";
  if (worker.status === "warning") return "warning";
  return "normal";
}

export function simulateEvents(worker, scenarioName = "normal") {
  const now = Date.now();
  const scenario = DEMO_SCENARIOS[scenarioName] || DEMO_SCENARIOS.normal;
  return scenario.map((item, idx) => {
    const details = { ...(item.details || {}) };
    const policy = { ...(item.policy_evaluation || {}) };
    let message = item.message;

    if (scenarioName === "violation") {
      const code = String(worker.__violationCode || policy.violation_code || "policy_violation");
      const category = String(worker.__violationCategory || details.category || "runtime");
      const target = String(worker.__violationTarget || details.destination || details.path || "unknown");
      details.category = category;
      details.target = target;
      if (item.event_type === "violation") {
        policy.violation_code = code;
        message = `POLICY VIOLATION: ${code}`;
      }
      if (item.event_type === "enforcement") {
        policy.violation_code = code;
        message = `BLOCKED: ${code}`;
      }
    }

    if (scenarioName === "approval" && item.event_type === "governance") {
      const requestedAt = Number(worker.__approvalRequestedAt || now);
      const timeoutMs = Math.max(1000, Number(worker.__approvalTimeoutMs || 10000));
      const remaining = Math.max(0, timeoutMs - (now - requestedAt));
      const remainingSecs = Math.ceil(remaining / 1000);
      details.remaining_seconds = remainingSecs;
      message = `Human approval required (${remainingSecs}s remaining)`;
    }

    return {
    event_id: `${worker.worker_id}-${idx + 1}`,
    event_sequence: idx + 1,
    timestamp: new Date(now + idx * 900).toISOString(),
    event_type: item.event_type,
    details,
    message,
    policy_evaluation: policy,
  };
  });
}

export function simulateStats(worker, events) {
  return {
    runtime_seconds: Number((events.length * 0.8).toFixed(1)),
    event_count: events.length,
    violation_count: events.filter((event) => event.event_type === "violation").length,
    monitoring_mode: "demo",
    worker_id: worker.worker_id,
  };
}
