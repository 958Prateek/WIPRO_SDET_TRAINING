function Person(name) {
     this.name = name;
}
Person.prototype.sayHi = function () {
     console.log(`Hello ` + this.name);
};
const me = new Person("Prateek");
const you = new Person("You");
you.sayHi();
console.log(
     Object.getPrototypeOf(me) === Person.prototype
);
console.log(
     me.sayHi === you.sayHi
);