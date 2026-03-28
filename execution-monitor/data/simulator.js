import { DEMO_SCENARIOS } from "./demo-data.js";

export function scenarioForWorker(worker) {
  if (worker.status === "violation") return "violation";
  if (worker.status === "warning") return "warning";
  return "normal";
}

export function simulateEvents(worker, scenarioName = "normal") {
  const now = Date.now();
  const scenario = DEMO_SCENARIOS[scenarioName] || DEMO_SCENARIOS.normal;
  return scenario.map((item, idx) => ({
    event_id: `${worker.worker_id}-${idx + 1}`,
    event_sequence: idx + 1,
    timestamp: new Date(now + idx * 900).toISOString(),
    event_type: item.event_type,
    details: item.details,
    message: item.message,
    policy_evaluation: item.policy_evaluation,
  }));
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
