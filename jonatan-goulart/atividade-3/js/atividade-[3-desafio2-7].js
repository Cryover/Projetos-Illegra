/*
Utilizando a template string, crie uma string utilizando todos dados do objeto.

const objeto = {
  nome: "John Doe",
  idade: 35,
  pais: "Estados Unidos",
  estado: "Massachusetts",
};

// saída
// Olá, meu nome é John Doe e eu tenho 35 anos de idade, moro nos Estados Unidos no estado de Massachusetts
*/

const objeto = {
    nome: "John Doe",
    idade: 35,
    pais: "Estados Unidos",
    estado: "Massachusetts",
};

console.log(`Olá, meu nome é ${objeto.nome} e eu tenho ${objeto.idade} anos de idade, moro nos ${objeto.pais} no estado de ${objeto.estado}`);