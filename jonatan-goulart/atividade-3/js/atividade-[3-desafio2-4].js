/*
Crie uma função buscar que recebe três parâmetros:

    propriedade: Nome da propriedade no objeto
    valor: Valor da propriedade no objeto
    lista: Lista de objetos onde a busca deve ser executada

Dado estes parâmetros, a função deve buscar na lista e retornar o registro que possui a propriedade com o valor especificado.
Utilize o método find.

const lista = [
  { nome: "Tânia", sobrenome: "Cardoso", idade: 65 },
  { nome: "Emilly", sobrenome: "Barbosa", idade: 46 },
  { nome: "Vitória", sobrenome: "Costa", idade: 83 },
  { nome: "Erick", sobrenome: "Ferreira", idade: 16 },
];

buscar("nome", "Tânia", lista);

// saída
// { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 }
*/

const lista = [
    { nome: "Tânia", sobrenome: "Cardoso", idade: 65 },
    { nome: "Emilly", sobrenome: "Barbosa", idade: 46 },
    { nome: "Vitória", sobrenome: "Costa", idade: 83 },
    { nome: "Erick", sobrenome: "Ferreira", idade: 16 },
];

let buscar = (propriedade, valor, lista) => lista.find(pessoa => pessoa[propriedade] === valor);

console.log(buscar("nome", "Tânia", lista));