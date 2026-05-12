// QUESTION--Stack Memory Behavior

// Primitive values are stored in stack memory

let a = 10;
let b = a; // b gets copy of a nd doesnot affect a
b = 20;
console.log(a); 
console.log(b);