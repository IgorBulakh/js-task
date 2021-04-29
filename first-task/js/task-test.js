'use strict';

let clients = ['Mango', 'Poly', 'Ajax'];

// length вернет текущую длину массива
console.log(clients.length); // 3

clients.length = 15;
console.log(clients.length); // 5
console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
console.log(clients[4]); // undefined

clients.length = 2;
console.log(clients); // ["Mango", "Poly"]


clients = ['abcdefg', 'ert'];

for (let index = 0; index < clients.length; index +=1) {
  const element = clients[index];

  console.log(element);
  
}

for (const iter of clients) {

  console.log(iter);
  
}


const numbers = [];

for (let i = 15; i > 0; i -= 1) {
  numbers.push(`label-${i}`);
}

console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']



const string = 'javascript';
for (const character of string) {
  console.log(character);
}


const clientos = ['Mango', 'Ajax', 'Poly'];

for (const client of clientos) {
  console.log(client);
}


/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const numberset = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const thresholdol = 15;

for (let i = 0; i < numberset.length; i += 1) {
  if (numberset[i] < thresholdol) {
    continue;
  }

  console.log(`Число больше чем ${thresholdol}: ${numberset[i]}`); // 18, 29, 34
}


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total); // 45


let a = 5;
// Присвоение по значению, в памяти будет создана еще
// одна ячейка в которую будет скопировано значение 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Изменим значение a
a = 10;
console.log(a); // 10
// Значение b не изменилось так как это отдельная копия
console.log(b); // 5



// Выносим варианты в массив
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'apple';

if (redFruits.includes(fruit)) {
  console.log('It is a red fruit!');
}
else{
  console.log('not this fruit');
}
 

const f = 5;
const q = 5;
const c = 5;

const add = function (f, q, c) {
  return f + q + c;
};

const fnA = function () {
  console.log('Начала выполняться [fnA]');
  fnB();
  console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
};

const fnB = function () {
  console.log('Выполняется [fnB]');
};

console.log('Начал выполнение [main]');
fnA();
console.log('Продолжил выполняться [main] после выхода из [fnA]');

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */

let amount = prompt('kesh')
amount = Number(amount);

const withdraw = function (amount, balance) {
  /*
   * Проверяется условие. Если оно выполняется, происходит
   * console.log и выход из функции. Код идущий после тела if
   * не выполнится.
   */
  if (amount === 0) {
    console.log('Для проведения операции введите сумму больше нуля.');
    return;
  }

  /*
   * Если условие первого if не выполнилось, его тело пропускается
   * и интерпретатор доходит до этого if.
   * Проверяется условие. Если оно выполняется, происходит
   * console.log и выход из функции. Код идущий после тела if
   * не выполнится.
   */
  if (amount > balance) {
    console.log('Недостаточно средств на счету.');
    return;
  }

  /*
   * Если ни один из предыдущих if не выполнился,
   * интерпретатор доходит до этого кода и выполняет его.
   */
  console.log('Операция снятия средств проведена.');
};

withdraw(amount, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

const aее = (...igor) => {
  console.log(igor);
};

aее('1y, 2k, 3b'); // [1, 2, 3]

