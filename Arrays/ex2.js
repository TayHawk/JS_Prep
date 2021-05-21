// Log all of the even values from myArray to the console.

// let myArray = [1, 3, 6, 11, 4, 2,
//               4, 9, 17, 16, 0];
               
// let EvenArr = myArray.filter(num => num % 2 == 0);

// console.log(EvenArr);


// In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

// let myArray2 = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// let flatArr = myArray2.flat();

// let evenArr = flatArr.filter(num => num % 2 == 0);

// console.log(evenArr);

/* In this problem, we want to use the map function to create a new array 
that contains one element for each element in the original array.
If the element is an even value, 
then the corresponding element in the new array 
should contain the string 'even'; otherwise, 
the element in the new array should contain 'odd'.
*/

let myArray3 = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
               
let mapArr = myArray3.map(num => {
  if(num % 2 == 0 ){
    return 'Even'
  } else {
    return 'Odd'
  }
});

console.log(mapArr);