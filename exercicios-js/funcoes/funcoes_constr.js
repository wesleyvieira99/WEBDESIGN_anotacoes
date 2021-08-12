function Carro(velocidademax = 200, delta = 5) {
    //atributo privado
    let velocidadeatual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeatual + delta <= velocidademax) {
            velocidadeatual += delta
        } else {
            velocidadeatual = velocidademax
        }
    }

    // metodo publico 
    this.getVelocidadeAtual = function () {
        return velocidadeatual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())