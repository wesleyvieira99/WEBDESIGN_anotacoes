const nums = [1,2,3,4]

//O map é um for com propósito

let resultado = nums.map(function(e) {
    return e * 2
})

const soma = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2)}`

resultado = nums.map(soma).map(triplo).map(paraDinheiro)
console.log(resultado)