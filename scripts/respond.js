const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const exit = document.querySelector('.exit')
const remove = document.querySelectorAll('.cart-button');
const GoTo = document.querySelectorAll('a');
const showCart = document.querySelector('.cart-icon')
const sideCart = document.querySelector('.cart-menu')
const close = document.querySelector('.close')

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  hamburger.classList.add('hide');
});

exit.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('hide');
});

GoTo.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('hide');
    menu.classList.remove('active');
  })
})

showCart.addEventListener('click', () => {
   sideCart.classList.add('show');
   hamburger.classList.add('hide');
})

close.addEventListener('click', () => {
  sideCart.classList.remove('show');
  hamburger.classList.remove('hide');
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }

  lastScrollY = window.scrollY;
});