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

    if (response.ok){
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
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
    }
}



getTemples();

/* Event Listener */
