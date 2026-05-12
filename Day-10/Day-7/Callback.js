// A callback function is a function passed into another function and called later.

function greet(name, callback) {
     console.log("Hello" + name);
      callback();
}

function bye() {
     console.log("Bye!");
}
greet("Prateek", bye);


function calculate(a, b, callback) {
     callback(a, b);
}
calculate(5, 3, function(x, y){
     console.log(x+y);
});