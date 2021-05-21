/*
Write a findIntegers function that takes an array argument
and returns an array that contains only the integers from the input array.
Use the filter method in your function.
*/

/*
=== Understand the Problem ===
- Input:array
- Output:array
-Questions?
	-
	-
	-
=== Examples/ Test Cases ===
--> let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
--> let integers = findIntegers(things);
--> console.log(integers); // => [1, 3, -4]
=== Data Structure ===
- Array
=== Algorithm ===
- create a function called findIntegers
- the function takes in an array
- we want to filter out and return just the integers
  -> there is a Number.isInteger() method
=== Code ===
*/

function findIntegers (arr) {
  return arr.filter( elm => Number.isInteger(elm));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
 let integers = findIntegers(things);
 console.log(integers); // => [1, 3, -4]