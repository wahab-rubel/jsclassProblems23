const numbers = [300, 100, 700, 1200];

const products = [
  { name: 'shampoo', prices: 300},
  { name: 'chiron', prices: 100},
  { name: 'shirt', prices: 700},
  { name: 'pant', prices: 1200},
]

function getShoppingTotal(){
  let total = 0;
  for (const product of products) {
    total = total + product.prices;
  }
  return total;
}

const total = getShoppingTotal(products);
console.log('total ajke khosebe:', total);