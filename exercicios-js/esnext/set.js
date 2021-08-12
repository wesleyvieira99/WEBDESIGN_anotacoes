const times = new Set()
times.add('São Paulo').add('Vasco')
console.log(times.size)
times.delete('Vasco')
console.log(times.has('Flamengo'))

const nomes = ['Wes', 'Ju']
const nomeSet = new Set(nomes)