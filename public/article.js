/* Article navigation and sharing. Kept external for the site's script policy. */
(() => {
  const article = document.querySelector('.bl-article');
  if (!article) return;

  article.querySelectorAll('[data-copy-article]').forEach((button) => {
    button.addEventListener('click', async () => {
      const status = button.parentElement.querySelector('[data-copy-status]');
      const label = button.querySelector('span') || button; // R13.A3: keep the icon, change only the text
      button.disabled = true;
      try {
        await navigator.clipboard.writeText(button.dataset.copyArticle);
        label.textContent = 'Link copied';
        status.textContent = 'Article link copied.';
      } catch {
        status.textContent = 'Could not copy the link. Copy the address from your browser.';
      } finally {
        button.disabled = false;
        window.setTimeout(() => { label.textContent = 'Copy link'; }, 2000);
      }
    });
  });

  const entries = Array.from(article.querySelectorAll('[data-article-section]'))
    .map((link) => ({ link, section: document.getElementById(link.dataset.articleSection) }))
    .filter(({ section }) => section);
  let scheduled = false;
  const updateIndex = () => {
    scheduled = false;
    let current = entries[0];
    for (const entry of entries) {
      if (entry.section.getBoundingClientRect().top <= 150) current = entry;
    }
    entries.forEach((entry) => {
      if (entry === current) entry.link.setAttribute('aria-current', 'location');
      else entry.link.removeAttribute('aria-current');
    });
  };
  const requestUpdate = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateIndex);
    }
  };
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('load', requestUpdate, { once: true });
  updateIndex();
})();
