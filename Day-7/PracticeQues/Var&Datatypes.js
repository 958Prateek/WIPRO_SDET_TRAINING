let a= 10;
let b=20;

 a= a+b;
 b=a-b;
 a=a-b;

 console.log("a =" , a);
 console.log("b =", b);

//  Check Data Type*****

let value = true;
if(value === null) {
     console.log("null");
}
else{
     console.log(typeof value);
}

// Celsius to Fahrenheit*****

let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Fahrenheit =", fahrenheit);


// Simple Calculator******

let x = 10;
let y = 5;

console.log("Addition =", x + y);
console.log("Subtraction =", x - y);
console.log("Multiplication =", x * y);
console.log("Division =", x / y);

// Calculate Age from Birth Year****

let birthYear = 2003;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log("Age =", age);