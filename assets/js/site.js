
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('open'));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
