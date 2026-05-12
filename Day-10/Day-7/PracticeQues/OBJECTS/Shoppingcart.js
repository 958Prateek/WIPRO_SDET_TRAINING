const cart = {
    laptop: 50000,
    mouse: 1000,
    keyboard: 2000
};

let total = 0;
for (const item in cart) {

    total += cart[item];
}
console.log("Total Bill =", total);