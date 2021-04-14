'use strict';

// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const total = 100;
const order = 50;
let answer;




if(total <= order){
answer = `"На складе недостаточно твоаров!"`;
}
  else{
  answer = `"Заказ оформлен, с вами свяжется менеджер"`;
  }

console.log(answer);