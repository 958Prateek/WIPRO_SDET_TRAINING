const arr = [10, 5, 20, 8, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (const num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {

        secondLargest = num;
    }
}
console.log("Second Largest =", secondLargest);