'use strict';

/*
Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
*/


// let index = 1;

const logItems = function(array) {

let index = 0;
  for (let arrays of array){
    
    index += 1;

    console.log(`${index} - ${arrays}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Write your code under this line

  let total = orderedQuantity * pricePerDroid + deliveryFee
  let message = `You ordered droids ${total} credits. Delivery (${deliveryFee} credits) is included in order amount.`;
  
  // Write your code above this line
  return message;

  
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(4, 300, 100));