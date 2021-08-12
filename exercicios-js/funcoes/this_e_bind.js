const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
        //Esse this que usei me referenciei ao dono do objeto,
        //neste caso, o objeto pessoa
    }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


//////////////////////////////////////////////////////////////


function pessoa() {
    this.idade = 0
    //Aqui criei um atributo idade com valor padrão 0
    
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
    //SetInterval dispara uma outra função a partir do intervalo
    //que eu passei. Neste caso quero que seja disparada uma
    //função a cada milisegundos(daí vem o atributo 1000)
}

new pessoa 