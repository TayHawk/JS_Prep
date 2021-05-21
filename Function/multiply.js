/*
Write a program that uses a multiply function 
to multiply two numbers and returns the result. 
Ask the user to enter the two numbers, 
then output the numbers and result as a simple equation.
*/





function multiply (num1, num2) {
  return num1 * num2;
}

function getNum (prompt) {
  let rL = require('readline-sync');
  return Number(rL.question(prompt));
}

let num1 = getNum('Enter your first number?');
let num2 = getNum('Enter your second number?');
console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`);