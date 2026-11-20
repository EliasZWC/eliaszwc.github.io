(() => {
  // Page transition: leave with a short fade, arrive with the CSS animation.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.addEventListener('pageshow', () => {
    document.body.classList.remove('is-leaving');
    document.body.style.removeProperty('opacity');
  });

  document.addEventListener('click', (e) => {
    if (reduce) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a[href]');
    if (!link) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return;
    if (!/\.html(\?|#|$)/.test(href)) return;

    e.preventDefault();
    document.body.classList.add('is-leaving');
    window.setTimeout(() => {
      window.location.href = href;
    }, 210);
  });

  // Knowledge plate: rendered from the generated JSON
  const dataEl = document.getElementById('atlas-data');
  const plateTree = document.querySelector('[data-plate-tree]');
  if (dataEl && plateTree) {
    const tree = JSON.parse(dataEl.textContent);
    const fields = [...document.querySelectorAll('.field[data-field]')];
    const titleEl = document.querySelector('[data-plate-title]');
    const domainEl = document.querySelector('[data-plate-domain]');
    const countEl = document.querySelector('[data-plate-count]');
    const branchesEl = document.querySelector('[data-plate-branches]');
    const domainShortEl = document.querySelector('[data-plate-domain-short]');

    const find = (name) => {
      for (const d of tree) {
        const f = d.fields.find((x) => x.name === name);
        if (f) return { domain: d, field: f };
      }
      return null;
    };

    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const select = (name) => {
      const hit = find(name);
      if (!hit) return;
      const { domain, field } = hit;
      fields.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.field === name)));
      if (titleEl) titleEl.textContent = field.name;
      if (domainEl) domainEl.textContent = domain.name;
      if (countEl) countEl.textContent = `${field.branches.length} branches`;
      if (branchesEl) branchesEl.textContent = String(field.branches.length).padStart(2, '0');
      if (domainShortEl) domainShortEl.textContent = domain.name.replace(/ Science$/, '');
      plateTree.innerHTML =
        `<span class="tree__root">${esc(field.name)}</span>` +
        `<div class="tree__kids">` +
        field.branches
          .map(
            (b) =>
              `<div class="tree__kid">${esc(b.name)}` +
              (b.children.length ? `<span class="tree__sub">${b.children.map(esc).join(' · ')}</span>` : '') +
              `</div>`
          )
          .join('') +
        `</div>`;
    };

    fields.forEach((btn) => btn.addEventListener('click', () => select(btn.dataset.field)));
    if (fields[0]) select(fields[0].dataset.field);
  }

  // Copy to clipboard
  document.querySelectorAll('[data-copy]').forEach((el) => {
    el.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(el.dataset.copy);
        const old = el.dataset.label || el.textContent;
        el.dataset.label = old;
        el.textContent = 'Copied';
        setTimeout(() => { el.textContent = old; }, 1400);
      } catch {}
    });
  });

  // Preview strip: hide with ?clean=1
  if (new URLSearchParams(location.search).has('clean')) {
    document.querySelector('.preview-flag')?.remove();
  }
})();
