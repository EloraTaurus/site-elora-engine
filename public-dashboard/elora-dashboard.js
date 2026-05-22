(function () {
  "use strict";

  var CONFIG_VERSION = "dashboard-v1.1.0";
  var DEFAULTS = {
    endpoint: "/public/api/dashboard/telemetry-v1",
    pollMs: 7000,
    minPollMs: 2000,
    maxPollMs: 30000,
    maxEventDots: 14,
    staleAfterOverrideS: 0,
    musicSrc: "/soundtrack/",
    musicVolume: 0.1,
    musicAutoplay: false,
    tonePresets: {
      deterministic: "#6b9fda",
      semantic: "#9a81dc",
      markov: "#49c7cc",
      clarify: "#daab56",
      evolutionary: "#de8fc8",
      governance: "#cb7588"
    }
  };

  function asInt(value, fallback) {
    var n = parseInt(String(value == null ? "" : value), 10);
    return Number.isFinite(n) ? n : (fallback || 0);
  }

  function asFloat(value, fallback) {
    var n = parseFloat(String(value == null ? "" : value));
    return Number.isFinite(n) ? n : (fallback || 0);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function formatCount(value) {
    var n = asInt(value, 0);
    if (n <= 0) return "0";
    return n.toLocaleString("en-GB");
  }

  function formatConfidence(value) {
    var n = asFloat(value, 0);
    if (n <= 0) return "n/a";
    return (n * 100).toFixed(1) + "%";
  }

  function formatRuntimeSeconds(value) {
    var n = asFloat(value, 0);
    if (n <= 0) return "0.0s";
    if (n >= 3600) return (n / 3600).toFixed(1) + "h";
    return n.toFixed(1) + "s";
  }

  function titleCase(value) {
    var raw = String(value || "").trim().toLowerCase();
    if (!raw) return "";
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  }

  function setText(root, selector, value) {
    var el = root.querySelector(selector);
    if (!el) return;
    el.textContent = String(value);
  }

  function dashboardTemplate() {
    return [
      '<section class="elora-dashboard" data-ed-version="' + CONFIG_VERSION + '">',
      '  <header class="ed-topbar">',
      '    <div>',
      '      <div class="ed-brand-row">',
      '        <span class="ed-brand-mark">ELORA</span>',
      '        <h2>Live Runtime Schema</h2>',
      "      </div>",
      '      <div class="ed-subline">',
      '        <span class="ed-chip is-live" data-ed-status-label>System Online</span>',
      '        <span data-ed-status-detail>Public runtime telemetry active.</span>',
      "      </div>",
      "    </div>",
      '    <div class="ed-topbar-right">',
      '      <p class="ed-updated" data-ed-updated>Last updated: --</p>',
      '      <span class="ed-chip" data-ed-plugin-chip>Advisory Runtime Offline</span>',
      '      <div class="ed-audio-controls" data-ed-audio-controls hidden>',
      '        <span class="ed-chip" data-ed-audio-state>Theme Paused</span>',
      '        <button type="button" class="ed-audio-btn" data-ed-audio-play>Play</button>',
      '        <button type="button" class="ed-audio-btn" data-ed-audio-mute>Mute</button>',
      "      </div>",
      "    </div>",
      "  </header>",
      '  <section class="ed-panel">',
      '  <div class="ed-stage-grid">',
      '    <article class="ed-io">',
      "      <h3>Input</h3>",
      '      <div class="ed-value" data-ed-input>0</div>',
      '      <p>Prompt tokens (current job)</p>',
      '      <p class="ed-submetric" data-ed-input-sub>Completed: 0</p>',
      '      <p class="ed-mini" data-ed-job>no recent job</p>',
      '      <p>Request state: <strong data-ed-state>Idle</strong></p>',
      '      <p>Busy threshold: <strong data-ed-busy>n/a</strong></p>',
      "    </article>",
      '    <article class="ed-hcu-main">',
      "      <h3>HCU Advisory Units</h3>",
      '      <p class="ed-hcu-sub">HCU Runtime Activation Planned · Visualization Preview Mode.</p>',
      '      <div class="ed-hcu-grid">',
      '        <div class="ed-core-node"><strong>ELORA CORE</strong><span>Primary NNAI Node</span><em>Orchestration Ready</em></div>',
      '        <div class="ed-hcu-node"><strong>Emotion HCU</strong><span>No advisory activity</span></div>',
      '        <div class="ed-hcu-node"><strong>Intent HCU</strong><span>Awaiting runtime</span></div>',
      '        <div class="ed-hcu-node"><strong>Governance HCU</strong><span>Standby</span></div>',
      '        <div class="ed-hcu-node"><strong>Semantic HCU</strong><span>Idle</span></div>',
      '        <div class="ed-hcu-node"><strong>Contradiction HCU</strong><span>No conflicts</span></div>',
      '        <div class="ed-hcu-node"><strong>Translation HCU</strong><span>Inactive</span></div>',
      "      </div>",
      '      <div class="ed-bus"><strong>Governed Cognitive Bus</strong><span>Reserved for governed cognition transport and replay artifacts.</span></div>',
      "    </article>",
      '    <article class="ed-io">',
      "      <h3>Output</h3>",
      '      <div class="ed-value" data-ed-output>0</div>',
      '      <p>Response tokens (current job)</p>',
      '      <p class="ed-submetric" data-ed-output-sub>Completed: 0</p>',
      '      <p class="ed-mini">Confidence: <strong data-ed-confidence>n/a</strong></p>',
      '      <p>Queue depth: <strong data-ed-queue>0</strong></p>',
      '      <p>Running now: <strong data-ed-running>0</strong></p>',
      "    </article>",
      "  </div>",
      '  <div class="ed-strip">',
      '    <article><div class="k">0/6</div><div class="t">Active HCUs</div></article>',
      '    <article><div class="k" data-ed-pressure>Low</div><div class="t">Runtime Pressure</div></article>',
      '    <article><div class="k" data-ed-summary-queue>0</div><div class="t">Queue Depth</div></article>',
      '    <article><div class="k" data-ed-plugin>Offline</div><div class="t">Advisory Runtime</div></article>',
      '    <article><div class="k">Stable</div><div class="t">Governance State</div></article>',
      '    <article><div class="k" data-ed-replay>0</div><div class="t">Replay Events</div></article>',
      '    <article><div class="k" data-ed-method>Research: Observer</div><div class="t">Current Method Chain</div></article>',
      '    <article><div class="k" data-ed-paths>Dormant</div><div class="t">Active Reasoning Paths</div></article>',
      "  </div>",
      "  </section>",
      '  <section class="ed-pulse-wrap">',
      "    <h3>Cognitive Pulse</h3>",
      '    <p class="ed-pulse-sub">live replay • queue activity • runtime pressure • governed signals</p>',
      '    <div class="ed-pulse-track tone-deterministic" data-ed-pulse-track>',
      '      <div class="ed-pulse-wave" data-ed-pulse-wave></div>',
      '      <div class="ed-pulse-dots" data-ed-pulse-dots></div>',
      "    </div>",
      '    <div class="ed-pills" data-ed-pills></div>',
      "  </section>",
      '  <section class="ed-kpi">',
      "    <h3>Elora Runtime Intelligence - KPI Dashboard</h3>",
      '    <div class="ed-kpi-groups">',
      '      <section class="ed-kpi-group"><h4>Runtime Activity</h4><div class="ed-kpi-grid">',
      '        <article><div class="k" data-ed-kpi-total-runs>0</div><div class="t">Total Runs</div></article>',
      '        <article><div class="k" data-ed-kpi-total-steps>0</div><div class="t">Total Steps</div></article>',
      '        <article><div class="k" data-ed-kpi-total-runtime>0.0s</div><div class="t">Total Research Runtime</div></article>',
      '        <article><div class="k" data-ed-kpi-active-research>0</div><div class="t">Active Research Jobs</div></article>',
      "      </div></section>",
      '      <section class="ed-kpi-group"><h4>Efficiency</h4><div class="ed-kpi-grid">',
      '        <article><div class="k" data-ed-kpi-tokens-generated>0</div><div class="t">Tokens Generated</div></article>',
      '        <article><div class="k" data-ed-kpi-net-saved>0</div><div class="t">Net Tokens Saved</div></article>',
      '        <article><div class="k" data-ed-kpi-compute-saved>0.00%</div><div class="t">Compute Saved</div></article>',
      '        <article><div class="k" data-ed-kpi-deterministic>0.00%</div><div class="t">Deterministic Response %</div></article>',
      "      </div></section>",
      '      <section class="ed-kpi-group"><h4>Governance & Recovery</h4><div class="ed-kpi-grid">',
      '        <article><div class="k" data-ed-kpi-interventions>0</div><div class="t">Interventions</div></article>',
      '        <article><div class="k" data-ed-kpi-repairs>0</div><div class="t">Successful Repairs</div></article>',
      '        <article><div class="k" data-ed-kpi-governance-decisions>0</div><div class="t">Governance Decisions</div></article>',
      '        <article><div class="k" data-ed-kpi-clarify-events>0</div><div class="t">Clarify Events</div></article>',
      "      </div></section>",
      '      <section class="ed-kpi-group"><h4>Learning & Cognition</h4><div class="ed-kpi-grid">',
      '        <article><div class="k" data-ed-kpi-lexicon>0</div><div class="t">NNAI Lexicon Learned</div></article>',
      '        <article><div class="k" data-ed-kpi-learning-signals>0</div><div class="t">Learning Signals</div></article>',
      '        <article><div class="k" data-ed-kpi-semantic-frames>0</div><div class="t">Semantic Frames</div></article>',
      '        <article><div class="k" data-ed-kpi-hcu-artifacts>0</div><div class="t">HCU Advisory Artifacts</div></article>',
      "      </div></section>",
      "    </div>",
      "  </section>",
      '  <section class="ed-proof">',
      "    <h3>Safe Proof Extracts</h3>",
      '    <div class="ed-proof-grid">',
      '      <article><h4>Latest Learning Extract</h4><pre data-ed-proof-learning>{}</pre></article>',
      '      <article><h4>Latest Governed Decision</h4><pre data-ed-proof-decision>{}</pre></article>',
      "    </div>",
      "  </section>",
      '  <audio data-ed-audio hidden loop preload="metadata"></audio>',
      "</section>"
    ].join("");
  }

  function bindAudioControls(root, audio) {
    var controls = root.querySelector("[data-ed-audio-controls]");
    var playBtn = root.querySelector("[data-ed-audio-play]");
    var muteBtn = root.querySelector("[data-ed-audio-mute]");
    var stateChip = root.querySelector("[data-ed-audio-state]");
    if (!controls || !playBtn || !muteBtn || !stateChip) return;

    var sync = function () {
      var muted = Boolean(audio.muted || audio.volume <= 0);
      var playing = !audio.paused && !audio.ended;
      playBtn.textContent = playing ? "Pause" : "Play";
      muteBtn.textContent = muted ? "Unmute" : "Mute";
      stateChip.textContent = playing ? "Theme Playing" : "Theme Paused";
      controls.classList.toggle("is-playing", playing);
    };

    if (controls.getAttribute("data-bound") !== "1") {
      playBtn.addEventListener("click", function () {
        if (audio.paused || audio.ended) {
          audio.play().catch(function () {});
        } else {
          audio.pause();
        }
      });
      muteBtn.addEventListener("click", function () {
        audio.muted = !audio.muted;
        sync();
      });
      audio.addEventListener("play", sync);
      audio.addEventListener("pause", sync);
      audio.addEventListener("ended", sync);
      audio.addEventListener("volumechange", sync);
      controls.setAttribute("data-bound", "1");
    }
    sync();
  }

  function configureAudio(instance) {
    var controls = instance.el.querySelector("[data-ed-audio-controls]");
    var audio = instance.el.querySelector("[data-ed-audio]");
    if (!audio) return;
    var src = String(instance.options.musicSrc || instance.el.getAttribute("data-music-src") || "").trim();
    if (src && src.charAt(src.length - 1) === "/") {
      src = src + "theme.mp3";
    }
    if (!src) {
      if (controls) controls.hidden = true;
      audio.hidden = true;
      return;
    }
    if (controls) controls.hidden = false;
    audio.hidden = true;
    audio.src = src;
    bindAudioControls(instance.el, audio);
    audio.addEventListener("error", function () {
      if (controls) controls.hidden = true;
    }, { once: true });
    var volume = asFloat(instance.options.musicVolume || instance.el.getAttribute("data-music-volume"), 0.1);
    audio.volume = clamp(volume, 0.0, 1.0);
    var autoplay = Boolean(instance.options.musicAutoplay) || String(instance.el.getAttribute("data-music-autoplay") || "").trim().toLowerCase() === "true";
    if (autoplay) {
      audio.play().catch(function () {});
    }
  }

  function pickTone(runtime, currentJob) {
    var pressure = String(runtime.pressure || "").toLowerCase();
    var source = String(currentJob.source || "").toLowerCase();
    var status = String(currentJob.status || "").toLowerCase();
    var stage = String(currentJob.stage_name || "").toLowerCase();

    if (status.indexOf("clarify") >= 0 || stage.indexOf("clarify") >= 0) return "clarify";
    if (pressure === "high") return "governance";
    if (source.indexOf("markov") >= 0 || source.indexOf("ngram") >= 0) return "markov";
    if (source.indexOf("semantic") >= 0 || source.indexOf("translation") >= 0 || stage.indexOf("semantic") >= 0) return "semantic";
    if (source.indexOf("evolution") >= 0 || source.indexOf("optimizer") >= 0) return "evolutionary";
    return "deterministic";
  }

  function buildPills(runtime, currentJob, nowMs) {
    var requestActive = String(runtime.request_state || "").toLowerCase() === "active";
    var queue = asInt(runtime.queue_depth, 0);
    var running = asInt(runtime.running_now, 0);
    var pressure = String(runtime.pressure || "").toLowerCase();
    var stageName = String(currentJob.stage_name || "").toLowerCase();

    var seeds = [
      { key: "signal", label: "Signal Ingest", live: requestActive || queue > 0 || running > 0, warn: false },
      { key: "semantic", label: "Semantic Frame", live: stageName.indexOf("semantic") >= 0 || stageName.indexOf("translate") >= 0, warn: false },
      { key: "reasoning", label: "Classical Reasoning", live: running > 0, warn: false },
      { key: "validation", label: "Validation", live: requestActive || running > 0, warn: pressure === "high" },
      { key: "governed", label: "Governed Signals", live: queue > 0 || pressure !== "low", warn: pressure === "high" }
    ];

    return seeds.map(function (seed, index) {
      var bucket = Math.floor((nowMs / 900) + (index * 0.8)) % 12;
      var phase = "idle";
      if (seed.live) {
        if (bucket < 3) phase = "appear";
        else if (bucket < 9) phase = "hold";
        else phase = "fade";
      }
      return {
        label: seed.label,
        state: seed.warn ? "warn" : (seed.live ? "live" : "idle"),
        phase: phase
      };
    });
  }

  function renderPills(root, pills) {
    var host = root.querySelector("[data-ed-pills]");
    if (!host) return;
    host.innerHTML = pills.map(function (pill) {
      return '<span class="ed-pill is-' + pill.state + ' phase-' + pill.phase + '">' + pill.label + "</span>";
    }).join("");
  }

  function derivePulse(runtime, currentJob, queueDelta) {
    var queue = asInt(runtime.queue_depth, 0);
    var running = asInt(runtime.running_now, 0);
    var pressure = String(runtime.pressure || "").toLowerCase();
    var replayCount = asInt(runtime.replay_events, 0);
    var stage = String(currentJob.stage_name || "").toLowerCase();
    var source = String(currentJob.source || "").toLowerCase();

    var pressureFactor = pressure === "high" ? 1.0 : pressure === "moderate" ? 0.58 : 0.22;
    var replayFactor = clamp(replayCount / 120.0, 0, 1.0);
    var queueFactor = clamp(queue / 40.0, 0, 1.0);
    var runFactor = clamp(running / 4.0, 0, 1.0);
    var deltaFactor = clamp(Math.abs(queueDelta) / 8.0, 0, 1.0);
    var methodFactor = (source.indexOf("semantic") >= 0 || source.indexOf("markov") >= 0 || stage.indexOf("semantic") >= 0) ? 0.16 : 0.0;

    var amplitude = clamp(0.26 + (queueFactor * 0.28) + (pressureFactor * 0.3) + (deltaFactor * 0.16), 0.18, 1.0);
    var density = clamp(0.24 + (runFactor * 0.24) + (replayFactor * 0.26) + (queueFactor * 0.2), 0.18, 1.0);
    var noise = clamp(0.12 + (pressureFactor * 0.22) + (deltaFactor * 0.22) + methodFactor, 0.08, 0.95);
    var speed = clamp(1.22 - (queueFactor * 0.35) - (pressureFactor * 0.2), 0.55, 1.35);

    return {
      amplitude: amplitude,
      density: density,
      noise: noise,
      speed: speed,
      tone: pickTone(runtime, currentJob),
      queue: queue,
      running: running,
      pressure: pressure,
      replayCount: replayCount,
      queueDelta: queueDelta
    };
  }

  function updatePulse(root, pulseState, options, isStale) {
    var track = root.querySelector("[data-ed-pulse-track]");
    var wave = root.querySelector("[data-ed-pulse-wave]");
    if (!track || !wave) return;

    var tone = isStale ? "deterministic" : pulseState.tone;
    var ampPx = (7 + (pulseState.amplitude * 22)).toFixed(2) + "px";
    var speedSec = (isStale ? 3.8 : (2.8 - (pulseState.speed * 1.5))).toFixed(2) + "s";
    var blurPx = (0.4 + (pulseState.noise * 1.8)).toFixed(2) + "px";
    var density = (0.2 + (pulseState.density * 0.8)).toFixed(3);

    wave.style.setProperty("--ed-amp", ampPx);
    wave.style.setProperty("--ed-speed", speedSec);
    wave.style.setProperty("--ed-noise", blurPx);
    wave.style.setProperty("--ed-density", density);
    track.classList.remove("tone-deterministic", "tone-semantic", "tone-markov", "tone-clarify", "tone-evolutionary", "tone-governance");
    track.classList.add("tone-" + tone);
    track.classList.toggle("is-busy", !isStale && (pulseState.queue > 0 || pulseState.running > 0 || pulseState.pressure !== "low"));

    var toneColor = options.tonePresets[tone] || options.tonePresets.deterministic;
    track.style.setProperty("--ed-tone", toneColor);
  }

  function classifyDotTone(dot) {
    if (dot.kind === "clarify") return "clarify";
    if (dot.kind === "governance") return "governance";
    if (dot.kind === "semantic") return "semantic";
    if (dot.kind === "markov") return "markov";
    if (dot.kind === "evolutionary") return "evolutionary";
    return "deterministic";
  }

  function renderDots(root, dots) {
    var host = root.querySelector("[data-ed-pulse-dots]");
    if (!host) return;
    host.innerHTML = dots.map(function (dot) {
      var life = clamp((dot.expiresAt - Date.now()) / Math.max(400, dot.ttlMs), 0, 1);
      return '<span class="ed-dot tone-' + classifyDotTone(dot) + '" style="left:' + dot.left.toFixed(1) + '%;opacity:' + life.toFixed(3) + ';"></span>';
    }).join("");
  }

  function maybeEmitDots(instance, runtime, currentJob, pulseState) {
    var now = Date.now();
    var stage = String(currentJob.stage_name || "").toLowerCase();
    var source = String(currentJob.source || "").toLowerCase();
    var newDots = [];
    var baseTtl = 1700;

    if (pulseState.queueDelta !== 0) {
      newDots.push({ kind: "deterministic", ttlMs: baseTtl + 300, left: 10 + ((now / 23) % 78), expiresAt: now + baseTtl + 300 });
    }
    if (pulseState.pressure === "high") {
      newDots.push({ kind: "governance", ttlMs: baseTtl + 850, left: 18 + ((now / 31) % 64), expiresAt: now + baseTtl + 850 });
    }
    if (stage.indexOf("clarify") >= 0) {
      newDots.push({ kind: "clarify", ttlMs: baseTtl + 600, left: 25 + ((now / 27) % 50), expiresAt: now + baseTtl + 600 });
    }
    if (source.indexOf("semantic") >= 0 || source.indexOf("translation") >= 0 || stage.indexOf("semantic") >= 0) {
      newDots.push({ kind: "semantic", ttlMs: baseTtl + 500, left: 14 + ((now / 29) % 70), expiresAt: now + baseTtl + 500 });
    }
    if (source.indexOf("markov") >= 0 || source.indexOf("ngram") >= 0) {
      newDots.push({ kind: "markov", ttlMs: baseTtl + 450, left: 20 + ((now / 25) % 66), expiresAt: now + baseTtl + 450 });
    }
    if (source.indexOf("evolution") >= 0 || source.indexOf("optimizer") >= 0) {
      newDots.push({ kind: "evolutionary", ttlMs: baseTtl + 500, left: 20 + ((now / 35) % 62), expiresAt: now + baseTtl + 500 });
    }

    if (newDots.length > 0) {
      instance.dotEvents = instance.dotEvents.concat(newDots);
    }
    instance.dotEvents = instance.dotEvents
      .filter(function (dot) { return dot.expiresAt > now; })
      .slice(-Math.max(4, instance.options.maxEventDots));
    renderDots(instance.el, instance.dotEvents);
  }

  function applyTelemetry(instance, payload) {
    var root = instance.el;
    var runtime = payload && typeof payload === "object" && payload.runtime && typeof payload.runtime === "object" ? payload.runtime : {};
    var status = payload && typeof payload === "object" && payload.status && typeof payload.status === "object" ? payload.status : {};
    var plugin = payload && typeof payload === "object" && payload.plugin && typeof payload.plugin === "object" ? payload.plugin : {};
    var currentJob = runtime.current_job && typeof runtime.current_job === "object" ? runtime.current_job : {};

    setText(root, "[data-ed-input]", formatCount(currentJob.input_tokens_live));
    setText(root, "[data-ed-output]", formatCount(currentJob.output_tokens_live));
    var stageIn = asInt(currentJob.input_tokens_stage_last, 0);
    var stageOut = asInt(currentJob.output_tokens_stage_last, 0);
    var cumulativeIn = asInt(currentJob.input_tokens_cumulative_completed, 0);
    var cumulativeOut = asInt(currentJob.output_tokens_cumulative_completed, 0);
    var mode = String(currentJob.token_mode || "job_fallback");
    var inputTop = asInt(currentJob.input_tokens_live, 0);
    var outputTop = asInt(currentJob.output_tokens_live, 0);
    if (mode === "completed_cumulative" && (stageIn > 0 || stageOut > 0)) {
      inputTop = stageIn;
      outputTop = stageOut;
    }
    setText(root, "[data-ed-input]", formatCount(inputTop));
    setText(root, "[data-ed-output]", formatCount(outputTop));
    setText(root, "[data-ed-input-sub]", "Completed: " + formatCount(cumulativeIn));
    setText(root, "[data-ed-output-sub]", "Completed: " + formatCount(cumulativeOut));
    var confidenceText = formatConfidence(currentJob.confidence);
    setText(root, "[data-ed-confidence]", confidenceText);
    setText(root, "[data-ed-state]", runtime.request_state || "Idle");
    setText(root, "[data-ed-pressure]", titleCase(runtime.pressure || "low"));
    setText(root, "[data-ed-busy]", asInt(runtime.busy_threshold, 0) > 0 ? String(asInt(runtime.busy_threshold, 0)) : "n/a");
    setText(root, "[data-ed-queue]", String(asInt(runtime.queue_depth, 0)));
    setText(root, "[data-ed-running]", String(asInt(runtime.running_now, 0)));
    setText(root, "[data-ed-mode]", mode);
    setText(root, "[data-ed-stage-name]", String(currentJob.stage_name || "--"));
    setText(root, "[data-ed-stage-count]", String(asInt(currentJob.stage_count, 0)));

    var jobId = asInt(currentJob.job_id, 0);
    var jobStatus = String(currentJob.status || "recent");
    var jobSource = String(currentJob.source || "engine");
    var jobLabel = jobId > 0 ? ("job #" + jobId + " (" + jobStatus + ") - " + jobSource) : ("no recent job - " + jobSource);
    setText(root, "[data-ed-job]", jobLabel);
    setText(root, "[data-ed-method]", jobSource);
    setText(root, "[data-ed-method-kpi]", jobSource);

    var runningNow = asInt(runtime.running_now, 0);
    var queueDepth = asInt(runtime.queue_depth, 0);
    var replayEvents = asInt(runtime.replay_events, 0);
    setText(root, "[data-ed-summary-queue]", String(queueDepth));
    setText(root, "[data-ed-replay]", String(replayEvents));
    var livePaths = runningNow > 0 ? (String(runningNow) + " live") : "Dormant";
    setText(root, "[data-ed-paths]", livePaths);

    var generatedAt = asFloat(payload.generated_at, 0);
    if (generatedAt > 0) {
      var stamp = new Date(generatedAt * 1000);
      setText(root, "[data-ed-updated]", "Last updated: " + stamp.toLocaleString("en-GB", { timeZone: "UTC", hour12: false }) + " UTC");
    }

    var statusState = String(status.state || "").toLowerCase();
    var statusLabel = statusState === "operational" ? "System Online" : (statusState ? titleCase(statusState) : "Status");
    setText(root, "[data-ed-status-label]", statusLabel);
    setText(root, "[data-ed-status-detail]", String(status.detail || "Public runtime telemetry active."));
    var statusChip = root.querySelector("[data-ed-status-label]");
    if (statusChip) {
      statusChip.classList.toggle("is-live", statusState === "operational");
      statusChip.classList.toggle("is-warn", statusState && statusState !== "operational");
    }
    var pluginStatus = titleCase(String(plugin.status || "Offline").toLowerCase()) || "Offline";
    setText(root, "[data-ed-plugin-chip]", "Advisory Runtime " + pluginStatus);
    setText(root, "[data-ed-plugin]", pluginStatus);

    var kpi = payload && typeof payload === "object" && payload.kpi && typeof payload.kpi === "object" ? payload.kpi : {};
    var g1 = kpi.runtime_activity && typeof kpi.runtime_activity === "object" ? kpi.runtime_activity : {};
    var g2 = kpi.efficiency && typeof kpi.efficiency === "object" ? kpi.efficiency : {};
    var g3 = kpi.governance_recovery && typeof kpi.governance_recovery === "object" ? kpi.governance_recovery : {};
    var g4 = kpi.learning_cognition && typeof kpi.learning_cognition === "object" ? kpi.learning_cognition : {};
    setText(root, "[data-ed-kpi-total-runs]", formatCount(g1.total_runs));
    setText(root, "[data-ed-kpi-total-steps]", formatCount(g1.total_steps));
    setText(root, "[data-ed-kpi-total-runtime]", formatRuntimeSeconds(g1.total_research_runtime_s));
    setText(root, "[data-ed-kpi-active-research]", formatCount(g1.active_research_jobs));
    setText(root, "[data-ed-kpi-tokens-generated]", formatCount(g2.tokens_generated));
    setText(root, "[data-ed-kpi-net-saved]", formatCount(g2.net_tokens_saved));
    setText(root, "[data-ed-kpi-compute-saved]", asFloat(g2.compute_saved_pct, 0).toFixed(2) + "%");
    setText(root, "[data-ed-kpi-deterministic]", asFloat(g2.deterministic_response_pct, 0).toFixed(2) + "%");
    setText(root, "[data-ed-kpi-interventions]", formatCount(g3.interventions));
    setText(root, "[data-ed-kpi-repairs]", formatCount(g3.successful_repairs));
    setText(root, "[data-ed-kpi-governance-decisions]", formatCount(g3.governance_decisions));
    setText(root, "[data-ed-kpi-clarify-events]", formatCount(g3.clarify_events));
    setText(root, "[data-ed-kpi-lexicon]", formatCount(g4.nnai_lexicon_learned));
    setText(root, "[data-ed-kpi-learning-signals]", formatCount(g4.learning_signals));
    setText(root, "[data-ed-kpi-semantic-frames]", formatCount(g4.semantic_frames));
    setText(root, "[data-ed-kpi-hcu-artifacts]", formatCount(g4.hcu_advisory_artifacts));

    var proof = payload && typeof payload === "object" && payload.proof && typeof payload.proof === "object" ? payload.proof : {};
    var learningProof = proof.latest_learning_extract && typeof proof.latest_learning_extract === "object" ? proof.latest_learning_extract : {};
    var decisionProof = proof.latest_governed_decision && typeof proof.latest_governed_decision === "object" ? proof.latest_governed_decision : {};
    setText(root, "[data-ed-proof-learning]", JSON.stringify(learningProof, null, 2));
    setText(root, "[data-ed-proof-decision]", JSON.stringify(decisionProof, null, 2));

    var staleAfter = asInt(payload.stale_after_s, 15);
    if (instance.options.staleAfterOverrideS > 0) {
      staleAfter = asInt(instance.options.staleAfterOverrideS, staleAfter);
    }
    var nowSec = Date.now() / 1000;
    var isStale = generatedAt > 0 && (nowSec - generatedAt) > staleAfter;
    root.classList.toggle("is-stale", isStale);

    var nowMs = Date.now();
    renderPills(root, buildPills(runtime, currentJob, nowMs));

    var queue = asInt(runtime.queue_depth, 0);
    var queueDelta = queue - instance.prevQueueDepth;
    instance.prevQueueDepth = queue;
    var pulseState = derivePulse(runtime, currentJob, queueDelta);
    updatePulse(root, pulseState, instance.options, isStale);
    maybeEmitDots(instance, runtime, currentJob, pulseState);
  }

  function Dashboard(el, options) {
    this.el = el;
    this.options = Object.assign({}, DEFAULTS, options || {});
    if (!this.options.tonePresets || typeof this.options.tonePresets !== "object") {
      this.options.tonePresets = Object.assign({}, DEFAULTS.tonePresets);
    } else {
      this.options.tonePresets = Object.assign({}, DEFAULTS.tonePresets, this.options.tonePresets);
    }
    this.endpoint = this.options.endpoint || el.getAttribute("data-endpoint") || DEFAULTS.endpoint;
    this.pollMs = clamp(
      asInt(this.options.pollMs || el.getAttribute("data-poll-ms"), DEFAULTS.pollMs),
      this.options.minPollMs,
      this.options.maxPollMs
    );
    this.timer = 0;
    this.inflight = false;
    this.dotEvents = [];
    this.dotTimer = 0;
    this.prevQueueDepth = 0;
  }

  Dashboard.prototype.mount = function () {
    this.el.innerHTML = dashboardTemplate();
    configureAudio(this);
    this.fetchOnce();
    this.schedule(this.pollMs);
    this.startDotReaper();
    this.bindVisibility();
  };

  Dashboard.prototype.startDotReaper = function () {
    var self = this;
    if (self.dotTimer) return;
    self.dotTimer = window.setInterval(function () {
      var now = Date.now();
      self.dotEvents = self.dotEvents.filter(function (dot) { return dot.expiresAt > now; });
      renderDots(self.el, self.dotEvents);
    }, 380);
  };

  Dashboard.prototype.bindVisibility = function () {
    var self = this;
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        self.fetchOnce();
        self.schedule(self.pollMs);
      }
    });
  };

  Dashboard.prototype.schedule = function (delayMs) {
    var self = this;
    if (this.timer) window.clearTimeout(this.timer);
    this.timer = window.setTimeout(function () {
      self.fetchOnce().finally(function () {
        self.schedule(self.pollMs);
      });
    }, Math.max(900, asInt(delayMs, this.pollMs)));
  };

  Dashboard.prototype.fetchOnce = function () {
    var self = this;
    if (this.inflight) return Promise.resolve();
    this.inflight = true;
    return fetch(this.endpoint, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store"
    })
      .then(function (res) {
        if (!res.ok) throw new Error("telemetry fetch failed: " + res.status);
        return res.json();
      })
      .then(function (payload) {
        applyTelemetry(self, payload);
      })
      .catch(function () {
      })
      .finally(function () {
        self.inflight = false;
      });
  };

  function mountAll() {
    var nodes = document.querySelectorAll("[data-elora-dashboard]");
    nodes.forEach(function (el) {
      var instance = new Dashboard(el, {});
      instance.mount();
    });
  }

  window.EloraDashboard = {
    version: CONFIG_VERSION,
    defaults: Object.assign({}, DEFAULTS),
    mount: function (el, options) {
      var node = typeof el === "string" ? document.querySelector(el) : el;
      if (!node) return null;
      var instance = new Dashboard(node, options || {});
      instance.mount();
      return instance;
    },
    mountAll: mountAll
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountAll);
  } else {
    mountAll();
  }
})();
