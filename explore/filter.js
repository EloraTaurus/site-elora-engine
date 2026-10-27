/* Filter the static directory; all links remain readable without JavaScript. */
(() => {
  'use strict';
  const search = document.getElementById('directory-search');
  const category = document.getElementById('directory-category');
  const groups = [...document.querySelectorAll('[data-directory-group]')];
  const total = document.querySelectorAll('[data-directory-page]').length;
  function filter() {
    const terms = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const group of groups) {
      let matches = 0;
      for (const card of group.querySelectorAll('[data-directory-page]')) {
        const text = card.textContent.toLocaleLowerCase();
        const shown = (!category.value || category.value === group.dataset.directoryGroup)
          && terms.every(term => text.includes(term));
        card.hidden = !shown;
        if (shown) matches++;
      }
      group.hidden = matches === 0;
      visible += matches;
    }
    document.getElementById('directory-count').textContent = `${visible} of ${total} pages`;
    document.getElementById('directory-empty').hidden = visible !== 0;
  }
  search.addEventListener('input', filter);
  category.addEventListener('change', filter);
  document.getElementById('directory-reset').addEventListener('click', () => {
    search.value = ''; category.value = ''; filter(); search.focus();
  });
  document.getElementById('directory-controls').hidden = false;
  filter();
})();
