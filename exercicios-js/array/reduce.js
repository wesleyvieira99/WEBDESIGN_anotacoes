
const notas = [
    10, 20, 30
]

const resultado = notas.reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

// meu valor acumulado já é o meu primeiro elemento e o
// valor atual é o segundo, imprime os dois e depois retorna
// a soma dos dois, o valor do retorno é o acumulador agora
// e soma com o valor atual que agora é terceiro e último índice


const notas = [
    10, 20, 30
]

const resultado = notas.reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

// mesmo exemplo do de cima, porém depois da vírgula
// após a função callback, nos parâmetros do meu reduce
//eu passo o meu valor inicial, que neste caso é 10