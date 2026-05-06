class Animal {

     constructor(name) {
          this.name = name;
     }

     speak() {
          console.log(`${this.name} makes a sound.`);
     }
}

class Dog extends Animal {

     speak() {
          console.log(`${this.name} barks.`);
     }
}

const animal1 = new Animal("Generic Animal");
const dog1 = new Dog("Tommy");

animal1.speak();
dog1.speak();