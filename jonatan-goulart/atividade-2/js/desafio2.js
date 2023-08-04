/*
2. Converter o código de ES5 para ES6:
https://github.com/ilegra/jornada-tech-frontend-react-2022-T1/blob/main/exercises/es6/es5-to-es6.md 
*/

/* Converta o código abaixo para ES6
     concatenação de string - templatestring
     const e let
     shorthand param
     default param
     arrow function
     classes
     function dentro de letiável
     etc...
 */

class gerenciadorArquivos {

    buscaArquivoNoSistema(nomeArquivo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!nomeArquivo) return reject("arquivo não existe");
                console.log("buscou o arquivo" + nomeArquivo);
                resolve(nomeArquivo);
            }, 300);
        });
    }

    salvaArquivoNoServidor(urlServico, arquivo) {
        urlServico = urlServico || "www.api.com";
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!arquivo) return reject("arquivo não existe");
                console.log("salvou no servidor" + urlServico);
                resolve(urlServico);
            }, 300);
        });
    }

    // chama os serviços de buscar arquivo e salva no servidor
    handlerArquivo() {
        buscaArquivoNoSistema("teste1", (err, arquivo) => {
            if (!err)
                salvaArquivoNoServidor(
                    "www.google.com",
                    arquivo,
                    (err, sucesso) => {
                        if (!err) {
                            console.log(sucesso);
                        }
                    }
                );
        });
    }

}

let somaMultiplosNumeros = (...numerosArray) => {
    return numerosArray.reduce((acumulador, numeroAtual) => {
        return acumulador + numeroAtual;
    });
};

const father = {
    name: "Marcelo",
    friendsFather: ["João", "Maria"],
    olaAmigos: () => {
        this.friendsFather.map((value) => {
            console.log(this.name + " conhece " + value);
        });
    },
};

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}