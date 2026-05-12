// Debug Incorrect Variable Scoping
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}



for (let i=1; i<=3; i++) {
     setTimeout(() => {
          console.log(i);
     }, 1000);
}