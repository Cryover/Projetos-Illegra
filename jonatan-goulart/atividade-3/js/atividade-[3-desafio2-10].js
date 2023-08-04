/*
Refatore o código abaixo para utilizar arrow functions e template string

let carrinho = [
  { nome: "abacaxi", preco: "2.00" },
  { nome: "detergente", preco: "2.50" },
  { nome: "bolacha", preco: "3.80" },
];

carrinho.forEach(function (produto) {
  imprimeProduto(produto.nome, produto.preco);
});

function imprimeProduto(nome, preco) {
  console.log("Produto: " + nome + " | " + "Preço: " + preco);
}
*/

let carrinho = [
    { nome: "abacaxi", preco: "2.00" },
    { nome: "detergente", preco: "2.50" },
    { nome: "bolacha", preco: "3.80" },
];

let imprimeProduto = (nome, preco) => {
    console.log(`Produto: ${nome} | Preço: ${preco}`);
}

carrinho.forEach((produto) => {
    imprimeProduto(produto.nome, produto.preco);
});