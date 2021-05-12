'use strict';

// 1. створити цикл, що запитує користувача ввести число через prompt;
// 2. виход з циклу при натисканні cancel (ввод null);
// 3.Якщо ввели не null перевести в число та добавити в total;
// 4.по завершенню цикла вивести суміжну суму введених чисел в alert;


let total = 0;

do {
  let input = prompt('ввсти число');

  if (input === null) {
    alert('ooo... no! you staped this cicle');

    break;
  }

  input = Number(input);
  total += input;
 
  
} while (true);

console.log(total);