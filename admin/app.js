(function () {
  function attachAvatar(container, paths, altText, fallbackText) {
    if (!container) return;
    const tryNext = function (idx) {
      if (idx >= paths.length) {
        container.textContent = fallbackText;
        return;
      }
      const img = document.createElement('img');
      img.alt = altText;
      img.src = paths[idx];
      img.addEventListener('error', function () { tryNext(idx + 1); }, { once: true });
      img.addEventListener('load', function () {
        container.innerHTML = '';
        container.appendChild(img);
      }, { once: true });
    };
    tryNext(0);
  }

  document.querySelectorAll('.brand-avatar').forEach((el) => {
    attachAvatar(el, ['../elora.png', 'elora-avatar.svg', '/admin/assets/elora.webp'], 'Elora avatar', 'EE');
  });
  document.querySelectorAll('.launcher-avatar').forEach((el) => {
    attachAvatar(el, ['../elora.png', 'elora-avatar.svg', '/admin/assets/elora.webp'], 'Elora avatar', 'EE');
  });

  const JOB_AUDITS = {
    '1842': {
      title: 'Job #1842 - wordpress:acme-demo',
      status: 'done',
      confidence: 'high',
      risk: 'low',
      mode: 'rag',
      tokens: 1894,
      durationMs: 612,
      events: [
        '16:07:40 - queued by wordpress plugin',
        '16:07:41 - guardrail_check passed',
        '16:07:41 - retrieval matched 4 knowledge docs',
        '16:07:42 - inference_generate completed',
        '16:07:42 - output_format and justification attached',
        '16:07:42 - response delivered and audit archived'
      ]
    },
    '1841': {
      title: 'Job #1841 - engine:web',
      status: 'done',
      confidence: 'medium',
      risk: 'moderate',
      mode: 'rag',
      tokens: 1321,
      durationMs: 540,
      events: [
        '16:03:58 - request normalized',
        '16:03:58 - baseline guardrail pass',
        '16:03:59 - retrieval confidence downgraded to medium',
        '16:03:59 - response completed with advisory note',
        '16:04:00 - audit stream updated'
      ]
    },
    '1840': {
      title: 'Job #1840 - engine:web',
      status: 'terminated',
      confidence: 'blocked',
      risk: 'high',
      mode: 'rag',
      tokens: 208,
      durationMs: 184,
      events: [
        '16:01:59 - request normalized',
        '16:02:00 - prompt injection pattern detected',
        '16:02:00 - policy_violation reason attached',
        '16:02:00 - job terminated before inference',
        '16:02:00 - operator alert emitted'
      ]
    }
  };

  const FABRIC_HOSTS = {
    'fabric-east-01': {
      title: 'fabric-east-01 (general tier)',
      workers: [
        { id: 'worker-east-01a', role: 'chat', cpu: '4 vCPU', ram: '8 GB' },
        { id: 'worker-east-01b', role: 'retrieval', cpu: '6 vCPU', ram: '12 GB' }
      ],
      cpuAllowance: '10 vCPU total',
      ramAllowance: '20 GB total',
      queuePolicy: 'standard'
    },
    'fabric-east-02': {
      title: 'fabric-east-02 (restricted tier)',
      workers: [
        { id: 'worker-east-02a', role: 'policy', cpu: '4 vCPU', ram: '8 GB' },
        { id: 'worker-east-02b', role: 'validation', cpu: '4 vCPU', ram: '8 GB' }
      ],
      cpuAllowance: '8 vCPU total',
      ramAllowance: '16 GB total',
      queuePolicy: 'restricted'
    },
    'fabric-west-01': {
      title: 'fabric-west-01 (general tier)',
      workers: [
        { id: 'worker-west-01a', role: 'chat', cpu: '4 vCPU', ram: '8 GB' },
        { id: 'worker-west-01b', role: 'background jobs', cpu: '6 vCPU', ram: '10 GB' }
      ],
      cpuAllowance: '10 vCPU total',
      ramAllowance: '18 GB total',
      queuePolicy: 'standard'
    }
  };

  const tours = {
    overview: {
      name: 'Engine Snapshot Tour',
      steps: [
        {
          page: 'index.html',
          selector: '.ops-rail',
          title: 'Start with live operations context',
          text: 'This rail summarizes environment, engine state, policy evaluation timing, and active model.'
        },
        {
          page: 'index.html',
          selector: '#jobs',
          title: 'Open a sample job audit',
          text: 'Click "View audit" on any job to inspect a full synthetic audit trail, control decisions, and timing.'
        },
        {
          page: 'monitoring.html',
          selector: '#audit',
          title: 'Move to monitoring and logs',
          text: 'Audit events and job logs demonstrate observability without exposing production internals.'
        },
        {
          page: 'fabric.html',
          selector: '#workers',
          title: 'Inspect managed workers per host',
          text: 'Click the workers count (for example, "2") to see managed workers and CPU/RAM allocation.'
        },
        {
          page: 'security.html',
          selector: '.cards',
          title: 'Validate security posture',
          text: 'Guardrail, signing, and audit controls are front-and-center in the security module.'
        },
        {
          page: 'pipeline.html',
          selector: '.cards',
          title: 'Trace pipeline runtime flow',
          text: 'Pipeline stages illustrate deterministic execution and policy-gated model generation.'
        }
      ]
    },
    incident: {
      name: 'Incident Response Walkthrough',
      steps: [
        {
          page: 'index.html',
          selector: '#governance',
          title: 'Identify risk from dashboard signals',
          text: 'Start from governance indicators to detect blocked requests, terminations, and anomaly trends.'
        },
        {
          page: 'index.html',
          selector: '#jobs',
          title: 'Drill into the terminated job',
          text: 'Open the terminated job audit to see where and why policy stopped execution.'
        },
        {
          page: 'monitoring.html',
          selector: '#audit',
          title: 'Correlate with audit events',
          text: 'Use audit streams to reconstruct what happened and which controls fired.'
        },
        {
          page: 'security.html',
          selector: '.card',
          title: 'Confirm policy outcomes',
          text: 'Review which security controls prevented escalation and where tuning is needed.'
        }
      ]
    },
    fabric: {
      name: 'Worker Fabric Tour',
      steps: [
        {
          page: 'fabric.html',
          selector: '#hosts',
          title: 'Host-level capacity view',
          text: 'Shows host pool health and available execution capacity in a single pane.'
        },
        {
          page: 'fabric.html',
          selector: '#workers',
          title: 'Open host worker inventory',
          text: 'Click a workers count to inspect managed workers with CPU and RAM allocations.'
        },
        {
          page: 'nodes.html',
          selector: '.table',
          title: 'Node telemetry follow-up',
          text: 'Node latency and failure rates show where pipeline pressure appears.'
        }
      ]
    },
    roadmap: {
      name: 'Build Direction Tour',
      steps: [
        {
          page: 'models.html',
          selector: '.table',
          title: 'Model orchestration layer',
          text: 'Demonstrates multi-target model control and lifecycle state visibility.'
        },
        {
          page: 'knowledge.html',
          selector: '.cards',
          title: 'Knowledge and retrieval quality',
          text: 'Highlights indexed knowledge packs and confidence-oriented retrieval posture.'
        },
        {
          page: 'pipeline.html',
          selector: '.card',
          title: 'Composable runtime pipeline',
          text: 'Shows deterministic stage order and stage-specific instrumentation.'
        },
        {
          page: 'benchmarks.html',
          selector: '.table',
          title: 'Benchmark and quality tracking',
          text: 'Illustrates how performance and policy quality are measured over time.'
        }
      ]
    }
  };

  function currentPage() {
    const parts = window.location.pathname.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function getParams() {
    return new URLSearchParams(window.location.search);
  }

  function withTourParams(url, tourId, stepIndex, lockMode) {
    const link = new URL(url, window.location.href);
    link.searchParams.set('tour', tourId);
    link.searchParams.set('step', String(stepIndex));
    if (lockMode) link.searchParams.set('tour_lock', '1');
    else link.searchParams.delete('tour_lock');
    return link.pathname.split('/').pop() + link.search;
  }

  function clearHighlights() {
    document.querySelectorAll('.tour-highlight').forEach((el) => el.classList.remove('tour-highlight'));
  }

  function getActiveTourId() {
    return getParams().get('tour') || '';
  }

  function isTourLockEnabled() {
    return getParams().get('tour_lock') === '1';
  }

  function enforceTourLock() {
    if (!isTourLockEnabled()) return;
    document.body.classList.add('tour-locked');
    document.addEventListener('click', function (event) {
      const a = event.target.closest('a');
      if (!a) return;
      if (a.closest('.tour-panel')) return;
      event.preventDefault();
    });
  }

  function mountModal(title, innerHtml) {
    let backdrop = document.getElementById('demo-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'demo-modal-backdrop';
      backdrop.className = 'demo-modal-backdrop';
      backdrop.innerHTML = [
        '<section class="demo-modal">',
        '<div class="demo-modal-head">',
        '<strong id="demo-modal-title"></strong>',
        '<button id="demo-modal-close" type="button">Close</button>',
        '</div>',
        '<div id="demo-modal-body" class="demo-modal-body"></div>',
        '</section>'
      ].join('');
      document.body.appendChild(backdrop);
      const closeBtn = backdrop.querySelector('#demo-modal-close');
      closeBtn.addEventListener('click', function () { backdrop.classList.remove('active'); });
      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) backdrop.classList.remove('active');
      });
    }
    backdrop.querySelector('#demo-modal-title').textContent = title;
    backdrop.querySelector('#demo-modal-body').innerHTML = innerHtml;
    backdrop.classList.add('active');
  }

  function mountJobAuditInteractions() {
    document.querySelectorAll('.demo-open-audit').forEach((btn) => {
      btn.addEventListener('click', function () {
        const id = btn.getAttribute('data-job-id') || '';
        const item = JOB_AUDITS[id];
        if (!item) return;
        const html = [
          '<div class="demo-grid">',
          '<div class="demo-box"><div class="muted">Status</div><strong>' + item.status + '</strong></div>',
          '<div class="demo-box"><div class="muted">Confidence</div><strong>' + item.confidence + '</strong></div>',
          '<div class="demo-box"><div class="muted">Risk</div><strong>' + item.risk + '</strong></div>',
          '</div>',
          '<div class="demo-grid">',
          '<div class="demo-box"><div class="muted">Mode</div><strong>' + item.mode + '</strong></div>',
          '<div class="demo-box"><div class="muted">Token Churn</div><strong>' + item.tokens + '</strong></div>',
          '<div class="demo-box"><div class="muted">Duration</div><strong>' + item.durationMs + 'ms</strong></div>',
          '</div>',
          '<h4>Audit Timeline</h4>',
          '<ul class="demo-timeline">' + item.events.map((e) => '<li>' + e + '</li>').join('') + '</ul>',
          '<div class="card" style="margin-top:12px;">',
          '<h4 style="margin-top:0;">Live Engine Drill-Down (not shown in demo)</h4>',
          '<p class="muted">The live system provides full per-job JSON output for deep inspection, including stage-by-stage runtime detail and structured governance evidence.</p>',
          '<ul class="muted">',
          '<li>Full runtime JSON payloads (request, stage events, response metadata)</li>',
          '<li>Detailed guardrail and policy decision traces</li>',
          '<li>Knowledge and memory buckets mapped to model/runtime context</li>',
          '<li>Configurable read/write memory modes by workflow and model profile</li>',
          '</ul>',
          '<p class="muted">This public demo is intentionally reduced and does not reflect the full layout, controls, or depth of the live engine.</p>',
          '</div>'
        ].join('');
        mountModal(item.title, html);
      });
    });
  }

  function mountFabricInteractions() {
    document.querySelectorAll('.demo-open-fabric').forEach((btn) => {
      btn.addEventListener('click', function () {
        const hostId = btn.getAttribute('data-host-id') || '';
        const host = FABRIC_HOSTS[hostId];
        if (!host) return;
        const workersRows = host.workers.map((w) => '<tr><td>' + w.id + '</td><td>' + w.role + '</td><td>' + w.cpu + '</td><td>' + w.ram + '</td></tr>').join('');
        const html = [
          '<div class="demo-grid">',
          '<div class="demo-box"><div class="muted">Workers</div><strong>' + host.workers.length + '</strong></div>',
          '<div class="demo-box"><div class="muted">CPU allowance</div><strong>' + host.cpuAllowance + '</strong></div>',
          '<div class="demo-box"><div class="muted">RAM allowance</div><strong>' + host.ramAllowance + '</strong></div>',
          '</div>',
          '<p class="muted">Queue policy: ' + host.queuePolicy + '</p>',
          '<table class="table"><thead><tr><th>Worker</th><th>Role</th><th>CPU</th><th>RAM</th></tr></thead><tbody>' + workersRows + '</tbody></table>'
        ].join('');
        mountModal(host.title, html);
      });
    });
  }

  function mountTourPanel(config, stepIndex) {
    const step = config.steps[stepIndex];
    if (!step) return;

    const panel = document.createElement('aside');
    panel.className = 'tour-panel';
    panel.innerHTML = [
      '<div class="tour-kicker">Guided Tour</div>',
      '<h3 class="tour-title"></h3>',
      '<p class="tour-copy"></p>',
      '<div class="tour-meta"></div>',
      '<div class="tour-actions"></div>'
    ].join('');
    document.body.appendChild(panel);

    panel.querySelector('.tour-title').textContent = step.title;
    panel.querySelector('.tour-copy').textContent = step.text;
    panel.querySelector('.tour-meta').textContent = config.name + ' - Step ' + (stepIndex + 1) + ' of ' + config.steps.length;
    const scopeNote = document.createElement('div');
    scopeNote.className = 'tour-meta';
    scopeNote.textContent = 'Demo scope note: this walkthrough is a curated subset and not the full live engine feature/layout surface.';
    panel.appendChild(scopeNote);

    const actions = panel.querySelector('.tour-actions');
    const lockMode = isTourLockEnabled();
    const tourId = getActiveTourId();

    const prev = document.createElement('button');
    prev.textContent = 'Previous';
    prev.disabled = stepIndex === 0;
    prev.addEventListener('click', function () {
      const next = stepIndex - 1;
      const nextStep = config.steps[next];
      if (!nextStep) return;
      window.location.href = withTourParams(nextStep.page, tourId, next, lockMode);
    });
    actions.appendChild(prev);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = stepIndex >= config.steps.length - 1 ? 'Finish' : 'Next';
    nextBtn.addEventListener('click', function () {
      if (stepIndex >= config.steps.length - 1) {
        window.location.href = 'index.html';
        return;
      }
      const next = stepIndex + 1;
      const nextStep = config.steps[next];
      window.location.href = withTourParams(nextStep.page, tourId, next, lockMode);
    });
    actions.appendChild(nextBtn);

    const lockBtn = document.createElement('a');
    lockBtn.href = withTourParams(step.page, tourId, stepIndex, !lockMode);
    lockBtn.textContent = lockMode ? 'Unlock exploration' : 'Lock to tour path';
    actions.appendChild(lockBtn);

    const exit = document.createElement('a');
    exit.href = 'index.html';
    exit.textContent = 'Exit tour';
    actions.appendChild(exit);

    const target = document.querySelector(step.selector);
    if (target) {
      target.classList.add('tour-highlight');
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function mountTourChooser() {
    const panel = document.createElement('aside');
    panel.className = 'tour-panel';
    panel.innerHTML = [
      '<div class="tour-kicker">Guided Tour</div>',
      '<h3 class="tour-title">Explore the engine safely</h3>',
      '<p class="tour-copy">Choose a walkthrough to see dashboard, logs, workers, and pipeline capabilities using synthetic data.</p>',
      '<div class="tour-actions" id="tour-chooser"></div>'
    ].join('');
    document.body.appendChild(panel);

    const chooser = panel.querySelector('#tour-chooser');
    const entries = [
      ['overview', 'Full Snapshot'],
      ['incident', 'Incident Response'],
      ['fabric', 'Worker Fabric'],
      ['roadmap', 'Build Direction']
    ];

    entries.forEach(function (entry) {
      const id = entry[0];
      const label = entry[1];
      const config = tours[id];
      if (!config || !config.steps[0]) return;
      const a = document.createElement('a');
      a.href = config.steps[0].page + '?tour=' + encodeURIComponent(id) + '&step=0';
      a.textContent = label;
      chooser.appendChild(a);
    });
  }

  function startTour() {
    clearHighlights();
    const params = getParams();
    const tourId = params.get('tour');
    if (!tourId) {
      if (currentPage() !== 'index.html') return;
      mountTourChooser();
      return;
    }
    const config = tours[tourId];
    if (!config) {
      mountTourChooser();
      return;
    }
    const raw = Number(params.get('step') || '0');
    const stepIndex = Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : 0;
    const step = config.steps[stepIndex];
    if (!step) {
      window.location.href = withTourParams(config.steps[0].page, tourId, 0, isTourLockEnabled());
      return;
    }
    if (step.page !== currentPage()) {
      window.location.href = withTourParams(step.page, tourId, stepIndex, isTourLockEnabled());
      return;
    }
    mountTourPanel(config, stepIndex);
  }

  const groups = document.querySelectorAll('[data-nav-group="1"]');
  groups.forEach((group) => {
    const toggle = group.querySelector('[data-nav-toggle="1"]');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      group.classList.toggle('expanded');
      toggle.setAttribute('aria-expanded', group.classList.contains('expanded') ? 'true' : 'false');
    });
  });

  mountJobAuditInteractions();
  mountFabricInteractions();
  enforceTourLock();

  const launcher = document.getElementById('admin-chat-launcher');
  const modal = document.getElementById('admin-chat-modal');
  const closeBtn = document.getElementById('admin-chat-close');
  const sendBtn = document.getElementById('admin-chat-send');
  const input = document.getElementById('admin-chat-input');
  const body = document.getElementById('admin-chat-body');

  if (launcher && modal && closeBtn && sendBtn && input && body) {
    function bubble(text, cls) {
      const el = document.createElement('div');
      el.className = 'admin-chat-bubble ' + cls;
      el.textContent = text;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
    }

    bubble('Elora demo chat ready. This is a static simulation of the real admin chat.', 'assistant');

    launcher.addEventListener('click', function () {
      modal.classList.toggle('active');
    });
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    function replyFor(text) {
      const q = text.toLowerCase();
      if (q.includes('health') || q.includes('status')) return 'System state in demo is RUNNING with low load and stable policy evaluation.';
      if (q.includes('guardrail') || q.includes('security')) return 'Guardrail demo: prompt boundary enforcement active, signed requests required, audit logs enabled.';
      if (q.includes('model')) return 'Model demo: 4 configured targets, 2 active, latest inference median 412ms.';
      if (q.includes('fabric') || q.includes('worker')) return 'Fabric demo: 3 hosts online, 6 workers connected, provisioner configured.';
      return 'Demo assistant can summarize dashboard, security, models, and fabric using mock data.';
    }

    sendBtn.addEventListener('click', function () {
      const text = (input.value || '').trim();
      if (!text) return;
      bubble(text, 'user');
      input.value = '';
      setTimeout(function () {
        bubble(replyFor(text), 'assistant');
      }, 220);
    });
  }

  startTour();
})();
