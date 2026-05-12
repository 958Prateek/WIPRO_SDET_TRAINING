let str = "madam";
let reversed ="";

for(let i=str.lenght - 1; i>=0; i--) {
     reversed += str[i];
}
if(str === reversed) {
     console.log("Palindrome");
} else {
     console.log("Not palindrome");
}

// Capitalize First Letter of Every Word*****

let sentence = "hello world from javascript";
let words = sentence.split(" ");
let result = words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
);
console.log(result.join(" "));

