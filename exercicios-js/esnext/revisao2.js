//1.Funções Arrow

const soma = (a,b) => a + b
console.log(soma(5,3))
//Na arrow function, implicitamente retorna um valor

//2.Parâmetro default
function padrao(texto = 'Node') {
    console.log(texto)
}

padrao()
padrao('Sou mais forte')

//3.Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total = total + n)
    return total
}

console.log(total(1,2,3,4,5,6))
console.log(total(1,2,3,5,6))