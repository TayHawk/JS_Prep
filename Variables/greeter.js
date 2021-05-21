/*
Write a program named greeter.js that greets 'Victor' three times. 
Your program should use a variable 
and not hard code the string value 'Victor' in each greeting.
Here's an example run of the program:


Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
*/

/*
=== Understand the Problem ===
- Input: string
- Output: string
-Questions?
	-
	-
	-
=== Examples/ Test Cases ===
-
-
-
=== Data Structure ===
-
=== Algorithm ===
- create a variable (name) and set it = to 'Victor'
-use string interpolation and concatination to write the above sentences
-
=== Code ===
*/

const NAME = 'Victor'

console.log(`Good Morning, ${NAME}.`);
console.log('Good' + ' '+ 'Evening,'+ ' ' + NAME);
console.log(`Good Afternoon, ${NAME}.`);