//Sem promisse...
//módeulo no node para trabalhar com requisições web
const http = require('http')

//função para pegar os dados da URL
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //método do módulo http para pegar os dados na internet
    //Primeiro parâmetro a URL
    //Segundo parâmetro o método a ser feito
    http.get(url, res => {
        let resultado = ''
        //Quando tiver pegando os dados, colocar os dados na variável 'resultado'
        res.on('data', dados => {
            resultado = resultado + dados
        })
        //Quando os dados acabarem, chamar o segundo parâmetro de 'getTurma', que será a transformação do resultado em um objeto
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}


let nomes = []
//Letra é a 'A' e o segundo parâmetro é a função que transformará os dados JSON em um objeto
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}` ))
    console.log(nomes)
})

//Com o promisse...
//módeulo no node para trabalhar com requisições web
const http = require('http')

//função para pegar os dados da URL
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //método do módulo http para pegar os dados na internet
    //Primeiro parâmetro a URL
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            //Quando tiver pegando os dados, colocar os dados na variável 'resultado'
            res.on('data', dados => {
                resultado = resultado + dados
            })
            //Quando os dados acabarem, chamar o segundo parâmetro de 'getTurma', que será a transformação do resultado em um objeto
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            }) 
        })
    })
   
}


let nomes = []
//Letra é a 'A' e o segundo parâmetro é a função que transformará os dados JSON em um objeto
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}` ))
    console.log(nomes)
}) 

//Várias promisses:
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(nomes => console.log(nomes))
.catch(e => console.log(e.message))