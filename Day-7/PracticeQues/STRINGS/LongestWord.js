const sentence = "I love learning JavaScript programming";
const words = sentence.split(" ");

let longest = "";

for (const word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}
console.log("Longest word =", longest);