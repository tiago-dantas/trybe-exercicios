// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//     person4: 'Sandra',
// };

// for (let key in names) {
//     console.log('Olá ', names[key]);
// }

/* fixação 2 */

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
// };

// for (let key in car) {
//     console.log(key, car[key]);
// }


/* fixação 3 */

// const a = 5;
// const b = 7;


// function soma (num1, num2) {
//     return num1 + num2;
// }

// function sub (num1, num2) {
//     return num1 - num2;
// }

// function mult (num1, num2) {
//     return num1 * num2;
// }

// function divi (num1, num2) {
//     return num1 / num2;
// }

// function mod (num1, num2) {
//     return num1 % num2;
// }

// console.log(soma (a, b));
// console.log(sub (a, b));
// console.log(mult (a, b));
// console.log(divi (a, b).toFixed(2));
// console.log(mod (a, b));

// function maiorMenor (num1, num2) {
//     if ( num1 > num2 ) {
//         console.log(num1 + ' é maior que ' + num2);
//     } else {
//         console.log(num1 + ' é menor que ' + num2);
//     }
// }

// maiorMenor (a,b);

/* fixação 4 */

// const a = 3;
// const b = 5;
// const c = 7;

// function maiorNumero (num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1 + ' é o maior número');
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2 + ' é o maior número');
//     } else {
//         console.log(num3 + ' é o maior número');
//     }
// }

// maiorNumero(a, b, c);

// function sum(a, b) {
//     return a + b;
//   }
//   console.log(sum(1, 2));
  
  // if (true) {
  //     // inicio do escopo do if
  //     var userAge = '20'; // COM VAR ELE FUNCIONA FORA DO ESCOPO. COM LET OU CONST NÃO.
  //     console.log(userAge); // 20
  //     // fim do escopo do if
  //   }
  //   console.log(userAge); // 20

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  // console.log(`Bem-vinda, ${info.personagem}`);

  info.recorrente = "Sim";

  // console.log(info);

  // for (let keys in info ) {
  //   console.log(keys);
  // }

  for (let value in info) {
    console.log(info[value]);
  }
