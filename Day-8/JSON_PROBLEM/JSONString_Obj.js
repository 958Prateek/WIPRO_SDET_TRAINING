//Question- Convert JSON String into Object

const jsonString =`{"name":"Prateek","age": 22}`;
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(obj.name);