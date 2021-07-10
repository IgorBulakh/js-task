"use strict";

/*
Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

Добавь методы класса:

getItems() - возвращает массив текущих товаров
addItem(item) - получает новый товар и добавляет его к текущим
removeItem(item) - получет товар и, если он есть, удаляет его из текущих

*/

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    console.log(this.items);
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
    console.log(this.items);
    return this.items;
  }

  removeItem(item) {
    let elem = this.items.indexOf(item);
    if (elem > -1) {
      this.items.splice(elem, 1);
      console.log(this.items);
    }
    return this.items;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);

// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items);
// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items);
// [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//===================================================

/*Нужно найти индекс элемента, который вы хотите удалить, затем удалить элемент используя функцию splice.

Метод splice() изменяет содержимое массива, удаляя существующие элементы и / или добавляя новые элементы.
var array = [1, 3, 5];
console.log(array);
// array = [1, 3, 5]
var index = array.indexOf(3);
if (index > -1) {
  array.splice(index, 1);
}
// array = [1, 5]
console.log(array);
index > -1 - если элемент не найден, то возвращается индекс -1, естественно его удалять не надо, поэтому и стоит проверка.*/
