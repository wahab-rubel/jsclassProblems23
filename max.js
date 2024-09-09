const disha = 65;
const lima = 95;

if (disha > lima){
  console.log('Disha will get the strawberry');
}
else {
  console.log('lima will get the strawberry');
}
// inside a function
function getMax (num1, num2) {
  if (num1 > num2){
    return num1;
  }
  else{
    return num2;
  }
}

const max1 = getMax(65, 79);
const max2 = getMax(65, 98);
const ultimateMax = getMax(max1, max2);
console.log("", ultimateMax);