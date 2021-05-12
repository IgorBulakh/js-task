'use strict';
/*
Напиши скрипт со следующим функционалом:

1. При загрузке страницы пользователю предлагается в prompt ввести число. 
2. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
3. Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
4. После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
*/


const numbers = [];
let total = 0;


do {
let input = prompt('ведите число');

if (input === null) {
  alert('вы отменили ввод чисел, для получения общей сумми ввода')
  break
}
const value = Number(input);
numbers.push(value);


} while (true);

/*or this variant
do {
    input = prompt("Enter a number:");
    numbers.push(Number(input));
} while (input !== null);
*/

if (numbers.length > 0) {
  for (const number of numbers) {
  
  total += number;

  }

}

console.log(numbers);
console.log(total); 


