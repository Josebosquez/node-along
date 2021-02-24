const getInput = require("./get-input.js");
// 1. take in our user's age, saving it in a variable.
const userAge = getInput ()

// 2. check if they want help.
if (userAge === "--help"){
    console.log("This function returns your mental age.");
    console.log("Please enter your age after 'node mental-age.js' and a space");
}

//3. divide it by 2 and add 3.
const mentalAge = userAge / 2 + 3;
const ageNextYr = Number(userAge) + 1;
//4. print out the result in a sentence.
// for example, "You are 23 years old."
console.log("You are " + userAge + " years old.");
console.log("Next year you will be  " + ageNextYr + " years old.");

//5. print out the user's mental age in a sentence.
console.log("Your mental age is " + mentalAge + " years old.");
