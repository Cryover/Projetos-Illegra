/*
Implemente o método removeDuplicatas que recebe o seguinte parâmetro:

    numeros: lista de números inteiros positivos

O método deve retornar a lista de número sem repetições. Utilize a estrutura de dados Set para resolver este problema.

removeDuplicatas([1, 1, 2, 2, 3, 3]);

// saída
// [1,2,3]
*/

let removeDuplicatas = (arrayDuplicatas) => {
    let removeDoubles = [...new Set(arrayDuplicatas)];
    return removeDoubles;
}

console.log(removeDuplicatas([1, 1, 2, 2, 3, 3]));