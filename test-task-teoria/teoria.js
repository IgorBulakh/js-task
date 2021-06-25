"use strict";

// Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//   name: "Petya",
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showName();

//=============================================

function showThis() {
  console.log("this in showThis: ", this);
  console.log("this in showThis: ", this);
}

// Вызываем в глобальном контексте
showThis();
// this in showThis: Window

const user = { name: "Mango" };

/*
 * Записываем ссылку на функцию в свойство объекта
 * Обратите внимание, что это не вызов - нет ()
 */
user.showContext = showThis;

/*
 * Вызываем функцию в контексте объекта
 * this будет указывать на текущий объект, в контексте
 * которого осуществляется вызов, а не на глобальный объект.
 */

user.showContext();
// this in showThis: {name: "Mango", showContext: ƒ}
