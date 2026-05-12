const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const count = fruits.reduce((acc, curr) => {
  return curr === 'apple' ? acc + 1 : acc;
}, 0);

console.log(count);