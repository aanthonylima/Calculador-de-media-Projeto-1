//Calculadora de médias (usando while)

nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "))
nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "))
while(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    console.log ("Um ou ambos os valores são inválidos. Insira-os novamente.")
    nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "))
    nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "))
}
console.log ("A média desse aluno é igual a " + (nota1 + nota2) / 2)

novo = prompt("NOVO CÁLCULO (S/N)? ")

while(novo == "S" || novo == "s") {
    nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "))
    nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "))
    while(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    console.log ("Um ou ambos os valores são inválidos. Insira-os novamente.")
    nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "))
    nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "))
    }
    console.log ("A média desse aluno é igual a " + (nota1 + nota2) / 2)
    novo = prompt("NOVO CÁLCULO (S/N)? ")
}
console.log ("Operação encerrada.")