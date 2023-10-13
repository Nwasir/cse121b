const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
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

  let outputElement = document.querySelector("#output");
  const html = `<h2>${results.name}</h2> <p>${results.weight} <img src="${results.sprites.front_default}" alt="image of ${results.name}`;
  outputElement.innerHTML = html;
  console.log("first: ", results);

}
async function getPokemonList(urlList) {
  const response = await fetch(urlList);

  if (response.ok) {
    const data = await response.json();

    doStuffList(data);
  }
}

function doStuffList(data) {
  let pokeList = data.results;
  const outputSecond = document.querySelector("#outputList");
  console.log(data);
  pokeList = sortpokemon(pokeList);
  pokeList.forEach((item) => {
    const html = `<li>${item.name}</li>`;
    outputSecond.innerHTML += html;
  });
}

function compare(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  else if (a.name < b.name) {
    return 1;
  }
  else return 0
}

function sortpokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}

getPokemon(url, doStuff);
getPokemonList(urlList, doStuffList);
console.log("second: ", results);