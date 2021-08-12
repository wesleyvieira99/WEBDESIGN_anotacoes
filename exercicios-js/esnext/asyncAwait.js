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

//Estes recursos são usados junto com o Promise e tem o objetivo de tornar nosso código muito mais assíncrono:
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    return [].concat(ta, tb)
}

obterAlunos()
.then(alunos => console.log(alunos))