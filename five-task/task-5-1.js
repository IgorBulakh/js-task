"use strict";

//===================================

/*
Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.
*/
const Account = function ({ login, email }) {
  // this.name = name;
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
// console.log(mango);
mango.getInfo();
// Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo();
// Login: Poly, Email: poly@mail.com

//+++++++++++++++++++++++++++++++++++++++++++++
/*
const Account = function (login, email) {
  this.logiin = login;
  this.email = email;
};

Account.prototype.getInfo = function (produkt) {
  return;
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo();
console.log(mango.getInfo());
// Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo();
// Login: Poly, Email: poly@mail.com

console.log(mango.__proto__ === Account.prototype);
*/

//++++++++++++++++++++++++++++++++++++++++++++//
