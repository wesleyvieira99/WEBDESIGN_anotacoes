//instanciando um novo Map
const tecnologias = new Map()
//Colocando na constante tecnologia a chave react com valor 'boa'
tecnologias.set('react', 'Boa')
//Pegando a chave react com o 'get'
console.log(tecnologias.get('react'))
//Verificando se uma chave está presente no map
console.log(tecnologias.has('react'))
//Deletando uma chave no meu map
tecnologias.delete('react')
//Quantos elementos estão contidos dentro do map
tecnologias.size