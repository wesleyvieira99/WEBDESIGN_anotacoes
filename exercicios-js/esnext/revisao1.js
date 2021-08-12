 //let e const

 //O let tem escopo de bloco. Abaixo só consigo acessar 
 //dentro do bloco o let "b". O var não tem escopo de bloco

 {
     var a = 2
     let b = 3
 }

 //Template String

const nome = 'Wesley'
console.log(`Oi, ${nome}`)

//Destructuring - tirar dentro de um objeto ou array ou string um elemento
const [l, e, ...tras] = "Cod3r"
//letra "C" será atribuida a l
//letra "o" será atribuída a e
// e orestante será atrubuida a tras (usei o operador rest "...")

const [x,y] = [1,2,3]
console.log(x,y)
//x = 1 e y = 2

const {idade, nome} = {nome: 'Ana', idade: 9}