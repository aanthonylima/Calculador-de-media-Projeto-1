//Recebe dois parâmetros: o array de dados que será ordenado e o índice dentro de cada "linha" que será usado para comparar
function selectionSort(arr, indice) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i
    for (let j = i + 1; j < len; j++) {
        if (arr[j][indice] < arr[minIndex][indice]) { //Compara o valor do indice com o mínimo atual. Se for menor, atualiza minIndex com o índice do novo menor valor.
        minIndex = j
        }
    }
    if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}
    return arr
}

var pearson = [
    [1, "Isaac Newton", 28],
    [2, "Friedrich Gauss", 33],
    [3, "Marie Curie", 29],
    [4, "Hedy Lamarr", 23],
    [5, "Albert Einstein", 39],
    [6, "Nicolau Copernico", 30],
    [7, "Galileu Galilei", 25],
    [8, "Alexander Volta", 36],
    [9, "André-Marie Ampère", 23],
    [10, "James Clerk Maxwell", 25],
    [11, "James Prescott Joule", 33],
    [12, "James Watt", 23],
    [13, "Archimedes de Siracusa", 39],
    [14, "Simom Ohm", 35]
]

escolha = parseInt(prompt("Olá! Escolha uma das seguintes opções:\n1 - Ordenar por ID\n2 - Ordenar por NOME\n3 - Ordenar por IDADE\n4 - Sair\nSua escolha: "))

while (true) {
    if (escolha === 4) { //Caso o usuário escolher 4, o programa encerra
        console.log("\nAté mais!")
        break
    }
    switch (escolha) { //O usuário escolhe o que quer ordenar
        case 1:
            console.log(selectionSort(pearson, 0))
            break
        case 2:
            console.log(selectionSort(pearson, 1))
            break
        case 3:
            console.log(selectionSort(pearson, 2))
            break
        default:
            console.log ("Número inserido inválido.")
            break
    }

//O usuário escolhe se quer refazer o processo ou não
repetir = prompt("Deseja repetir o processo? \n(Digite S para sim, ou qualquer outra tecla para não: ")

    if (repetir === "S" || repetir === "s") {
        escolha = parseInt(prompt("\nOlá! Escolha uma das seguintes opções:\n1 - Ordenar por ID\n2 - Ordenar por NOME\n3 - Ordenar por IDADE\n4 - Sair\nSua escolha: "))
    }
    else {
        console.log ("\nAté mais!")
        break
    }
}