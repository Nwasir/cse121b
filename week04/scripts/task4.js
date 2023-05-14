/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myself = {
  name: "Nnanna Uko Arua",
  photo: "images/my_image.jpg",
  favoriteFood: [
    {
      soup: "Egusi soup",
      snacks: "chin chin",
    },
  ],
  hobbies: [
    {
      sports: "football",
      movies: "vampire movies",
    },
  ],
  placesLived: [
    {
      place: "Aba, Abia state",
      length: "7 years",
    },
  ],
};

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image
// path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an
//array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two
//properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above)
// to the HTML <span> element with an ID of name
let nameElement = document.querySelector("#name");
nameElement.textContent = myself.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
let photo = document.querySelector("#photo");
photo.src = myself.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.alt = myself.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML
// <li> element and place its value in the <li> element
// let favoriteFoodElement = document.querySelector("#favorite-foods");
// let ul = document.querySelector("ul");
let favoriteFoodsElement = document.querySelector("#favorite-foods");

myself.favoriteFood.forEach(function(food) {
  let liElement = document.createElement("li");
  liElement.innerHTML = `<strong><li>${food.snacks},</li> <li>${food.soup}</li></strong>`;
  favoriteFoodsElement.appendChild(liElement);
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbyElement = document.querySelector("#hobbies");

myself.hobbies.forEach(function(hobby) {
  let liElement = document.createElement("li");
  liElement.innerHTML = `<strong><li>${hobby.sports},</li> <li>${hobby.movies}</strong></li> `;
  hobbyElement.appendChild(liElement);
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placesLivedElement = document.querySelector("#places-lived");

myself.placesLived.forEach(function(places) {
  //let dt = document.querySelector("dt");
  let dl = document.createElement("dl");
  dl.innerHTML = `<strong><li>${places.place},</li> <li>${places.length} </li></strong>`;  
  placesLivedElement.appendChild(dl);  
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
