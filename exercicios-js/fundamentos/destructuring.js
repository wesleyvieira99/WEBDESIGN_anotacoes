// Exemplos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//Vamos supor que agora eu queira retirar desse objeto que eu c
// criei as chaves com seus valores "nome" e "idade"

//Poderia assim
console.log(pessoa.nome)

//Mas usando o destructuring...

const { nome, idade } = pessoa
console.log(nome, idade)
// Ou seja, tire do objeto "nome" e "idade", qual objeto?
//Objeto "pessoa", que vem depois do sinal de igual.

//Posso também mudar criar variáveis com outros nomes para
// os valores do meu objeto

const { nome: n, idade: i } = pessoa
console.log(n, i)


//Agora usando esse processo de destructuring com Arrays:

const [a] = [10]
console.log(a)

const [n1 , n2, n3, n4] = [10,20,30,40]
console.log(n1 , n2, n3, n4)


//Agora podemos usar esse processo de destrcuturing para o âmbito de funções:

function rand({min =0, max=1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40}))