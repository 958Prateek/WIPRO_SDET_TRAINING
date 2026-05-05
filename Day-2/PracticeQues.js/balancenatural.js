let prices = ["100", "200", "300", "50"];

// Step 1: Remove handling fee
let handlingFee = prices.pop();

// Step 2: Convert to numbers
let numericPrices = prices.map(price => Number(price));

// Step 3: Calculate total
let total = numericPrices.reduce((sum, price) => sum + price, 0);

// Step 4: Print result
console.log(`Total Price: $${total}`);