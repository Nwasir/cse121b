export async function choices() {
  
  const filter = document.querySelector("#choice").value;

  switch (filter) {
    case "shirts":
      const myShirt = outFit.filter((shirt) =>
        shirt.name.includes("Shirt")
      );
      displayTemples(myShirt);
      break;
    case "notutah":
      const nonUtah = temples.filter(
        (temple) => !temple.location.includes("Utah")
      );
      displayTemples(nonUtah);
      break;
    case "older":     
      const olderTemples = temples.filter(
        (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
      );
      displayTemples(olderTemples);
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};
/* Event Listener */
// document.querySelector("#choice").addEventListener("change", () => {
//   myChoice(templeList);
// });