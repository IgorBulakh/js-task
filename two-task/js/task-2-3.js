'use strict';

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
 
const arrayString = string.split(' ');

let longesWord = arrayString[0];


for (let i = 1; i < arrayString.length; i+=1) {

  
 if (longesWord.length < arrayString[i].length) {

  longesWord = arrayString[i];
   
 }

  }

  return longesWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

console.log(findLongestWord('Целесообразно не использовать простые присваивания в условном выражении, потому что при взгляде на код присваивание можно путать с равенством. Например, не используйте следующий код'));

const word = 'The quick brown fox jumped over the lazy dog';
console.log(word);
const arrWord = word.split(' ');
console.log (arrWord);
let one = arrWord[0];
console.log(one)

for (let i = 1; i < arrWord.length; i+=1 ) {

  if (one.length < arrWord[i].length ) {
  one = arrWord[i];
  
  }
}

  console.log(one);