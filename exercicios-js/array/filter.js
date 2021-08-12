//Serve para filtrar um array
//No filter o novo array é menor ou igual ao array original
const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'iPad', preco: 5000, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
    return false
}))

//No código acima: para cada elemento "p" no meu array "produtos"
//Ele não estará presente no array final. Se fosse true, estaria todos os elementos 
//no array final.

const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))

//No código acima outro exemplo de filter em cadeia agora.