import { choices } from "./choice";

const outfitElement = document.querySelector("#myOufit");

function display(myOutfit) {
  myOutfit.forEach((outFit) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = outFit.name;
    const images = document.createElement("img");
    images.setAttribute("src", outFit.images);
    images.setAttribute("alt", outFit.prices);

    article.appendChild(h3);
    article.appendChild(images);

    outfitElement.appendChild(article);
  });
}

let outFitList = [];
const url = "https://run.mocky.io/v3/6241eb10-cb52-43e5-af46-1eeab39222c2";

async function myOutfit() {
  const response = await fetch(url);

  if (response.ok) {
    outFitList = await response.json();
  }
  display(outFitList);
}

function myChoice(outFit) {
  reset();

  choices();

}

document.querySelector("#choice").addEventListener("change", () => {
  myChoice(outFitList);
});

myOutfit();
