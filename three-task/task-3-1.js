'use strict';
/*
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
+ выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/

/*============================================================================================*/

/*
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

  upHobby(newMood, newHobby, newBulin) {
    console.log(user);

  this.mood = newMood;
  this.hobby = newHobby;
  this.premium = newBulin;

  }
};

const userObject = Object.keys(user);
const userValue = Object.values(user);
for (const users of userObject) {

console.log(users); 

}
for (const users of userValue) {

  console.log(users);

  
}

user.upHobby('happy', 'skydaving', false);
console.log(user);

console.log(userObject);
*/


const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

/*
upHobby(newMood, newHobby, newBulin) {
    console.log(user);

  this.mood = newMood;
  this.hobby = newHobby;
  this.premium = newBulin;

  }
*/
};
console.log(user);

const users = Object.keys(user);

for (const key of users) {

  console.log(key);
  console.log(user[key]); 

  user.mood = 'happy'
  user.hobby = 'skydiving';
  user.premium = false;

};

console.log(user)
console.table(user);