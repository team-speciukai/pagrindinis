const kainaNav = document.getElementById("cart");

//hover effect
kainaNav.addEventListener("mouseover", () => {
  kainaNav.style.color = "black";
});
kainaNav.addEventListener("mouseout", () => {
  kainaNav.style.color = "palevioletred";
});
//


export function updateTotalInCart() {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  const itemIds = Object.keys(counts);
  let totalItems = 0;
  itemIds.forEach((itemId) => {
    totalItems += counts[itemId];
  });
  localStorage.setItem("totalItems", totalItems);
  kainaNav.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Cart(${totalItems})`;

  function totalInCart() {
    const counts = JSON.parse(localStorage.getItem("counts")) || {};
    // console.log(counts);
    const itemIds = Object.keys(counts);
    // console.log(itemIds);
    let totalItems = 0;
    itemIds.forEach(itemId => {
    totalItems += counts[itemId];
});
localStorage.setItem("totalItems", totalItems);
kainaNav.innerHTML= `
<i class="fa-solid fa-cart-shopping"></i>Cart(${totalItems})
`;
return totalItems;
}
}

updateTotalInCart(); // be sios eilutes, parefreshinus page nerodys cart counterio kol nepridesi/atimsi
