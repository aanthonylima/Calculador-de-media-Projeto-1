#1:
class Disciplina:
    def __init__ (self, nome):
        self.nome = nome

class Aluno:
    def __init__ (self, nome):
        self.nome = nome
        
    def inscrever(self, disciplina):
        print(f"\nO aluno {self.nome} se inscreveu na disciplina de {disciplina.nome}.")

nome_aluno = input("Qual seu nome? ")
nome_disciplina = input("Em qual disciplina está se inscrevendo: ")

aluno = Aluno(nome_aluno)
disciplina = Disciplina(nome_disciplina)

aluno.inscrever(disciplina)


#2:
class Empregado:
    def __init__(self, nome):
        self.nome = nome

class Departamento:
    def __init__(self, nome):
        self.nome = nome
        self.empregados = []

    def adicionar_empregado(self, empregado):
        self.empregados.append(empregado)

    def listar_empregados(self):
        print(f"\nDepartamento: {self.nome}")
        print("Empregados:")
        for e in self.empregados:
            print("-", e.nome)

departamento = Departamento(input("Digite o nome do departamento: "))

emp1 = Empregado(input("Digite o nome do primeiro empregado: "))
departamento.adicionar_empregado(emp1)

emp2 = Empregado(input("Digite o nome do segundo empregado: "))
departamento.adicionar_empregado(emp2)

departamento.listar_empregados()


#3:
class Porta:
    def __init__(self):
        self.aberta = False

    def abrir(self):
        self.aberta = True

    def fechar(self):
        self.aberta = False

class Casa:
    def __init__(self):
        self.portas = [Porta(), Porta(), Porta()]

    def exibir_estado_portas(self):
        for i, porta in enumerate(self.portas, start=1):
            estado = "aberta" if porta.aberta else "fechada"
            print(f"Porta {i}: {estado}")

casa = Casa()

casa.portas[0].abrir()
casa.portas[2].abrir()

casa.exibir_estado_portas()


#4:
class Veiculo:
    def mover(self):
        pass

class Carro(Veiculo):
    def mover(self):
        print("O carro está dirigindo na estrada!")

class Bicicleta(Veiculo):
    def mover(self):
        print("A bicicleta está pedalando no parque!")

carro = Carro()
bicicleta = Bicicleta()

carro.mover()
bicicleta.mover()