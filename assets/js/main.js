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
  const status = form.querySelector('[data-form-status]');
  const submitButton = form.querySelector('button[type="submit"]');
  const endpointReady = /^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i.test(form.action);

  if (submitButton && endpointReady) {
    submitButton.disabled = false;
    submitButton.removeAttribute('aria-disabled');
    submitButton.textContent = submitButton.dataset.readyLabel || '入力内容を送信する';
  }

  const showFailure = () => {
    if (!status) return;
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:0829780222';
    phoneLink.textContent = 'TEL 0829-78-0222';
    status.classList.add('is-error');
    status.replaceChildren(
      document.createTextNode('送信できませんでした。お手数ですが、お電話にてお問い合わせください。 '),
      phoneLink
    );
  };

  form.addEventListener('submit', async (event) => {
    const honeypot = form.querySelector('[name="_gotcha"]');
    const requiredFields = Array.from(form.querySelectorAll('[required]'));
    const invalidField = requiredFields.find((field) => !field.checkValidity());

    if (status) {
      status.classList.remove('is-error');
      status.replaceChildren();
    }

    if (honeypot && honeypot.value.trim() !== '') {
      event.preventDefault();
      showFailure();
      return;
    }

    if (invalidField) {
      event.preventDefault();
      if (status) status.textContent = '必須項目を入力してください。';
      invalidField.focus();
      invalidField.reportValidity();
      return;
    }
    if (!endpointReady) {
      event.preventDefault();
      if (status) status.textContent = '現在、フォームは準備中です。お電話またはメールでお問い合わせください。';
      return;
    }

    event.preventDefault();
    const readyLabel = submitButton?.dataset.readyLabel || '入力内容を送信する';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute('aria-busy', 'true');
      submitButton.textContent = '送信中…';
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Form submission failed');
      window.location.assign(form.dataset.successPage || 'thanks.html');
    } catch (error) {
      showFailure();
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute('aria-busy');
        submitButton.textContent = readyLabel;
      }
    }
  });
}
