function multiply(num1, num2) {
console.log(typeof num1 !== 'number' || typeof num2 !== 'number');
const mult = num1 * num2;
return mult;
}

const result = multiply(8, 'seven');
// console.log(result);

function fullName(first, second){
  if(typeof first !== 'string'){
    return "please enter a string"
  }
  else{
    return 'second name should be a string'
  }
  const full = first + ' ' + second;
  return full;
}

const full = fullName('Rubel');
// console.log(full);

function getPrice(product){
  if(typeof product !== 'object'){
    return 'please enter a object';
  }
  const price = product.price;
  return price;
}

// const price = getPrice({name: 'chulkani', price: 35, color: 'green'})
const price = getPrice(5);
console.log(price);


function getSecond(number){
 if(Array.isArray(number) === false){
    return "Please enter a array"
  }
   const second = number[1];
   return second;
  }
  const second = getSecond([45, 61 , 2]);
  console.log(second);
