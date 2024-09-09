const heights2 = ['rahim', 'robina', 'rafi', 'ron', 'rasheda'];

function findSmallestNamed(names){
  let smallestName = names[0];  // প্রাথমিক মান নির্ধারণ:
  for(let i = 1; i < names.length; i++){
    if(names.length < smallestName.length){
      smallestName = names[i];
    }
  }
  return smallestName;
}

const smallestName = findSmallestNamed(heights2);
console.log('Smallest name is:', smallestName);
