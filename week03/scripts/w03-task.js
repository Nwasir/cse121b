/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  const addNumber1 = parseFloat(document.querySelector("#add1").value);
  const addNumber2 = parseFloat(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1 + addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const Subtract = function (Subtract1, Subtract2) {
  return Subtract - Subtract1 - Subtract2;
}

const SubtractNumbers = function () {
  const SubtractNumbers1 = parseFloat(document.querySelector("#subtract1").value);
  const SubtractNumbers2 = parseFloat(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = Subtract(SubtractNumbers1, SubtractNumbers2);
}
document.querySelector('#subtractNumbers').addEventListener('click', SubtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
  const firstNumber = parseFloat(document.querySelector('#factor1').value);
  const secondNumber = parseFloat(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(firstNumber, secondNumber);

}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers() {
  const firstNumber = parseFloat(document.querySelector('#dividend').value);
  const secondNumber = parseFloat(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(firstNumber, secondNumber);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
// Declare and instantiate a variable of to store the current date.
const currentDate = new Date();
// Declare a variable to hold the current year.
// Using the variable declared in number 1, call the built-in getFullYear() method/function and assign it to the variable declared in 2.
const currentYear = currentDate.getFullYear();
// Assign the current year variable to an HTML form element with an ID of year.
let yearElement = document.querySelector('year');
yearElement.value = currentYear
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
