//São funções que retornam um objeto
function criarPessoa() {
    return {
        nome:'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
//sempre que eu executar essa função eu estou instanciando
//um novo objeto, returnando um novo objeto a partir da chamada da função

//Agora criando uma função factory passando os parâmetros
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Lonney', 10))