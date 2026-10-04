const faqItems = Array.from(document.querySelectorAll('.faq-page .faq-item'));

if (faqItems.length) {
  const normalize = (text) => text.replace(/\s+/g, ' ').trim();

  faqItems.forEach((item) => {
    const summary = item.querySelector('summary');
    const updateExpanded = () => {
      summary.setAttribute('aria-expanded', String(item.open));
    };
    updateExpanded();
    item.addEventListener('toggle', updateExpanded);
  });

  // 表示中のQ&Aから生成し、構造化データだけが古くなることを防ぐ。
  const mainEntity = faqItems.map((item) => ({
    '@type': 'Question',
    name: normalize(item.querySelector('summary').textContent),
    acceptedAnswer: {
      '@type': 'Answer',
      text: Array.from(item.querySelectorAll('.faq-answer p'))
        .map((paragraph) => normalize(paragraph.textContent))
        .join('\n\n'),
    },
  }));

  const schema = document.createElement('script');
  schema.type = 'application/ld+json';
  schema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  });
  document.head.append(schema);
}
