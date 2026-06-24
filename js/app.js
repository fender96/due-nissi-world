/* Due Nissi V4.2 — app.js */

/* ===== NAVBAR: scrolled state ===== */
(function () {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ===== HAMBURGER MENU ===== */
(function () {
  const btn  = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
})();

/* ===== POI EXPAND ===== */
document.querySelectorAll('.poi-expand').forEach(btn => {
  btn.addEventListener('click', () => {
    const desc = btn.previousElementSibling;
    if (!desc) return;
    const expanded = desc.classList.toggle('clamped');
    btn.textContent = expanded ? '▼ Espandi' : '▲ Riduci';
    // note: toggle returns true if added (so clamped = collapsed)
    btn.textContent = desc.classList.contains('clamped') ? '▼ Espandi' : '▲ Riduci';
  });
});

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.toggle('open');
    answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : null;
  });
});
