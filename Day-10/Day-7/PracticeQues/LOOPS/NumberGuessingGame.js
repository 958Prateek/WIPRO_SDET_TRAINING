const secretNumber =7;
let guess =0;
while(guess !== secretNumber) {
     guess ++;
     console.log("Trying:", guess);
     if(guess === secretNumber) {
          console.log("Correct guess!");
     }
}