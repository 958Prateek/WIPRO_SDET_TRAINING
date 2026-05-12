// JS reads the variables and functions before running the code.
// JS moves variable and function declarations to the top before running the code.(both are the same lines).

console.log(a);
var a= 10; // undefined

// variables exists before execution , but the value is not assigned yet
var a;
console.log(a);
a =10; // 10 


sayHello();
function sayHello() {
    console.log("Hello"); // Hello beacuse internally it works like below ->
}
// function can called before its written
// function sayHello() {
//      console.log("Hello");
// }
// sayHello; 


//Varibale Hoisting
console.log(city); // undefined
var city ="lucknow";

// JS internally works like 
// var city;
// console.log(city)
// city="lkw";


// var → hoisted and gives undefined
// let and const → hoisted but give error if used before declaration

console.log(age); //Error

let age = 21;