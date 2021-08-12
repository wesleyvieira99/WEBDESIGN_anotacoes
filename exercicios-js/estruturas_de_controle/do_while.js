function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    //Random traz 0 ou 1.
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
} while(opcao != -1)