// Question--Shallow Copy using Spread Operator

// Spread operator copies array elements into new array
const original = [1,2,3];
const copy = [...original];
copy.push(4);
console.log(original);
console.log(copy);