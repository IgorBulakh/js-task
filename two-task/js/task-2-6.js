'use strict';
/*
Напиши скрипт со следующим функционалом:

1. При загрузке страницы пользователю предлагается в prompt ввести число. 
2. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
3. Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
4. После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
*/

let input = prompt('ведите число');
const numbers = [];
let total = 0;


let value = Number(input);
if (value === null) {

  alert(ups);
  
}


console.log(value)




/*
const addNumbers = function () {
  const value = Number(input);

  if (value === 0) {
    return
  }
    numbers.push(value);
    
  

 
 console.log(numbers);

}

addNumbers()
*/