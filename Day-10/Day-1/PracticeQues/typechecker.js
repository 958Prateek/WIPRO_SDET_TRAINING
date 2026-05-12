function checkType(value) {
     if (typeof value == "number") {
          console.log("This is a number");
     }
     else {
          if (typeof value == "string") {
               console.log("This is a string");
          }
          else {
               console.log("Other type");
          }
     }
}