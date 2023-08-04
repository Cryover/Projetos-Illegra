/*
Crie uma função chamada saoTodosDaMesmaEscola que itere por todo o array e diga se todos os alunos são da mesma escola.

const lista = [
  { nome: "Tânia", escola: "Alguma Escola" },
  { nome: "Emilly", escola: "Alguma Escola" },
  { nome: "Vitória", escola: "Alguma Escola" },
  { nome: "Erick", escola: "Alguma Escola" },
];

saoTodosDaMesmaEscola(lista);

// saída
// true
*/

const lista = [
    { nome: "Tânia", escola: "Alguma Escola" },
    { nome: "Emilly", escola: "Alguma Escola" },
    { nome: "Vitória", escola: "Alguma Escola" },
    { nome: "Erick", escola: "Alguma Escola" },
];

let saoTodosDaMesmaEscola = (lista) => lista.every(aluno => aluno.escola === 'Alguma Escola');

console.log(saoTodosDaMesmaEscola(lista));