const fin = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
  din: 160,
  g: 999,
};

console.table(fin);
let stok = 0;
for (const key in fin) {
  // console.log(key);
  // console.log(fin[key]);
  if (stok < fin[key]) {
    stok = key;

    console.log(stok);
  }
}
