// imports ---------------------------< START

import { updateTotalInCart } from "./cart.js"; // naujinti cart skaitliuka

// imports ---------------------------> END

const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
const openModal = document.querySelector("#cart");
const orderButton = document.getElementById("orderButton");

openModal.addEventListener("click", (event) => {
  const storedData = localStorage.getItem("totalItems");
  const totalItems = JSON.parse(storedData) || [];

  if (totalItems.length === 0) {
    alert("Pasirinkite bent vieną patiekalą");
    event.preventDefault();
    window.location.reload();
  }
});

orderButton.addEventListener("click", (event) => {
  localStorage.removeItem("totalItems");
  localStorage.removeItem("counts");
  modal.hide();
  updateTotalInCart();
  alert("Uzsakymas gautas!");
  window.location.reload();
});
