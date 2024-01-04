import { data } from "../data.js";
import { getCountFromLocalStorage } from "./counter.js";

function createCartItem(item, count) {
  return `
    <!-- HTML structure for a cart item -->
    <div class="cart-item">
      <p>${item.title} x ${count}</p>
    </div>
  `;
}

export function displayCartItems() {
  const cartContainer = document.getElementById("cartContainer");

  if (!cartContainer) {
    console.log("cart container was not found!");
    return;
  }

  const counts = JSON.parse(localStorage.getItem("counts"));
  Object.keys(counts).forEach((itemId) => {
    const count = getCountFromLocalStorage(itemId);
    const item = data.find((item) => item.id === itemId);

    if (item) {
      const cartItem = createCartItem(item, count);
      cartContainer.innerHTML += cartItem;
    }
  });
}
displayCartItems();
