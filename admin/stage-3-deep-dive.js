(function () {
  const TOUR_ID = 'governance_replay_stage3';
  const ACTIVE_KEY = 'governance_replay';

  let activeTourPanel = null;
  let activeTourTarget = null;
  let currentStepIndex = 0;
  let panelResizeObserver = null;
  let focusModeActivated = false;
  let focusStepIndex = 0;
  let tourLocked = false;

  const TRACE_STAGE_JSON = {
    run_started: {
      ts: '2026-03-02T21:33:00.372Z',
      stage: 'run.started',
      type: 'execution',
      risk: 'LOW',
      payload: { request_id: 'req_35', operator: 'elora-admin', environment: 'PROD' }
    },
    intake: {
      ts: '2026-03-02T21:33:00.390Z',
      stage: 'intake',
      type: 'execution',
      risk: 'LOW',
      payload: { source: 'api', retrieval_mode: 'hybrid', model_hint: 'elora:smollm2' }
    },
    response_1: {
      ts: '2026-03-02T21:33:00.408Z',
      stage: 'response',
      type: 'execution',
      risk: 'LOW',
      payload: { response_count: 1, latency_ms: 624.3, token_output: 16 }
    },
    proposal_created: {
      ts: '2026-03-02T21:33:01.961Z',
      stage: 'proposal',
      type: 'proposal',
      risk: 'LOW',
      tag: 'proposal_created',
      payload: { admissibility: 'pending', decision_class: 1, authority_snapshot: 'missing' }
    },
    response_2: {
      ts: '2026-03-02T21:33:01.972Z',
      stage: 'response',
      type: 'execution',
      risk: 'LOW',
      payload: { trace_len: 10, continuity: 'valid' }
    },
    justification: {
      ts: '2026-03-02T21:33:01.984Z',
      stage: 'justification',
      type: 'governance',
      risk: 'LOW',
      payload: { rationale_state: 'captured', confidence_min: 0.4 }
    },
    proposal_validated: {
      ts: '2026-03-02T21:33:01.992Z',
      stage: 'proposal',
      type: 'proposal',
      risk: 'LOW',
      tag: 'proposal_validated',
      payload: { admissibility: 'candidate', policy_snapshot: 'present', config_snapshot: 'present' }
    },
    commit_1: {
      ts: '2026-03-02T21:33:02.019Z',
      stage: 'commit',
      type: 'commit',
      risk: 'LOW',
      payload: { commit_pass: 'partial', guardrail_block: false }
    },
    commit_2: {
      ts: '2026-03-02T21:33:02.028Z',
      stage: 'commit',
      type: 'commit',
      risk: 'LOW',
      payload: { checks_remaining: 3, guardrail_block: false }
    },
    commit_fail: {
      ts: '2026-03-02T21:33:02.047Z',
      stage: 'commit',
      type: 'commit',
      risk: 'HIGH',
      tag: 'guardrail_block',
      approved: false,
      decision: 'blocked_commit_validation',
      reason: 'commit_policy_violation',
      violations: ['guardrail_block', 'confidence_below_threshold', 'required_sources_missing', 'policy_violation']
    }
  };

  const FOCUS_STEPS = [
    {
      selector: '#rr-answer',
      title: 'Decision Summary',
      text: 'Start with decision context. Outcome, decision class, blocking stage, and confidence signals frame why this run was denied before trace-level review.'
    },
    {
      selector: '#rr-trace',
      title: 'Trace Overview',
      text: 'The full trace list is visible and ordered by stage. Click an event row to inspect its structured JSON evidence in the evidence pane below.'
    },
    {
      selector: '#trace-proposal-created',
      title: 'Proposal Captured',
      text: 'Proposal was created and validated before commit. This confirms inference produced an admissible proposal candidate, not an immediate runtime failure.'
    },
    {
      selector: '#trace-commit-1',
      title: 'Commit Boundary',
      text: 'At commit, governance enforces final admissibility. This is the authorization boundary where policy-class enforcement can block execution.'
    },
    {
      selector: '#trace-commit-fail',
      title: 'Failure Reason',
      text: 'This event is the exact failure point: guardrail_block at commit with HIGH risk classification. The outcome was blocked by governance policy, not by runtime instability.'
    },
    {
      selector: '#focus-guide',
      title: 'Tour Conclusion',
      text: 'Governance replay confirmed that inference produced a proposal, while commit enforced admissibility and blocked execution on policy grounds. You can now return to Stage 3, restart this walkthrough, or exit the tour.'
    }
  ];

  const TOUR_STEPS = [
    {
      selector: '#rr-command',
      title: 'Stage 3 Deep Dive',
      text: 'We are now reviewing a loaded replay artifact for Job #35. This stage moves from high-level triage into direct evidence inspection. The goal is to establish why this outcome was blocked.'
    },
    {
      selector: '#rr-summary-grid',
      title: 'Decision Outcome And Risk',
      text: 'The decision summary confirms a terminated outcome with blocked_commit_validation at the commit boundary. Risk snapshot and run-diff provide immediate posture context and indicate where divergence appears against comparison run #34.'
    },
    {
      selector: '#rr-trace',
      title: 'Policy Trace Reconstruction',
      text: 'Policy Trace shows the deterministic sequence from proposal through commit. The key operator task is to verify that the commit-stage block is policy-class behavior under captured context, not a runtime failure.'
    },
    {
      selector: '#rr-json',
      title: 'Artifact Record',
      text: 'The synthetic JSON view represents machine-readable replay output available to operators. In the live system, full structured artifacts support deeper drill-down, export, and policy-forensics workflows.'
    },
    {
      selector: '#rr-focus-mode-btn',
      title: 'Activate Focus Mode',
      text: 'Final step: click Focus mode to pivot the view to decision-critical evidence only. This demonstrates operator narrowing from broad replay context to commit-boundary accountability.'
    }
  ];

  const navSections = [
    {
      title: '',
      items: [
        { label: 'Overview', href: 'governance-replay.html', key: 'dashboard', accent: '#5fa8ff' },
        {
          label: 'Dashboards',
          href: 'governance-replay.html',
          key: 'dashboards_hub',
          accent: '#4f8cff',
          children: [
            ['Dashboard Hub', 'governance-replay.html', 'dashboards_hub'],
            ['Operational Health', 'governance-replay.html#kpi-summary', 'dashboards_operational_health'],
            ['Queue & Load', 'governance-replay.html#jobs-table', 'dashboards_queue_load'],
            ['Service Dependencies', 'governance-replay.html#dashboard-explainer', 'dashboards_service_dependencies'],
            ['Runtime Snapshot', 'governance-replay.html#jobs-table', 'dashboards_runtime_snapshot']
          ]
        },
        {
          label: 'Observability',
          href: 'stage-3-deep-dive.html',
          key: 'monitoring',
          accent: '#f4c76a',
          children: [
            ['Job Timeline', 'stage-3-deep-dive.html#rr-recent-jobs', 'logs'],
            ['Replay Forensics', 'stage-3-deep-dive.html#rr-command', 'observability_forensics'],
            ['Audit Events', 'stage-3-deep-dive.html#rr-trace', 'monitoring'],
            ['Runtime Logs', 'stage-3-deep-dive.html#rr-json', 'logs_runtime']
          ]
        },
        {
          label: 'Fabric',
          href: 'stage-3-deep-dive.html',
          key: 'workers',
          accent: '#40d3b5',
          children: [
            ['Worker Hosts', 'stage-3-deep-dive.html#rr-recent-jobs', 'workers_hosts'],
            ['Workers', 'stage-3-deep-dive.html#rr-recent-jobs', 'workers_workers'],
            ['Templates', 'stage-3-deep-dive.html#rr-recent-jobs', 'workers_templates'],
            ['Provisioner', 'stage-3-deep-dive.html#rr-recent-jobs', 'workers_provisioner'],
            ['Nodes', 'stage-3-deep-dive.html#rr-recent-jobs', 'nodes']
          ]
        },
        {
          label: 'Governance',
          href: 'stage-3-deep-dive.html',
          key: 'governance_dashboard',
          accent: '#ff8a65',
          children: [
            ['Governance Dashboard', 'governance-replay.html', 'governance_dashboard'],
            ['Policy & Enforcement', 'stage-3-deep-dive.html#rr-command', 'governance_policy'],
            ['Decision Classes', 'stage-3-deep-dive.html#rr-trace', 'governance_classes'],
            ['Justification & Confidence', 'stage-3-deep-dive.html#rr-answer', 'governance_justification'],
            ['Replay Review', 'stage-3-deep-dive.html', 'governance_replay'],
            ['Drift & Risk', 'stage-3-deep-dive.html#rr-risk', 'governance_drift'],
            ['Human Escalations', 'stage-3-deep-dive.html#rr-recent-jobs', 'governance_escalations'],
            ['Security Posture', 'stage-3-deep-dive.html#rr-command', 'governance_posture'],
            ['Job Buckets', 'stage-3-deep-dive.html#rr-recent-jobs', 'workers_buckets']
          ]
        },
        {
          label: 'AI Runtime',
          href: 'stage-3-deep-dive.html',
          key: 'runtime_dashboard',
          accent: '#9d85ff',
          children: [
            ['Runtime Dashboard', 'stage-3-deep-dive.html#rr-command', 'runtime_dashboard']
          ]
        },
        {
          label: 'Lab',
          href: 'stage-3-deep-dive.html',
          key: 'lab_dashboard',
          accent: '#f7b267',
          children: [
            ['Dashboard', 'stage-3-deep-dive.html#rr-command', 'lab_dashboard']
          ]
        }
      ]
    }
  ];

  function getParams() {
    return new URLSearchParams(window.location.search);
  }

  function withTourParams(stepIndex) {
    const url = new URL(window.location.href);
    url.searchParams.set('tour', TOUR_ID);
    url.searchParams.set('step', String(stepIndex));
    url.searchParams.set('tour_lock', '1');
    return url.pathname + url.search;
  }

  function iconFor(key) {
    const icons = {
      dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg></span>',
      dashboards_hub: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg></span>',
      monitoring: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M3 13h4l2-5 4 10 2-5h6v2h-5l-3 7-4-10-1 3H3z"/></svg></span>',
      workers: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7zM11 7h2v2h-2zM11 15h2v2h-2z"/></svg></span>',
      governance_dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 5 3.5 8.5 7 9 3.5-.5 7-4 7-9V6zM11 8h2v5h-2zM11 15h2v2h-2z"/></svg></span>',
      runtime_dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3v.5A2.5 2.5 0 0 0 6 12a3 3 0 0 0 3 3h1v4H8v1h8v-1h-2v-4h1a3 3 0 0 0 3-3 2.5 2.5 0 0 0 0-4.5V7a3 3 0 0 0-3-3 3.4 3.4 0 0 0-3 1.7A3.4 3.4 0 0 0 9 4z"/></svg></span>',
      lab_dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M9 2h6v2l-1 1v4.4l4.9 8.4A3 3 0 0 1 16.3 22H7.7a3 3 0 0 1-2.6-4.2L10 9.4V5L9 4z"/></svg></span>'
    };
    return icons[key] || icons.dashboard;
  }

  function renderSidebar() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const html = navSections.map(function (section, idx) {
      const itemsHtml = (section.items || []).map(function (item) {
        const children = item.children || [];
        const itemActive = item.key === ACTIVE_KEY || children.some(function (c) { return c[2] === ACTIVE_KEY; });
        const accent = item.accent || '#6ea8ff';
        const parent = '<a class="' + (itemActive ? 'active' : '') + '" style="--nav-accent:' + accent + ';" data-admin-nav="1" data-nav-parent="1" href="' + item.href + '">' + iconFor(item.key) + '<span class="nav-label">' + item.label + '</span></a>';

        if (!children.length) return parent;

        const childrenHtml = children.map(function (c) {
          const childActive = c[2] === ACTIVE_KEY;
          return '<a class="' + (childActive ? 'active' : '') + '" style="--nav-accent:' + accent + ';" data-admin-nav="1" data-nav-child="1" href="' + c[1] + '">' + c[0] + '</a>';
        }).join('');

        return '<div class="nav-group ' + (itemActive ? 'expanded' : '') + '" data-nav-group="1"><div class="nav-parent-row">' + parent + '<button type="button" class="nav-toggle" data-nav-toggle="1" aria-expanded="' + (itemActive ? 'true' : 'false') + '">▾</button></div><div class="nav-children">' + childrenHtml + '</div></div>';
      }).join('');

      return '<div class="nav-section expanded" data-nav-section="1" data-nav-section-key="sec-' + idx + '"><div class="nav-section-items">' + itemsHtml + '</div></div>';
    }).join('');

    nav.innerHTML = html;
  }

  function mountSidebarToggles() {
    document.querySelectorAll('[data-nav-toggle="1"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const group = btn.closest('[data-nav-group="1"]');
        if (!group) return;
        group.classList.toggle('expanded');
        btn.setAttribute('aria-expanded', group.classList.contains('expanded') ? 'true' : 'false');
      });
    });
  }

  function ensureTourPanel() {
    if (activeTourPanel) return activeTourPanel;

    const panel = document.createElement('aside');
    panel.className = 'tour-panel';
    panel.innerHTML = [
      '<div class="tour-kicker">Governance Replay Tour - Stage 3</div>',
      '<div class="tour-body">',
      '<div class="tour-presenter"><img src="../elora-guide.png" alt="Elora guide" onerror="if(!this.dataset.fallback1){this.dataset.fallback1=1;this.src=\'elora-guide.png\';return;}this.onerror=null;this.src=\'../elora.png\';" /></div>',
      '<div class="tour-message">',
      '<h3 class="tour-title"></h3>',
      '<p class="tour-copy"></p>',
      '<div class="tour-meta">Stage 3 focus: deterministic trace reconstruction and commit-boundary decision accountability.</div>',
      '<div class="tour-actions">',
      '<button type="button" data-tour-prev="1">Previous</button>',
      '<button type="button" data-tour-next="1">Next</button>',
      '<a href="../index.html#home">Exit tour</a>',
      '</div>',
      '</div>',
      '</div>'
    ].join('');

    document.body.appendChild(panel);
    activeTourPanel = panel;

    const prevBtn = panel.querySelector('[data-tour-prev="1"]');
    const nextBtn = panel.querySelector('[data-tour-next="1"]');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (currentStepIndex > 0) applyStep(currentStepIndex - 1, true);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (currentStepIndex >= TOUR_STEPS.length - 1) {
          if (focusModeActivated) {
            window.location.href = '../index.html#home';
          }
          return;
        }
        applyStep(currentStepIndex + 1, true);
      });
    }

    const presenterImage = panel.querySelector('.tour-presenter img');
    if (presenterImage) {
      presenterImage.addEventListener('load', function () {
        if (activeTourPanel && activeTourTarget) positionTourPanel(activeTourPanel, activeTourTarget);
      });
      presenterImage.addEventListener('error', function () {
        if (activeTourPanel && activeTourTarget) positionTourPanel(activeTourPanel, activeTourTarget);
      });
    }

    return panel;
  }

  function overlaps(a, b) {
    return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
  }

  function positionTourPanel(panel, target) {
    const margin = 16;
    const gap = 12;
    const rect = target.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;

    const candidates = [
      { left: rect.right + gap, top: rect.top },
      { left: rect.left - panelRect.width - gap, top: rect.top },
      { left: rect.left + (rect.width - panelRect.width) / 2, top: rect.bottom + gap },
      { left: rect.left + (rect.width - panelRect.width) / 2, top: rect.top - panelRect.height - gap }
    ];

    let placed = null;
    for (let i = 0; i < candidates.length; i += 1) {
      const c = candidates[i];
      const left = Math.max(margin, Math.min(c.left, viewWidth - panelRect.width - margin));
      const top = Math.max(margin, Math.min(c.top, viewHeight - panelRect.height - margin));
      const box = { left, top, right: left + panelRect.width, bottom: top + panelRect.height };
      if (!overlaps(box, rect)) {
        placed = { left, top };
        break;
      }
    }

    if (!placed) {
      const horizontal = rect.left + rect.width / 2 < viewWidth / 2
        ? viewWidth - panelRect.width - margin
        : margin;
      const vertical = rect.top + rect.height / 2 < viewHeight / 2
        ? viewHeight - panelRect.height - margin
        : margin;
      placed = { left: horizontal, top: vertical };
    }

    panel.style.left = placed.left + 'px';
    panel.style.top = placed.top + 'px';
    panel.style.bottom = 'auto';
  }

  function applyStep(stepIndex, pushHistory) {
    const step = TOUR_STEPS[stepIndex];
    if (!step) return;
    currentStepIndex = stepIndex;

    const panel = ensureTourPanel();
    const title = panel.querySelector('.tour-title');
    const copy = panel.querySelector('.tour-copy');
    const prevBtn = panel.querySelector('[data-tour-prev="1"]');
    const nextBtn = panel.querySelector('[data-tour-next="1"]');

    if (title) title.textContent = step.title;
    if (copy) copy.textContent = step.text;
    if (prevBtn) prevBtn.disabled = stepIndex === 0;
    if (nextBtn) {
      const onFinalStep = stepIndex >= TOUR_STEPS.length - 1;
      nextBtn.textContent = onFinalStep ? (focusModeActivated ? 'Finish Tour' : 'Click Focus Mode To Continue') : 'Next';
      nextBtn.disabled = onFinalStep && !focusModeActivated;
    }

    document.querySelectorAll('.tour-highlight').forEach(function (el) {
      el.classList.remove('tour-highlight');
    });
    document.querySelectorAll('.tour-dim').forEach(function (el) {
      el.classList.remove('tour-dim');
    });

    const target = document.querySelector(step.selector);
    if (!target) return;
    activeTourTarget = target;

    const content = document.querySelector('.content');
    if (content) {
      Array.from(content.children).forEach(function (child) {
        child.classList.add('tour-dim');
      });
    }

    let cursor = target;
    while (cursor && cursor !== content) {
      cursor.classList.remove('tour-dim');
      cursor = cursor.parentElement;
    }

    target.classList.add('tour-highlight');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });

    positionTourPanel(panel, target);
    setTimeout(function () {
      if (activeTourPanel && activeTourTarget) positionTourPanel(activeTourPanel, activeTourTarget);
    }, 260);

    if (panelResizeObserver) panelResizeObserver.disconnect();
    if (window.ResizeObserver) {
      panelResizeObserver = new ResizeObserver(function () {
        if (activeTourPanel && activeTourTarget) positionTourPanel(activeTourPanel, activeTourTarget);
      });
      panelResizeObserver.observe(panel);
      panelResizeObserver.observe(target);
    }

    const nextUrl = withTourParams(stepIndex);
    if (pushHistory) window.history.pushState({ step: stepIndex }, '', nextUrl);
    else window.history.replaceState({ step: stepIndex }, '', nextUrl);
  }

  function enforceTourLock() {
    const params = getParams();
    if (params.get('tour_lock') !== '1') return;
    tourLocked = true;
    document.body.classList.add('tour-locked');
    document.addEventListener('click', function (event) {
      if (!tourLocked) return;
      const anchor = event.target.closest('a');
      if (!anchor) return;
      if (anchor.closest('.tour-panel')) return;
      if (anchor.closest('#focus-guide')) return;
      event.preventDefault();
    });
  }

  function initMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'sidebar-mobile-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Toggle navigation');
    toggle.innerHTML = '<span aria-hidden="true">&#9776;</span> Menu';

    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';

    document.body.appendChild(toggle);
    document.body.appendChild(backdrop);

    function setOpen(open) {
      document.body.classList.toggle('sidebar-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
      setOpen(!document.body.classList.contains('sidebar-open'));
    });
    backdrop.addEventListener('click', function () { setOpen(false); });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1100) setOpen(false);
    });
  }

  function initFocusMode() {
    const focusBtn = document.getElementById('rr-focus-mode-btn');
    if (!focusBtn) return;

    focusBtn.addEventListener('click', function () {
      focusModeActivated = true;
      focusBtn.dataset.focusState = 'on';
      focusBtn.textContent = 'Focus mode: on';
      document.body.classList.add('focus-mode-active');
      if (activeTourPanel) {
        activeTourPanel.remove();
        activeTourPanel = null;
      }
      document.querySelectorAll('.tour-highlight').forEach(function (el) {
        el.classList.remove('tour-highlight');
      });
      document.querySelectorAll('.tour-dim').forEach(function (el) {
        el.classList.remove('tour-dim');
      });
      moveTraceIntoFocusLayout();
      startFocusModeTour();
    });
  }

  function renderTraceJson(target, key) {
    if (!target) return;
    const data = TRACE_STAGE_JSON[key] || { error: 'No event data found for selected stage.' };
    target.textContent = JSON.stringify(data, null, 2);
  }

  function selectTraceStage(key) {
    const wrapper = document.querySelector('.trace-accordion[data-trace-key="' + key + '"]');
    if (!wrapper) return;

    document.querySelectorAll('.trace-accordion.is-open').forEach(function (el) {
      el.classList.remove('is-open');
    });
    document.querySelectorAll('.trace-event.is-selected').forEach(function (el) {
      el.classList.remove('is-selected');
    });
    document.querySelectorAll('.trace-accordion-body[data-trace-body]').forEach(function (pre) {
      pre.hidden = true;
    });

    const btn = wrapper.querySelector('.trace-event');
    const panel = wrapper.querySelector('.trace-accordion-body[data-trace-body="' + key + '"]');
    if (btn) btn.classList.add('is-selected');
    wrapper.classList.add('is-open');
    if (panel) {
      renderTraceJson(panel, key);
      panel.hidden = false;
    }
  }

  function initTraceEvents() {
    const traceEvents = document.querySelectorAll('.trace-event[data-trace-toggle]');
    traceEvents.forEach(function (eventBtn) {
      eventBtn.addEventListener('click', function () {
        const key = eventBtn.getAttribute('data-trace-toggle');
        if (!key) return;
        selectTraceStage(key);
      });
    });
    selectTraceStage('commit_fail');
  }

  function moveTraceIntoFocusLayout() {
    const summaryGrid = document.getElementById('rr-summary-grid');
    const trace = document.getElementById('rr-trace');
    const recent = document.getElementById('rr-recent-jobs');
    if (!summaryGrid || !trace) return;
    if (recent && !summaryGrid.contains(recent)) {
      summaryGrid.appendChild(recent);
    }
    if (!summaryGrid.contains(trace)) {
      summaryGrid.appendChild(trace);
    }
  }

  function ensureFocusGuide() {
    const guide = document.getElementById('focus-guide');
    if (!guide) return null;

    const prev = document.getElementById('focus-prev-btn');
    const next = document.getElementById('focus-next-btn');
    const restart = document.getElementById('focus-restart-btn');
    if (!guide.dataset.bound) {
      guide.dataset.bound = '1';
      if (prev) {
        prev.addEventListener('click', function () {
          if (focusStepIndex > 0) applyFocusStep(focusStepIndex - 1);
        });
      }
      if (next) {
        next.addEventListener('click', function () {
          if (focusStepIndex >= FOCUS_STEPS.length - 1) {
            unlockDemoMode();
            return;
          }
          applyFocusStep(focusStepIndex + 1);
        });
      }
      if (restart) {
        restart.addEventListener('click', function () {
          applyFocusStep(0);
        });
      }
    }

    return guide;
  }

  function applyFocusStep(stepIndex) {
    const step = FOCUS_STEPS[stepIndex];
    if (!step) return;
    focusStepIndex = stepIndex;

    const guide = ensureFocusGuide();
    if (!guide) return;
    const title = document.getElementById('focus-guide-title');
    const copy = document.getElementById('focus-guide-copy');
    const prev = document.getElementById('focus-prev-btn');
    const next = document.getElementById('focus-next-btn');
    const restart = document.getElementById('focus-restart-btn');

    if (title) title.textContent = step.title;
    if (copy) copy.textContent = step.text;
    if (prev) prev.disabled = stepIndex === 0;
    if (next) next.textContent = stepIndex >= FOCUS_STEPS.length - 1 ? 'End Demo' : 'Next';
    if (restart) restart.disabled = stepIndex === 0;

    document.querySelectorAll('.focus-step-highlight').forEach(function (el) {
      el.classList.remove('focus-step-highlight');
    });

    const target = document.querySelector(step.selector);
    if (!target) return;
    target.classList.add('focus-step-highlight');

    dockFocusGuideForTarget(target);

    if (step.selector === '#trace-proposal-created') selectTraceStage('proposal_created');
    if (step.selector === '#trace-commit-1') selectTraceStage('commit_1');
    if (step.selector === '#trace-commit-fail') selectTraceStage('commit_fail');

    const traceBody = document.getElementById('trace-body');
    if (traceBody && target.closest('#trace-body')) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function startFocusModeTour() {
    const guide = ensureFocusGuide();
    if (!guide) return;
    guide.classList.add('active');
    applyFocusStep(0);
  }

  function dockFocusGuideForTarget(target) {
    const guide = document.getElementById('focus-guide');
    if (!guide || !target) return;
    guide.classList.remove('dock-left', 'dock-right');
    const rect = target.getBoundingClientRect();
    const center = rect.left + (rect.width / 2);
    const side = center > (window.innerWidth / 2) ? 'dock-left' : 'dock-right';
    guide.classList.add(side);
  }

  function unlockDemoMode() {
    tourLocked = false;
    document.body.classList.remove('tour-locked');
    document.body.classList.add('demo-unlocked');
    document.querySelectorAll('.focus-step-highlight').forEach(function (el) {
      el.classList.remove('focus-step-highlight');
    });
    const guide = document.getElementById('focus-guide');
    if (guide) guide.classList.remove('active');
    const notice = document.getElementById('end-demo-notice');
    if (notice) {
      notice.hidden = false;
      notice.classList.add('active');
    }
  }

  function initEndNotice() {
    const dismiss = document.getElementById('end-demo-dismiss');
    if (!dismiss) return;
    dismiss.addEventListener('click', function () {
      const notice = document.getElementById('end-demo-notice');
      if (!notice) return;
      notice.classList.remove('active');
      notice.hidden = true;
    });
  }

  function startTour() {
    const params = getParams();
    const tour = params.get('tour') || TOUR_ID;
    const raw = Number(params.get('step') || '0');
    const stepIndex = Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : 0;
    const validStep = TOUR_STEPS[stepIndex] ? stepIndex : 0;

    if (tour !== TOUR_ID || params.get('tour_lock') !== '1') {
      applyStep(0, false);
      return;
    }

    applyStep(validStep, false);
  }

  renderSidebar();
  mountSidebarToggles();
  initMobileSidebar();
  initFocusMode();
  initTraceEvents();
  initEndNotice();
  enforceTourLock();
  startTour();

  window.addEventListener('resize', function () {
    if (activeTourPanel && activeTourTarget) positionTourPanel(activeTourPanel, activeTourTarget);
    const activeFocusTarget = document.querySelector('.focus-step-highlight');
    if (focusModeActivated && activeFocusTarget) dockFocusGuideForTarget(activeFocusTarget);
  });

  window.addEventListener('scroll', function () {
    if (activeTourPanel && activeTourTarget) positionTourPanel(activeTourPanel, activeTourTarget);
  }, { passive: true });

  window.addEventListener('popstate', function () {
    const params = getParams();
    const raw = Number(params.get('step') || '0');
    const step = Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : 0;
    applyStep(TOUR_STEPS[step] ? step : 0, false);
  });
})();
