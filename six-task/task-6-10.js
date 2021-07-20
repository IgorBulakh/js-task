"use strict";
import users from "./users.js";

/*
Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
*/

const getSortedUniqueSkills = (users) =>
  // твой код
  users
    .reduce((acc, all) => {
      acc.push(...all.skills);
      acc[all] = acc.includes(all) ? acc[all] - 1 : 1;
      return acc;
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
