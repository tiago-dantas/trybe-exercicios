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

// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);

// const n = 9 ;

// let resultado = 100;
// for (let index = 0; index <= n; index += 1) {
//   resultado -= index;
// };
// console.log(resultado);

// const n = 5;

// let resultado = 0;
// for (let index = 0; index <= n; index += 1) {
//   resultado += index;
// };
// console.log(resultado)

// let a = 5;
// let b = 7;
// let c = 3;
// let d = 9;

// if (d > 8 && c == 3 || a >= 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const final = 100;
// let resultado = 0;

// for (let index = 0; index <= final; index += 1) {
//   resultado += index
// }

// console.log(resultado);

// let fat = 1;
// for (let indexfat = 10; indexfat > 0; indexfat -= 1) {
//   fat *= indexfat;
// }

// console.log(fat);

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);

// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);


// let maiorPrimo = 0;

// for (let numero = 2; numero <= 50; numero += 1) {
//   let primo = true;
//   for (let divisor = 2; divisor < numero; divisor += 1) {
//     if (numero % divisor === 0) {
//       primo = false;
//     }        
//   }
//   if (primo) {
//     maiorPrimo = numero;
//   }
// }

// console.log(maiorPrimo);

let car = {
  type: 'Fiat',
  model: '500',
  color: 'Yellow',
  fuel: 'gas',
  price: 'R$ 50.000',
  options: ['Camera', 'VidroElétrico', 2, true],
  infos: [0,1,2,3,4,5],
}

console.log(car.options[3]);