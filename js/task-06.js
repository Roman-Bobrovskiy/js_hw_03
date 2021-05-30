const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProdcuts, productName) {
  //   let newProducts = [];
  let sum = 0;
  for (let product of allProdcuts) {
    let tmpProduct = product.name;
    if (productName == tmpProduct) {
      //   newProducts.push(newArrProducts);
      sum = product.price * product.quantity;
    }
  }
  return sum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800
