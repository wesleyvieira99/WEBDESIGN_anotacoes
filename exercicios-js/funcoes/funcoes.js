// Função em JS é First-Class Object

//1. Criar uma função de forma literal

function fun1() {}

//2. Armazenar uma função em uma variável

const fun2 = function () {}

//3. Armazenar dentro de um array

const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

//4. Colocar um função dentro de um atributo de um objeto

const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//5. Como passar uma função como parâmetro de outra função

function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

//6. Retornando uma função dentro de uma função

function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2 , 3)(4)