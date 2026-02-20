const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const exit = document.querySelector('.exit');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  hamburger.classList.add('hide');
});

exit.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('hide');
});

