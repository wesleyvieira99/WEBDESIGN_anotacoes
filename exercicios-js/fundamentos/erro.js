function tratarErro(erro) {
    throw 10
}

function imprimiNomeGritado(obj) {
    try {
        console.log(obj).name.toUpperCase() + '!!!'
    } catch(e) {
        tratarErro(e)
    } finally {
		console.log('fim')
    }

    
}

const obj = {nome: 'Roberto'}
imprimiNomeGritado(obj)