#Testes Práticos

#1:
class Animal:
    def falar(self):
        return "Som indefinido."

class Cachorro(Animal):
    def falar(self):
        return "Latido"

class Gato(Animal):
    def falar(self):
        return "Mial"
        
class Vaca(Animal):
    def falar(self):
        return "Muuu"

animais = [Cachorro(), Gato(), Vaca()]

for animal in animais:
    print (animal.falar())



#2:
class Veiculo:
    def mover(self):
        return "O veículo está se movendo."

class Carro(Veiculo):
    def mover(self):
        return "O carro está dirigindo na estrada."

class Bicicleta(Veiculo):
    def mover(self):
        return "A bicicleta está sendo pedalada."

class Aviao(Veiculo):
    def mover(self):
        return "O avião está voando no céu."

veiculos = [Carro(), Bicicleta(), Aviao()]

for veiculo in veiculos:
    print(veiculo.mover())



#3:
class Funcionario:
    def calcularSalario(self):
        raise NotImplementedError("Método 'calcularSalario' deve ser implementado na subclass")

class FuncionarioCLT(Funcionario):
    def __init__(self, salario_base):
        self.salario_base = salario_base
    
    def calcularSalario(self):
        # CLT recebe salário base + 13º (1/12 do salário) e férias (1/3 do salário)
        salario_com_bonus = self.salario_base + (self.salario_base / 12) + (self.salario_base / 3)
        return salario_com_bonus

class FuncionarioPJ(Funcionario):
    def __init__(self, valor_hora, horas_trabalhadas):
        self.valor_hora = valor_hora
        self.horas_trabalhadas = horas_trabalhadas
    
    def calcularSalario(self):
        # PJ recebe por hora trabalhada
        return self.valor_hora * self.horas_trabalhadas

class Estagiario(Funcionario):
    def __init__(self, bolsa_auxilio):
        self.bolsa_auxilio = bolsa_auxilio
    
    def calcularSalario(self):
        # Estagiário recebe um valor fixo de bolsa auxílio
        return self.bolsa_auxilio

funcionario_clt = FuncionarioCLT(3000)  # Salário base de 3000
funcionario_pj = FuncionarioPJ(50, 160)  # 50 por hora, 160 horas trabalhadas
estagiario = Estagiario(1200)  # Bolsa auxílio de 1200

print(f"Salário do Funcionario CLT: R${funcionario_clt.calcularSalario():.2f}")
print(f"Salário do Funcionario PJ: R${funcionario_pj.calcularSalario():.2f}")
print(f"Salário do Estagiário: R${estagiario.calcularSalario():.2f}")



#4:
class Produto:
    def descricao(self):
        raise NotImplementedError("O método descricao() deve ser implementado pelas subclasses.")

class Livro(Produto):
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor

    def descricao(self):
        return f"Livro: '{self.titulo}' de {self.autor}."

class Eletronico(Produto):
    def __init__(self, nome, marca):
        self.nome = nome
        self.marca = marca

    def descricao(self):
        return f"Eletrônico: {self.nome}, marca {self.marca}."

class Roupa(Produto):
    def __init__(self, tipo, tamanho):
        self.tipo = tipo
        self.tamanho = tamanho

    def descricao(self):
        return f"Roupa: {self.tipo}, tamanho {self.tamanho}."

produtos = [
    Livro("1984", "George Orwell"),
    Eletronico("Smartphone", "Samsung"),
    Roupa("Camiseta", "M"),
    Livro("O Senhor dos Anéis", "J.R.R. Tolkien"),
    Eletronico("Notebook", "Dell"),
    Roupa("Calça Jeans", "42")
]

for produto in produtos:
    print(produto.descricao())

