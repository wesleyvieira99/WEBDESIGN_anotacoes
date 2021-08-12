const fabricantes = ["Mercedes", "Audi"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})

////////////////////////////////////////////

let notas = [5,10,7,6]

notasBaixas = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixas)

////////////////////// Exemplo de Callback no browser

document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('o evento ocorreu!')
}