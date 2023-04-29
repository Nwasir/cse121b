/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Nnanna Uko Arua";


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const mYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = mYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
//const myPicture = document.createElement("img");
const myImage = "images/my_image.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", myImage);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFood = ['rice', 'beans', 'pottage yam', 'spaghetti'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = `${favoriteFood.join(', ')}.`;

// Step 3: declare and instantiate a variable to hold another favorite food
const myFavoriteFood = "three leaf yam";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(myFavoriteFood);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = `${favoriteFood.join(', ')}.`;

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = `${favoriteFood.join(', ')}.`;

// Step 8: remove the last element in the favorite foods array
favoriteFood.pop();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = `${favoriteFood.join(', ')}.`;

// const newFood = document.createElement("span");
// newFood.innerHTML = `<ul><li>Plaintain</li><li>Potatoes</li><li>Akara</li></ul>`;
// document.body.appendChild(newFood);
//merge two arrays
const newFood = ["plaintain", "potatoes", "Akara"];
const allFood = newFood.concat(favoriteFood);

document.querySelector("#food").textContent = `${allFood.join(", ")}`;

