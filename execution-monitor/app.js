import { renderWorkerHosts } from "./components/worker-host.js";
import { renderWorkerCard } from "./components/worker-card.js";
import { renderExecutionView } from "./components/execution-view.js";
import { buildTerminalLines } from "./components/terminal.js";
import { DEMO_WORKERHOSTS } from "./data/demo-data.js";
import { scenarioForWorker, simulateEvents, simulateStats } from "./data/simulator.js";

/** @typedef {"demo"|"live"} DataMode */

class DemoDataSource {
  constructor() {
    this.maxWorkers = 20;
    this.maxWorkerEvents = 20;
    this.maxWorkerAgeMs = 18000;
    this.hosts = structuredClone(DEMO_WORKERHOSTS);
    this.nextWorkerId = 100;
    this.lastRuntimeMessage = "Demo runtime initialized.";
    this.tapePool = ["filesystem_read", "network_probe", "sandbox_exec", "policy_eval", "retrieval_read"];
    this.violationPool = [
      { code: "network_destination_not_allowed", category: "network", target: "unknown.remote" },
      { code: "filesystem_write_not_allowed", category: "filesystem", target: "/etc/shadow" },
      { code: "privilege_escalation_attempt", category: "process", target: "sudo su" },
      { code: "secret_access_not_allowed", category: "governance", target: "vault://prod/secrets" },
      { code: "external_exfiltration_attempt", category: "network", target: "https://drop.invalid/upload" },
    ];
    this.hosts.forEach((host) => {
      (host.workers || []).forEach((worker) => {
        if (!worker.__createdAt) worker.__createdAt = Date.now();
        if (worker.status === "approval" && !worker.__approvalRequestedAt) {
          worker.__approvalRequestedAt = Date.now();
          worker.__approvalTimeoutMs = 10000;
        }
      });
    });
  }

  async subscribeWorkers() {
    return structuredClone(this.hosts);
  }

  async subscribeEvents(workerId) {
    const worker = this.hosts.flatMap((host) => host.workers || []).find((item) => item.worker_id === workerId);
    if (!worker) return { events: [], stats: { runtime_seconds: 0, event_count: 0, violation_count: 0, monitoring_mode: "demo" } };
    const scenario = scenarioForWorker(worker);
    const events = simulateEvents(worker, scenario);
    const stats = simulateStats(worker, events);
    return { events, stats };
  }

  getWorker(workerId) {
    return this.hosts.flatMap((host) => host.workers || []).find((item) => item.worker_id === workerId) || null;
  }

  updateWorker(workerId, patch = {}) {
    const worker = this.getWorker(workerId);
    if (!worker) return null;
    Object.assign(worker, patch);
    return worker;
  }

  tick() {
    const hosts = this.hosts;
    const allWorkers = hosts.flatMap((host) => host.workers || []);
    allWorkers.forEach((worker) => {
      if (!worker.__createdAt) worker.__createdAt = Date.now();
      worker.event_count = Number(worker.event_count || 0) + Math.floor(Math.random() * 2);
    });

    // Shunt workers that run too long or collect too many events (stuck guard).
    const now = Date.now();
    for (const host of hosts) {
      host.workers = (host.workers || []).filter((worker) => {
        if (worker.status === "violation") return true;
        const age = now - Number(worker.__createdAt || now);
        const events = Number(worker.event_count || 0);
        const stuck = age > this.maxWorkerAgeMs || events >= this.maxWorkerEvents;
        if (stuck) {
          this.lastRuntimeMessage = `${worker.worker_id} shunted after ${events} events. Container recycled.`;
        }
        return !stuck;
      });
    }

    // Recycle terminated workers after a short visible period.
    for (const host of hosts) {
      host.workers = (host.workers || []).filter((worker) => {
        if (worker.status !== "violation") return true;
        const markedAt = Number(worker.__terminatedAt || 0);
        if (!markedAt) return true;
        const stale = Date.now() - markedAt > 3500;
        if (stale) {
          this.lastRuntimeMessage = `${worker.worker_id} terminated by policy. Container recycled.`;
        }
        return !stale;
      });
    }

    const activeWorkers = hosts.flatMap((host) => host.workers || []);
    const canSpawn = activeWorkers.length < this.maxWorkers;
    const random = Math.random();

    if (canSpawn && random < 0.45) {
      const targetHost = hosts[Math.floor(Math.random() * hosts.length)];
      if (targetHost) {
        const workerId = `wrk-dyn-${this.nextWorkerId++}`;
        const tape = this.tapePool[Math.floor(Math.random() * this.tapePool.length)];
        const status = Math.random() < 0.28 ? "approval" : "running";
        targetHost.workers.push({
          worker_id: workerId,
          job_id: `job-${Math.floor(1000 + Math.random() * 9000)}`,
          tape_id: tape,
          status,
          event_count: 1,
          violation_count: 0,
          __approvalRequestedAt: status === "approval" ? Date.now() : 0,
          __approvalTimeoutMs: status === "approval" ? 10000 : 0,
          __createdAt: Date.now(),
        });
        this.lastRuntimeMessage = status === "approval"
          ? `${workerId} awaiting operator approval (${tape}).`
          : `${workerId} assigned authorised workflow (${tape}).`;
      }
    } else if (activeWorkers.length > 0 && random < 0.62) {
      const worker = activeWorkers[Math.floor(Math.random() * activeWorkers.length)];
      if (worker && worker.status !== "violation") {
        const host = hosts.find((item) => (item.workers || []).some((w) => w.worker_id === worker.worker_id));
        if (host) {
          host.workers = (host.workers || []).filter((item) => item.worker_id !== worker.worker_id);
          this.lastRuntimeMessage = `${worker.worker_id} completed authorised workflow. Container recycled.`;
        }
      }
    } else if (activeWorkers.length > 0 && random < 0.82) {
      const worker = activeWorkers.find((item) => item.status === "running") || activeWorkers[0];
      if (worker) {
        worker.status = "warning";
        worker.__driftWarning = true;
        worker.event_count = Number(worker.event_count || 0) + 1;
        this.lastRuntimeMessage = `${worker.worker_id} drift warning detected. Governance audit attached.`;
      }
    } else if (activeWorkers.length > 0) {
      const worker = activeWorkers.find((item) => item.status === "running") || activeWorkers[0];
      if (worker) {
        const v = this.violationPool[Math.floor(Math.random() * this.violationPool.length)];
        worker.status = "violation";
        worker.violation_count = Number(worker.violation_count || 0) + 1;
        worker.__terminatedAt = Date.now();
        worker.__violationCode = v.code;
        worker.__violationCategory = v.category;
        worker.__violationTarget = v.target;
        this.lastRuntimeMessage = `${worker.worker_id} violation: ${v.code}. Worker terminated, container recycled.`;
      }
    }

    // Auto-expire approvals to show governance enforcement.
    const now = Date.now();
    const approvals = this.hosts.flatMap((host) => host.workers || []).filter((w) => w.status === "approval");
    approvals.forEach((worker) => {
      const requestedAt = Number(worker.__approvalRequestedAt || now);
      const timeoutMs = Math.max(1000, Number(worker.__approvalTimeoutMs || 10000));
      if (now - requestedAt > timeoutMs) {
        worker.status = "violation";
        worker.violation_count = Number(worker.violation_count || 0) + 1;
        worker.__terminatedAt = now;
        worker.__violationCode = "approval_timeout_denied";
        worker.__violationCategory = "governance";
        worker.__violationTarget = "human_approval_gate";
        this.lastRuntimeMessage = `${worker.worker_id} approval timeout (10s). Auto-denied and recycled.`;
      }
    });

    // Keep host status live for the demo.
    this.hosts.forEach((host) => {
      host.status = "online";
    });
  }
}

class LiveDataSource {
  async subscribeWorkers() {
    throw new Error("Live mode scaffold only (backend wiring pending Phase 2.1).");
  }

  async subscribeEvents() {
    return { events: [], stats: { runtime_seconds: 0, event_count: 0, violation_count: 0, monitoring_mode: "live" } };
  }
}

/** @type {Record<DataMode, any>} */
const dataSources = {
  demo: new DemoDataSource(),
  live: new LiveDataSource(),
};

let currentMode = "demo";
let hostGroups = [];
let selectedWorker = null;
const expandedHosts = new Set();
let demoTicker = null;
let demoRunning = false;
let narrativeEnabled = true;
let terminalStreamTimer = null;

const els = {
  hostGroups: document.querySelector("[data-host-groups]"),
  terminalPanel: document.querySelector("[data-execution-panel]"),
  modeLabel: document.querySelector("[data-mode-label]"),
  modeButtons: document.querySelectorAll("[data-mode-switch]"),
  narrativeToggle: document.querySelector("[data-narrative-toggle]"),
  status: document.querySelector("[data-runtime-status]"),
  introBackdrop: document.querySelector("[data-intro-backdrop]"),
  introStart: document.querySelector("[data-intro-start]"),
  introClose: document.querySelector("[data-intro-close]"),
  startDemo: document.querySelector("[data-start-demo]"),
  toastStack: document.querySelector("[data-toast-stack]"),
};

boot();

async function boot() {
  bindModeSwitch();
  bindHostToggle();
  bindWorkerOpen();
  bindApprovalActions();
  bindDemoControls();
  bindNarrativeToggle();
  await refreshWorkers();
  setStatus("Demo paused. Click Start Demo.");
}

function bindApprovalActions() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-approval-action]");
    if (!button || currentMode !== "demo") return;
    const action = button.getAttribute("data-approval-action");
    const workerId = button.getAttribute("data-approval-worker");
    if (!workerId) return;
    const source = dataSources.demo;
    const worker = source.getWorker(workerId);
    if (!worker || worker.status !== "approval") return;
    if (action === "approve_new_proposal") {
      source.updateWorker(workerId, {
        status: "running",
        event_count: Number(worker.event_count || 0) + 1,
        __approvalRequestedAt: 0,
        __approvalTimeoutMs: 0,
        __driftWarning: false,
      });
      source.lastRuntimeMessage = `${workerId} operator approved new proposal request. Execution resumed.`;
      pushToast(source.lastRuntimeMessage);
    } else {
      source.updateWorker(workerId, {
        status: "violation",
        violation_count: Number(worker.violation_count || 0) + 1,
        __terminatedAt: Date.now(),
        __violationCode: "operator_denied_approval",
        __violationCategory: "governance",
        __violationTarget: "human_approval_gate",
      });
      source.lastRuntimeMessage = `${workerId} denied by operator. Worker terminated.`;
      pushToast(source.lastRuntimeMessage);
    }
    await refreshWorkers(source.lastRuntimeMessage);
    const exists = flattenWorkers(hostGroups).find((item) => item.worker_id === workerId);
    if (exists) {
      await openWorker(workerId);
    }
  });
}

async function refreshWorkers(nextStatus = "Loading workers...") {
  setStatus(nextStatus);
  try {
    hostGroups = await dataSources[currentMode].subscribeWorkers();
    keepExpandedWithActiveWorkers();
    renderHosts();
    if (nextStatus === "Loading workers...") {
      setStatus(`Showing ${countWorkers(hostGroups)} workers across ${hostGroups.length} hosts.`);
    }
  } catch (error) {
    setStatus(String(error.message || error));
    hostGroups = [];
    renderHosts();
  }
}

function renderHosts() {
  els.hostGroups.innerHTML = renderWorkerHosts(hostGroups, expandedHosts);
  hostGroups.forEach((host) => {
    const grid = document.querySelector(`[data-worker-grid="${cssEscape(host.host_id)}"]`);
    if (!grid) return;
    grid.innerHTML = host.workers.map((worker) => renderWorkerCard(worker)).join("");
  });
}

async function openWorker(workerId) {
  const worker = flattenWorkers(hostGroups).find((item) => item.worker_id === workerId);
  if (!worker) return;
  selectedWorker = worker;
  setStatus(`Loading events for ${worker.worker_id}...`);
  try {
    const payload = await dataSources[currentMode].subscribeEvents(worker.worker_id);
    renderExecutionView(els.terminalPanel, worker, payload.events || [], payload.stats || {}, { narrative: narrativeEnabled });
    streamTerminal(payload.events || []);
    setStatus(`Worker ${worker.worker_id} loaded (${(payload.events || []).length} events).`);
  } catch (error) {
    setStatus(String(error.message || error));
  }
}

function bindModeSwitch() {
  els.modeButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const mode = button.getAttribute("data-mode-switch");
      if (mode !== "demo" && mode !== "live") return;
      currentMode = mode;
      els.modeLabel.textContent = mode.toUpperCase();
      els.modeButtons.forEach((item) => item.classList.toggle("active", item === button));
      if (currentMode !== "demo") {
        demoRunning = false;
        stopDemoTicker();
      }
      await refreshWorkers();
      selectedWorker = null;
      renderExecutionView(
        els.terminalPanel,
        { worker_id: "No worker selected", status: "idle" },
        [],
        { runtime_seconds: 0, event_count: 0, violation_count: 0, monitoring_mode: mode },
        { narrative: narrativeEnabled }
      );
      streamTerminal([]);
    });
  });
}

function bindNarrativeToggle() {
  els.narrativeToggle?.addEventListener("click", async () => {
    narrativeEnabled = !narrativeEnabled;
    els.narrativeToggle.textContent = narrativeEnabled ? "Narrative: On" : "Narrative: Off";
    els.narrativeToggle.setAttribute("aria-pressed", narrativeEnabled ? "true" : "false");
    if (!selectedWorker) {
      streamTerminal([]);
      return;
    }
    const payload = await dataSources[currentMode].subscribeEvents(selectedWorker.worker_id);
    renderExecutionView(els.terminalPanel, selectedWorker, payload.events || [], payload.stats || {}, { narrative: narrativeEnabled });
    streamTerminal(payload.events || []);
  });
}

function bindDemoControls() {
  els.introStart?.addEventListener("click", () => {
    closeIntro();
    startDemo();
  });
  els.introClose?.addEventListener("click", () => {
    closeIntro();
    setStatus("Demo paused. Click Start Demo.");
  });
  els.startDemo?.addEventListener("click", () => {
    if (currentMode !== "demo") {
      setStatus("Switch to Demo mode to run simulation.");
      return;
    }
    if (demoRunning) {
      demoRunning = false;
      stopDemoTicker();
      setStatus("Demo paused.");
      els.startDemo.textContent = "Start Demo";
      return;
    }
    startDemo();
  });
}

function startDemo() {
  demoRunning = true;
  startDemoTicker();
  setStatus("Demo running. Worker events streaming.");
  if (els.startDemo) els.startDemo.textContent = "Pause Demo";
}

function closeIntro() {
  els.introBackdrop?.classList.add("hidden");
}

function bindHostToggle() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-host-toggle]");
    if (!button) return;
    const hostId = button.getAttribute("data-host-toggle");
    if (!hostId) return;
    if (expandedHosts.has(hostId)) {
      expandedHosts.delete(hostId);
    } else {
      expandedHosts.add(hostId);
    }
    renderHosts();
  });
}

function bindWorkerOpen() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-worker-open]");
    if (!button) return;
    const workerId = button.getAttribute("data-worker-open");
    if (!workerId) return;
    openWorker(workerId);
  });
}

function keepExpandedWithActiveWorkers() {
  if (expandedHosts.size === 0) {
    hostGroups.forEach((host) => {
      const hasActive = host.workers.some((worker) =>
        worker.status === "running" || worker.status === "approval" || worker.status === "warning" || worker.status === "violation"
      );
      if (hasActive) expandedHosts.add(host.host_id);
    });
  }
}

function countWorkers(groups) {
  return groups.reduce((total, host) => total + (host.workers?.length || 0), 0);
}

function flattenWorkers(groups) {
  return groups.flatMap((host) => host.workers || []);
}

function setStatus(value) {
  if (!els.status) return;
  els.status.textContent = value;
}

function startDemoTicker() {
  stopDemoTicker();
  if (currentMode !== "demo" || !demoRunning) return;
  const source = dataSources.demo;
  if (!source || typeof source.tick !== "function") return;
  demoTicker = window.setInterval(async () => {
    if (currentMode !== "demo" || !demoRunning) return;
    source.tick();
    if (source.lastRuntimeMessage) {
      pushToast(source.lastRuntimeMessage);
    }
    await refreshWorkers(source.lastRuntimeMessage || "Demo runtime update.");

    if (!selectedWorker) {
      const firstRunning = flattenWorkers(hostGroups).find((item) => item.status === "running");
      if (firstRunning) {
        await openWorker(firstRunning.worker_id);
      }
    }

    if (!selectedWorker) return;
    const exists = flattenWorkers(hostGroups).find((item) => item.worker_id === selectedWorker.worker_id);
    if (!exists) {
      selectedWorker = null;
      renderExecutionView(
        els.terminalPanel,
        { worker_id: "No worker selected", status: "idle" },
        [],
        { runtime_seconds: 0, event_count: 0, violation_count: 0, monitoring_mode: "demo" },
        { narrative: narrativeEnabled }
      );
      streamTerminal([]);
      return;
    }
    const payload = await dataSources.demo.subscribeEvents(selectedWorker.worker_id);
    renderExecutionView(els.terminalPanel, exists, payload.events || [], payload.stats || {}, { narrative: narrativeEnabled });
    streamTerminal(payload.events || []);
  }, 1000);
}

function stopDemoTicker() {
  if (demoTicker) {
    window.clearInterval(demoTicker);
    demoTicker = null;
  }
}

function cssEscape(value) {
  return String(value).replace(/"/g, '\\"');
}

function pushToast(message) {
  if (!els.toastStack || !message) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  const text = String(message).toLowerCase();
  if (text.includes("violation") || text.includes("terminated")) toast.classList.add("fail");
  else if (text.includes("warning") || text.includes("drift") || text.includes("approval")) toast.classList.add("warn");
  toast.textContent = message;
  els.toastStack.prepend(toast);
  while (els.toastStack.children.length > 5) {
    els.toastStack.lastElementChild?.remove();
  }
  window.setTimeout(() => {
    toast.remove();
  }, 5200);
}

function streamTerminal(events) {
  const el = document.querySelector("[data-terminal-feed]");
  if (!el) return;
  if (terminalStreamTimer) {
    window.clearInterval(terminalStreamTimer);
    terminalStreamTimer = null;
  }
  const lines = buildTerminalLines(events, { narrative: narrativeEnabled });
  if (!lines.length) {
    el.textContent = "> No runtime output.";
    return;
  }
  el.textContent = "";
  let index = 0;
  terminalStreamTimer = window.setInterval(() => {
    if (index >= lines.length) {
      window.clearInterval(terminalStreamTimer);
      terminalStreamTimer = null;
      return;
    }
    el.textContent += (index === 0 ? "" : "\n") + lines[index];
    el.scrollTop = el.scrollHeight;
    index += 1;
  }, 170);
}
