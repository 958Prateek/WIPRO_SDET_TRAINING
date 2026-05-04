function getLongStrings(arr) {
     return arr.filter(str => str.length > 5);
}

const words = ["apple", "banana", "grapes", "kiwi", "orange"];

const result = getLongStrings(words);
console.log(result);