/*
Crie uma função chamada bigMulti() que receba um array de números e retorne a multiplicação dos valores desse array, utilizando reduce.
*/

let bigMulti = (numeros, num) => {
    return numeros * num;
}

const numeros = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

console.log(numeros.reduce(bigMulti));