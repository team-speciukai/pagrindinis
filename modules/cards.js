// funkcija sukurti kortele

import { data } from "../data.js";

drawCards(data);
function drawCards(properties) {
  const cardWrapper = document.querySelector(".cards");
  cardWrapper.innerHTML = "";
  properties.forEach((element) => {
    const card = document.createElement("div");
    const divImage = document.createElement("div");
    const cardImg = document.createElement("img");
    const divPara = document.createElement("div");
    const paragraph1 = document.createElement("h3");
    const paragraph2 = document.createElement("h5");
    const paragraph3 = document.createElement("p");
    card.append(divImage, divPara);
    divImage.append(cardImg);
    divPara.append(paragraph1, paragraph2, paragraph3);
    cardWrapper.append(card);

    card.className = "card";
    divImage.className = "img";
    divPara.className = "card-footer";
    paragraph1.className = "title";
    paragraph2.className = "price";
    paragraph3.className = "info";
    paragraph1.textContent = element.title;
    paragraph2.textContent = "$" + element.price;
    paragraph3.textContent = element.desc;
    cardImg.src = element.img;
  });
}
