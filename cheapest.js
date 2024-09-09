const mobiles = [
  { name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
  { name: 'xiaomi', price: 18000, camera: '12mp', color: 'black'},
  { name: 'Opp', price: 15000, camera: '12mp', color: 'black'},
  { name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
  { name: 'walton', price: 25000, camera: '12mp', color: 'black'},
  { name: 'HTC', price: 29000, camera: '12mp', color: 'black'},
]


function getCheapestPhone(phones){
  let min = phones[0];
  for(const phone of phones){
    if(phone.price < min.price){
      min = phone;
    }
  }
  return min;
}
const cheap = getCheapestPhone(mobiles);
console.log("cheapestPhone is", cheap);



// Hightest prices are

const mobile = [
  { name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
  { name: 'xiaomi', price: 18000, camera: '12mp', color: 'black'},
  { name: 'Opp', price: 15000, camera: '12mp', color: 'black'},
  { name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
  { name: 'walton', price: 25000, camera: '12mp', color: 'black'},
  { name: 'HTC', price: 29000, camera: '12mp', color: 'black'},
];

function getHighestPricePhone(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}

const highestPricePhone = getHighestPricePhone(mobile);
console.log("Highest price phone is", highestPricePhone);