//JavaScript
export const varAndConstsJS: string = `
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

`;

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

export const objArrJS: string = `
//Objeto
\`\`\`
const obj = {nome: 'João',
            idade: 15}
console.log(Object.keys(obj)) 
\`\`\`
//SAÍDA = ['nome','idade']
//EXPLICAÇÃO = o método Object.keys() retorna as chaves do objeto __obj__  : nome e idade, em formato de string

//Objeto
\`\`\`
const obj = {nome: 'João',
            idade: 15}
console.log(Object.values(obj)) 
\`\`\`
//SAÍDA = ['João',15] \n
//EXPLICAÇÃO = o método Object.values() retorna os valores das chaves do objeto __obj__  : joão e 15, mantendo o tipo original
//Objeto
\`\`\`
const obj = {nome: 'João',
            idade: 15}
console.log(Object.entries(obj)) 
\`\`\`
//SAÍDA = [
 ['nome','João'],
 ['idade',20]
] \n
//EXPLICAÇÃO = O método Object.entries() retorna um array cujos elementos são arrays internos. Cada sub-array contém [chave, valor] do objeto original. A chave é sempre convertida para string, enquanto o valor mantém seu tipo original.

---

\`\`\`
//Arrays
const numeros = [1,2,3];
\`\`\`
// Este é um array que armazena apenas numeros inteiros.
\`\`\`
return numeros[0];
\`\`\`
//Saída = 1

// Esse comando acessa o primeiro elemento do array numeros.
Em estruturas de array, a contagem das posições normalmente começa em 0, e não em 1.

Portanto:
\`\`\`
numeros[0] → 1ª posição -> numeros[0] = 1
numeros[1] → 2ª posição -> numeros[1] = 2
numeros[2] → 3ª posição -> numeros[2] = 3
\`\`\`
`;

export const operatorsJS: string = `
### Operadores Aritméticos
São usados para realizar cálculos matemáticos.

\`\`\`js
const a = 10;
const b = 3;

a + b; // 13 (soma)
a - b; // 7  (subtração)
a * b; // 30 (multiplicação)
a / b; // 3.33 (divisão)
a % b; // 1  (resto da divisão)
\`\`\`

---

### Operadores de Atribuição
Servem para atribuir ou atualizar valores em variáveis.
\`\`\`js
let valor = 10;

valor = 20;   // atribuição simples
valor += 5;   // valor = valor + 5
valor -= 3;   // valor = valor - 3
valor *= 2;   // valor = valor * 2
valor /= 4;   // valor = valor / 4
\`\`\`

---

### Operadores de Comparação
Comparam valores e retornam true ou false.
\`\`\`js
5 == '5';   // true  (compara apenas o valor)
5 === '5';  // false (compara valor e tipo)
5 != 3;     // true
5 !== '5';  // true
10 > 5;     // true
10 <= 5;    // false
\`\`\`

---

### Operadores Lógicos
Usados para combinar ou inverter condições.
\`\`\`js
const idade = 20;
const temCarteira = true;

idade >= 18 && temCarteira; // true
idade < 18 || temCarteira;  // true
!temCarteira;             
\`\`\`

---

### Operador Ternário
Uma forma curta de escrever uma condição if/else.
\`\`\`js
   const idade = 16;

const resultado = idade >= 18 
  ? 'Maior de idade' 
  : 'Menor de idade'      
\`\`\`

---

### Operador typeof
Retorna o tipo de um valor.
Uma forma curta de escrever uma condição if/else.
\`\`\`js
typeof 10;          // "number"
typeof 'texto';     // "string"
typeof true;        // "boolean"
typeof {};          // "object"
typeof undefined;   // "undefined"   

\`\`\`

---

### Operador instanceof
Verifica se um objeto pertence a uma determinada classe.
\`\`\`js
  class Usuario {}

const user = new Usuario();

user instanceof Usuario; // true
user instanceof Object;  // true
\`\`\`

`;
