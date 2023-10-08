/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Nwasir Jim",
    photo: "images/my-image.jpg",
    favoriteFoods: [
        "Beans", 
        "Ugba", 
        "Okro soup", 
        "Ofe akwu", 
        "Egusi soup", 
        "Spaghetti"
    ],
    hobbies: [
        "Playing and watching Football",
        "Coding",
        "Reading",
        "singing"
    ],
    placesLived: [],

};  
myProfile.placesLived.push({
    place: "Port harcourt",
    lenght: "4 years"
});
myProfile.placesLived.push({
    place: "Aba",
    length: "10 years"
});

/* Populate Profile Object with placesLive objects */

/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
const photo = document.querySelector("#photo");
photo.src = myProfile.photo;
photo.alt = "my image";

myProfile.favoriteFoods.forEach(food => {
    let li = document.querySelector("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

let placesLivedList = document.querySelector("#places-lived");

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    
    let dd = document.createElement("dd");
    dt.textContent = place.lenght;
    
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);

});




