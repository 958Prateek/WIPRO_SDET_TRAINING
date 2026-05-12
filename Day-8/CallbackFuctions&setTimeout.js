// Delayed Greeting Message using setTimeout

setTimeout(() => {
    console.log("Hello Prateek!");
}, 2000);



// Question2 - Countdown Timer
let count = 5;
const timer = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
        clearInterval(timer);
        console.log("Time Up!");
    }
}, 1000);


 
// Question 3 - Callback-Based Calculator

function calculator(a, b, callback) {
    return callback(a, b);
}
function add(x, y) {
    return x + y;
}
console.log(calculator(10, 5, add));



// Question 4 - Food Ordering System using Callbacks
function orderFood(callback) {
    console.log("Order placed");
    setTimeout(() => {
        console.log("Food prepared");
        callback();
    }, 2000);
}
function serveFood() {
    console.log("Food served");
}
orderFood(serveFood);



// Question 5 - Execute Functions Sequentially using Callbacks

function first(callback) {
     console.log("First Function");
     callback();
}
function second(callback) {
     console.log("Second Function");
     callback();
}
function third() {
     console.log("Thired Function");
}

first(() => {
     second(() => {
          third();
     });
});