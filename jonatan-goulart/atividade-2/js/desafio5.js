/*
 Dado o objeto abaixo, faça com que, em uma linha ,seja possível o uso das variáveis desse objeto serem usadas de forma separada:

ex: console.log(name), console.log(album)

const cantor = { name: "Michael Jackson", album: "Thriller" };
*/

const { name, album } = { name: "Michael Jackson", album: "Thriller" };

console.log(`Nome: ${name} | Album: ${album}`);