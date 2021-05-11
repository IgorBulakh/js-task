'use strict';
/*
Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
*/
/*
const checkForSpam = function(message) {
  // твой код
  const arrayMessage = message.toLowerCase().split(' ');

  // const wordBanned = ['spam', 'sale'];

  for (let i = 0; i < arrayMessage.length; i+=1) {
    // let element = arrayMessage[i];
    
    if (arrayMessage[i] === 'spam' && arrayMessage[i] === 'sale') {
      return true
   }
    return false
  }
  
// return element
//   return arrayMessage
//   return arrayMessage.includes(wordBanned)
//   return message
}
*/


function checkForSpam(message) {
  message = message.toLowerCase(message);
  let result;
    if (message.includes('spam') || message.includes('sale')) {
        
      result = true;
    } else {
    result = false;
  }
  
  return result;
}


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true