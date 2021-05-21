/*
Explain why this code logs '510' instead of 15.
*/

console.log('5' + 10);

/*
You are trying to concate string '5' to the number 10. 
Because '5' is a string it will coerce the number 10 into a string as well
so now you have '5' + '10' giving you 510.

If you want to add to get 15 you have to explicitly state '5' into a number 
by using Number.
*/

console.log(Number('5') + 10);