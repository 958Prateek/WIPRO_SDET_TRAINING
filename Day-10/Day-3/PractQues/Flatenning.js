const nested = [[1, 2], [3, 4], [5,6]];

const flatArray = nested.reduce((acc, curr) => {
     return acc.concat(curr);
}, []);

console.log(flatArray);