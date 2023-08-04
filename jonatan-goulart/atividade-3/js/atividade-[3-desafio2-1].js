/*
Altere o código a seguir para utilizar o método forEach de modo que a saída permaneça a mesma.

const numeros = [0, 1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length; i++) {
  if (i % 2 === 0) {
    console.log(i + " é par");
  } else {
    console.log(i + " é ímpar");
  }
}

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
*/

const numeros = [0, 1, 2, 3, 4, 5];

numeros.forEach(numero => {
    numero % 2 === 0 ? console.log(numero + " é par") : console.log(numero + " é ímpar");
});