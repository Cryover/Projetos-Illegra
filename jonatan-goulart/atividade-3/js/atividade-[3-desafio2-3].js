/*
Dada uma lista de objetos que contém o nome de um aluno e sua média final, crie o método aprovados que recebe esta lista e 
retorna somente os alunos que foram aprovados. Para isto, utilize o método filter.

const alunos = [
  { nome: "Diogo", media: 5.5 },
  { nome: "Julia", media: 9.5 },
  { nome: "Roberto", media: 1.5 },
  { nome: "Tiago", media: 6.0 },
];

aprovados(alunos, 6.5);

// saída
// [{ nome: 'Julia', media: 9.5 }]
*/

const alunos = [
    { nome: "Diogo", media: 5.5 },
    { nome: "Julia", media: 9.5 },
    { nome: "Roberto", media: 1.5 },
    { nome: "Tiago", media: 6.0 },
];

let aprovados = (alunos, media) => alunos.filter(aluno => aluno.media >= media);

console.log(aprovados(alunos, 6.5)[0]);