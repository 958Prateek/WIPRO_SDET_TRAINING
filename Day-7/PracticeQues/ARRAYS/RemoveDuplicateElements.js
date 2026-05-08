const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [];

for (const num of arr) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}
console.log(unique);