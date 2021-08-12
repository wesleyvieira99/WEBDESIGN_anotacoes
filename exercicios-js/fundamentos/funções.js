//Exemplos básicos de funções//
//função sem retorno//

function imprimirSoma(a,b) {
    console.log(a + b)
}
imprimirSoma(2,3)
imprimirSoma(2)


//Função com retorno de valor

function soma(a,b = 0) {
    return a + b
}

console.log(soma(3,5))

//Armazenamento de uma função dentro de uma variável

const imprimoSoma = function (a,b) {
    console.log(a+b)

}

imprimoSoma(2,3)

//Função Arrow

const soma = (a,b) => {
    return a+b
}

console.log(soma(2,3))