//Ordenação com MergeSort:
console.log ("Ordenação com MergeSort:")
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    resultArray.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    resultArray.push(right[rightIndex]);
    rightIndex++;
  }
  return resultArray;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const array = [3, 4, 9, 2, 5, 8, 2, 1, 7, 4, 6, 2, 9, 8, 5, 1];
console.log("Array original:", array);
console.log("Array ordenado:", mergeSort(array));

//Ordenação com InsertionSort:
console.log ("\nOrdenação com InsertionSort:")
function insertionSort(array) {
  var length = array.length;
  for (var i = 1; i < length; i++) {
    var key = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

var arr = [3, 4, 9, 2, 5, 8, 2, 1, 7, 4, 6, 2, 9, 8, 5, 1];
console.log("Array antes da ordenação: " + arr);
console.log("Array após a ordenação: " + insertionSort(arr));



//Ordenação de nomes com HeapSort
function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && arr[left].length > arr[largest].length) {
    largest = left;
  }
  if (right < n && arr[right].length > arr[largest].length) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
function heapSort(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

const nome = [];
let continua = true;

while (continua) {
  const nome = prompt("Digite um nome (ou digite um . para parar): ");

  if (nome === ".") {
    continuar = false;
  } else {
    nomes.push(nome);
  }
}
heapSort(nomes);
console.log("Nomes ordenados por tamanho: ");
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}



//Ordenação de String com QuickSort
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j].length <= pivot.length) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

const nomes = [];
let continuar = true;

while (continuar) {
  const nome = prompt("Digite um nome (ou digite um . para parar): ");

  if (nome === ".") {
    continuar = false;
  } else {
    nomes.push(nome);
  }
}
quickSort(nomes);
console.log("Nomes ordenados por tamanho: ");
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}