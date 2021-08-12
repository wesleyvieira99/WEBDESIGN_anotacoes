// estratégias para gerar valor padrão

function soma1(a, b, c) {
    //1. se a for diferente de undefined, retorna a, caso contrario retorne 1 como padrão
    a = a != undefined ? a : 1
    //2. se b for igual ao indice 1 em argumentos, retorna c, caso contrario retorne 1 como padrão
    b = 1 in arguments ? b : 1
    //1. se c for um NaN, retorna 1 como padrão, caso contrario retorne c 
    return a + b + c
}

//valor padrão do ES2015
//Agora basta especificar somente nos parâmetros meus valores padrões.
function soma2(a = 1, b = 1, c = 1){
    return a + b + c
}