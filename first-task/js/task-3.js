'use strict'

const ADMIN_PASSWORD = 'qwerty';
let message;
const password = prompt('Введите пароль!');

// if (ADMIN_PASSWORD !== true) {
//  prompt('');
//   message = 'Отменено пользователем!';
// }
// else if (ADMIN_PASSWORD === 'jqueryismyjam') {
//   prompt('')
//  message = 'Добро пожаловать!';

// } else {
//   prompt('')
//    message = 'неверный пароль!';
// }


// if (ADMIN_PASSWORD === 'jqueryismyjam') {
//  prompt('');
//   message = 'Добро пожаловать!';
// }
// else if (ADMIN_PASSWORD !== 'jqueryismyjam') {
//   prompt('')
//   message = 'неверный пароль!';

// } else {
//   prompt('')
//    message = 'Отменено пользователем!';
// }



if (password === ADMIN_PASSWORD) {
 
  message = 'Добро пожаловать!';
}
else if (password === null) {

  message = 'Отменено пользователем!';

} else {
 
   message = 'неверный пароль!';
}

console.log(alert(message));
