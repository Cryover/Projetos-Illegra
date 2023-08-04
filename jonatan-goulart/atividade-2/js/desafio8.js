/*
A função abaixo recebe 5 parâmetros: nome, idade, flagIsEmpregado, empregoAtual e telefone. 
Crie somente a assinatura da função refatorando de forma que fique mais legível a chamada dela, refatore a chamada da função também:

cadastraEstudante('joão', 15, false, null, '51997412487')
*/

let cadastraEstudante = (nome, idade, flagIsEmpregado, empregoAtual, telefone) => {
    console.log(`${nome}, ${idade}, ${flagIsEmpregado}, ${empregoAtual}, ${telefone}`);
}

cadastraEstudante('joão', 15, false, null, '51997412487');