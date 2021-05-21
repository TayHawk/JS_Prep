/*
Write a function that logs whether a number 
is between 0 and 50 (inclusive),
between 51 and 100 (inclusive), 
greater than 100, 
or less than 0.

25 is between 0 and 50
75 is between 51 and 100
125 is greater than 100
-25 is less than 0

*/

/*
=== Understand the Problem ===
- Input:number
- Output: string
-Questions?
	- Are numbers just integers or are we taking into account decimals?
	-
	-
=== Examples/ Test Cases ===
-numberRange(25);
-numberRange(75);
-numberRange(125);
-numberRange(-25);
=== Data Structure ===
- conditional
  - if/else
  -switch
=== Algorithm ===
- create a function called numberRange.
- set parameter = num
- create an if else statement
  - if num is >= 0 && <= 50
  - return num is between 0 and 50
    -use string interpolation
  -else if num is >= 51 && <= 100
  - return num is between 51 and 100
    -use string interpolation
  - else if num is > 100
  - return num is greater than 100
    -use string interpolation
  - else if num < 0
  - return num is less than 0
    -use string interpolation
=== Code ===
*/

function numberRange(num) {
  if( num >= 0 && num <= 50) {
    return `${num} is between 0 and 50`;
  } else if (num >= 51 && num <=100) {
    return `${num} is between 51 and 100`;
  } else if ( num > 100) {
    return `${num} is greater than 100`;
  } else {
     return `${num} is less than 0`;
  }
}

console.log(numberRange(25));
console.log(numberRange(75));
console.log(numberRange(125));
console.log(numberRange(-25));