// Utilizando parâmetros variáveis em uma função

function soma () {
    let soma = 0
    for (i in arguments) {
        soma = soma + arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2,3))