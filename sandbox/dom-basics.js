const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with javascript!";
document.body.appendChild(newParagraph);

//Add image t the dom
const newImage = document.createElement('img');
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
document.body.appendChild(newImage);

//add new section
const newSection = document.createElement("section");
newSection.innerHTML = `<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>`;
document.body.appendChild(newSection);