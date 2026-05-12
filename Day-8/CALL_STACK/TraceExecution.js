// QUESTION--Trace Execution Order of Nested Function Calls

function first() {

    console.log("First Function");

    second();
}
function second() {

    console.log("Second Function");

    third();
}
function third() {

    console.log("Third Function");
}
first();