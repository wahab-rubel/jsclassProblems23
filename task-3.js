function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;


  const totalLaptopCost = laptopQuantity * laptopPrice ;
  const totalTabletCost = tabletQuantity * tabletPrice ;
  const totalMobileCost = mobileQuantity * mobilePrice ;

  const totalBudget = totalLaptopCost + totalTabletCost * totalMobileCost;
    return totalBudget ;
}



const totalBudgetNeeded = calculateElectronicsBudget(1, 3, 5);
console.log('Total budget require', totalBudgetNeeded);