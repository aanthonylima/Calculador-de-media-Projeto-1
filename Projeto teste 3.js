//Função switch e média de valores (usando switch e cases)

console.log ("Escolha o que você pretende calcular:")
console.log ("1 - Média de notas de alunos")
console.log ("2 - Média de preços de produtos")
console.log ("3 - Média de idades de um grupo")

mediadenotas = 1
mediadeprodutos = 2
mediadeidades = 3

escolha = parseInt(prompt("Escolha o que você pretende calcular: "))

switch(escolha) {
    case 1:
        console.log ("Para calcular a média de notas de alunos, digite-as a seguir:")
        nota1 = parseFloat(prompt("Nota 1: "))
        nota2 = parseFloat(prompt("Nota 2: "))
        nota3 = parseFloat(prompt("Nota 3: "))
        nota4 = parseFloat(prompt("Nota 4: "))
        medianotas = (nota1 + nota2 + nota3 + nota4) / 4
        console.log ("A média final das notas inseridas é: " + medianotas)
        break
    case 2:
        console.log ("Para calcular a média de preços de produtos, digite-os a seguir:")
        preco1 = parseFloat(prompt("Preço do produto 1: "))
        preco2 = parseFloat(prompt("Preço do produto 2: "))
        preco3 = parseFloat(prompt("Preço do produto 3: "))
        preco4 = parseFloat(prompt("Preço do produto 4: "))
        mediaprecos = (preco1 + preco2 + preco3 + preco4) / 4
        console.log ("A média final dos preços inseridos é: " + mediaprecos)
        break
    case 3:
        console.log ("Para calcular a média de idades de um grupo, digite-as a seguir:")
        idade1 = parseInt(prompt("Idade da primeira pessoa: "))
        idade2 = parseInt(prompt("Idade da segunda pessoa: "))
        idade3 = parseInt(prompt("Idade da terceira pessoa: "))
        idade4 = parseInt(prompt("Idade da quarta pessoa: "))
        mediaidades = (idade1 + idade2 + idade3 + idade4) / 4
        console.log ("A média final das idades inseridas é: " + mediaidades)
        break
    default:
        console.log ("O número digitado é inválido.")
}

