/*

Concatenate two or more strings,
one with your first name and one with your last, 
to create a string with your full name as its value.
For example, if your name is John Doe,
think about how you can put 'John' and 'Doe' together
to get 'John Doe'.

*/

/*
=== Understand the Problem ===
- Input: 2 or more strings
- Output: single string
-Questions?
	- How many diff ways to concatonate
	-
	-
=== Examples/ Test Cases ===
-
-
-
=== Data Structure ===
- n/A
=== Algorithm ===
- set a variable fullName = concatination with + sign
- create two variables for first and last name
  - use string interpolation to combine the two variables 
=== Code ===

*/

let fullName = 'Taylor' + ' ' + 'Hockley';

console.log(fullName);

let firstName = 'Taylor';
let lastName = 'Hockley';

console.log(`${firstName} ${lastName}`);