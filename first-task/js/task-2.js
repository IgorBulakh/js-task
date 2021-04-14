'use strict';

// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const total = 100;
const order = 50;
let answer;




if(order <= total){
answer =  `"Заказ оформлен, с вами свяжется менеджер"`;
}
  else{
  answer = `"На складе недостаточно твоаров!"`;
  }

console.log(answer);