let names = ['John', 'Emily', 'David', 'Sarah', 'Michael'];
let verbs = ['ate', 'bought', 'planted', 'sold'];
let fruits = ['apple', 'banana', 'orange', 'mango', 'strawberry'];

function pickRandom() {
  let name = names[Math.floor(Math.random() * names.length)];
  let verb = verbs[Math.floor(Math.random() * verbs.length)];
  let fruit = fruits[Math.floor(Math.random() * fruits.length)];

  let result = `${name} ${verb} a ${fruit}`;
  document.querySelector('#result').innerHTML = result;
}
