(function () {
  const TOUR_ID = 'governance_replay_stage2';
  const ACTIVE_KEY = 'governance_replay';

  let activeTourPanel = null;
  let activeTourTarget = null;
  let currentStepIndex = 0;
  let panelResizeObserver = null;

  const TOUR_STEPS = [
    {
      selector: '#rr-command',
      title: 'Replay Reviewer Introduction',
      text: 'This is the governance replay command surface. It reconstructs admissibility decisions from stored commit inputs rather than re-running inference. The objective is decision accountability, not runtime simulation.'
    },
    {
      selector: '#rr-inputs',
      title: 'Replay Input Scope',
      text: 'Enter a Job ID to reconstruct its commit evaluation context. An optional comparison ID enables differential analysis between two runs, which helps detect policy changes, configuration drift, or authority divergence. This defines the scope of governance review.'
    },
    {
      selector: '#rr-actions',
      title: 'Replay Action Controls',
      text: 'Focus mode narrows the interface to decision-critical evidence while dense view expands structured detail. Print and export controls generate portable governance artifacts suitable for audit and record retention. Replay is designed to produce defensible evidence, not transient inspection.'
    },
    {
      selector: '#rr-summary-grid',
      title: 'Decision Summary Layer',
      text: 'The 10-Second Answer provides a concise admissibility explanation derived from captured commit inputs. Risk Snapshot summarizes classification and threshold posture, and Run Diff highlights structural differences between evaluated contexts. This layer answers why before exposing full trace detail.'
    },
    {
      selector: '#rr-trace',
      title: 'Policy Trace Panel',
      text: 'Policy Trace exposes the deterministic evaluation path: decision class, confidence and uncertainty thresholds, guardrail posture, and final admissibility outcome. This is structured policy evaluation under captured state, not narrative reasoning. It is the core evidence layer for governance audit.'
    },
    {
      selector: '#rr-recent-jobs',
      title: 'Recent Jobs Context',
      text: 'Recent Jobs anchors the replay within operational context. Governance decisions are rarely isolated, and surrounding outcomes provide signal about broader system posture and risk patterns. We will now select Job #35 for reconstruction.'
    },
    {
      selector: '#rr-focus-job',
      title: 'Stage 3 Handoff',
      text: 'Job #35 was terminated during commit evaluation. The next stage examines proposal artifact, authority state, and policy thresholds that led to denial. Let us now deep dive into why Job #35 failed.'
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
          href: 'replay-reviewer.html',
          key: 'monitoring',
          accent: '#f4c76a',
          children: [
            ['Job Timeline', 'replay-reviewer.html#rr-recent-jobs', 'logs'],
            ['Replay Forensics', 'replay-reviewer.html#rr-command', 'observability_forensics'],
            ['Audit Events', 'replay-reviewer.html#rr-trace', 'monitoring'],
            ['Runtime Logs', 'replay-reviewer.html#rr-recent-jobs', 'logs_runtime']
          ]
        },
        {
          label: 'Fabric',
          href: 'replay-reviewer.html',
          key: 'workers',
          accent: '#40d3b5',
          children: [
            ['Worker Hosts', 'replay-reviewer.html#rr-recent-jobs', 'workers_hosts'],
            ['Workers', 'replay-reviewer.html#rr-recent-jobs', 'workers_workers'],
            ['Templates', 'replay-reviewer.html#rr-recent-jobs', 'workers_templates'],
            ['Provisioner', 'replay-reviewer.html#rr-recent-jobs', 'workers_provisioner'],
            ['Nodes', 'replay-reviewer.html#rr-recent-jobs', 'nodes']
          ]
        },
        {
          label: 'Governance',
          href: 'replay-reviewer.html',
          key: 'governance_dashboard',
          accent: '#ff8a65',
          children: [
            ['Governance Dashboard', 'governance-replay.html', 'governance_dashboard'],
            ['Policy & Enforcement', 'replay-reviewer.html#rr-command', 'governance_policy'],
            ['Decision Classes', 'replay-reviewer.html#rr-trace', 'governance_classes'],
            ['Justification & Confidence', 'replay-reviewer.html#rr-answer', 'governance_justification'],
            ['Replay Review', 'replay-reviewer.html', 'governance_replay'],
            ['Drift & Risk', 'replay-reviewer.html#rr-risk', 'governance_drift'],
            ['Human Escalations', 'replay-reviewer.html#rr-recent-jobs', 'governance_escalations'],
            ['Security Posture', 'replay-reviewer.html#rr-command', 'governance_posture'],
            ['Job Buckets', 'replay-reviewer.html#rr-recent-jobs', 'workers_buckets']
          ]
        },
        {
          label: 'AI Runtime',
          href: 'replay-reviewer.html',
          key: 'runtime_dashboard',
          accent: '#9d85ff',
          children: [
            ['Runtime Dashboard', 'replay-reviewer.html#rr-command', 'runtime_dashboard']
          ]
        },
        {
          label: 'Lab',
          href: 'replay-reviewer.html',
          key: 'lab_dashboard',
          accent: '#f7b267',
          children: [
            ['Dashboard', 'replay-reviewer.html#rr-command', 'lab_dashboard']
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
      '<div class="tour-kicker">Governance Replay Tour - Stage 2</div>',
      '<div class="tour-body">',
      '<div class="tour-presenter"><img src="../elora-guide.png" alt="Elora guide" onerror="if(!this.dataset.fallback1){this.dataset.fallback1=1;this.src=\'elora-guide.png\';return;}this.onerror=null;this.src=\'../elora.png\';" /></div>',
      '<div class="tour-message">',
      '<h3 class="tour-title"></h3>',
      '<p class="tour-copy"></p>',
      '<div class="tour-meta">Stage 2 focus: replay review framing, quick answer surface, policy trace context, then incident handoff.</div>',
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
          window.location.href = 'stage-3-deep-dive.html?tour=governance_replay_stage3&step=0&tour_lock=1';
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
    if (nextBtn) nextBtn.textContent = stepIndex >= TOUR_STEPS.length - 1 ? 'Open Stage 3 Deep Dive' : 'Next';

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
    document.body.classList.add('tour-locked');
    document.addEventListener('click', function (event) {
      const anchor = event.target.closest('a');
      if (!anchor) return;
      if (anchor.closest('.tour-panel')) return;
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
  enforceTourLock();
  startTour();

  window.addEventListener('resize', function () {
    if (activeTourPanel && activeTourTarget) positionTourPanel(activeTourPanel, activeTourTarget);
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
