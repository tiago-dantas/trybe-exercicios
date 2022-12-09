// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }    
  }
  imprimeIdade()

// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
    pessoa.nome = 'Luna',
    pessoa.idade = 19;
  
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

// 🚀 Modifique a variável para que não ocorra Erro

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

// 🚀 Modifique as concatenações para template literals.

const nameb = 'Adriana';
const lastName = 'Soares';
console.log(`Olá ${nameb} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

// 🚀 Transforme a função numeroAleatorio em uma arrow function;

const numeroAleatorio = () => Math.random();
  
  console.log(numeroAleatorio());

// 🚀 Transforme a função hello em uma arrow function;

const hello = (nomeb) => `Olá, ${nomeb}!`

    let nome = 'Ivan';
  console.log(hello(nome));

// 🚀 Transforme a função nomeCompleto em uma arrow function;

const nomeCompleto = (nomeb2, sobrenomeb2) => `${nomeb2} ${sobrenomeb2}`;
  
    let nomeb2 = 'Ivan';
    let sobrenomeb2 = 'Pires';
    console.log(nomeCompleto(nomeb2, sobrenomeb2));

// 🚀 Altere a expressão if/else utilizando ternary operator;

let speed = 90;
const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade`: `Você está na velocidade permitida`
  );
console.log(speedCar(speed));

// ============================================ //

let motor = true;

const ligarDesligar = () => (
    motor === true ? `O motor está ligado` : `O motor está desligado`    
    )
    console.log(ligarDesligar(motor));

// 🚀 Crie uma função que calcule a área de um círculo.

// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.

// Com base nessa informação:

// Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
    const circleArea = (raio) => {
        let piValue = 3.14;
        let area = piValue * raio * raio;
        return area
    };
    
    console.log(`Essa é a área do círculo: ${circleArea(3)}`);

    // 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

let txtWord = ('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = (text) => {
    let bWord = 0;
    for (let t of text) {
        if (t > bWord) {
            bWord = t;
        }
        return bWord
    }

}
