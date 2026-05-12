const cart = [];

const addToCart = document.querySelectorAll('.cart-button');
cartInfo = document.querySelector('.cart-info');
cartImage = document.querySelector('.cart-image');
cartName = document.querySelector('.cart-name');
cartPrice = document.querySelector('.cart-price');
cartCount = document.querySelector('.inCart');
cartTotal = document.querySelector('.cart-total')
checkOut = document.querySelector('.checkout');
process = document.querySelector('.processing')

function updateCart(product) {
  const Id = product.dataset.id;
  const existingItem = cart.find(item => item.id === Id);

    if (existingItem) {
      existingItem.quantity += 1
      
    } else {
        cart.push({
        id: product.dataset.id,
        name: product.dataset.name,
        price: Number(product.dataset.price),
        image: product.dataset.image,
        quantity: 1
    });
    
}
renderCart()
}

cartInfo.addEventListener('click', (f) => {
  const cartItem = f.target.closest('.organize');
  if (!cartItem) return;

  const Id = cartItem.dataset.id;

  const product = cart.find(item => item.id === Id);

  if (!product) return;

  if (f.target.classList.contains('fa-plus')) {
    product.quantity++;
    cartCount.textContent = Number(cartCount.textContent) + 1;
    renderCart();
  }

  if (f.target.classList.contains('fa-minus')) {
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      const index = cart.findIndex(item => item.id === Id);
      cart.splice(index, 1);
    }
    updateCartCount(); 
    renderCart();
  }
});

function renderCart() {
  cartInfo.innerHTML = "";
 

  cart.forEach(product => {
     const totalPrice = product.price * product.quantity;
  cartInfo.innerHTML += `
   <div class="cart-info organize" data-id="${product.id}">
     <div class="cart-image">
      <img src = "${product.image}" class ="imageCart"/>
     </div>
     <div class="cart-name">
      <p>${product.name}</p>
      <div class = "update-quantity">
        <i class="fa-solid fa-minus"></i>
        <p>${product.quantity}</p>
        <i class="fa-solid fa-plus"></i>
      </div>
     </div>
     <div class="cart-price">
      <p>${totalPrice}</p>
     </div>
   </div>`
})
 updateTotal(cart)
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = total;
}

function getTotal(cart) {
  return cart.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
}

function updateTotal(cart) {
  const total = getTotal(cart);
  cartTotal.textContent = `Total Price: ${total}`
}

addToCart.forEach(button => {
  button.addEventListener('click', () => {

  const product = button.closest('.product-info');
  updateCart(product)
  cartCount.textContent = Number(cartCount.textContent) + 1;

   sideCart.classList.add('show');
   hamburger.classList.add('hide');
 
    console.log(cart);
  });
});

checkOut.addEventListener('click', () => {
   document.body.innerHTML = ` 
   <div class="processing">
      <img class = "process-icon" src="images/iconpic/badge-svgrepo-com.svg"
      <p class = "process-desc">Your Order Is Being Processed...</p>
    </div>`;
})