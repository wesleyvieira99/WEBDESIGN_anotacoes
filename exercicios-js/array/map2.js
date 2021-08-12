const carrinho = [
    '{"nome": "Borracha", "preço": 3.45}',
    '{"nome": "Caneta", "preço": 3.00}',
    '{"nome": "Caderno", "preço": 3.90}'
]

//Retornar um array apenas com os preços usando os maps

const paraobjeto = e => JSON.parse(e)
const apenasPreco = e => e.preço

let resultado = carrinho.map(paraobjeto).map(apenasPreco)
console.log(resultado)

