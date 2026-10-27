/* Local page navigation only: headings become links, not a chat session. */
(() => {
  'use strict';
  const script = document.currentScript;
  if (!document.body.classList.contains('public-site')) return;
  const root = document.createElement('div');
  root.className = 'page-explorer';
  const toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'page-explorer-toggle';
  toggle.setAttribute('aria-label', 'Explore sections on this page');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'page-explorer-panel');
  const image = document.createElement('img');
  image.src = new URL('elora.png', script.src).href;
  image.alt = ''; image.width = 38; image.height = 38;
  const label = document.createElement('span'); label.textContent = 'Explore';
  toggle.append(image, label);
  const panel = document.createElement('section');
  panel.className = 'page-explorer-panel'; panel.id = 'page-explorer-panel'; panel.hidden = true;
  panel.setAttribute('aria-labelledby', 'page-explorer-title');
  const header = document.createElement('header');
  const title = document.createElement('h2'); title.id = 'page-explorer-title'; title.textContent = 'Explore this page';
  const close = document.createElement('button');
  close.type = 'button'; close.className = 'page-explorer-close'; close.textContent = '×';
  close.setAttribute('aria-label', 'Close page navigation');
  header.append(title, close);
  const hint = document.createElement('p'); hint.textContent = 'Jump to the part you want to explore.';
  const search = document.createElement('input'); search.type = 'search';
  search.placeholder = 'Find a section…'; search.setAttribute('aria-label', 'Find a section');
  const empty = document.createElement('p'); empty.textContent = 'No matching sections.'; empty.hidden = true;
  empty.setAttribute('role', 'status');
  const nav = document.createElement('nav'); nav.setAttribute('aria-label', 'Page sections');
  const list = document.createElement('ol'); nav.append(list);
  panel.append(header, hint, search, empty, nav); root.append(toggle, panel); document.body.append(root);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let initialSection = location.hash.startsWith('#page-section-') ? location.hash.slice(1) : null;

  function hide(restoreFocus) {
    panel.hidden = true; toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }
  function targets() {
    const entries = [];
    const intro = document.querySelector('.top-stage');
    if (intro) entries.push([intro, 'Introduction']);
    const capabilities = document.querySelector('.hero-capabilities');
    if (capabilities) entries.push([capabilities, 'Research capabilities']);
    document.querySelectorAll('.section-inner > h2, .section-inner > h3, .home-discover > h2, #pack-reader-content h2, #pack-reader-content h3, #pack-reader-content h4, #changelog-page-content h2, #changelog-page-content h3, #changelog-page-content h4')
      .forEach(heading => {
        if (heading.getClientRects().length && !heading.closest('[hidden]'))
          entries.push([heading, heading.textContent.trim()]);
      });
    return entries.filter(([, name]) => name);
  }
  function filter() {
    const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let matches = 0;
    for (const item of list.children) {
      item.hidden = !terms.every(term => item.textContent.toLowerCase().includes(term));
      if (!item.hidden) matches++;
    }
    empty.hidden = matches !== 0;
  }
  function refresh() {
    const fragment = document.createDocumentFragment();
    for (const [target, name] of targets()) {
      if (!target.id) {
        const base = 'page-section-' + (name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'heading');
        let id = base, suffix = 2;
        while (document.getElementById(id)) id = base + '-' + suffix++;
        target.id = id;
      }
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = name; link.href = '#' + encodeURIComponent(target.id);
      link.addEventListener('click', event => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); hide(false);
        target.scrollIntoView({behavior: reduced.matches ? 'auto' : 'smooth', block: 'start'});
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({preventScroll: true});
        const url = new URL(location.href); url.hash = target.id;
        history.replaceState(null, '', url);
      });
      item.append(link); fragment.append(item);
    }
    list.replaceChildren(fragment);
    filter();
    if (initialSection && document.getElementById(initialSection)) {
      document.getElementById(initialSection).scrollIntoView({behavior: 'auto', block: 'start'});
      initialSection = null;
    }
  }
  search.addEventListener('input', filter);
  toggle.addEventListener('click', () => {
    if (!panel.hidden) return hide(true);
    search.value = ''; refresh(); panel.hidden = false; toggle.setAttribute('aria-expanded', 'true');
    list.querySelector('a')?.focus();
  });
  close.addEventListener('click', () => hide(true));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) { event.preventDefault(); hide(true); }
  });
  document.addEventListener('pointerdown', event => {
    if (!panel.hidden && !root.contains(event.target)) hide(false);
  });
  refresh();
  // Readers load articles asynchronously; also prepare their section anchors.
  let pending;
  new MutationObserver(records => {
    if (records.every(record => root.contains(record.target))) return;
    clearTimeout(pending); pending = setTimeout(refresh, 80);
  }).observe(document.body, {subtree: true, childList: true, attributes: true, attributeFilter: ['hidden']});
})();
