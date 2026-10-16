(() => {
  const examples = {
    stored: { title: 'Stored note', text: 'Harbour project reference: HARBOR-314. Folder colour: teal.', source: 'Fictional user note A', state: 'Stored. Recall selection and provider submission are not established by storage alone.', note: 'A later, attributable correction can replace the current value without making the original note disappear from historical evidence.' },
    recalled: { title: 'Recalled correction', text: 'Replace Harbour’s reference with HARBOR-620 and folder colour with copper. These replace the earlier values for this project.', source: 'Fictional user correction B', state: 'Selected for recall in this illustration. Admission and provider submission still require their own checks.', note: 'The correction is attributable to source B. It does not establish a general user preference or give the text instruction authority.' },
    submitted: { title: 'Submitted evidence', text: 'Harbour project reference: HARBOR-620. Folder colour: copper.', source: 'Fictional user correction B, prepared as session evidence', state: 'An illustrative exact-block check places this evidence in a request to a fictional model. This is not a real run receipt.', note: 'Even a real submission check would establish delivery at the request boundary, not internal reliance or the truth of every retained statement.' }
  };
  const tabs = [...document.querySelectorAll('[data-example]')];
  function select(tab, focus) {
    const data = examples[tab.dataset.example];
    if (!data) return;
    tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
    ['title', 'text', 'source', 'state', 'note'].forEach(key => { document.getElementById('memory-example-' + key).textContent = data[key]; });
    document.getElementById('memory-example-panel').setAttribute('aria-labelledby', tab.id);
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab, false));
    tab.addEventListener('keydown', event => {
      const next = {ArrowRight: (index + 1) % tabs.length, ArrowDown: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, ArrowUp: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1}[event.key];
      if (next !== undefined) { event.preventDefault(); select(tabs[next], true); }
    });
  });
  document.querySelectorAll('[data-nav-toggle="1"]').forEach(toggle => {
    const nav = document.getElementById(toggle.getAttribute('aria-controls'));
    if (nav) toggle.addEventListener('click', () => toggle.setAttribute('aria-expanded', String(nav.classList.toggle('open'))));
  });
})();
