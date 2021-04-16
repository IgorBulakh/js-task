'use strict';

let credit = 23580;
let pricePerDroid = 3000;

let value = prompt("введите количество Droid");
// value = Number(value);

let totalPrice = value;
// totalPrice = pricePerDroid * value;
let totalSumm = pricePerDroid * value;
let totalBalance = 0;





if (value === null) {

  console.log('отминено пользователем')
  
} else if (totalSumm >= credit) {

console.log( "Недостаточно средств на счету!")

} 

else{

  value = Number(value);
// totalPrice = pricePerDroid * value;
  totalBalance = credit - totalSumm;

console.log(`Вы купили ${value} дроидов, на счету осталось ${totalBalance} кредитов.`)
// console.log(`Ви купили ${value} droids на суму ${totalSumm} credits`);
// console.log(`у вас осталось доступних ${totalBalance} credits`);

}
  



