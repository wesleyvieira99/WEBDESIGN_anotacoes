let aprovados = new Array ('Bia', 'Carlos')
//Forma não recomendada de criação de um array

aprovados = ['Bia', 'Carlos', 'Ana']
//Forma recomendada de criação de um array
console.log(aprovados[0])
//Acessando o primeiro elemento de um array

aprovados[3] = 'Paula'
//Forma dinâmica de adicionar elementos no array
aprovados.push('Abia')
//Forma de inclusão como último elemento no array

console.log(aprovados.sort())
//Função que ordena os elementos do array.

delete aprovados[1]
//Função que deleta o elemento de índice 1 do array
//O lugar vago do índice 1 após o delete fica como undefined
//O array não é reordenado após o delete

aprovados.splice(1, 2, 'Elemento1','Elemento2')
//Serve para adicionar elementos de um índice, para remover
//Ou adicionar e remover ao mesmo tempo
//No código acima, começa a partir do índice 1 e exclui 2 elementos
//e no lugar adiciona o 'Elemento1' e 'Elemento2'





