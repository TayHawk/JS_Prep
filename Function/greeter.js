/*
Add a function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. 
Use the return values to greet the user with their full name.
*/

// let fullName = () => {
//   let rlsync = require("readline-sync");
//   let firstName = rlsync.question('What is first your name?');
//   let lastName = rlsync.question("What's your last name?");
//   return `Hello ${firstName} ${lastName}!`;
// };

// console.log(fullName());

// OR //

let getFirstName = () => {
   let rlsync = require("readline-sync");
  let firstName = rlsync.question('What is first your name?');
  return firstName;
};

let getLastName = () => {
   let rlsync = require("readline-sync");
 let lastName = rlsync.question("What's your last name?");
  return lastName;
};
let firstName = getFirstName();
console.clear();
let lastName = getLastName();
console.clear();

console.log(`Hello ${firstName} ${lastName}!`);


