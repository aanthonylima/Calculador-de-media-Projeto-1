//Média de notas (usando if, else if e else)

console.log ("Para calcular a média das suas notas, digite-as a seguir: ")
nota1 = parseFloat(prompt("Digite a primeira nota: "))
nota2 = parseFloat(prompt("Digite a segunda nota: "))
nota3 = parseFloat(prompt("Digite a terceira nota: "))
nota4 = parseFloat(prompt("Digite a quarta nota: "))
media = (nota1 + nota2 + nota3 + nota4) / 4

if (media==10) {
    console.log ("Aprovado. Parabéns! Sua média final é " + media)
}
    else if (7<=media && media<10)  {
        console.log ("Aprovado. Podia ter sido melhor. Sua média final é " + media)
    }
    else if (5<=media && media<7)  {
        console.log ("Reprovado. Foi por pouco. Sua média final é " + media)
    }
    else if (0<=media && media<5)  {
        console.log ("Reprovado. A culpa foi do professor. Sua média final é " + media)
    }
else {
    (console.log("Ops. Você deve ter inserido alguma nota errada."))
}