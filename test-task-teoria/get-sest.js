"use strict";

class Guest {
  // Собственные свойства класса размещаем в конструкторе
  constructor(name, roomNumber) {
    this._name = name;
    this._roomNumber = roomNumber;
  }

  // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const mango = new Guest("Mango", 26);

// обращение к get и set не требует вызова - т.е. без ()
console.log(mango.name); // Mango

mango.name = "Mango the Fluffy";
console.log(mango.name); // Mango the Fluffy
