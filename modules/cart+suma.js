const kainaNavSelect = document.querySelector(".navbar-nav");
const kainaNav = document.createElement("a");
kainaNavSelect.append(kainaNav);

kainaNav.setAttribute("href","cart.html")
//style
kainaNav.style.color = "black";
kainaNav.style.fontSize = "2.5rem";
kainaNav.style.marginLeft = "20px";
kainaNav.style.fontWeight = "500";
kainaNav.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
kainaNav.style.fontStyle = "italic";
kainaNav.style.textDecoration = "none"
//hover effect
kainaNav.addEventListener('mouseover',() =>{
    kainaNav.style.color = 'palevioletred';
});
kainaNav.addEventListener('mouseout',()=>{
    kainaNav.style.color = 'black'
});
//

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
const totalItems = totalInCart();
console.log("isviso", totalItems);
setInterval(totalInCart, 1000);
