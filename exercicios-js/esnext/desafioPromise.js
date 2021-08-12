//Desafio para leitura de conteúdo de um arquivo
const fs = require('fs')
const path = require('path')


function p(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))
})
}


const caminho = path.join(__dirname,'desafioPromise.txt')
p(caminho).then(conteudo => console.log(conteudo))

//Veja um Promise mais simples...

function p(nome) {
    return new Promise(resolve => {
        resolve(console.log(nome))
    })
}

p('Wesley').then()
