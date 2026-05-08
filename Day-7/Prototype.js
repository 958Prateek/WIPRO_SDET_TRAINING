const animal = { eats: true };
const rabbit = Object.create(animal); // creates a new object rabbit with prototype animal
rabbit.carrot = () => console.log("He is eating carrot");
console.log(rabbit.eats); // inherted from animal
console.log(rabbit.hasOwnProperty('eats'))
console.log(rabbit.hasOwnProperty('carrot'))
console.log(rabbit.toString())