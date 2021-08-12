let isAtivo = false
console.log (isAtivo)

isAtivo = true
console.log (isAtivo)

isAtivo = 1
console.log (!!isAtivo)

console.log('os verdadeiros... ')
console.log(!!3) // TODOS OS NÚMEROS INTEIROS
console.log(!!-1)
console.log(!!' ') // STRINGS VAZIAS
console.log(!! []) // ARRAYS VAZIAS
console.log(!! {}) // OBJETOS VAZIAS
console.log(!! Infinity) // INFINITO
console.log(!! (isAtivo = true)) // DECLARANDO A PROPRIA VARIAVEL COMO TRUE

console.log('os falsos... ')
console.log(!!0) // NUMERO 0
console.log(!!'') // STRINGS SEM NADA
console.log(!!null) // NULO
console.log(!!NaN) // Not a Number
console.log(!!undefined) // indefinido
console.log(!! (isAtivo = false)) // declarando a propria variavel como false


//exemplo logico usando true e false
let nome = 'Wesley'
console.log(nome || 'Desconhecido')

// SE NOME = TRUE, IMPRIMI NA TELA O NOME
// OU IMPRIME 'DESCONHECIDO'