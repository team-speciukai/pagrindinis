/** @format */

import { data } from "../data.js";

const CONTAINER_ID = "cardContainer";
const DEFAULT_CATEGORY = "";

function displayCards(category = DEFAULT_CATEGORY) {
  const cardContainer = document.getElementById(CONTAINER_ID);

  if (!cardContainer) {
    console.error(`Container with ID "${CONTAINER_ID}" not found!`);
    return;
  }

  cardContainer.innerHTML = "";

  data.forEach((item) => {
    if (category === DEFAULT_CATEGORY || item.category === category) {
      const foodCard = document.createElement("div");
      foodCard.classList.add(
        "col-md-6",
        "card",
        "mb-3",
        "text-white",
        item.category
      );
      foodCard.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      foodCard.style.position = "relative";

      foodCard.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex flex-column justify-content-between mb-3">
              <div>
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.desc}</p>
                <p class="card-text"><small class="text-white">Kaina: ${
                  item.price
                }</small></p>
              </div>
              <div class="d-flex justify-content-end align-items-center">
                <button type="button" class="btn btn-sm btn-success increment-button">+</button>
                <span class="count mx-2" id="count${item.id}">${
        getCountFromLocalStorage(item.id) || 0
      }</span>
                <button type="button" class="btn btn-sm btn-danger decrement-button">-</button>
              </div>
            </div>
          </div>
        </div>
      `;

      cardContainer.appendChild(foodCard);

      const incrementButton = foodCard.querySelector(".increment-button");
      const decrementButton = foodCard.querySelector(".decrement-button");

      incrementButton.addEventListener("click", () => incrementCount(item.id));
      decrementButton.addEventListener("click", () => decrementCount(item.id));
    }
  });
}

displayCards();

function filterByCategory(category) {
  displayCards(category);
}

function incrementCount(itemId) {
  const countElement = document.getElementById(`count${itemId}`);
  let count = parseInt(countElement.textContent, 10);
  count += 1;
  countElement.textContent = count;
  updateLocalStorage(itemId, count);
}

function decrementCount(itemId) {
  const countElement = document.getElementById(`count${itemId}`);
  let count = parseInt(countElement.textContent, 10);
  if (count > 0) {
    count -= 1;
    countElement.textContent = count;
    updateLocalStorage(itemId, count);
  }
}

function updateLocalStorage(itemId, count) {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  counts[itemId] = count;
  localStorage.setItem("counts", JSON.stringify(counts));
}

function getCountFromLocalStorage(itemId) {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  return counts[itemId];
}
