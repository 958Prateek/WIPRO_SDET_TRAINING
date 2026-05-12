const obj1 = {
    name: "Prateek"
};
const obj2 = {
    age: 22
};
const merged = { ...obj1, ...obj2 };
console.log(merged);