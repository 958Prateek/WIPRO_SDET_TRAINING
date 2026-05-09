const animal = { eats: true };
const rabbit = Object.create(animal); // creates a new object rabbit with prototype animal
rabbit.carrot = () => console.log("He is eating carrot");
console.log(rabbit.eats); // inherted from animal
console.log(rabbit.hasOwnProperty('eats'))
console.log(rabbit.hasOwnProperty('carrot'))
console.log(rabbit.toString())



// Example 2
const person = {
    greet: function() {
        console.log("Hello!");
    }
};
const student = Object.create(person);
student.name = "Prateek";
console.log(student.name);
student.greet();


// example 3
const vehicle = {
    start: function() {
        console.log("Vehicle started");
    }
};
const car = Object.create(vehicle);
car.drive = function() {
    console.log("Car is driving");
};
car.start();
car.drive();
console.log(car.hasOwnProperty("drive"));
console.log(car.hasOwnProperty("start"));