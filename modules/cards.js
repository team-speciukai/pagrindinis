/** @format */

// cards.js
import { data } from "../data.js";
import { addFavorites } from "./favorites.js";
import {
  incrementCount,
  decrementCount,
  getCountFromLocalStorage,
} from "./counter.js";

function createFoodCard(item, count) {
  return `
    <div class="col-md-6">
      <div id="${item.title}" class="card mb-3 text-white ${item.category}" style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.desc}</p>
              <p class="card-text"><small class="text-white">Kaina: ${item.price}</small></p>
            </div>
            <div class="card-footer">
            <button class="decrement-btn rounded-btn" data-item-id="${item.id}">-</button>
        <span id="count${item.id}">${count}</span>
        <button class="increment-btn rounded-btn" data-item-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function displayCards(category = "") {
  const containerId = "korteles";
  const cardContainer = document.getElementById("cardContainer");

  if (!cardContainer) {
    console.error("Container with such ID not found!");
    return;
  }

  // Clear previous content
  cardContainer.innerHTML = "";

  data.forEach((item) => {
    // Check if the category matches or if no category is specified
    if (category === "" || item.category === category) {
      const count = getCountFromLocalStorage(item.id);
      const foodCard = createFoodCard(item, count);
      cardContainer.innerHTML += foodCard;
    }
  });

  // Attach event listeners after adding cards to the DOM
  document.querySelectorAll(".decrement-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.dataset.itemId;
      decrementCount(itemId);
    });
  });

  document.querySelectorAll(".increment-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.dataset.itemId;
      incrementCount(itemId);
    });
  });

  addFavorites("card");
}

// rodyti visas kortas
displayCards();

// funkcija isfiltruoti kortas pagal kategorija
function filterByCategory(category) {
  displayCards(category);
}

export { displayCards, filterByCategory };
