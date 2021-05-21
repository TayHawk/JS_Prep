/*
Write a function, evenOrOdd, that determines whether its argument is an even number. 
If it is, the function should log 'even' to the console; 
otherwise, it should log 'odd'. 
For now, assume that the argument is always an integer.
*/

/*
=== Understand the Problem ===
- Input: number
- Output: string
-Questions?
	- What is an integer?
	  -An integer is any whole number. Not a fraction.
	-Are we including odd numbers?
	- What do we do with the number 0?
=== Examples/ Test Cases ===
-evenOrOdd(14)//'even'
-evenOrOdd(3)
-evenOrOdd(-2)
-evenOrOdd(-7)
-evenOrOdd(0)
=== Data Structure ===
- function
=== Algorithm ===
- create a function called evenOrOdd
- set the parameter equal to num
-inside the code block:
  -create an id/else conditional statement
    - if num has a remainder of 0 it is even
    - everything else we can assume is negative
  - return 'even' or 'odd'
=== Code ===
*/

function evenOrOdd (num) {
 
  if(num % 2 === 0) {
    return 'even';
  } else if(!(Number.isInteger(num))) {
    return 'Not a valid number!';
  } else {
    return 'odd';
  }
}

console.log(evenOrOdd(14));//even
console.log(evenOrOdd(3));//odd
console.log(evenOrOdd(-2));//even
console.log(evenOrOdd(-7));//odd
console.log(evenOrOdd(0));//even
console.log(evenOrOdd('x'));

/* Let's improve our previous implementation of evenOrOdd.
Add a validation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and return.
*/

