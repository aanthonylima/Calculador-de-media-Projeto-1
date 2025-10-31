//Aplicação de PILHA (Calculadora)

const prompt = require('prompt-sync')()

class Pilha {
    constructor() {
        this.itens = [] //Array para armazenar os elementos da pilha
    }

    push(valor) {
        this.itens.push(valor) //Adiciona o valor no topo da pilha
    }

    pop() {
        if (!this.isEmpty()) { //Remove e retorna o topo se a pilha não estiver vazia
            return this.itens.pop()
        }
        return null
    }

    isEmpty() {
        return this.itens.length === 0 //Retorna true se a pilha estiver vazia
    }

    size() {
        return this.itens.length //Retorna a quantidade atual de elementos na pilha
    }
}

class Calculadora {
    constructor() {
        this.historico = new Pilha() //Pilha para armazenar o histórico de resultados
        this.valorAtual = 0 //Valor atual da calculadora
    }

    adicionar(numero) {
        this.valorAtual += numero //Soma ao valor atual
        this.historico.push(this.valorAtual) //Salva o resultado no histórico
    }

    subtrair(numero) {
        this.valorAtual -= numero //Subtrai do valor atual
        this.historico.push(this.valorAtual) //Salva o resultado no histórico
    }

    desfazer() {
        if (!this.historico.isEmpty()) { //Remove a última operação se houver
            this.historico.pop()
            if (!this.historico.isEmpty()) { 
                this.valorAtual = this.historico.itens[this.historico.itens.length - 1] //Atualiza o valor atual
            }
            else {
                this.valorAtual = 0
            }
        }
    }

    mostrar() {
        console.log("Resultado atual: " + this.valorAtual) //Mostra o valor atual
    }
}

const calculadora = new Calculadora()

//Menu
while (true) {
    const opcao = prompt("\nCalculadora\n"+"1 - Adicionar\n"+"2 - Subtrair\n"+"3 - Desfazer última operação\n"+"4 - Sair\n"+"Escolha uma opção: ")

    if (opcao === "1") {
        const n = parseFloat(prompt("Digite o número para somar: "))
        calculadora.adicionar(n)
        calculadora.mostrar()
    }
    else if (opcao === "2") {
        const n = parseFloat(prompt("Digite o número para subtrair: "))
        calculadora.subtrair(n)
        calculadora.mostrar()
    }
    else if (opcao === "3") {
        calculadora.desfazer()
        calculadora.mostrar()
    }
    else if (opcao === "4") {
        console.log("Até breve!")
        break
    }
    else {
        console.log("Opção inválida. Tente novamente.")
    }
}
