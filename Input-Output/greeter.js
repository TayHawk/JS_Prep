/*
Write a dynamic greeter program named greeter.js.
The program should ask for your name, 
then output Hello, {name}!
where {name} is the name you entered:

What is your name? Sue
Hello, Sue!
*/

let rlsync = require("readline-sync");

let firstName = rlsync.question('What is first your name?');
console.clear();
let lastName = rlsync.question("What's your last name?");
console.clear();
console.log(`Hello ${firstName} ${lastName}!`);
