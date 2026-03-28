import { renderWorkerHosts } from "./components/worker-host.js";
import { renderWorkerCard } from "./components/worker-card.js";
import { renderExecutionView } from "./components/execution-view.js";
import { DEMO_WORKERHOSTS } from "./data/demo-data.js";
import { scenarioForWorker, simulateEvents, simulateStats } from "./data/simulator.js";

/** @typedef {"demo"|"live"} DataMode */

class DemoDataSource {
  async subscribeWorkers() {
    return structuredClone(DEMO_WORKERHOSTS);
  }

  async subscribeEvents(workerId) {
    const worker = flattenWorkers(DEMO_WORKERHOSTS).find((item) => item.worker_id === workerId);
    if (!worker) return { events: [], stats: { runtime_seconds: 0, event_count: 0, violation_count: 0, monitoring_mode: "demo" } };
    const scenario = scenarioForWorker(worker);
    const events = simulateEvents(worker, scenario);
    const stats = simulateStats(worker, events);
    return { events, stats };
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
}

async function refreshWorkers() {
  setStatus("Loading workers...");
  try {
    hostGroups = await dataSources[currentMode].subscribeWorkers();
    keepExpandedWithActiveWorkers();
    renderHosts();
    setStatus(`Showing ${countWorkers(hostGroups)} workers across ${hostGroups.length} hosts.`);
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

function cssEscape(value) {
  return String(value).replace(/"/g, '\\"');
}
