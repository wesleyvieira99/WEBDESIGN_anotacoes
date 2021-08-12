const bodyParser = require('body-parser')
//BodyParser para fazer o parser dos dados que estão no corpo da requisição para trabalhar com estes dados
const express = require('express')
//Express para ser o nosso servidor de requisição
//Agora vamos instanciar o express e colocar ele em uma constante
const app = express()

//agora eu vou colocar os middlewares que serão aplicados sempre que ocorrer uma requisição
//O middleware é uma função que será executada quando uma determinada requisição chegar

app.use(express.static('.'))
//middleware que faz todos os arquivos estáticos da minha pasta atual serem providos pelo meu "app"

app.use(bodyParser.urlencoded({extended: true}))
//código responsável por ler os dados se a requisição vier de um formulário e transformar em um objeto
app.use(bodyParser.json())
//código responsável por ler os dados se a requisição vier de um json e transformar em um objeto

app.get('/teste', (req, res) => res.send('Ok!'))
//middleware que todas as requisições do tipo get que são da URL /teste retorne "Ok!"

const multer = require('multer')
//Para isso, dentro do meu arquivo de servidor, vou baixar o ‘multer’ que serve para interpretar meu arquivo que veio de upload.


//E também usando o multer vou configurar o lugar que vou salvar meus arquivos que fiz o upload e também o nome que vou salvar meus arquivos após fazer o upload
const storage = multer.diskStorage({
    //destino do arquivo vai ser a pasta atual do meu servidor
    destination: function (req, file, callback) {
        callback(null, '.')
    },

    //nome do meu arquivo vai ser o nome original mais a data
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})


//Agora eu crio uma constante chamada upload no meu servidor que vai me dizer onde vou guardar meu arquivo, com base em “storage” e o nome da requisição para fazer o upload deste arquivo
const upload = multer({ storage }).single('arquivo')


//Agora dentro do meu arquivo de servidor eu coloco como será minha requisição do tipo POST
//requisição do tipo post na URL 'upload'
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        //requisição será com base na minha constante 'upload' que usa a biblioteca multer
        if(err) {
            return res.end('Ocorreu um erro!')
            //se der um erro a requisição vai retornar uma mensagem de erro
        }

        res.end('Concluído com sucesso!')
    })
})

//requisição do tipo post no endpoint formulário (que é o mesmo nome da propriedade action do meu formulário lá no HTML)
app.post('/formulario', (req, res) => {
    //lembrando que tenho que ter o comando que coloquei acima pra dar certo
    //é o comando bodyParser, que vai pegar os dados da requisição e transformar em um json
    //app.use(bodyParser.urlencoded({extended: true})) - para dados vindo de formulários
    //app.use(bodyParser.json()) - para dados vindo de objetos
    
    res.send({
        ...req.body,
        id: 500
        //após eu fazer a requisição do tipo post no servidor, eu trago como resposta tudo que está no corpo da requisição e um id
    })
})

//requisição do tipo GET com uma URL com um parâmetro "numero"
app.get('/parOuImpar', (req, res) => {
    //transformando o número recebido como parâmetro na URL em um Int e checando se ele é par
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        //a resposta desta requisição será par se realmente o número passado como parametro for par ou retornarar uma string impar se o número passado como parametro não for par
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))
//Iniciei o servidor na porta 8080 e mandei a mensagem executando pra saber que o servidor iniciou
