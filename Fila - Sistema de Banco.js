//Aplicação de FILA (Sistema de Atendimento de Banco)

const prompt = require('prompt-sync')()

class Fila {
    constructor() {
        this.items = [] //Array para armazenar os elementos da fila
    }

    enqueue(elemento) {
        this.items.push(elemento) //Adiciona elemento no final da fila
    }

    dequeue() {
        if (this.is_empty()) { //Verifica se a fila está vazia
            console.log("A fila está vazia.")
            return
        }
        const atendido = this.items.shift() //Remove o primeiro elemento da fila
        console.log(atendido + " foi atendido.")
    }

    is_empty() {
        return this.items.length === 0 //Retorna true se a fila estiver vazia
    }

    size() {
        return this.items.length //Retorna a quantidade de elementos na fila
    }
}

//Cria a fila
const filaBanco = new Fila()
let opcao

//Menu
do {
    opcao = prompt("\nFila de Banco\n"+"1 - Adicionar cliente à fila\n"+"2 - Atender próximo cliente\n"+"3 - Mostrar quantidade de clientes na fila\n"+"4 - Sair\n\n"+"Escolha uma opção: ")

    switch (opcao) {
        case "1":
            const nome = prompt("Digite o nome do cliente: ")
            filaBanco.enqueue(nome) //Adiciona um cliente na fila
            console.log(nome + " entrou na fila.")
            break

        case "2":
            filaBanco.dequeue() //Atende o próximo cliente
            break

        case "3":
            console.log("Clientes na fila: " + filaBanco.size()) //Mostra o tamanho atual da fila
            break

        case "4":
            console.log("Encerrando o atendimento.")
            break

        default:
            console.log("Opção inválida. Escolha entre 1 e 4.")
    }
}
while (opcao !== "4") //Continua rodando o sistema enquanto não escolher sair
