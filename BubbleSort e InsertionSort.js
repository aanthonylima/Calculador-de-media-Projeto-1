//Ordenação de Números com Bubble Sort

//Ordenação com números
function bubbleSort(arr) {
 len = arr.length
 for (i = 0; i < len; i++) {
  for (j = 0; j < len - 1; j++) {
     if (arr[j] > arr[j + 1]) {
      temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
     }
  }
 }
 return arr
}

array = []
for (i = 0; i < 5; i++) {
    numeros = parseInt(prompt("Digite o " + (i+1) + "° número para a ordenação: "))
    array.push(numeros)
}
console.log("Array antes da ordenação: " + array)
console.log("Array depois da ordenação: " + bubbleSort(array))


//Ordenação com palavras
function bubbleSortWords(arr) {
 len = arr.length
 for (i = 0; i < len; i++) {
  for (j = 0; j < len - 1; j++) {
     if (arr[j] > arr[j + 1]) {
      temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
     }
  }
 }
 return arr
}
array = []
for (i = 0; i < 5; i++) {
    numeros = prompt("Digite a " + (i+1) + "° palavra para a ordenação em ordem alfabética: ")
    array.push(numeros)
}
console.log("Array antes da ordenação: " + array)
console.log("Array depois da ordenação: " + bubbleSortWords(array))





//Insertion Sort

//Ordenação com números
function insertionSort(array) {
  length = array.length
  for (i = 1; i < length; i++) {
    key = array[i]
    j = i - 1
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j = j - 1
    }
    array[j + 1] = key
  }
  return array
}

arr = []
for (i = 0; i < 5; i++) {
    numeros = parseInt(prompt("Digite o " + (i+1) + "° número para a ordenação: "))
    arr.push(numeros)
}
console.log("Array antes da ordenação: " + arr)
console.log("Array após a ordenação: " + insertionSort(arr))


//Ordenação da matriz pelo identificador do nome e, após a ordenação, exibição dos nomes na nova ordem
function bubbleSortMatriz(matriz) {
  len = matriz[0].length; // número de elementos na primeira linha (identificadores)

  for (i = 0; i < len; i++) {
    for (j = 0; j < len - 1; j++) {
      if (matriz[0][j] > matriz[0][j + 1]) {
        // Troca os identificadores
        tempId = matriz[0][j]
        matriz[0][j] = matriz[0][j + 1]
        matriz[0][j + 1] = tempId

        // Troca os nomes correspondentes
        tempNome = matriz[1][j]
        matriz[1][j] = matriz[1][j + 1]
        matriz[1][j + 1] = tempNome
      }
    }
  }
  return matriz
}

matriz = [
  [56, 109, 8, 4, 71, 13, 15],
  ['Jair', 'Valdir', 'Bia', 'Ana', 'Manoel', 'Carla', 'Carlos']
]
console.log("Nomes antes da ordenação: " + matriz[1])
matrizOrdenada = bubbleSortMatriz(matriz)
console.log("Nomes depois da ordenação: " + matrizOrdenada[1])