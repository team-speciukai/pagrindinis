import { data } from "../data.js";
import { addFavorites } from "./favorites.js"

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
      const foodCard = `
        <div class="col-md-6">
          <div  id="${item.title}" class="card mb-3 text-white ${item.category}" style="background-color: rgba(0, 0, 0, 0.7);">
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
              </div>
            </div>
          </div>
        </div>
      `;
      cardContainer.innerHTML += foodCard;
    }
  });
  addFavorites("card")
}

// rodyti visas kortas
displayCards();

// funkcija isfiltruoti kortas pagal kategorija
function filterByCategory(category) {
  displayCards(category);
}

// funkcijos panaudojimas

// filterByCategory("breakfast");
// filterByCategory("lunch");
// filterByCategory("dinner");
// filterByCategory("drinks");
// filterByCategory("deserts");

export { displayCards, filterByCategory };
