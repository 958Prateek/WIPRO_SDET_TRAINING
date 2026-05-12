// Object Example
const obj = {
    name: "Prateek",
    age: 25,
    city: "New York"
};

// Convert Object → JSON String
console.log(JSON.stringify(obj));

// Convert JSON String → Object
console.log(JSON.parse('{"name":"Prateek","age":25,"city":"New York"}'));


// ---------------- setTimeout ----------------

// Runs once after 5 seconds
const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);

console.log("Test");

// Stops the timeout before execution
clearTimeout(timeoutId);


// ---------------- setInterval ----------------

// Runs repeatedly every 3 seconds
const intervalId = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);

// Stops the interval
clearInterval(intervalId);