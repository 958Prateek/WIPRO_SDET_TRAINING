// Reverse a String Without reverse()****

const str = "Prateek";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

// Count Vowels in a String******

let str = "JavaScript";
let count = 0;
let vowels = "aeiouAEIOU";

for (let char of str) {
    if (vowels.includes(char)) {
        count++;
    }
}
console.log("Vowels =", count);

