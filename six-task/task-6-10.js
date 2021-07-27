"use strict";
import users from "./users.js";

/*
Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
*/

const getSortedUniqueSkills = (users) =>
  // твой код
  users
    // .reduce((acc, all) => {
    //   acc.push(...all.skills);
    //   acc[all.skills] = acc.includes(all.skills) ? acc[all.skills] - 1 : 1;
    //   return acc;
    // }, [])
    // .sort();
    .map((user) => user.skills)
    .reduce((allSkills, user) => [...allSkills, ...user], [])
    .filter((elem, index, array) => array.indexOf(elem) === index)
    .sort((a, b) => a.localeCompare(b));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
