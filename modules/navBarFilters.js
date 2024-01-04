import { filterByCategory } from "./cards.js";

document.getElementById("allItems").addEventListener("click", function (event) {
  filterByCategory("");
});

document
  .getElementById("breakfastItems")
  .addEventListener("click", function () {
    filterByCategory("breakfast"); // imti ne "breakfastItems", o "breakfast", nes cia pasuojama is data.js
  });

document.getElementById("lunchItems").addEventListener("click", function () {
  filterByCategory("lunch");
});
document.getElementById("dinnerItems").addEventListener("click", function () {
  filterByCategory("dinner");
});
document.getElementById("drinksItems").addEventListener("click", function () {
  filterByCategory("drinks");
});
document.getElementById("desertsItems").addEventListener("click", function () {
  filterByCategory("deserts");
});
