let prices = ["100", "200", "50", "25"];

let handlingFee = prices[prices.length - 1];
prices.pop();


let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i]);
}


console.log("Total Price: $" + total);
console.log("Handling Fee: $" + handlingFee);