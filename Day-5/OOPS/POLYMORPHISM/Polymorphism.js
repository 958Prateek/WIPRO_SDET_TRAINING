// Same method behaves differently in different classes. exaple--Different shapes draw differently.

class Shape {
     draw() {
          console.log("Drawing A shape");
     }
}
class Circle extends Shape {
     draw() {
          console.log("Drawing a circle");
     }
}
class Square extends Shape {
     // Method Overriding
     draw() {
          console.log("Drwaing a Square");
     }
}

const shapes = [new Circle(), new Square()]; //creating Objects
shapes.forEach(shape => shape.draw()); //Same method name behave differently