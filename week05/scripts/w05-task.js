/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const images = document.createElement("img");
        images.setAttribute("src", temple.imageUrl);
        images.setAttribute("alt", temple.location);

        article.appendChild(h3);
        article.appendChild(images);

        templesElement.appendChild(article);

    });
}

/* async getTemples Function using fetch()*/
templeUrl = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const getTemples = async () => {
    const response = await fetch(templeUrl);

    if (response.ok) {
        templeList = await response.json()
    }

    displayTemples(templeList);
    // console.log(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.querySelector("#sortBy").value;
    

    switch (filter) {
        case "utah":
            const utaTemple = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utaTemple);
            break;
        case "notutah":
            const nonUtah = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(nonUtah);
            break;
        case "older":
            // let dedicatedDate = new Date(temple.dedicate)
            // const olderTemples = temples.filter(temple => temple.dedicated < new Date(1950, 0, 1));
            const olderTemples = temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(temples);
            break;

    }

    document.querySelector("#sortBy").addEventListener("change", () => {
         sortBy(templeList);
         });
}



getTemples();

/* Event Listener */
