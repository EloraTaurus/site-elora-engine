export const DEMO_WORKERHOSTS = [
  {
    host_id: "wh-demo-01",
    name: "Demo Host Alpha",
    status: "online",
    workers: [
      { worker_id: "wrk-alpha-01", job_id: "job-901", tape_id: "filesystem_read", status: "running", event_count: 7, violation_count: 0 },
      { worker_id: "wrk-alpha-02", job_id: "job-902", tape_id: "network_probe", status: "approval", event_count: 5, violation_count: 0 },
    ],
  },
  {
    host_id: "wh-demo-02",
    name: "Demo Host Beta",
    status: "online",
    workers: [
      { worker_id: "wrk-beta-01", job_id: "job-903", tape_id: "sandbox_exec", status: "violation", event_count: 8, violation_count: 2 },
      { worker_id: "wrk-beta-02", job_id: "", tape_id: "idle", status: "idle", event_count: 0, violation_count: 0 },
    ],
  },
];

export const DEMO_SCENARIOS = {
  normal: [
    { event_type: "process", details: { binary: "python", args: ["task.py"] }, message: "Starting worker...", policy_evaluation: { result: "pass" } },
    { event_type: "governance", details: { prompt: "Summarize latest governed task output (demo)" }, message: "Prompt received (redacted). Building proposal...", policy_evaluation: { result: "pass" } },
    { event_type: "filesystem", details: { path: "/data/input/file.csv", action: "read" }, message: "Loading input file", policy_evaluation: { result: "pass" } },
    { event_type: "network", details: { destination: "api.internal", action: "post" }, message: "Posting result to internal API", policy_evaluation: { result: "pass" } },
    { event_type: "enforcement", details: { action: "allow" }, message: "Execution completed", policy_evaluation: { result: "pass" } },
  ],
  warning: [
    { event_type: "process", details: { binary: "python", args: ["scan.py"] }, message: "Loading tape: network_probe", policy_evaluation: { result: "pass" } },
    { event_type: "network", details: { destination: "mirror.external", action: "get" }, message: "Unexpected network destination", policy_evaluation: { result: "warn", violation_code: "network_destination_unexpected" } },
    { event_type: "enforcement", details: { action: "audit" }, message: "Policy warning recorded", policy_evaluation: { result: "warn", violation_code: "network_destination_unexpected" } },
  ],
  approval: [
    { event_type: "process", details: { binary: "python", args: ["workflow.py"] }, message: "Worker booted for governed workflow", policy_evaluation: { result: "pass" } },
    { event_type: "governance", details: { gate: "human_approval", required: true }, message: "Human approval required before execution", policy_evaluation: { result: "warn", violation_code: "approval_required" } },
    { event_type: "enforcement", details: { action: "pause" }, message: "Execution paused pending operator decision", policy_evaluation: { result: "warn", violation_code: "approval_required" } },
  ],
  violation: [
    { event_type: "process", details: { binary: "python", args: ["script.py"] }, message: "Executing: python script.py", policy_evaluation: { result: "pass" } },
    { event_type: "filesystem", details: { path: "/tmp/output.txt", action: "write" }, message: "Accessing: /tmp/output.txt", policy_evaluation: { result: "warn", violation_code: "unexpected_destination" } },
    { event_type: "violation", details: { category: "network", destination: "unknown.remote" }, message: "POLICY VIOLATION: network_destination_not_allowed", policy_evaluation: { result: "fail", violation_code: "network_destination_not_allowed" } },
    { event_type: "enforcement", details: { action: "block" }, message: "BLOCKED: network_destination_not_allowed", policy_evaluation: { result: "fail", violation_code: "network_destination_not_allowed" } },
  ],
};
