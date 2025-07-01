const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
