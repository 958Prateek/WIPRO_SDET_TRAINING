  
console.log(greet);
let greet = "Hello, World!";
console.log(greet);
 
// var greet; --> init -> undefined
// log()
// greet = "h W"
// log()
 
sayHi();
function sayHi() {
    console.log('Hello, World!');
}
 
var sayHi = () => {
    console.log('Hello');
}

// Every object --> Object
const car = {
    brand: "Tesla",
    start: () => console.log("VroomVroom")
}
 
 
function start() {
    console.log("VroomVroom")
}
 
const c1 = new start();
const c2 = new start();

start.prototype.stop = function() {
    console.log("Stop");
}
// c1.stop();
// c2.stop();
 
// car {start} --> prototype {stop}
// c1 --> start
// c2 --> start
// c1.stop();
 
 