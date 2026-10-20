const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.header_nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
});