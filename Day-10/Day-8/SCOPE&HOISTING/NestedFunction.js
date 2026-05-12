// Nested Functions Accessing Outer Variables
function outerFunction() {
     let name ="Prateek";
     function innerFunction() {
          console.log(name);
     }
     innerFunction();
}
outerFunction();