/*
Crie uma função qualquer que receba 3 parâmetros, os dois primeiros utilizando default parameter e o terceiro utilizando rest param.
*/

let pessoa = (pessoa1, pessoa2, ...pessoas) => {
    console.log(pessoa1 + "," + pessoa2 + "," + pessoas.join(','));
}

pessoa("Jéssica", "Alexandre", "Marcelo", "Jacob", "Matheus", "Castiano");