'use strict'

const ADMIN_PASSWORD = 'qwerty';
let message;
const password = prompt('Введите пароль!');



if (password === ADMIN_PASSWORD) {
 
  message = 'Добро пожаловать!';
}
else if (password === null) {

  message = 'Отменено пользователем!';

} else {
 
   message = 'неверный пароль!';
}

console.log(alert(message));
console.log(message);
