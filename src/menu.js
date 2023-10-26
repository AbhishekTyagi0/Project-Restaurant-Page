import { cardData } from "./arrayobject";

export function menuBar() {
  const container = document.getElementById("content");
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardDiv");
  container.appendChild(cardContainer);

  function cardItems(item, about, image) {
    const card = document.createElement("div");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item;
    card.appendChild(heading);

    const itemImage = document.createElement("img");
    itemImage.src = image;
    card.appendChild(itemImage);

    const aboutItem = document.createElement("p");
    aboutItem.textContent = about;
    card.appendChild(aboutItem);

    return card;
  }
  for (let index of cardData) {
    const card = cardItems(index.item, index.about, index.image);
    cardContainer.appendChild(card);
  }
}
