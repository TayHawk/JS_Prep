/*
Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
The updated code should use a for loop to display the future ages.
*/



let rL = require("readline-sync");
let age = Number(rL.question('How old are you?'));
console.clear();
let sentence = `You are ${age} years old.`;
let futureAge;
console.log(sentence);

for( let i = 10; i <= 40; i += 10) {
     futureAge = age + i;
    console.log(`In ${i} years, you will be ${futureAge} years old.`);
}







