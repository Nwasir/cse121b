/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let myDate = new Date();
// Step 2: Declare another variable to hold the day of the week
let daysOfWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the 
//variable declared in Step 2 to the day of the week ( hint: getDay() )
daysOfWeek = myDate.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let message;
// Step 5: Using an if statement, if the day of the week is a weekday 
//(i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (daysOfWeek >= 1 && daysOfWeek <=5) {
    message = "hang in there!";
} else {
    message = "Woohoo! It is the weekend!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;
// Step 2: Use switch, case and break to set the message variable to the day of the
// week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (daysOfWeek) {
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Monday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3:
        message2 = "Wednesday";
        break;
    case 4:
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    default:
        message2 = "Saturday";
        
    // default:
    //     message2 = "invalid";

}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = message2;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];
// Step 2: Declare a function named output that accepts a list of temples as
// an array argument and does the following for each temple:
function output(templesList) {
    templesList.forEach((element) => {
        // - Creates an HTML <article> element
        let article = document.createElement("article");
        // - Creates an HTML <h3> element and add the temple's templeName property to it
        let h3 = document.createElement("h3");
        h3.textContent = element.templeName;
        // - Creates an HTML <h4> element and add the temple's location property to it
        let location = document.createElement("h4");
        location.innerHTML = element.location;
        // - Creates an HTML <h4> element and add the temple's dedicated property to it
        let dedicated = document.createElement("h4");
        dedicated.textContent = element.dedicated;
        // - Creates an HTML <img> element and add the temple's imageUrl property to the src 
        //attribute and the temple's templeName property to the alt attribute
        let image = document.createElement("img");
        image.src = element.imageUrl;
        image.alt = element.templeName;
        // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
        article.append(h3);
        article.append(location);
        article.append(dedicated);
        article.append(image);
        // - Appends the <article> element to the HTML element with an ID of temples
        document.querySelector("#temples").append(article);
    });
}
// Step 3: Create another function called getTemples. Make it an async function.
let url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
async function getTemples() {
    // Step 4: In the function, using the built-in fetch method, call this absolute
    // URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. 
    //Create a variable to hold the response from your fetch. You should have
    // the program wait on this line until it finishes.
    let response = await fetch(url)
    // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). 
    //Store this in the templeList variable you declared earlier (Step 1). Make sure the
    // the execution of the code waits here as well until it finishes.
    const templeList = await response.json();
    // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
    output(templeList);   
}
getTemples();
// Step 7: Declare a function named reset that clears all of the <article>
// elements from the HTML element with an ID of temples
function reset() {
    let resetArticle = document.querySelector("#temples");
    resetArticle.innerHTML = '';
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {
    // - Calls the reset function
    reset();
    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    let sortByValue = document.querySelector("#sortBy").value;
    // - Calls the output function passing in the sorted list of temples
    switch (sortByValue) {
        case "templeNameAscending":
            temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
            break;
        case "templeNameDescending":
            temples.sort((a, b) => b.templeName.localeCompare(a.templeName));
            break;
        default:
            break;
    }
    output(temples);
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
