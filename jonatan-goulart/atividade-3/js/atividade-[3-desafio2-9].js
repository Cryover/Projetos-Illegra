/*
Implemente o método calculaValorTotalDaCompra que recebe quatro parâmetros:

    produtos: Lista com o nome dos produtos comprados
    cidade: String que representa o nome da cidade
    caixa: Mapa que contém relação de produtos e preços
    fretes: Mapa que contém relação de cidades e fretes

Calcule o preço total da compra junto com o frete de acordo com as tabelas a seguir:

Produtos:
Produto         Preço
Arroz               7.10
Feijão              2.30
Macarrão        4.70
Refrigerante   3.00

Fretes:
Cidade                 Frete
São Paulo           10.10
Rio de Janeiro    12.30
Brasília                14.70
Outros                  13.00

calculaValorTotalDaCompra(["Arroz"], "São Paulo", caixa, fretes);

// saída
// 17,20
*/

const caixa = [
    { produto: 'Arroz', preco: 7.10 },
    { produto: 'Feijão', preco: 2.30 },
    { produto: 'Macarrão', preco: 4.70 },
    { produto: 'Refrigerante', preco: 3.00 },
]

const fretes = [
    { cidade: 'São Paulo', preco: 10.10 },
    { cidade: 'Rio de Janeiro', preco: 12.30 },
    { cidade: 'Brasília', preco: 14.70 },
    { cidade: 'Outros', preco: 13.00 },
]

let calculaValorTotalDaCompra = (lista, cidade, caixa, fretes) => {

    let caixaPreco = caixa.filter(c => lista.includes(c.produto)).map(c => c.preco);
    let frete = fretes.find(f => f.cidade === cidade);
    let total = caixaPreco.reduce((a, b) => a + b) + frete.preco;
    return total;
};

console.log(calculaValorTotalDaCompra(["Arroz"], "São Paulo", caixa, fretes));