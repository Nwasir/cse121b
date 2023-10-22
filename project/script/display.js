
  const outfitElement = document.querySelector("#myOufit");

  /* async displayTemples Function */
  const display= (myOutfit) => {
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
  };

export default display();
