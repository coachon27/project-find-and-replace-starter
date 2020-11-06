// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
const replaceOneButton = document.querySelector(".replace-one-button");
const caseInsensitive = document.querySelector("#case-insensitive");
let fieldset = document.createElement('fieldset')
// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");
// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

// YOUR CODE GOES HERE
replaceAllButton.addEventListener("click", function () {
  let badText = findInput.value;
  let newText = replaceInput.value;
  let counter = 0;
  //let badText = findInput.value.trim().toLowerCase();
  console.log(caseInsensitive);
  //paragraph = newArray[j].innerHTML.toLowerCase();
  for (let i = 0; i < rowElements.length; i++) {
    //outer loop the ROWS of this spreadsheet, & send each index of the row to the function which
    //turns each column into it's own cell of a new Array.
    let newArray = getCellElements(rowElements[i]);
    //now inner loop through each cell element(column) - 1 row at a time
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j].innerHTML.includes(badText)) {
        counter++;
        let newStr = newArray[j].innerHTML.replace(badText, newText);
        newArray[j].innerHTML = newStr;
        console.log("success " + newArray[j].innerHTML + " you had a total of " + counter + " change(s)!");
      }
    }
  }
});
replaceOneButton.addEventListener("click", function () {
    let badText = findInput.value;
    let newText = replaceInput.value;
    //counter = 0
    for (let i = 0; i < rowElements.length; i++) {
      //outer loop the ROWS of this spreadsheet, & send each index of the row to the function which
      //turns each column into it's own cell of a new Array.
      let newArray = getCellElements(rowElements[i]);
      //now inner loop through each cell element(column) - 1 row at a time
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j].innerHTML.includes(badText)) {
            j = newArray.length
          let newStr = newArray[j].innerHTML.replace(badText, newText);
          newArray[j].innerHTML = newStr;
          console.log("success " + newArray[j].innerHTML );
          
        }   
      }
    }      
  });
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
