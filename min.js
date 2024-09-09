const prices = [20000, 35000, 45000, 12000, 50000, 23000, 75000];
function getMin(numbers){
  let min = numbers[0];

  for( const num of numbers ){
    if( num < min){
      min = num;
    }
  }
  return min;
}
const cheap = getMin(prices);
console.log('cheapest one is ' + cheap);