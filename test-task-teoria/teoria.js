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

// function showThis() {
//   console.log("this in showThis: ", this);
//   console.log("this in showThis: ", this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: "Mango" };

// /*
//  * Записываем ссылку на функцию в свойство объекта
//  * Обратите внимание, что это не вызов - нет ()
//  */
// user.showContext = showThis;

// /*
//  * Вызываем функцию в контексте объекта
//  * this будет указывать на текущий объект, в контексте
//  * которого осуществляется вызов, а не на глобальный объект.
//  */

// user.showContext();
// this in showThis: {name: "Mango", showContext: ƒ}

//=====================================================================================================

/*
function getShippingCost(country) {
  let message;
  // Change code below this line

  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      // alert(`Shipping to ${country} will cost 100 credits`);
      break;
    case "Chile":
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      message = `Sorry, there is no delivery to your country`;
  }
  // Change code above this line

  return message;
}

// getShippingCost("China");

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
*/

//================================================================================================================

/*
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length > maxLength) {
    result = message.slice(0, maxLength) + "...";
  } else {
    result = message;
  }
  /// Change code above this line
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
*/

//================================================================

/*

function checkForSpam(message) {
  let result;
  // Change code below this line
  let down = message.toLowerCase();
  if (down.includes("spam") || down.includes("sale")) {
    result = true;
  } else {
    result = false;
  }

  // Change code above this line
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
*/

//==================================================

const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype.sell = function (product) {
  this.sales += 1;
  return `Manager ${this.name} sold ${product}.`;
};

console.log(Manager.prototype.sell);

const mango = new Manager("Mango", 5);
console.log(mango.sales); // 5
console.log(mango.sell("TV")); // Manager Mango sold TV
console.log(mango.sell("Microwave")); // Manager Mango sold Microwave
console.log(mango.sales); // 7

const poly = new Manager("Poly", 10);
console.log(poly.sales); // 10
console.log(poly.sell("TV")); // Manager Poly sold TV
console.log(poly.sell("Microwave")); // Manager Poly sold Microwave
console.log(poly.sales); // 12

console.log(mango.__proto__ === Manager.prototype);
