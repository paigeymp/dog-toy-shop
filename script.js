// script.js
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.product} - $${item.price}`;
    cartList.appendChild(listItem);
    total += item.price;
  });
  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
}
