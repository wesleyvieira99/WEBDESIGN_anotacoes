let valor // não localizado
console.log (valor) // como eu nao atribuí nada para ela ela fica com valor undefined
valor = null //ausência de valor
console.log(valor)

// console.log(valor.toString()) //Errro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)
produto.preco = undefined
console.log(produto)