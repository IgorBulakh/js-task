"use strict";

import users from "./users.js";
/*
Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
*/
const getUsersWithAge = (users, min, max) => {
  // твой код

  const minMax = users.filter((user) => min <= user.age && max >= user.age);
  return minMax;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
