// Use reduce to compute the sum of the squares of all of the numbers in an array:
let array = [3, 5, 7];


function sumOfSquares (arr) {
 let product = arr.map(elm => elm * elm);
 let sum = product.reduce((x,y) => x + y);
 return sum;
  
}

 console.log(sumOfSquares(array)); // => 83