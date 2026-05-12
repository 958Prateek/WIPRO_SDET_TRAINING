const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

function isEligible(product) {
  if (!product) {
    return false;
  }
  return (
    product.category === "Electronics" &&
    product.price > 200
  );
}

function applyPromo(cart, promoCallback) {
  if (!Array.isArray(cart)) {
    console.log("Invalid cart");
    return;
  }

  let discountedCount = 0;
  let totalSavings = 0;
  let updatedCart = cart.map(product => {

    if (promoCallback(product)) {

      let discount = product.price * 0.10;
      discountedCount++;
      totalSavings += discount;

      let updatedProduct = {
        name: product.name,
        price: product.price - discount,
        category: product.category,
        isDiscounted: true
      };
      return updatedProduct;
    } else {

      let updatedProduct = {
        name: product.name,
        price: product.price,
        category: product.category,
        isDiscounted: false
      };
      return updatedProduct;
    }
  });

  console.log(
    `Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSavings}.`
  );

  setTimeout(() => {
    console.log(updatedCart);
  }, 1000);
}

applyPromo(cart, isEligible);