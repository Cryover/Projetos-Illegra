/*
Dada a lista de pessoas em uma escola, crie um algoritmo que retorne apenas o nome e o sobrenome concatenado de todos os alunos da escola. Utilize template string para concatenar o nome e o sobrenome.

ex: ['joão das graças', 'gustavo brando', 'pedro farias', 'josué das flores', 'amalrindo nascimento']

const arrayPessoas = [
  { nome: "joão", sobrenome: "das graças", idade: 23, funcao: "aluno" },
  { nome: "maria", sobrenome: "nascimento", idade: 30, funcao: "professor" },
  { nome: "fernando", sobrenome: "filho", idade: 31, funcao: "professor" },
  { nome: "gustavo", sobrenome: "brando", idade: 22, funcao: "aluno" },
  { nome: "pedro", sobrenome: "farias", idade: 20, funcao: "aluno" },
  { nome: "josué", sobrenome: "das flores", idade: 21, funcao: "aluno" },
  { nome: "amalrindo", sobrenome: "nascimento", idade: 23, funcao: "aluno" },
  { nome: "debora", sobrenome: "castro", idade: 28, funcao: "professor" },
];
*/

const arrayPessoas = [
    { nome: "joão", sobrenome: "das graças", idade: 23, funcao: "aluno" },
    { nome: "maria", sobrenome: "nascimento", idade: 30, funcao: "professor" },
    { nome: "fernando", sobrenome: "filho", idade: 31, funcao: "professor" },
    { nome: "gustavo", sobrenome: "brando", idade: 22, funcao: "aluno" },
    { nome: "pedro", sobrenome: "farias", idade: 20, funcao: "aluno" },
    { nome: "josué", sobrenome: "das flores", idade: 21, funcao: "aluno" },
    { nome: "amalrindo", sobrenome: "nascimento", idade: 23, funcao: "aluno" },
    { nome: "debora", sobrenome: "castro", idade: 28, funcao: "professor" },
];

const nomeSobrenome = arrayPessoas.map(pessoa => pessoa.nome + " " + pessoa.sobrenome);

console.log(nomeSobrenome);