const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
  });
}
