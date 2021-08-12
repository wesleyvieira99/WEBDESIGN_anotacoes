const aprovados = ['Bia', 'Ana', 'Wesley', 'Michael']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}-> ${nome}`)
})

//Usando o forEach, ele vai para o primeiro elemento
//E executa minha função callback que está dentro dos parênteses do forEach
//e dpois vai pro segundo elemento, executa, assim por diante...

aprovados.forEach(nome => console.log(nome))

//foEach para mostrar na tela o nome, usando uma função arrow
//como callback

const exibirAprovados = aprovado => console.log(aprovados)
aprovados.forEach(exibirAprovados)
//Colocar a função callback em uma variável e depois colocar
//no forEach