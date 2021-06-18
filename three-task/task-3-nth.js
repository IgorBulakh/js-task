"use strict";
// const fin = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
//   din: 160,
//   g: 999,
// };

// console.table(fin);
// let stok = 0;
// for (const key in fin) {
//   // console.log(key);
//   // console.log(fin[key]);
//   if (stok < fin[key]) {
//     stok = key;

//     console.log(stok);
//   }
// }
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(5, 3));
