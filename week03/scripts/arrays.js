let steps = ["one", "two", "three"];
// let stepHtml = steps.map(function (step) {
//   return `<li>${step}</li>`;
// });
const stepHtml = steps.map((step) => `<li>${step}</li>`);
document.querySelector("#myList").innerHTML = stepHtml;

// Activity 2 map
let grades = ["A", "B", "C"];

function convertGradeToPoints(grade) {
  let Point = 0;
  if (grade === "A") {
    Point = 4;
  } else if (grade === "B") {
    Point = 3;
  }
  return Point;
};
const gpaPoint = grades.map(convertGradeToPoints);

// Activity 3 reduce()
const pointTotal = gpaPoint.reduce((total, item) => total + item);
const pga = pointTotal / gpaPoint.length;

//Activity 4 filter()
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const longerFruits = fruits.filter((fruit) => fruit.length > 6);

//Activity indexOf()
const number = [12, 3, 4, 21, 54];
const luckyNumber = 21;
const checkNumber = number.indexOf(luckyNumber);