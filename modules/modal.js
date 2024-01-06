import { updateTotalInCart } from "./cart+suma.js"; // po order submito kad atnaujintu carta

const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
const openModal = document.querySelector("#cart");

openModal.addEventListener("click", (event) => {
  const storedData = localStorage.getItem("totalItems");
  const totalItems = JSON.parse(storedData) || [];

  if (totalItems.length === 0) {
    alert("Pasirinkite bent vieną patiekalą");
    event.preventDefault();
    window.location.reload();
  }
});

const orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", (event) => {
  localStorage.removeItem("totalItems");
  localStorage.removeItem("counts");
  modal.hide();
  updateTotalInCart();
  alert("Uzsakymas gautas!");
  window.location.reload();
});
