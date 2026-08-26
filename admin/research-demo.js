(function () {
  const ACTIVE_KEY = document.body.dataset.adminActive || 'research_dashboard';

  const navSections = [
    {
      title: '',
      items: [
        { label: 'Overview', href: 'demo.html', key: 'dashboard', accent: '#5fa8ff' },
        {
          label: 'Engine Health',
          href: 'governance-replay.html',
          key: 'engine_state',
          accent: '#50d6ff',
          children: [
            ['Overview', 'governance-replay.html', 'engine_state'],
            ['PhyOS Dashboard', 'governance-replay.html#ops-rail', 'engine_state_phyos'],
            ['Elora Echo', 'governance-replay.html#signal-grid', 'engine_state_echo'],
            ['Zombie Watcher', 'governance-replay.html#jobs-table', 'engine_state_zombie_watcher'],
            ['Adaptive Cache', 'governance-replay.html#signal-grid', 'engine_state_adaptive_cache'],
            ['Execution Monitor', 'governance-replay.html#signal-grid', 'observability_execution_monitor'],
            ['Engine Performance', 'governance-replay.html#kpi-summary', 'research_engine_performance'],
            ['Elora Intervention', 'governance-replay.html#dashboard-explainer', 'research_intervention'],
            ['Job Timeline', 'governance-replay.html#jobs-table', 'logs'],
            ['Replay Forensics', 'governance-replay.html#dashboard-explainer', 'observability_forensics'],
            ['Audit Events', 'governance-replay.html#jobs-table', 'monitoring']
          ]
        },
        {
          label: 'Fabric',
          href: 'research-dashboard.html',
          key: 'workers',
          accent: '#40d3b5',
          children: [
            ['Worker Hosts', 'research-dashboard.html#rd-fabric', 'workers_hosts'],
            ['Workers', 'research-dashboard.html#rd-fabric', 'workers_workers'],
            ['Autoscale', 'research-dashboard.html#rd-fabric', 'workers_autoscale'],
            ['Templates', 'research-dashboard.html#rd-fabric', 'workers_templates'],
            ['Provisioner', 'research-dashboard.html#rd-fabric', 'workers_provisioner'],
            ['Nodes', 'research-dashboard.html#rd-fabric', 'nodes']
          ]
        },
        {
          label: 'Elora CORE',
          href: 'research-dashboard.html',
          key: 'elora_core',
          accent: '#ffb454',
          children: [
            ['Overview', 'research-dashboard.html#rd-core', 'elora_core'],
            ['Machine Learning', 'research-dashboard.html#rd-core', 'elora_core_ml'],
            ['Buckets', 'research-dashboard.html#rd-core', 'elora_core_buckets'],
            ['Models', 'research-dashboard.html#rd-core', 'elora_core_models']
          ]
        },
        {
          label: 'Governance',
          href: 'governance-replay.html',
          key: 'governance_dashboard',
          accent: '#ff8a65',
          children: [
            ['Governance Dashboard', 'governance-replay.html', 'governance_dashboard'],
            ['Policy & Enforcement', 'governance-replay.html#dashboard-explainer', 'governance_policy'],
            ['Decision Classes', 'governance-replay.html#dashboard-explainer', 'governance_classes'],
            ['Justification & Confidence', 'governance-replay.html#dashboard-explainer', 'governance_justification'],
            ['Replay Dashboard (Beta)', 'governance-replay.html', 'governance_replay_v2_dashboard'],
            ['Replay Investigation (Beta)', 'replay-reviewer.html', 'governance_replay_v2'],
            ['Replay Review', 'replay-reviewer.html', 'governance_replay'],
            ['AI Report (Alpha)', 'governance-replay.html#signal-grid', 'governance_ai_report'],
            ['Drift & Risk', 'governance-replay.html#signal-grid', 'governance_drift'],
            ['Approval Queue', 'governance-replay.html#jobs-table', 'governance_approvals'],
            ['Human Escalations', 'governance-replay.html#jobs-table', 'governance_escalations'],
            ['Security Posture', 'governance-replay.html#dashboard-explainer', 'governance_posture'],
            ['Job Buckets', 'governance-replay.html#jobs-table', 'workers_buckets']
          ]
        },
        {
          label: 'AI Runtime',
          href: 'research-dashboard.html',
          key: 'runtime_dashboard',
          accent: '#9d85ff',
          children: [
            ['Runtime Dashboard', 'research-dashboard.html#rd-runtime', 'runtime_dashboard'],
            ['Models', 'research-dashboard.html#rd-runtime', 'models'],
            ['Pipelines', 'research-dashboard.html#rd-runtime', 'workbooks'],
            ['Knowledge', 'research-dashboard.html#rd-runtime', 'knowledge'],
            ['Memory', 'research-dashboard.html#rd-runtime', 'memory'],
            ['Behavior', 'research-dashboard.html#rd-runtime', 'behavior'],
            ['Inflight (Experimental)', 'research-dashboard.html#rd-runtime', 'runtime_inflight'],
            ['Plugin', 'research-dashboard.html#rd-runtime', 'plugin']
          ]
        },
        {
          label: 'Tapes',
          href: 'research-dashboard.html',
          key: 'runtime_tapes',
          accent: '#70b8ff',
          children: [['Tape Library', 'research-dashboard.html#rd-runtime', 'runtime_tapes']]
        },
        {
          label: 'Research',
          href: 'research-dashboard.html',
          key: 'research_dashboard',
          accent: '#8ee08e',
          children: [
            ['Research Dashboard', 'research-dashboard.html', 'research_dashboard'],
            ['Observer Research', 'research-dashboard.html#rd-signals', 'research_observer'],
            ['Echo Frequency Learning', 'research-dashboard.html#rd-signals', 'research_echo_frequency'],
            ['Pattern Analysis', 'research-dashboard.html#rd-signals', 'research_pattern_analysis'],
            ['Arle Analysis', 'research-dashboard.html#rd-signals', 'research_arle_analysis'],
            ['Research Index', 'research-dashboard.html#rd-index', 'research_index'],
            ['AI Reports', 'research-dashboard.html#rd-reports', 'research_ai_reports'],
            ['Research Documents', 'research-dashboard.html#rd-reports', 'research_documents'],
            ['Batch Export', 'research-dashboard.html#rd-reports', 'research_batch_export']
          ]
        },
        {
          label: 'Lab',
          href: 'research-dashboard.html',
          key: 'lab_dashboard',
          accent: '#f7b267',
          children: [
            ['Dashboard', 'research-dashboard.html#rd-lab', 'lab_dashboard'],
            ['Runtime Tests', 'research-dashboard.html#rd-lab', 'lab_tests'],
            ['Commit Harness', 'research-dashboard.html#rd-lab', 'lab_commit_harness'],
            ['Tape Runtime Harness', 'research-dashboard.html#rd-lab', 'lab_tape_runtime_harness'],
            ['Agent Simulator', 'research-dashboard.html#rd-lab', 'lab_agent_simulator'],
            ['P-State Harness', 'research-dashboard.html#rd-lab', 'lab_p_state_harness'],
            ['Temperature Harness', 'research-dashboard.html#rd-lab', 'lab_temperature_harness'],
            ['Inflight Tuning Harness', 'research-dashboard.html#rd-lab', 'lab_inflight_tuning_harness'],
            ['Approval Harness', 'research-dashboard.html#rd-lab', 'lab_approval_harness'],
            ['Policy Matrix', 'research-dashboard.html#rd-lab', 'lab_policy_matrix'],
            ['Autoscale', 'research-dashboard.html#rd-lab', 'lab_autoscale'],
            ['Benchmarks', 'research-dashboard.html#rd-lab', 'lab_benchmarks']
          ]
        },
        {
          label: 'Operators',
          href: 'research-dashboard.html',
          key: 'operators',
          accent: '#87c3ff',
          children: [
            ['Users', 'research-dashboard.html#rd-operator', 'operators_users'],
            ['Roles', 'research-dashboard.html#rd-operator', 'operators_roles'],
            ['My Profile', 'research-dashboard.html#rd-operator', 'operators_profile']
          ]
        },
        {
          label: 'Settings',
          href: 'research-dashboard.html',
          key: 'settings',
          accent: '#8ea8ff',
          children: [
            ['General', 'research-dashboard.html#rd-settings', 'settings_general'],
            ['Alerts', 'research-dashboard.html#rd-settings', 'settings_alerts'],
            ['Visuals', 'research-dashboard.html#rd-settings', 'settings_visuals']
          ]
        },
        { label: 'Operator Handbook', href: 'research-dashboard.html#rd-operator', key: 'docs', accent: '#95b5d9' }
      ]
    }
  ];

  function iconFor(key) {
    const icons = {
      dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg></span>',
      engine_state: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M3 12h3l2-5 4 10 2-4h7v2h-6l-3 6-4-10-1 3H3z"/></svg></span>',
      workers: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7zM11 7h2v2h-2zM11 15h2v2h-2z"/></svg></span>',
      elora_core: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M12 3 4 7v10l8 4 8-4V7zm0 2.2L17.8 8 12 10.8 6.2 8zM6 9.6l5 2.6v7l-5-2.5zm12 0v7.7l-5 2.5v-7z"/></svg></span>',
      governance_dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 5 3.5 8.5 7 9 3.5-.5 7-4 7-9V6zM11 8h2v5h-2zM11 15h2v2h-2z"/></svg></span>',
      runtime_dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3v.5A2.5 2.5 0 0 0 6 12a3 3 0 0 0 3 3h1v4H8v1h8v-1h-2v-4h1a3 3 0 0 0 3-3 2.5 2.5 0 0 0 0-4.5V7a3 3 0 0 0-3-3 3.4 3.4 0 0 0-3 1.7A3.4 3.4 0 0 0 9 4z"/></svg></span>',
      runtime_tapes: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M4 6h16v12H4zm2 2v8h12V8zm2 1h2v2H8zm0 4h2v2H8zm6-4h2v2h-2zm0 4h2v2h-2z"/></svg></span>',
      research_dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M10 2a8 8 0 1 0 5.3 14l4.9 4.9 1.4-1.4-4.9-4.9A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm1 2H9v4H5v2h6z"/></svg></span>',
      lab_dashboard: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M9 2h6v2l-1 1v4.4l4.9 8.4A3 3 0 0 1 16.3 22H7.7a3 3 0 0 1-2.6-4.2L10 9.4V5L9 4z"/></svg></span>',
      operators: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M16 11a4 4 0 1 0-3.9-4.9A4 4 0 0 0 16 11zM8 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 2c-2.7 0-5 1.5-5 3.3V20h10v-2.7C13 15.5 10.7 14 8 14zm8 0c-.7 0-1.4.1-2 .3 1.2.8 2 1.9 2 3.2V20h5v-2.2c0-2.1-2.2-3.8-5-3.8z"/></svg></span>',
      settings: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="m19.4 13 1.3-1-1.3-1a7.5 7.5 0 0 0-.3-1.2l.8-1.4-1.6-1.6-1.4.8a7.5 7.5 0 0 0-1.2-.3l-1-1.3-1 1.3a7.5 7.5 0 0 0-1.2.3l-1.4-.8-1.6 1.6.8 1.4a7.5 7.5 0 0 0-.3 1.2l-1.3 1 1.3 1a7.5 7.5 0 0 0 .3 1.2l-.8 1.4 1.6 1.6 1.4-.8a7.5 7.5 0 0 0 1.2.3l1 1.3 1-1.3a7.5 7.5 0 0 0 1.2-.3l1.4.8 1.6-1.6-.8-1.4c.1-.4.2-.8.3-1.2zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg></span>',
      docs: '<span class="nav-icon"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6zm8 1.5V8h4.5zM8 11h8v1.5H8zm0 3h8v1.5H8zm0 3h6v1.5H8z"/></svg></span>'
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

  renderSidebar();
  mountSidebarToggles();
  initMobileSidebar();

  function initSafeReportModal() {
    const backdrop = document.getElementById('safe-report-modal');
    if (!backdrop) return;
    const title = backdrop.querySelector('[data-modal-title]');
    const body = backdrop.querySelector('[data-modal-body]');
    const closeBtn = backdrop.querySelector('[data-modal-close]');
    const dismissBtn = backdrop.querySelector('[data-modal-dismiss]');
    const links = document.querySelectorAll('[data-safe-report]');

    function closeModal() {
      backdrop.classList.remove('active');
      backdrop.setAttribute('aria-hidden', 'true');
    }

    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const report = link.getAttribute('data-safe-report') || 'SAFE-REPORT';
        const kind = link.getAttribute('data-safe-kind') || 'synthetic evidence extract';
        if (title) title.textContent = 'Safe Report Preview: ' + report;
        if (body) {
          body.innerHTML = '<p><strong>Type:</strong> ' + kind + '</p>'
            + '<p><strong>Classification:</strong> synthetic demonstration artifact</p>'
            + '<p><strong>Contents:</strong> redacted-safe metrics, policy outcome summary, replay compatibility notes</p>'
            + '<p style=\"margin-bottom:0;\">This preview is intentionally non-sensitive and suitable for external walkthroughs.</p>';
        }
        backdrop.classList.add('active');
        backdrop.setAttribute('aria-hidden', 'false');
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', function (event) {
      if (event.target === backdrop) closeModal();
    });
  }

  initSafeReportModal();
})();
