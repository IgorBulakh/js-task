'use strict';





let countryDyliver = prompt('ввдите страну');
// let normalizeInput = countryDyliver.toLowerCase();




let totalDeliver ;

switch (countryDyliver) {
  case 'Китай':
    totalDeliver = 'deliver: 100 кредитов';
    break;

  case 'Чили':
      totalDeliver = 'deliver: 250 кредитов';
    break;
  case 'Австралия':
      totalDeliver = 'deliver: 170 кредитов';
    break;
  case 'Индия':
      totalDeliver = 'deliver: 80 кредитов';
    break;
  case 'Ямайка':
      totalDeliver = 'deliver: 120 кредитов';
    break;

  default:
    alert('В вашей стране доставка не доступна');
    totalDeliver = 'fuk you!'
    
}

console.log(totalDeliver);

