/* 
Write a function that computes and returns the factorial of a number by using a for loop.
The factorial of a positive integer n, signified by n!,
is defined as the product of all integers between 1 and n, inclusive:
*/

/*
=== Understand the Problem ===
- Input: integer(num)
- Output:integer(factorial)
-Create a function that multiplies all numbers from 1 to num
-Questions?
	-
	-
	-
=== Examples/ Test Cases ===
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
=== Data Structure ===
- N/A
=== Algorithm ===
- create a function called factorial
-create a product variable;
- inside the loop body we need to loop over every number from 1-num
- then we need to multiply every number by the previous number
  -> num = 5
  -> 1, 2, 3, 4 5
  -> 1*2*3*4*5 = 125
    -
=== Code ===
*/

function factorial ( num) {
  let product = 1;
  for( let i = num; i > 0;  i--){
     product *= i;
  }
  return product
}
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

 