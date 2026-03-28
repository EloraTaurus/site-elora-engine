import { renderWorkerHosts } from "./components/worker-host.js";
import { renderWorkerCard } from "./components/worker-card.js";
import { renderExecutionView } from "./components/execution-view.js";
import { DEMO_WORKERHOSTS } from "./data/demo-data.js";
import { scenarioForWorker, simulateEvents, simulateStats } from "./data/simulator.js";

/** @typedef {"demo"|"live"} DataMode */

class DemoDataSource {
  constructor() {
    this.hosts = structuredClone(DEMO_WORKERHOSTS);
    this.nextWorkerId = 100;
    this.lastRuntimeMessage = "Demo runtime initialized.";
    this.tapePool = ["filesystem_read", "network_probe", "sandbox_exec", "policy_eval", "retrieval_read"];
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

  tick() {
    const hosts = this.hosts;
    const allWorkers = hosts.flatMap((host) => host.workers || []);
    allWorkers.forEach((worker) => {
      worker.event_count = Number(worker.event_count || 0) + Math.floor(Math.random() * 2);
    });

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
    const canSpawn = activeWorkers.length < 10;
    const random = Math.random();

    if (canSpawn && random < 0.45) {
      const targetHost = hosts[Math.floor(Math.random() * hosts.length)];
      if (targetHost) {
        const workerId = `wrk-dyn-${this.nextWorkerId++}`;
        const tape = this.tapePool[Math.floor(Math.random() * this.tapePool.length)];
        targetHost.workers.push({
          worker_id: workerId,
          job_id: `job-${Math.floor(1000 + Math.random() * 9000)}`,
          tape_id: tape,
          status: "running",
          event_count: 1,
          violation_count: 0,
        });
        this.lastRuntimeMessage = `${workerId} assigned authorised workflow (${tape}).`;
      }
    } else if (activeWorkers.length > 0 && random < 0.72) {
      const worker = activeWorkers[Math.floor(Math.random() * activeWorkers.length)];
      if (worker && worker.status !== "violation") {
        const host = hosts.find((item) => (item.workers || []).some((w) => w.worker_id === worker.worker_id));
        if (host) {
          host.workers = (host.workers || []).filter((item) => item.worker_id !== worker.worker_id);
          this.lastRuntimeMessage = `${worker.worker_id} completed authorised workflow. Container recycled.`;
        }
      }
    } else if (activeWorkers.length > 0) {
      const worker = activeWorkers.find((item) => item.status === "running") || activeWorkers[0];
      if (worker) {
        worker.status = "violation";
        worker.violation_count = Number(worker.violation_count || 0) + 1;
        worker.__terminatedAt = Date.now();
        this.lastRuntimeMessage = `${worker.worker_id} policy violation detected. Worker terminated, container recycled.`;
      }
    }

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

const els = {
  hostGroups: document.querySelector("[data-host-groups]"),
  terminalPanel: document.querySelector("[data-execution-panel]"),
  modeLabel: document.querySelector("[data-mode-label]"),
  modeButtons: document.querySelectorAll("[data-mode-switch]"),
  status: document.querySelector("[data-runtime-status]"),
};

boot();

async function boot() {
  bindModeSwitch();
  bindHostToggle();
  bindWorkerOpen();
  await refreshWorkers();
  startDemoTicker();
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
    renderExecutionView(els.terminalPanel, worker, payload.events || [], payload.stats || {});
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
      if (currentMode === "demo") startDemoTicker();
      else stopDemoTicker();
      await refreshWorkers();
      selectedWorker = null;
      renderExecutionView(
        els.terminalPanel,
        { worker_id: "No worker selected", status: "idle" },
        [],
        { runtime_seconds: 0, event_count: 0, violation_count: 0, monitoring_mode: mode }
      );
    });
  });
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
      const hasActive = host.workers.some((worker) => worker.status === "running" || worker.status === "warning" || worker.status === "violation");
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
  if (currentMode !== "demo") return;
  const source = dataSources.demo;
  if (!source || typeof source.tick !== "function") return;
  demoTicker = window.setInterval(async () => {
    if (currentMode !== "demo") return;
    source.tick();
    await refreshWorkers(source.lastRuntimeMessage || "Demo runtime update.");
    if (!selectedWorker) return;
    const exists = flattenWorkers(hostGroups).find((item) => item.worker_id === selectedWorker.worker_id);
    if (!exists) {
      selectedWorker = null;
      renderExecutionView(
        els.terminalPanel,
        { worker_id: "No worker selected", status: "idle" },
        [],
        { runtime_seconds: 0, event_count: 0, violation_count: 0, monitoring_mode: "demo" }
      );
      return;
    }
    const payload = await dataSources.demo.subscribeEvents(selectedWorker.worker_id);
    renderExecutionView(els.terminalPanel, exists, payload.events || [], payload.stats || {});
  }, 2600);
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
