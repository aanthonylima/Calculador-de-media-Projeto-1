//Qualificação de um empregado para aposentadoria (usando if, else if e else)

numeroempregado = prompt("Número do empregado (código): ")
anonascimento = parseInt(prompt("Ano de nascimento: "))
anoingresso = parseInt(prompt("Ano de ingresso na empresa: "))

idadedevida = 2025 - anonascimento
console.log ("A idade do empregado é de " + idadedevida + " anos.")
idadeempresa = 2025 - anoingresso
console.log ("O tempo de trabalho do empregado é de " + idadeempresa + " anos.")

if (idadedevida >= 65) {
    console.log ("Requerer aposentadoria.")
}
    else if (idadeempresa >= 30) {
        console.log ("Requerer aposentadoria.")
    }
    else if (idadedevida >= 60 && idadeempresa >= 25) {
        console.log ("Requerer aposentadoria.")
    }
else {
    console.log ("Não requerer.")
}


//Acesso de um funcionário no sistema
codigodeusuario = parseInt(prompt("Digite o seu código de usuário: "))
if (codigodeusuario == 1234) {
    console.log ("Usuário inválido!")
}
    else {
        senha = parseInt(prompt("Digite a sua senha: "))
        if (senha == 9999) {
            console.log ("Acesso permitido.")
        }
        else {
            console.log ("Senha incorreta.")
        }
    }