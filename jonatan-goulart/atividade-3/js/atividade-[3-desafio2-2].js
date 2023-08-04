/*
Utilizando o método map, escreva o método dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array 
original dobrados.

dobrar([1, 2, 3, 4, 5]);

// saída
// [2, 4, 6, 8, 10]
*/

let dobrar = (numerosInteiros) => numerosInteiros.map(numero => numero * 2);

console.log(dobrar([1, 2, 3, 4, 5]));