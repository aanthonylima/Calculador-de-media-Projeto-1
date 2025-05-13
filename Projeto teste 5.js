//Simulação de um sistema para clientes e funcionários de uma locadora de carros (usando todas as funcões aprendidas até o momento)

const mensageminicial = "Você está acessando o site Locadora, seja bem vindo! \n\nSe está acessando como nosso CLIENTE, selecione 1. \nSe está acessando como nosso FUNCIONÁRIO, selecione 2. \nObservação: Se quer adicionar os carros disponíveis em loja, faz login PRIMEIRO no acesso de funcionários.\n"
console.log (mensageminicial)
acesso = parseInt(prompt("Escolha o seu tipo de acesso: "))
    while (acesso > 2 || acesso < 1) {
        acesso = parseInt(prompt("\nReincira o tipo de acesso desejado: "))
    }

//Para clientes
    if (acesso == 1) {
        console.log ("\nQue bom te termos aqui hoje! Em que podemos ajudar?")
        console.log ("\n1 - Alugar um dos carros disponíveis.")
        console.log ("2 - Anunciar o meu carro pessoal para aluguel.")
        console.log ("3 - Entrar em contato com a empresa sobre imprevistos com um carro alugado ou outros assuntos.\n")

        escolha = parseInt(prompt("Escolha a sua necessidade: "))
        while (escolha > 3) {
        console.log ("\nNúmero inválido! Vamos refazer a sua solicitação a seguir.\n")
        escolha = parseInt(prompt("Escolha a sua necessidade: "))
        }

        switch (escolha) {
            case 1:
                console.log ("\nOps, parece que nosso funcionário ainda não cadastrou os nossos carros disponíveis em loja.")
                break
                
            case 2:
                console.log ("\nForneça os seguintes dados para verificarmos se seu carro está apto para aluguel ou não: ")
                carro = prompt("Qual o modelo do seu carro? ")
                ano = parseInt(prompt("Ano: "))
                placa = prompt("Placa: ")
                
                if (ano < 2014) {
                    console.log ("\nOps, parece que o ano do seu carro não está de acordo com as nossas preferências (aceitamos carros fabricados a partir de 2014). A sua solicitação está sendo encerrada. Agradecemos pela preferência!")
                }
                else if (ano > 2025) {
                    console.log ("\nEstamos no ano de 2025 e você digitou um ano futuro. A sua solicitação está sendo encerrada. Agradecemos pela preferência!")
                }
                else {
                    console.log ("\nTudo certo com sua solicitação. Você receberá um email com a confirmação de quando poderá deixar o seu carro em nossa sede. Agradecemos pela preferência!")
                }
                break
            
            case 3:
                console.log ("\nVocê está sendo redirecionado para falar com um de nossos atendentes.")
                break
            
            default:
            console.log ("\nNúmero inválido! Vamos refazer a sua solicitação a seguir.")
            break
        }
    }
              
//Para funcionários inserirem:
    if (acesso == 2) {
        console.log ("\nOlá funcionário! A seguir, insira os carros que temos disponíveis em loja. \n")
        carro1 = prompt("Digite um carro disponível na loja: ")
        carro2 = prompt("Digite outro carro disponível na loja: ")
        carro3 = prompt("Digite outro carro disponível na loja: ")
        carro4 = prompt("Digite outro carro disponível na loja: ")
        console.log ("\nCarros cadastrados! \nSelecione 1 para ir à área de cliente. \nSelecione qualquer outra tecla para sair do Locadora.\n")
        escolha2 = prompt("Escolha: ")

        //Funcionários indo para clientes
        if (escolha2 == 1) {
                console.log ("\nQue bom te termos aqui hoje! Em que podemos ajudar?")
                console.log ("\n1 - Alugar um dos carros disponíveis.")
                console.log ("2 - Anunciar o meu carro pessoal para aluguel.")
                console.log ("3 - Entrar em contato com a empresa sobre imprevistos com um carro alugado ou outros assuntos.\n")

                escolha = parseInt(prompt("Escolha a sua necessidade: "))
                while (escolha >3) {
                console.log ("\nNúmero inválido! Vamos refazer a sua solicitação a seguir.\n")
                escolha = parseInt(prompt("Escolha a sua necessidade: "))
                }

                 switch (escolha) {
                    case 1:
                        console.log ("\nOs carros atualmente disponíveis para aluguel são: " + carro1 + ", " + carro2 + ", " + carro3 + " e " + carro4 +".")
                        escolhacarro = prompt("Digite o nome do carro que deseja alugar ou feche o aplicativo para cancelar a operação: ")
                        console.log ("\nTudo certo! A reserva do seu " + escolhacarro + " já está sendo realizada. Retire na loja quando quiser!")
                        break
                        
                    case 2:
                        console.log ("\nForneça os seguintes dados para verificarmos se seu carro está apto para aluguel ou não: ")
                        carro = prompt("Qual o modelo do seu carro? ")
                        ano = parseInt(prompt("Ano: "))
                        placa = prompt("Placa: ")
                        
                        if (ano < 2014) {
                            console.log ("\nOps, parece que o ano do seu carro não está de acordo com as nossas preferências (aceitamos carros fabricados a partir de 2014). A sua solicitação está sendo encerrada. Agradecemos pela preferência!")
                        }
                        else if (ano > 2025) {
                            console.log ("\nEstamos no ano de 2025 e você digitou um ano futuro. A sua solicitação está sendo encerrada. Agradecemos pela preferência!")
                        }
                        else {
                            console.log ("\nTudo certo com sua solicitação. Você receberá um email com a confirmação de quando poderá deixar o seu carro em nossa sede. Agradecemos pela preferência!")
                        }
                        break
                    
                    case 3:
                        console.log ("\nVocê está sendo redirecionado para falar com um de nossos atendentes.")
                        break
                    
                    default:
                    console.log ("\nNúmero inválido! Vamos refazer a sua solicitação a seguir.")
                    break
                
                    }
                }
            }
    
        //Funcionários saindo do site
            else {}
