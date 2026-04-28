(function () {
  'use strict';

  var PREF_KEY = 'elora_cookie_pref_v1';
  var OPEN_KEY = 'elora_cookie_panel_open_v1';
  var GA_ID = (window.ELORA_GA_ID || '').trim();
  if (!GA_ID) {
    var meta = document.querySelector('meta[name="elora-ga-id"]');
    GA_ID = meta ? String(meta.getAttribute('content') || '').trim() : '';
  }

  var gaLoaded = false;
  var gaConfigured = false;
  var pageViewSent = false;
  var currentConsentGranted = false;

  function readPref() {
    try {
      var raw = localStorage.getItem(PREF_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed.analytics !== 'boolean') return null;
      return parsed;
    } catch (err) {
      return null;
    }
  }

  function writePref(analytics) {
    var value = {
      analytics: !!analytics,
      updated_at: new Date().toISOString()
    };
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify(value));
    } catch (err) {
      // no-op
    }
    return value;
  }

  function ensureDataLayer() {
    if (!window.dataLayer) window.dataLayer = [];
    if (!window.gtag) {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }
  }

  function applyConsent(pref) {
    ensureDataLayer();
    var granted = !!(pref && pref.analytics);
    currentConsentGranted = granted;
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: granted ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted'
    });
    if (granted) {
      loadGA();
      if (gaConfigured) sendConsentPageView();
    } else {
      pageViewSent = false;
    }
  }

  function configureGA() {
    if (!window.gtag || !GA_ID || gaConfigured) return;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      send_page_view: false
    });
    gaConfigured = true;
  }

  function sendConsentPageView() {
    if (!window.gtag || !GA_ID || !currentConsentGranted || pageViewSent) return;
    window.gtag('config', GA_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_path: location.pathname + location.search + location.hash
    });
    pageViewSent = true;
  }

  function loadGA() {
    if (!GA_ID) return;
    ensureDataLayer();
    if (gaLoaded) {
      configureGA();
      return;
    }
    gaLoaded = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    script.onload = function () {
      configureGA();
      sendConsentPageView();
    };
    document.head.appendChild(script);
  }

  function buildUI(pref) {
    var style = document.createElement('style');
    style.textContent = [
      '.cookie-fab{position:fixed;left:16px;bottom:16px;z-index:1000;width:44px;height:44px;border-radius:999px;border:1px solid var(--cookie-fab-border, rgba(130,181,238,.72));background:var(--cookie-fab-bg, rgba(22,56,96,.96));color:#f8fbff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 10px 26px rgba(18,44,74,.28);font-size:20px;line-height:1;padding:0;}',
      '.cookie-panel{position:fixed;left:16px;bottom:66px;z-index:1001;width:min(340px,calc(100vw - 24px));border:1px solid var(--cookie-panel-border, rgba(164,193,228,.82));border-radius:12px;background:var(--cookie-panel-bg, rgba(241,247,255,.98));box-shadow:0 18px 38px rgba(32,69,106,.20);padding:12px;display:none;color:var(--cookie-panel-text, #153a62);font-family:inherit;}',
      '.cookie-panel.open{display:block;}',
      '.cookie-title{font-size:15px;font-weight:700;margin:0 0 6px 0;}',
      '.cookie-copy{font-size:13px;line-height:1.45;color:var(--cookie-panel-muted, #3a5f87);margin:0 0 10px 0;}',
      '.cookie-status{font-size:12px;color:var(--cookie-panel-muted, #3a5f87);margin-bottom:8px;}',
      '.cookie-link{font-size:12px;color:var(--brand-link, #2f6eb4);text-decoration:underline;display:inline-block;margin-bottom:8px;}',
      '.cookie-actions{display:flex;gap:8px;flex-wrap:wrap;}',
      '.cookie-btn{border:1px solid var(--chip-border, #b7cde8);background:#f5f9ff;color:var(--chip-text, #17395f);border-radius:999px;padding:6px 10px;font-size:12px;cursor:pointer;}',
      '.cookie-btn.primary{border-color:var(--elora-cobalt, #3f6fbb);background:linear-gradient(180deg,#4a7ec4,#2f66a9);color:#f4f9ff;}',
      '.cookie-btn.deny{border-color:#c4d4e9;background:#edf3fb;color:#37587f;}',
      '@media (max-width:760px){.cookie-fab{left:10px;bottom:10px;width:40px;height:40px;font-size:18px}.cookie-panel{left:10px;bottom:56px;width:calc(100vw - 20px)}}'
    ].join('');
    document.head.appendChild(style);

    var fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'cookie-fab';
    fab.setAttribute('aria-label', 'Cookie settings');
    fab.innerHTML = '' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"></circle>' +
      '<circle cx="9" cy="8.5" r="1.2" fill="currentColor"></circle>' +
      '<circle cx="14.8" cy="10.2" r="1.1" fill="currentColor"></circle>' +
      '<circle cx="10.2" cy="14.5" r="1.1" fill="currentColor"></circle>' +
      '<circle cx="15.2" cy="15.8" r="0.9" fill="currentColor"></circle>' +
      '</svg>';

    var panel = document.createElement('section');
    panel.className = 'cookie-panel';
    panel.setAttribute('aria-hidden', 'true');
    var policyHref = location.pathname.indexOf('/admin/') >= 0 ? '../cookie-policy.html' : 'cookie-policy.html';
    panel.innerHTML = '' +
      '<h3 class="cookie-title">Cookie Settings</h3>' +
      '<p class="cookie-copy">Analytics cookies are optional. You can accept or deny tracking at any time.</p>' +
      '<p class="cookie-copy"><strong>By default, analytics cookies are refused. You are opted out until you explicitly accept.</strong></p>' +
      '<div class="cookie-status" id="cookieStatus"></div>' +
      '<a class="cookie-link" href="' + policyHref + '">Read cookie policy</a>' +
      '<div class="cookie-actions">' +
        '<button type="button" class="cookie-btn primary" id="cookieAccept">Accept analytics</button>' +
        '<button type="button" class="cookie-btn deny" id="cookieDeny">Deny analytics</button>' +
      '</div>';

    document.body.appendChild(panel);
    document.body.appendChild(fab);

    var statusNode = panel.querySelector('#cookieStatus');
    var acceptBtn = panel.querySelector('#cookieAccept');
    var denyBtn = panel.querySelector('#cookieDeny');

    function refreshStatus(nextPref) {
      var effective = nextPref || readPref();
      if (!GA_ID) {
        statusNode.textContent = 'Status: analytics disabled (GA ID not configured)';
      } else if (!effective) {
        statusNode.textContent = 'Status: not set';
      } else {
        statusNode.textContent = 'Status: analytics ' + (effective.analytics ? 'enabled' : 'disabled');
      }
    }

    function setOpen(open) {
      panel.classList.toggle('open', !!open);
      panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      try {
        localStorage.setItem(OPEN_KEY, open ? '1' : '0');
      } catch (err) {
        // no-op
      }
    }

    fab.addEventListener('click', function () {
      setOpen(!panel.classList.contains('open'));
    });

    acceptBtn.addEventListener('click', function () {
      var next = writePref(true);
      refreshStatus(next);
      applyConsent(next);
      setOpen(false);
    });

    denyBtn.addEventListener('click', function () {
      var next = writePref(false);
      refreshStatus(next);
      applyConsent(next);
      setOpen(false);
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') setOpen(false);
    });

    document.addEventListener('click', function (ev) {
      if (!panel.classList.contains('open')) return;
      if (panel.contains(ev.target) || fab.contains(ev.target)) return;
      setOpen(false);
    });

    refreshStatus(pref);

    var persistedOpen = null;
    try {
      persistedOpen = localStorage.getItem(OPEN_KEY);
    } catch (err) {
      persistedOpen = null;
    }

    if (!pref || persistedOpen === '1') {
      setOpen(true);
    }
  }

  ensureDataLayer();
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });

  var pref = readPref();
  if (GA_ID) {
    loadGA();
  }
  if (pref) {
    applyConsent(pref);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      buildUI(pref);
    });
  } else {
    buildUI(pref);
  }
})();
