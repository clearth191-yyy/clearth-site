(() => {
  'use strict';

  const openArticleFromHash = () => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (!id) return;
    const article = document.getElementById(id);
    if (!(article instanceof HTMLDetailsElement) || !article.classList.contains('news-page-item')) return;
    article.open = true;
    requestAnimationFrame(() => article.scrollIntoView({ block: 'start' }));
  };

  window.addEventListener('hashchange', openArticleFromHash);
  openArticleFromHash();
})();
