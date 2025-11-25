function processProducts(products) {
  // Step 1: Use map() to get product names
  const productNames = products.map((product) => product.name);

  // Step 2: Use forEach() to log messages based on price
  products.forEach((product) => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames; // optional, in case you want the names
}

// Example Input
const items = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];

processProducts(items);
