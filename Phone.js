
document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-to-cart");
  
  cartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productName = productCard.querySelector("h3").innerText;
      const productPrice = productCard.querySelector("p").innerText;

      addToCart(productName, productPrice);
      alert(`${productName} has been added to your cart.`);
    });
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
}
