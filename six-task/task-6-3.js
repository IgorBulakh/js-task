"use strict";

import users from "./users.js";
/*
Получить массив имен пользователей по полу (поле gender).
*/

const getUsersWithGender = (users, gender) => {
  // твой код
  const usGender = users.filter((user) => user.gender === gender);
  return usGender.map((user) => user.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
