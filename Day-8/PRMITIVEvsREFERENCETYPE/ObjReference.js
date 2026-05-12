// Object Reference Behavior
const obj1 = {
    name: "Prateek"
};
const obj2 = obj1;
obj2.name = "Rahul";
console.log(obj1.name);
console.log(obj2.name);