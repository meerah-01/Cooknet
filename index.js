const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const exit = document.querySelector('.exit')
const remove = document.querySelectorAll('.cart-button');
const GoTo = document.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  hamburger.classList.add('hide');
});

exit.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('hide');
});

remove.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-info');
    const added = productCard.querySelector('.added');

    button.remove();

    added.innerHTML = `
      <i class="fa-solid fa-circle-check" style="color: rgb(53, 132, 107)"></i>
      <p>Added to Cart</p>
    `;

    added.classList.add('added-active');
  });
});

GoTo.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('hide');
    menu.classList.remove('active');
  })
})


