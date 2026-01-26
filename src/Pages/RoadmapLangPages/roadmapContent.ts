
//JavaScript
export const varAndConstsJS: string =  `
\`\`\`js
//Exemplo com let

let numero = 1; 
console.log(numero) //SAÍDA = 1 -> O valor atual da variável "numero" é 1
numero = 2;
console.log(numero) // SAÍDA = 2 -> Agora o valor da variavel "numero" é 2. Com let isso pode ser feito sem problemas!
\`\`\`
---
\`\`\`js
//Exemplo com const

const numero = 1; 
console.log(numero) //SAÍDA = 1 -> O valor da variável "numero" é 1
numero = 2;
console.log(numero)  //SAÍDA = TypeError: Assignment to constant variable.
//O valor de uma variável declarada com const não pode ser reatribuído
\`\`\`

---

\`\`\`js
//Exemplo com var
function testeVar(n){
  for (let i = 0; i < n; i++) {
    var num = 1;
  }
  return num;
}
console.log(testeVar(5)); //SAÍDA  = 1 =>  Mesmo que var tenha sido declarada dentro do bloco for (explicado mais adiante), ela ainda pode ter seu valor acessado fora dele.
\`\`\`

`

export const dataTypesCodeJS: string = `
//string
\`\`\`javascript
const fruta = "maçã";
console.log(typeof fruta);
\`\`\`

SAÍDA = string

---

\`\`\`javascript
const numero = 1;
console.log(typeof numero);
\`\`\`
SAÍDA = number

---
\`\`\`javascript
const verdadeiro = true;
console.log(typeof verdadeiro);
\`\`\`
SAÍDA = boolean

---

\`\`\`javascript
const array = [1,2,3];
console.log(typeof array);
\`\`\`
SAÍDA = Object
`;
//

//Python
export const varAndConstsPy: string =   `
\`\`\`Python
numero = 1; 
print(numero) 
//SAÍDA = 1 -> O valor atual da variável "numero" é 1


numero = 2;
print(numero) // SAÍDA = 2 -> Agora o valor da variavel "numero" é 2.
\`\`\`

`
export const dataTypesCodePy : string =  `
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

`


export const varAndConstJava: string =  `
\`\`\`Java
public class Exemplo {
    public static void main(String[] args) {
        int numero = 1; \n// Correto. O tipo da variável espera um número inteiro (sem casas decimais)
        int numero2 = "Olá mundo"; \n//Errado. O tipo da variável espera um número inteiro, mas seu valor é do tipo String(texto)
    }
}
\`\`\`

`
export const classJava: string = `
\`\`\`
public class Exemplo {
    public static void main(String[] args) {
       //código aqui.
    }
}
\`\`\`
// Dentro da classe "Exemplo", existe o método "main", que é o ponto de entrada da aplicação.

// O método é declarado como "public" porque precisa ser acessível pela JVM, mesmo estando fora da classe.

// Ele é "static" para que a JVM possa executá-lo sem precisar criar uma instância da classe.

// "void" significa que o método não retorna nenhum valor.

// Como parâmetro, o main recebe um array de Strings (String[] args), que representa argumentos passados pela linha de comando ao iniciar o programa.

`

const dataTypesCodeJava : string = `


---
Tipos primitivos

\`\`\`
byte idade = 25;
// O tipo byte é indicado para economizar memória ou trabalhar com dados de baixo nível
\`\`\`

---

`


type CodeBlock = {
  code: string
}

type RoadmapItem = {
  language: string;
  varAndConsts: CodeBlock,
  dataTypes: CodeBlock
}

export const roadmapContent : RoadmapItem[]  = [
    {language: "JavaScript",
         varAndConsts : {
            code: varAndConstsJS
    },
        dataTypes : {
           code : dataTypesCodeJS
        }
},
    {language:"Python",  varAndConsts: {
        code: varAndConstsPy
    },
       dataTypes : {
            code : dataTypesCodePy
        }},
    {language: "Java", varAndConsts : {
        code: varAndConstJava
    },
       dataTypes: {
        code : dataTypesCodeJava
        }
},
   
]