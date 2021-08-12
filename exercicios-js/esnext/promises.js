function falarDepois(segundos, frase, fraseErro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            reject(fraseErro)
        }, segundos * 1000)
    })
}

falarDepois(3, 'Que legal', 'Que chato')
    .then(frase => console.log(frase))
    .catch(fraseErro => console.log(fraseErro))

//Explicando o código acima
//1.Eu tenho uma função que retorna uma nova Promessa;
//2. Esta promessa recebe o parâmetro de sucesso ou Erro;
//3. Após receber os parâmetros de erro ou sucesso, ela executa um comando
//4. Resolve é a execução para sucesso e Reject para Erro;
//5. Para usar o promisse, utilize o then para sucesso e catch para erro 