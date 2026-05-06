// A special method automatically called when object is created....Used to initialize object values.

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
 
const dog = new Animal("Jhonny");
const cat = new Animal("Whiskers");
dog.speak();
cat.speak();