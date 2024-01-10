// imports ---------------------------< START

// cards.js

import { data } from "../data/data.js";
import { addFavorites } from "./favorites.js";
import {
  incrementCount,
  decrementCount,
  getCountFromLocalStorage,
} from "./counter.js";
import { updateTotalInCart } from "./cart.js";

// imports ---------------------------> END

// functions -------------------------< START

function createFoodCard(item, count) {
  return `
    <div class="col-md-6">
      <div id="${item.title}" class="card mb-3 text-white ${
    item.category
  }" style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="row g-0">
          <div class="col">
            <img src="${item.img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.desc}</p>
              <p class="card-text"><h1 class="price-text">${
                item.price
              } €</h1></p>

              <p class="card-text"><h1 class="price-text">${item.price} €</h1></p>

            </div>
            <div class="card-footer">
              <button class="decrement-btn rounded-btn" data-item-id="${
                item.id
              }">-</button>
              <span id="count${item.id}">${count}</span>
              <button class="increment-btn rounded-btn" data-item-id="${
                item.id
              }">+</button>
              <div style="color: yellow;">Total: <span id="totalPrice${
                item.id
              }">${(item.price * count).toFixed(2)} €</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function displayCards(category = "") {
  const cardContainer = document.getElementById("cardContainer");

  if (!cardContainer) {
    console.error("Container with such ID not found!");
    return;
  }

  cardContainer.innerHTML = "";

  data.forEach((item) => {
  cardContainer.innerHTML = ""; // isvalyti

  data.forEach((item) => {
    // kategorijos tikrinimas
    if (category === "" || item.category === category) {
      const count = getCountFromLocalStorage(item.id);
      const foodCard = createFoodCard(item, count);
      cardContainer.innerHTML += foodCard;
    }
  });

  document.querySelectorAll(".decrement-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.dataset.itemId;
      decrementCount(itemId);
      updateTotalInCart();
      updateTotalPrice(itemId);
    });
  });

  document.querySelectorAll(".increment-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.dataset.itemId;
      incrementCount(itemId);
      updateTotalInCart();
      updateTotalPrice(itemId);
    });
  });

  addFavorites("card");
}
displayCards(); // kortu rodymas

function updateTotalPrice(itemId) {
  const countElement = document.getElementById(`count${itemId}`);
  const priceElement = document.getElementById(`totalPrice${itemId}`);

  let count = parseInt(countElement.textContent, 10);
  let price = parseFloat(data[itemId - 1].price);

  const total = (count * price).toFixed(2);
  priceElement.textContent = `${total} €`;
}

displayCards();

function filterByCategory(category) {
  displayCards(category);
}

// functions -------------------------> END

// exports ---------------------------< START

export { displayCards, filterByCategory };

// exports ---------------------------> END
