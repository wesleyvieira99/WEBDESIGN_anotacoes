const pilotos = ['Lewis', 'Verstappen', 'Bottas']
//Atribui um array dentro de uma constante 'pilotos'
//Não posso mexer na constante, mas posso mexer no array da constante

pilotos.pop() //remover o último elemento do array
pilotos.push('Stroll') //Adicionar um elemento na última posição
pilotos.shift() //remover o primeiro elemento do array
pilotos.unshift() //adiciona no primeiro elemento do  array

const algunsPilotos = pilotos.slice(2)
//Pega o array neste caso a partir do índice 2 e retorna um novo array para uma nova constante
//Slice é pegar um pedaço do array

const algunsPilotos = pilotos.slice(1, 4)
//Pega o pedaço do array a partir do índice 1 até 4 (tirando o 4)
