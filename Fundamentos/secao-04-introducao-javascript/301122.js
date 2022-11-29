let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers);

// for (let index = 0; index < numbers.length; index += 1 ) {
//     console.log(numbers[index]);   
// }

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// console.log(soma);


// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index]; 
// }

// let media = soma / numbers.length;

// console.log(media);


// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index]; 
// }

// let media = soma / numbers.length;

// if (media > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menos ou igual a 20");
// };

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, vamos iniciar a variável com o primeiro valor do array. Dessa forma, podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);



