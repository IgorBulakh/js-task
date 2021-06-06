"use strict";
/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
*/
const countProps = function (obj) {
  const total = Object.keys(obj);

  console.log(obj);

  return total.length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(
  countProps({
    mail: "poly@mail.com",
    isOnline: true,
    score: 500,
  })
); // 3

console.log(countProps({ bitcoin: 40, money: "first_milion" }));
