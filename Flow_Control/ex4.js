/*
Write a function that takes a string as an argument and returns an all-caps version
of the string when the string is longer than 10 characters. 
Otherwise, it should return the original string.
Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
*/

/*
=== Understand the Problem ===
- Input: string
- Output:string in caps if >10 characters or unchanged
-Questions?
	- do spaces count as character?
	  -> yes.
	-
	-
=== Examples/ Test Cases ===
- capWords('hello world');
-capWords('goodbye');
-capWords('hello user 72');
=== Data Structure ===
- string with if statement
=== Algorithm ===
- create a function called capWords
- paramter should be set to str
- create an if else statement
  - if str.length > 10
  - return the str in all caps
    -toUpperCase()
  - if it is 10 characters or less return the str
=== Code ===
*/

function capWords(str) {
  if(str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(capWords('hello world'));
console.log(capWords('goodbye'));
console.log(capWords('hello user 72'));