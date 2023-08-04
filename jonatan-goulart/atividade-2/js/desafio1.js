/*
1. Crie uma classe Produto com os seguintes atributos:
     qtdEstoque nome tamanho cor preco
e com os seguintes métodos:
     vender - diminui a quantidade em estoque em -1 info - Método estático que retorna informações sobre o objeto
*/

class Produto {
    constructor(qtdEstoque, nome, tamanho, cor, preco) {
        this.qtdEstoque = qtdEstoque;
        this.nome = nome;
        this.tamanho = tamanho;
        this.cor = cor;
        this.preco = preco;
    }

    sell() {
        this.qtdEstoque -= 1;
    }

    static showProdutoInfo(produto) {
        return (
            "Nome: " +
            produto.nome +
            " - Tamanho: " +
            produto.tamanho +
            " - Cor: " +
            produto.cor +
            " - Preço: " +
            produto.preco +
            " - Estoque: " +
            produto.qtdEstoque
        );
    }
}

const produto = new Produto(20, "Apple", "5cm", "Red", 20);

console.log(Produto.showProdutoInfo(produto));
produto.sell();
console.log(Produto.showProdutoInfo(produto));
produto.sell();
console.log(Produto.showProdutoInfo(produto));
produto.sell();
console.log(Produto.showProdutoInfo(produto));
produto.sell();