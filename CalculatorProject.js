/*
BOCA CODE 
PTSWE-2022
Student: Rafael Reyes
Command Line interface (CLI) Math Calculator

The purpuse of this program, is:
1. Provide an intro for the Math Calculator 
2. Ask for a User Name
3. Ask for 2 values to use in a basic math operation (i.e. sum, subtract, 
    multiplcation, division).
4. Return the result of the math Operation
5. Ask user if they want to either run again, or exit
6. If the selection was to exit, provide an exit statement
*/

//mySelectionMenu function
function mySelectionMenu() {
  console.log(`Type number a for your selected operation`);
  console.log(`| 1 | For Summation`);
  console.log(`| 2 | For Subtraction`);
  console.log(`| 3 | For Multiplication`);
  console.log(`| 4 | For Division`);
  console.log(`| 5 | To Cancel`);
}

// Intro

console.log("Welcome to Node CLI Calculator App");
console.log("");
console.log("Please read the acceptance criteria to get started.");
// -> Question ???? What is the acceptance critera?  How should be written?

// Ask for user name
const prompt = require("prompt-sync")();
const userName = prompt("What is your Username? --> ");
console.log(`Hey there ${userName}`);

let promptCounter = 1;

while (promptCounter > 0) {
  //Ask what a operation they wat to complete
  console.log(`${userName}, Which Math Operation you want to do?`);

  mySelectionMenu(userName);

  //enter selection
  let myMathOperations = prompt(" Enter your selection -->  ");
  switch (myMathOperations) {
    case "1":
      console.log("SUM Operation in Progress...");
      let totalSumValue = 0;
      // Ask user for first number
      let firstSumValue = prompt(" Enter First Number Value-->  ");
      // Ask user for second number
      let secondSumValue = prompt(" Enter Second Number Value -->  ");
      // Complete operation / display output
      totalSumValue = Number(firstSumValue) + Number(secondSumValue); // using Number() to avoid concatenation
      console.log(`${userName}'s SUM Operation is...    ${firstSumValue} + ${secondSumValue} = ${totalSumValue}`);
      break;

    case "2":
      console.log("SUB Operation in Progress...");
      let totalSubValue = 0;
      // Ask user for first number
      let firstSubValue = prompt(" Enter First Number Value-->  ");
      // Ask user for second number
      let secondSubValue = prompt(" Enter Second Number Value -->  ");
      // Complete operation / display output
      totalSubValue = firstSubValue - secondSubValue;
      console.log(`${userName}'s SUB Operation is...    ${firstSubValue} - ${secondSubValue} = ${totalSubValue}`);
      break;
    case "3":
      console.log("MULT Operation in Progress...");
      let totalMultValue = 0;
      // Ask user for first number
      let firstMultValue = prompt(" Enter First Number Value-->  ");
      // Ask user for second number
      let secondMultValue = prompt(" Enter Second Number Value -->  ");
      // Complete operation / display output
      totalMultValue = firstMultValue * firstMultValue;
      console.log(`${userName}'s MULT Operation is...    ${firstMultValue} X ${firstMultValue} = ${totalMultValue}`);
      break;
    case "4":
      console.log("DIV Operation in Progress...");
      let totalDivValue = 0;
      // Ask user for first number
      let firstDivValue = prompt(" Enter First Number Value-->  ");
      // Ask user for second number
      let secondDivValue = prompt(" Enter Second Number Value -->  ");
      // Complete operation / display output
      totalDivValue = firstDivValue / secondDivValue;
      console.log(`${userName}'s MULT Operation is...    ${firstDivValue} / ${secondDivValue} = ${totalDivValue}`);
      break
    case "5":
      console.log("No Math Operation Completed");
      break
    default :
    console.log("No Math Operation Completed")
  }
  const repeatPrompt = prompt("Would you like to continue? y/n  -->  ");
  if (repeatPrompt === "y" || repeatPrompt === "Y") {
    promptCounter += 1;
  } else {
    promptCounter = 0;
  }
}

// exit statement
console.log(
  `Thanks ${userName} for using the CLI Math Calculator. Have a nice Day :)  `
);
