import { updateTotalInCart } from "./cart+suma.js"; // po order submito kad atnaujintu carta

const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
const openModal = document.querySelector("#cart");

openModal.addEventListener("click", () => {
  const storedData = localStorage.getItem("totalItems");
  const totalItems = JSON.parse(storedData) || [];

  if (totalItems.length === 0) {
    alert("Pasirinkite bent vieną patiekalą");
  }
});

const orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", () => {
  localStorage.removeItem("totalItems");
  localStorage.removeItem("counts");
  modal.hide();
  updateTotalInCart();
});
