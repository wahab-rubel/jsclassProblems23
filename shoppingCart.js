const products = [
  { name: 'shampoo', prices: 300, quantity: 2},
  { name: 'chiron', prices: 100,  quantity: 3},
  { name: 'shirt', prices: 700 ,  quantity: 5},
  { name: 'pant', prices: 1200 ,  quantity: 1},
]

function cartTotal(products) {
  let total = 0;
  for ( const product of products){
    const thisProductCost = product.prices * product.quantity;
    total = total +thisProductCost;
  }
  return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);