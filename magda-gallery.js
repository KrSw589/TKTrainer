(() => {
  if (typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return;

  let dialog;
  let image;
  let status;
  let items = [];
  let index = 0;
  let opener;
  let touchStart;

  function show(nextIndex) {
    index = (nextIndex + items.length) % items.length;
    const link = items[index];
    image.src = link.href;
    image.alt = link.querySelector('img')?.alt || link.getAttribute('aria-label') || '';
    status.textContent = `${index + 1} / ${items.length}`;
  }

  function makeButton(className, label, symbol, onClick) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `magda-gallery-button ${className}`;
    button.setAttribute('aria-label', label);
    button.textContent = symbol;
    button.addEventListener('click', onClick);
    return button;
  }

  function createDialog() {
    dialog = document.createElement('dialog');
    dialog.className = 'magda-gallery-dialog';
    dialog.setAttribute('aria-label', 'Wiadomości Magdaleny');

    const panel = document.createElement('div');
    panel.className = 'magda-gallery-panel';
    image = document.createElement('img');
    image.className = 'magda-gallery-image';
    image.decoding = 'async';
    status = document.createElement('p');
    status.className = 'magda-gallery-status';
    status.setAttribute('aria-live', 'polite');

    panel.append(
      image,
      makeButton('magda-gallery-close', 'Zamknij podgląd', '×', () => dialog.close()),
      makeButton('magda-gallery-prev', 'Poprzednia wiadomość', '‹', () => show(index - 1)),
      makeButton('magda-gallery-next', 'Następna wiadomość', '›', () => show(index + 1)),
      status
    );
    dialog.append(panel);
    document.body.append(dialog);

    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        show(index - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        show(index + 1);
      }
    });

    dialog.addEventListener('touchstart', (event) => {
      if (event.touches.length !== 1) return;
      touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }, { passive: true });

    dialog.addEventListener('touchend', (event) => {
      if (!touchStart || event.changedTouches.length !== 1) return;
      const dx = event.changedTouches[0].clientX - touchStart.x;
      const dy = event.changedTouches[0].clientY - touchStart.y;
      touchStart = undefined;
      if (Math.abs(dx) < 50 || Math.abs(dx) <= Math.abs(dy)) return;
      show(index + (dx < 0 ? 1 : -1));
    }, { passive: true });

    dialog.addEventListener('touchcancel', () => { touchStart = undefined; });
    dialog.addEventListener('close', () => opener?.focus());
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('.magda-messages .magda-message');
    if (!link) return;
    const gallery = link.closest('.magda-messages');
    items = Array.from(gallery.querySelectorAll('.magda-message[href]'));
    if (!items.length) return;
    event.preventDefault();
    if (!dialog) createDialog();
    opener = link;
    show(items.indexOf(link));
    dialog.showModal();
  });
})();
