// Parse API-like JSON Data and Display Values

const apiData = `{
    "id": 1,
    "title": "JavaScript",
    "price": 500
}`;
const product = JSON.parse(apiData);
console.log(product.title);
console.log(product.price);