const button = document.querySelector('.menu-toggle');
if (button) {
  const closeMenu = () => {
    document.body.classList.remove('is-menu-open');
    button.setAttribute('aria-expanded', 'false');
  };
  button.addEventListener('click', () => {
    const open = document.body.classList.toggle('is-menu-open');
    button.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('#global-nav a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    const status = form.querySelector('[data-form-status]');
    const honeypot = form.querySelector('[name="website"]');
    const requiredFields = Array.from(form.querySelectorAll('[required]'));
    const invalidField = requiredFields.find((field) => !field.value.trim());
    if (honeypot && honeypot.value.trim() !== '') {
      event.preventDefault();
      if (status) status.textContent = '送信できませんでした。入力内容をご確認ください。';
      return;
    }
    if (invalidField) {
      event.preventDefault();
      if (status) status.textContent = '必須項目を入力してください。';
      invalidField.focus();
      invalidField.reportValidity();
      return;
    }
    if (form.action.includes('REPLACE_ME')) {
      event.preventDefault();
      if (status) status.textContent = 'フォーム送信先が未設定です。Formspree、Netlify Forms、PHPメールフォームの送信先に差し替えてください。';
    }
  });
}
