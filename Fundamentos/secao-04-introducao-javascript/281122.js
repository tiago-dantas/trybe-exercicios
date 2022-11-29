const a = 5;
const b = 4;
const c = 7;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

/* segunda parte */

if (a > b) {
    console.log ("A constante A é maior" );
} else {
    console.log ("A constante B é maior");
};

/* terceira parte */

if (a > b && a > c) {
    console.log("A constante A é a maior");    
} else if (b > a && b > c) {
    console.log("A Constante B é a maior");
} else {
    console.log("A constante C é a maior");
};

/* quarta parte */

let horse = 'cavalo';

switch (horse.toLowerCase()) {
    case 'rei':
        console.log('O Rei anda apenas 1 casa em qualquer direção');
        break;
    case 'rainha':
        console.log('A Rainha anda para qualquer direção livremente');
        break;
    case 'torre':
        console.log('A Torre anda na horizontal e na vertical livremente');
        break;
    case 'cavalo':
        console.log('O Cavalo faz o movimento em L');
        break;
    case 'bispo':
        console.log('O Bispo só anda nas diagonais, livremente');
        break;
    case 'peão':
        console.log('O Peão anda apenas 1 casa, sempre para frente. Mas derrota as peças na diagonal');
        break;        
};

/* quinta parte */

let a2 = 1;
let b2 = 5;
let c2 = 10;

let isEven = false;

if (a2 % 2 === 0 || b2 % 2 === 0 || c2 % 2 === 0) {
    isEven = true;
};

console.log(isEven);

/* sexta parte */

let a3 = 1;
let b3 = 5;
let c3 = 3;

let isEven2 = false;

if (a3 % 2 !== 0 || b3 % 2 !== 0 || c3 % 2 !== 0) {
    isEven2 = true;
};

console.log(isEven2);

/* sétima parte */

const produto = 59;
const venda = 89;
const imposto = 1.2;

if (produto >= 1 && venda >= 1) {
    let preçoProdutoFinal = produto * imposto;
    let lucro = (venda - preçoProdutoFinal) * 1000;
    console.log(lucro.toFixed(2));
} else {
    console.log("Erro, valores devem ser maiores que 1");
};

/* oitava parte */

let groceryList = ["Arroz", 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
};

/* nona parte */

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let casamata of names) {
    console.log(casamata);
}

/* décima parte */

for(let sapex = 0; sapex <= 20; sapex+=1 ){
    console.log(sapex);
  }
  
/* décima primeira parte */

for(let index11 = 0; index11 < 10; index11+=1 ){
    console.log('Oie');}