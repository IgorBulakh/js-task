'use strict';

/*Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.*/

const calculateEngravingPrice = function(message, pricePerWord) {

 for (let index = 0; index < message.length; index+=1) {
   const element = message.split(' ').length;
   let totalElement = element * pricePerWord;
   

   return `Ваша гравировка "${message}"  цена за одно слово ${pricePerWord} - общая сума гравировки ${totalElement}`;
 }
// const element = message.split(' ').length;

//  for(const index of element){
//    const element = index.split(' ').length;
//    let totalElement = element * pricePerWord;

//    return index;
// return element;
//    return totalElement;
//  }
  
};



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120



