const menuToggle = document.getElementById('mobile-menu');
const menu = document.getElementById('navbar-menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('mobile-toogle')
  menuToggle.classList.toggle('color-menu')
     
});
