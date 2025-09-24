//Código com quickSort

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
  
//Para ordenar de forma crescente:
function partitioncrescente(arr, indice, low, high) {
    const pivot = arr[high]; //Define o último elemento como pivô
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j][indice] <= pivot[indice]) { //Compara os elementos com base no índice escolhido (ID, Nome ou Idade)
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high); //Coloca o pivô na posição correta
    return i + 1;
}
function quickSortcrescente(arr, indice = 0, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = partitioncrescente(arr, indice, low, high);
      quickSortcrescente(arr, indice, low, pivotIndex - 1);
      quickSortcrescente(arr, indice, pivotIndex + 1, high);
    }
    return arr;
}
  
//Para ordenar de forma decrescente:
function partitiondecrescente(arr, indice, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j][indice] >= pivot[indice]) { //Ao invés de ser "<", fica ">" para decrescer
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high);
    return i + 1;
}
function quickSortdecrescente(arr, indice = 0, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = partitiondecrescente(arr, indice, low, high);
      quickSortdecrescente(arr, indice, low, pivotIndex - 1);
      quickSortdecrescente(arr, indice, pivotIndex + 1, high);
    }
    return arr;
}
  
//Elementos que serão trabalhados:
const tabela = [
    [1, "Ana Clara Souza", 27],
    [2, "João Pedro Lima", 31],
    [3, "Maria Eduarda Silva", 24],
    [4, "Lucas Henrique Oliveira", 36],
    [5, "Beatriz Alves", 29],
    [6, "Gustavo Henrique Santos", 33],
    [7, "Fernanda Costa", 22],
    [8, "Rafael Augusto Pereira", 28],
    [9, "Camila Rodrigues", 35],
    [10, "Bruno César Moreira", 26],
    [11, "Juliana Ferreira", 39],
    [12, "Pedro Lucas Gomes", 23],
    [13, "Mariana Souza Lima", 30],
    [14, "Thiago Augusto Carvalho", 25],
    [15, "Luana Martins Silva", 32]
]
  
console.log("Tabela original:", tabela, "\n")
  
//While para lá no final o código perguntar de deseja repetir o processo ou não
while (true) {
    escolha = parseInt(prompt("Olá! Escolha uma das seguintes opções:\n1 - Ordenar por ID\n2 - Ordenar por NOME\n3 - Ordenar por IDADE\n4 - Sair\nSua escolha: "))
  
    if (escolha === 4) {
        console.log("\nAté mais!")
        break
    }
  
    if (escolha == 1 || escolha == 2 || escolha == 3) {
        ordem = prompt("Digite 1 para ordem crescente ou 2 para ordem decrescente: \n")
        indice = escolha - 1
  
        if (ordem == 1) {
            quickSortcrescente(tabela, indice)
            console.log("\nTabela atualizada:", tabela, "\n")
        }
        else if (ordem == 2) {
            quickSortdecrescente(tabela, indice)
            console.log("\nTabela atualizada:", tabela, "\n")
        }
        else {
            console.log("Inválido. Por favor, repita o processo.")
            continue
        }
    } 
    else {
        console.log("Opção inválida. Tente novamente.")
        continue
    }
  
    // Pergunta se deseja repetir:
    repetir = prompt("Deseja repetir o processo?\nDigite 'S' para sim, ou qualquer outra tecla para não: ")
    if (repetir !== "S" && repetir !== "s") {
        console.log("\nAté mais!")
        break
    }
}
