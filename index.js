const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const exit = document.querySelector('.exit');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

exit.addEventListener('click', () => {
  menu.classList.remove('active');
});
