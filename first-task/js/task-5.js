'use strict';


const countryDeliver = prompt('ввдите страну').toLowerCase();


// const materializDeliver = countryDeliver.toLowerCase();


let totalDeliver ;


switch (countryDeliver) {
  
  case 'китай':
    totalDeliver = 'deliver: 100 кредитов';
    break;

  case 'чили':
      totalDeliver = 'deliver: 250 кредитов';
    break;
  case 'австралия':
      totalDeliver = 'deliver: 170 кредитов';
    break;
  case 'индия':
      totalDeliver = 'deliver: 80 кредитов';
    break;
  case 'ямайка':
      totalDeliver = 'deliver: 120 кредитов';
    break;

    case '':
      alert( 'ups');
      console.log(countryDeliver);
  break;


  default:
    alert('В вашей стране доставка не доступна');
    totalDeliver = 'fuk you!' 
}


console.log(totalDeliver);

// switch (r) {

  
//   case null:
//     totalDeliver = 'not text...';
//     break;
//   case 'китай':
//     // countryDyliver = countryDyliver.toLowerCase();
//     totalDeliver = 'deliver: 100 кредитов';
//     break;

//     case 'чили':
//       // countryDyliver = countryDyliver.toLowerCase();
//       totalDeliver = 'deliver: 250 кредитов';
//     break;

//   default:
//     alert('В вашей стране доставка не доступна');
//     totalDeliver = 'fuk you!'
    
// }



// const c = 'Igor, Borya';
// console.log(c);
// const l = c.toLocaleLowerCase()
// console.log(l);
// const d = prompt('name').toLowerCase();
// const m = l.includes(d)
// console.log(m);


// let f;

// switch (c) {
//   case d:
//     f = 'yes';
//     break;


//   default:
//     f = 'no';
// }



// console.log(f);

