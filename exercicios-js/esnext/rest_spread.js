//1.Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total = total + n)
    return total
}

//2.Operador spread com objetos

const func = {nome:'Maria', salari: 2000}
const clone = { ativo: true, ...func}
console.log(clone)
//pegando todos os atributos de funcionário e espalhando
//dentro de clone

//3.Operador spread com array
const grupoA = ['J', 'M', 'A']
const grupoFinal = ['Ma', 'R', ...grupoA]
console.log(grupoFinal)