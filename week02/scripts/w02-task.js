/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = " Nnanna Uko Arua";
let currentYear = new Date().getFullYear();
let ProfilePicture = "images/my-image.jpg";

/* Step 3 - Element Variables */
const nameElement = document.querySelector("#name");
const foodElement = document.querySelector("#food");
let yearElement = document.querySelector("#year");

let picture = document.querySelector("picture");
let imageElement = picture.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", ProfilePicture);
imageElement.setAttribute("src", ProfilePicture);

/* Step 5 - Array */
let favoriteFood = ["garri", " beans", " yam", " ofe akwu"];
foodElement.innerHTML = `${favoriteFood}`;
let food = " egusi soup";
favoriteFood.push(food);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;







