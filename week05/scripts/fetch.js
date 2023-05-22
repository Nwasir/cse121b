const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  let output = document.querySelector("#output");
  const html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" 
  alt="Image of ${results.name}">`;
  output.innerHTML = html;
  console.log("first: ", results);
}

getPokemon(url);
console.log("second: ", results);

function doStuffList(data) {
  console.log(data);
  let outputList = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.forEach((element) => {
    const html = `<li>${element.name}</li>`;
    outputList.innerHTML = html
  });
}
const urlList = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList(url) {
  let response = await fetch(urlList);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

getPokemonList(urlList);

function sortPokemon(a, b) {
  if (a.name > b.name) {
    // sort b before a
    return 1;
  } else if (a.name < b.name) {
    // a and b different but unchanged (already in the correct order)
    return -1;
  } else return 0; // a and b are equal

}

// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// const urlList = "https://pokeapi.co/api/v2/pokemon";
// let results = null;

// async function getPokemon(url, doThis) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     // execute the callback
//     doThis(data);
//   }
// }

// function doStuff(data) {
//   results = data;
//   const outputElement = document.querySelector("#output");
//   const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
//   outputElement.innerHTML = html;
//   console.log("first: ", results);
// }

// function doStuffList(data) {
//   console.log(data);
//   const pokeListElement = document.querySelector("#outputList");
//   const pokeList = data.results;
//   pokeList.forEach((currentItem) => {
//     const html = `<li data-url="${item.url}">${currentItem.name}</li>`;
//     // note the += here...
//     pokeListElement.innerHTML += html;
//   });
// }
// getPokemon(url, doStuff);
// console.log("second: ", results);
// // Notice that by just passing a different callback function in
// // we can totally change what happens when the data comes back.
// // It's like we gave the getPokemon function superpowers!
// getPokemon(urlList, doStuffList);