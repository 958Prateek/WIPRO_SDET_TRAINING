const a = [1, 2, 3];
const b = [3, 4, 5];

const merged = [...a, ...b];

const unique = [];

for(const num of merged) {
     if(!unique.includes(num)) {
          unique.push(num);
     }
}
console.log(unique);