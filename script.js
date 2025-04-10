let cart = [];
let total = 0;

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
    total += 10; // Assuming each biryani dish costs $10
  });
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
  alert(`Total amount: $${total.toFixed(2)}\nThank you for your order!`);
  cart = [];
  updateCart();
}
