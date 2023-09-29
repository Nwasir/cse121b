/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = parseFloat(document.querySelector("#add1").value);
  let addNumber2 = parseFloat(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1 + addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let Subtract = function (Subtract1, Subtract2) {
  return Subtract - Subtract1 - Subtract2;
};

let SubtractNumbers = function () {
  let SubtractNumbers1 = parseInt(document.querySelector("#subtract1").value);
  let SubtractNumbers2 = parseInt(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = Subtract(SubtractNumbers1, SubtractNumbers2);
};
document.querySelector('#subtractNumbers').addEventListener('click', SubtractNumbers);

/* Arrow Function - Multiply Numbers */

/* Open Function Use - Divide Numbers */

/* Decision Structure */

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
