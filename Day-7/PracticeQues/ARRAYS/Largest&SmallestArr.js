const arr = [10, 5, 20, 8, 2];

let largest = arr[0];
let smallest = arr[0];

for (const num of arr) {
    if (num > largest) {
        largest = num;
    }
    if (num < smallest) {
        smallest = num;
    }
}
console.log("Largest =", largest);
console.log("Smallest =", smallest);