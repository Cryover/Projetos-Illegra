/*
Crie uma função chamada aoMenosUm que itere por todo o array e diga se, pelo menos, um dos alunos é da escola Alguma Escola 2

const lista = [
  { nome: "Tânia", escola: "Alguma Escola" },
  { nome: "Emilly", escola: "Alguma Escola" },
  { nome: "Vitória", escola: "Alguma Escola 2" },
  { nome: "Erick", escola: "Alguma Escola" },
];

aoMenosUm(lista);

// saída
// true
*/

const lista = [
    { nome: "Tânia", escola: "Alguma Escola" },
    { nome: "Emilly", escola: "Alguma Escola" },
    { nome: "Vitória", escola: "Alguma Escola 2" },
    { nome: "Erick", escola: "Alguma Escola" },
];

let aoMenosUm = (lista) => lista.some(aluno => aluno.escola === 'Alguma Escola 2');

console.log(aoMenosUm(lista));