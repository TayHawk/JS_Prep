/*
Use map and filter to first determine the lengths of all the elements
in an array of string values, 
then discard the even values (keep the odd values).
*/
/*
=== Understand the Problem ===
- Input: arr of strings
- Output:arr of numbers
-Questions?
	-
	-
	-
Restate problem:
 -use map and filter to log all the strings length then 
 filter out all the lengths that are postive
=== Examples/ Test Cases ===
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

=== Data Structure ===
-arr
=== Algorithm ===
- use map to get every strings length
- use filter to then get all the odd numbers
-
=== Code ===
*/


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
   let x = arr.map(str => str.length)
    .filter( num => num % 2 ===1);
    return x;
}

console.log(oddLengths(arr)); // => [1, 5, 3]

