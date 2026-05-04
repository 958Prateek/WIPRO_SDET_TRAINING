const prices = [19.99, 5.50, 3.99, 25.00];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);
