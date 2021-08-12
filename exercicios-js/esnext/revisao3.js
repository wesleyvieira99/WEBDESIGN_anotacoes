//1.Objetos
//ES8: Object.values/Object.entries
//Pega os valores e as chaves e valores dos objetos, respectivamente.

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//2. Classe

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
//Herança de cachorro para animal

console.log(new Cachorro().falar())
//Instanciação da classe Cachorro para poder usá-la com a palavra "New"