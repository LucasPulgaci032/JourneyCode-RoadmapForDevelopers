//Python
export const varAndConstsPy: string = `
\`\`\`Python
numero = 1; 
print(numero) 
//SAÍDA = 1 -> O valor atual da variável "numero" é 1


numero = 2;
print(numero) // SAÍDA = 2 -> Agora o valor da variavel "numero" é 2.
\`\`\`

`;
export const dataTypesCodePy: string = `
__TIPOS PRIMITIVOS__

---

//string
\`\`\`
texto = "Olá mundo!"
print(type(texto))
\`\`\`
//SAÍDA : str 

---

//int
\`\`\`
numero = 10
print(type(numero))
\`\`\`
//SAÍDA : int \n
//Explicação: O valor da variável numero se trata de um inteiro

---

//float
\`\`\`
numero = 1.5
print(type(numero))
\`\`\`
//SAÍDA : float \n
//Explicação: O valor da variável numero se trata de um numero com casas decimais

---

//boolean
\`\`\`
verdadeiro_ou_falso = True
print(type(verdadeiro_ou_falso))
\`\`\`
//SAÍDA : bool \n
//Explicação: O valor da variável verdadeiro_ou_falso é um booleano, onde seu valor pode ser apenas True(verdadeiro) ou False (falso)


---

__TIPOS COMPOSTOS__

---

//list
 \`\`\`
lista_numerica = [1,2,3,4]
print(type(lista_numerica))
\`\`\`
//SAÍDA : list \n
//EXPLICAÇÃO : O valor da variável lista_numerica se trata de um array ou de uma lista ordenadaa e mutável, que armazena varios valores.

`;

export const objArrPy: string = `

//Objetos \n
Em Python quase tudo é objeto, até números e textos. Dá para usar métodos próprios deles:
 \`\`\`
texto = "python é legal"

print(texto.upper())     # PYTHON É LEGAL
print(texto.capitalize())  # Python é legal
print(texto.replace("legal", "incrível"))  # Python é incrível
\`\`\`

---

//Objetos reais 
 \`\`\`
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

p = Pessoa("Lucas", 19)
print(p.nome)   # Lucas
print(p.idade)  # 19print(p.nome)   # Lucas
print(p.idade)  # 19
\`\`\`
//Explicação: Aqui é criada uma classe chamada Pessoa, que possui um método construtor. No Python, esse construtor recebe o nome especial __init__. Ele espera dois valores: um nome e uma idade. O parâmetro self é usado para representar o próprio objeto que está sendo criado, permitindo armazenar esses valores dentro da instância. \n
//Ao criar uma instância dessa classe com o nome p, são passados os valores "Lucas" para o nome e 19 para a idade. Dessa forma, o objeto p passa a conter essas informações, e é possível acessar cada uma delas separadamente por meio de p.nome e p.idade.

---

//Listas (Arrays) \n
Listas são coleções ordenadas e mutáveis:
 \`\`\`
numeros = [10, 20, 30, 40]

print(numeros[0])      # 10 (acessa o indice 0 da lista, no caso o primeiro elemento dela)
print(len(numeros))    # 4 (acessa o numero de elementos totais)

numeros.append(50)     # adiciona no final
print(numeros)

numeros.remove(20)     # remove valor
print(numeros)
\`\`\`

//Percorrendo uma lista:
\`\`\`                 #imprime todos os valores da listas
for n in numeros:
    print(n) 
\`\`\`

//Operadores com listas:
\`\`\`  
 print(30 in numeros)       # True (verifica se determinado número existe na lista, retornando um boolean)
 print(100 not in numeros)  # True (verifica se determinado número NÃO existe na lista, retornando um boolean)           
\`\`\`

---

//Dicionários (Dicts) \n
Dicionários funcionam com chave e valor, como uma mini base de dados:
\`\`\`  
  aluno = {
    "nome": "Ana",
    "idade": 17,
    "curso": "ADS"
}

print(aluno["nome"])   # Ana (o valor do dict aluno na chave nome é Ana)
print(aluno["idade"])  # 17  (o valor do dict aluno na chave idade é 17)    
\`\`\`

`;

export const operatorsPy: string = `

##  Operadores Aritméticos

Usados para realizar cálculos matemáticos.
\`\`\`  

x = 10
y = 5

print(x + y)   # 15
print(x - y)   # 5
print(x * y)   # 50
print(x / y)   # 2.0
print(x // y)  # 2
print(x % y)   # 0
print(x ** y)  # 100000
\`\`\`

---

## Operadores de Atribuição

Usados para atribuir valores a variáveis.  
Também permitem modificar um valor já existente realizando operações como soma, subtração, multiplicação, divisão ou módulo de forma simplificada.
\`\`\`  
x = 10

x += 5   # x = 15
x -= 3   # x = 12
x *= 2   # x = 24
x /= 4   # x = 6.0
x %= 4   # x = 2.0

\`\`\`

---

## Operadores de Comparação

Realizar comparações entre dois valores, retornando um boolean, os operadores de comparação são :

== igualdade \n
!= diferença \n
> maior \n
< menor \n
>= maior ou igual \n
<= menor ou igual \n
\`\`\`  
x = 10
y = 5

print(x == y)   # False (x não é igual a y)
print(x != y)   # True (x é diferente de y)
print(x > y)    # True (x é maior que y)
print(x < y)    # False (x não é menor que y)
print(x >= y)   # True (x é maior ou igual a y)
print(x <= y)   # False (y não é menor e nem igual a y)

\`\`\`

---

## Operadores Lógicos

\`\`\`  
x = 10
y = 5

print(x > 5 and y < 10)   # True
print(x < 5 and y < 10)   # False
print(x < 5 or y < 10)    # True
print(not(x > y))         # False

\`\`\`

---

## Operadores de Associação

\`\`\`  
lista = [1, 2, 3, 4, 5]

print(3 in lista)       # True (3 está na lista)
print(10 in lista)      # False (10 não está na lista)
print(6 not in lista)   # True (verdadeiro. 6 não está na lista)
\`\`\`

---

## Operadores de Identidade

\`\`\`  
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)       # True (mesmo objeto na memória)
print(a is c)       # False (objetos diferentes)
print(a is not c)   # True

\`\`\`


`;

export const loopingsPy : string = `
\`\`\`  
for i in range(5):
    print(i)

\`\`\`
//SAÍDA:  \n
         0
         1
         2
         3
         4
         \n
// Explicação: "i" é a variável de controle do loop. \n
// A cada iteração, ela recebe o próximo valor gerado por range(), \n
// começando em 0 e incrementando de 1 em 1.

---

## Definindo de onde o looping começa
\`\`\`  
for i in range(1,5):
    print(i)

\`\`\`
//SAÍDA: \n
         1
         2
         3
         4
         5
//Explicação: aqui, definimos que o valor de i na primeira iteração é 1 \n
//o range é 5, então i percorre o looping 5 vezes iniciando em 1 e incrementando em 1 a cada volta

---

## Percorrendo lista
\`\`\`  
frutas = ["maçã", "banana", "uva"]

for fruta in frutas:
    print(fruta)

\`\`\`
//SAÍDA: \n
         maçã
         banana
         uva
//Explicação: fruta é a variável que irá percorrer a lista fruntas, em cada iteração ela recebe o valor contido no índice atual  \n
             -> indice 0 = maçã \n
             -> indice 1 = banana \n
             -> indice 2 = uva
`

export const ctrlEstructuresPy : string = `

## If / else
\`\`\`  
numero = 10

if numero > 5 :
    print("numero maior que 5")
else:
    print("numero menor ou igual a 5")

\`\`\`
//SAÍDA: numero maior que 5

---

## elif
\`\`\`  

numero = 10

if numero > 10 :
    print("numero maior que 10")
elif numero == 10 :
    print("numero igual a 10")
else:
    print("numero menor que 10")

\`\`\`
//SAÍDA: numero igual a 10
`
