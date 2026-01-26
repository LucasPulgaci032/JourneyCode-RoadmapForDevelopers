export const inicialDescription: string = `Aqui você, estudante que está iniciando do zero irá conhecer os conceitos básicos da programação, envolvendo estrutura de dados, algoritmos e sintaxe, conceitos muito importantes que devem ser dominados antes de escolher a linguagem ideal para a carreira que se deseja seguir. \n
Aqui, tudo será explicado em pseudocódigo (Portugol), boa sorte e avante!

`


export const logicAndAlgoritms: string = `
A lógica e os algoritmos são a base de toda programação. 
Um algoritmo é um conjunto de instruções que o computador deve seguir para realizar uma tarefa específica. 
Essas instruções precisam ser detalhadas, claras e livres de erros, pois a máquina executa exatamente o que está escrito, sem interpretar intenções humanas.

A sintaxe, por sua vez, é a forma como essas instruções são escritas em uma linguagem de programação. 
Cada linguagem possui sua própria sintaxe, mas a lógica por trás delas é muito parecida. 
O que muda é o ecossistema e o tipo de tarefa para o qual cada linguagem é mais adequada — e é aí que entra a escolha da linguagem certa para cada projeto.
`
export const varAndConsts: string = ` Variáveis são espaços na memória do computador que armazenam informações. Em programação, elas recebem valores que podem mudar durante a execução do programa, como números, textos ou valores lógicos (verdadeiro/falso). As variáveis funcionam como “caixas” que guardam dados para que o programa possa usá-los e manipulá-los quando necessário.`


export const varAndConstCode: string = `
\`\`\`portugol
inteiro nome_da_variavel1 = 1
texto nome_da_variavel2 = "olá mundo"
\`\`\`
\n
// Perceba que nome_da_variavel1 guarda um valor do tipo número, enquanto nome_da_variavel2 guarda um valor do tipo texto, onde seu conteúdo é envolvido por aspas.
`;

export const dataTypes: string[] = [`
Tipagem na programação é a forma como uma linguagem define e controla os tipos de dados que variáveis e funções podem armazenar ou manipular.
Ela é importante porque garante segurança, consistência e previsibilidade no código, além de ajudar a evitar erros e facilitar a manutenção do software.`,

`As linguagens podem ter tipagem estática (tipos definidos em tempo de compilação) ou dinâmica (tipos definidos em tempo de execução), e podem ser fortes (regras rigorosas de tipo) ou fracas (conversões automáticas entre tipos).
`,
`
Em resumo, a tipagem organiza os dados e protege o programa contra comportamentos inesperados.
Na ilustração abaixo, serão apresentados 4 tipos, porém existem outros.
`]

export const dataTypesCode: string = `
### String
\`\`\`java
String nome = "João";
\`\`\`
// Atribui valores do tipo texto para as variáveis, onde seu valor é envolvido por aspas

---

### int
\`\`\`java
int numero = 1;
\`\`\`
// Atribui valores numéricos inteiros (sem casas decimais)

---

### float

\`\`\`java
float numero_decimal = 1.10;
\`\`\`
// Usado para variáveis que armazenam números decimais.
 Chamado de "ponto flutuante" porque representa valores com casas decimais,
 geralmente usando "." como separador.

---

### boolean
\`\`\`java
boolean verdadeiro = true;
boolean falso = false;
\`\`\`
// Boolean é um tipo usado em variáveis que representa valores lógicos, podendo ser true (verdadeiro) ou false (falso). Ele é amplamente utilizado em condicionais, loops e flags de controle, permitindo que programas tomem decisões e controlem o fluxo de execução com base em condições. 
`;

export const operators: string[] = [`Operadores são símbolos que determinam a operação realizada entre valores. Dependendo do tipo do operador, o resultado pode ser um número, um booleano, uma string ou outro valor.`,
    `---`,
`__Operadores aritméticos:__ `,
 `(+) -> soma - realiza a soma entre dois valores`,
` (-) -> subtração -  realiza a subtração entre dois valores`, 
` (*) -> multiplicação -  realiza a multiplicação entre dois valores`, 
` (/) -> divisão -  realiza a divisão entre dois valores`, 
` (%) -> módulo - retorna o modulo de uma divisão`,
`---`,
`__Operadores de comparação:__`,
` (==) -> verifica igualdade`, 
`(!=) -> desigualdade`,
` (>) -> verifica se um valor é maior que outro`,
` (<) -> verifica se um valor é menor que outro`,
` (>=) -> verifica se é MAIOR ou IGUAL`, 
` (<=)-> verifica se é MENOR ou IGUAL`,
 `(&&) -> AND - precisa que duas verificações sejam verdadeiras para retornar true, caso uma não seja, retorna false`,
 ` (||) -> OR - precisa que apenas uma das duas verificações seja verdadeira para retornar true`,

]

export const operatorsCode: string = `

Operadores aritmeticos
\`\`\`
//soma
int numero1 = 1;
int numero2 = 2;
int soma = numero1 + numero2;
escreva(soma);
\`\`\`
//Saída = 3

---

\`\`\`
//subtração
int numero1 = 5;
int numero2 = 1;
int subtracao = numero1 - numero2;
escreva(subtracao);
\`\`\`
//Saída = 4

---

\`\`\`
//multiplicação
int numero1 = 2;
int numero2 = 3;
int multiplicacao = numero1 * numero2;
escreva(multiplicacao);
\`\`\`
//Saída = 6

---

\`\`\`
//divisão
int numero1 = 4;
int numero2 = 2;
int divisao = numero1 / numero2;
escreva(divisao);
\`\`\`
//Saída = 2

--- 
Operadores de comparação
\`\`\`
//igualdade
int numero1 = 1;
int numero2 = 1;
numero1 == numero2;
\`\`\`
//Saída = __true__ -> "--" pergunta se os valores são iguais


\`\`\`
int numero1 = 1;
int numero2 = 2;
retorne numero1 == numero2
\`\`\`
//Saída = __false__ -> os valores são diferentes

---

\`\`\`
//diferença
int numero1 = 1;
int numero2 = 2;
retorne numero1 != numero2;

\`\`\`
//Saída = __true__ -> "!=" pergunta se os valores são diferentes



\`\`\`
int numero1 = 1;
int numero2 = 1;
retorne numero1 != numero2;
\`\`\`
//Saída = __false__ -> os valores são iguais

---

\`\`\`
//Tamanho (maior)
int numero1 = 10;
int numero2 = 9;
retorne numero1 > numero2; 
\`\`\`
//Saída = __true__ -> o valor de "numero1" é maior que o de "numero2"
\`\`\`

int numero1 = 9;
int numero2 = 10;
retorne numero1 > numero2 ;
\`\`\`
//Saída = __false__ -> o valor de "numero1" é menor que o de "numero2"


---

\`\`\`
//Tamanho (menor)
int numero1 = 1;
int numero2 = 2;
retorne numero1 < numero2; 
\`\`\`
//Saída = __true__ -> o valor de "numero1" é menor que o de "numero2"

---

\`\`\`

int numero1 = 1;
int numero2 = 0;
retorne numero1 < numero2 ;
\`\`\`
//Saída = __false__ -> o valor de "numero1" não é menor que o de "numero2"

---

\`\`\`
//Maior ou igual
int numero1 = 1;
int numero2 = 1;
retorne numero1 >= numero2 ;
\`\`\`
// Saída = __true__ "numero1" é maior ou igual a "numero2"

---

\`\`\`
//Menor ou igual
int numero1 = 1;
int numero2 = 2;
retorne numero1 <= numero2 ;
\`\`\`
//Saída = __true__ "numero1" é mnor ou igual a "numero2"

---

\`\`\`
//AND (&&)
int numero1 = 1;
int numero2 = 2;
retorne numero1 > 0  && numero2 > 0
\`\`\`
//Saída = __true__ Para que a saída seja true todas as condições devem retornar __true__ \n
//Nesse caso, tanto numero1 quanto numero2 são maiores que 0

---

\`\`\`
//OR (||)
int numero1 = 0;
int numero2 = 2;
retorne numero1 > 0  || numero2 > 0
\`\`\`
//Saída = __true__ para que a saída seja true, alguma condição deve retornar __true__ \n
//Nesse caso, retorna __true__ mesmo que numero1 não seja maior que 0 (__false__) porque numero2 é maior que 0 (__true__)
`

export const arrayDescription : string[] = [`
Em programação uma lista (conhecida como array) é uma estrutura de dados usada para armazenar vários valores em uma única variável, organizados em uma lista ordenada.`,`
Cada valor dentro do array ocupa uma posição, chamada de índice, que normalmente começa em 0. Isso permite acessar elementos de forma rápida e direta.
`]
export const arrayCode : string = `
\`\`\`
//Arrays
inteiro numeros = [1,2,3];
\`\`\`
// Este é um array que armazena apenas numeros inteiros.
\`\`\`
retorne numeros[0];
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
`
export const arrayThirdContent : string = `__NOTA__ : na maioria das linguagens de programação, os arrays possuem métodos que auxiliam a manipular seus indices e valores, como mapear, filtrar, cortar, etc.`


export const loopings : string[] = [`Em programação, looping (ou laço de repetição) é uma estrutura utilizada para executar um bloco de código várias vezes, de forma automática. Ele é essencial para automatizar tarefas repetitivas, percorrer listas, processar dados e construir algoritmos mais eficientes.`,
`A ideia básica é simples:
enquanto uma condição for verdadeira, __o código dentro do loop será executado repetidamente.__`,
`Sem loops, muitas operações exigiriam dezenas ou centenas de linhas repetidas manualmente. Com loops, isso se resume a poucas instruções.`,

`Em programação existem varios tipos de loopings :`,

`__Para (for)__ : é utilizado quando sabemos exatamente quantas vezes o bloco de código precisa ser repetido. Ele controla a repetição por meio de uma variável contadora, que é inicializada, testada e incrementada a cada ciclo. Esse tipo de laço é ideal para percorrer sequências numéricas ou estruturas com tamanho definido. `,

`__Enquanto (while)__ :  executa repetidamente um bloco de instruções enquanto uma condição for verdadeira. Ele é mais adequado para situações em que não sabemos previamente quantas vezes o código deverá se repetir. A condição é avaliada antes de cada execução, o que significa que, se ela começar falsa, o bloco pode nem rodar.`,

`__Para ... de ...__ : Itera sobre cada elemento da lista aplicando o que foi escrito em seu escopo`
]

export const loopingsCode: string = `

// Looping para (for)
\`\`\`
para i de 1 até 5 faça
    escreva(i)
fimpara
\`\`\`
// Saída:
\`\`\`
 1
 2
 3
 4
 5
\`\`\`
// Explicação:

// Neste laço, a variável i inicia com o valor 1 e é incrementada em 1 a cada repetição.

// O loop continua até que i alcance o valor 5.

// A cada iteração, o valor atual de i é impresso na tela.

---

// Looping enquanto (while)

\`\`\`
inteiro i = 1;
enquanto i ≤ 5 faça
    escreva(i)
    i ← i + 1
fimenquanto
\`\`\`
// Saída:
\`\`\`
  1
  2
  3
  4
  5
\`\`\`
// Explicação:

// Neste laço, a variável i começa com o valor 1.

// O bloco dentro do "enquanto" será executado repetidamente

// enquanto a condição (i ≤ 5) for verdadeira.

// Em cada repetição, i é impresso e depois incrementado em 1.

// Quando i se torna maior que 5, a condição deixa de ser verdadeira

// e o loop é finalizado.

---

//Looping para ... de ...
\`\`\`
inteiro[] lista = [1,2,3,4]
para cada elemento de lista {
    escreva(elemento * 2)
}
\`\`\` 
//Saída:
\`\`\`
2
4
6
8 
\`\`\`
// Explicação:

// Nesse laço uma logica é criada para alterar __CADA__ elemento do array, no caso multiplicar cada um por 2.
`

export const conditionalDescription : string[] = [`Estruturas de decisão em programação são fundamentais, pois determinam qual caminho o código deve seguir com base em uma condição. Internamente, essas estruturas se apoiam em valores booleanos para realizar as verificações.`, 
    `Quando a condição avaliada resulta em verdadeiro (__true__), o programa segue um determinado fluxo denominado __if__; caso resulte em falso (__false__), um fluxo alternativo denominado como __else__ é executado.`,
    `Além do uso do __if__ e __else__, existe a estrutura __else if__, utilizada quando é necessário avaliar mais de uma condição em sequência. Nessa estrutura, as condições são verificadas uma a uma, na ordem em que foram declaradas. Assim que uma condição resulta em verdadeiro (__true__), o bloco correspondente é executado e as demais verificações são ignoradas. Caso nenhuma condição seja atendida, o fluxo segue para o senão (__false__), se ele existir.`,
`Nos exemplos a seguir, as estruturas __if__ , __else__ e __else if__ serão ilustradas com __se__, __se não__ e __se não se__ respectivamente. `
]

export const conditionalCode : string = `
//se (if)
\`\`\`
inteiro numero = 1

se (numero > 0) entao
   escreva("numero maior que 0")
senao
   escreva("numero menor ou igual a 0")


\`\`\`
//SAÍDA : numero maior que 0 \n
//Explicação : o valor da variável numero é 1, portanto numero é maior que 0, logo, a condição "se" é satisfeita e a execução do código segue por este fluxo.

---

//se não (else)
\`\`\`
inteiro numero = 0

se (numero > 0) entao
   escreva("numero maior que 0")
senao
   escreva("numero menor ou igual a 0")

\`\`\`
//SAÍDA : numero menor ou igual a 0 \n
//Explicação : o valor da variável numero é 0, portanto não satisfaz a condição "se" , ja que esta condição é satisfeita apenas se a variável numero for maior que 0, logo, cai na condição "se não".

---

//se não se (else if)
\`\`\`
inteiro numero = 0

se (numero > 0) entao
   escreva("numero maior que 0")
senao se (numero == 0) entao
   escreva("numero igual a 0")
senao
   escreva("numero menor que 0")

\`\`\`
//SAÍDA : numero igual a 0  \n
//Explicação : o valor da variável numero é 0, portanto não satisfaz a condição "se" , ja que esta condição é satisfeita apenas se a variável numero for maior que 0, logo, cai na condição "senao se", pelo seu valor ser exatamente igual a 0, descartando a proxima condição "senao", porque "senao se" ja foi satisfeita.

`

export const functionDescription : string[] = [
   `Em programação, uma função é um bloco de código independente que realiza uma tarefa específica e pode ser reutilizado diversas vezes ao longo de um programa. Ela permite organizar o código de forma modular, facilitando a manutenção, o entendimento e a depuração do software. Ao invés de escrever o mesmo conjunto de instruções repetidamente, o programador pode criar uma função uma única vez e chamá-la sempre que necessário, passando dados de entrada chamados parâmetros e, opcionalmente, recebendo um retorno como resultado da execução.`,
   `Uma função geralmente possui três partes principais: o nome da função, que identifica de forma única o bloco de código; os parâmetros, que são valores fornecidos para que a função realize seu trabalho; e o corpo da função, que contém as instruções que definem a operação desejada. Em muitas linguagens, como Python, Java e C, também é comum especificar o tipo de retorno, indicando que tipo de dado será fornecido ao final da execução. Por exemplo, uma função que soma dois números pode receber dois valores numéricos como parâmetros e retornar outro valor numérico correspondente à soma.`,
   `Além de melhorar a organização do código, funções promovem o reaproveitamento e reduzem a ocorrência de erros, uma vez que a lógica é escrita apenas uma vez e testada de forma isolada. Elas também permitem que programas complexos sejam divididos em unidades menores e mais compreensíveis, seguindo o princípio de abstração da programação. Com o uso adequado de funções, é possível criar códigos mais limpos, legíveis e escaláveis, o que é essencial em projetos de software de qualquer tamanho.`
]

export const functionCode : string = `
\`\`\`
funcao somar(int a, int b):
   retorne a + b;

escreva(somar(2,3))
\`\`\`
//SAÍDA : 5 \n
//Explicação : a função recebe o nome de __somar__ (por convenção, o ideal é sempre nomear uma função com referência na sua funcionalidade), além de receber 2 __parâmetros__ (um inteiro denominado "__a__" um inteiro denominado "__b__"). \n
// Por fim, ela retorna a soma dos dois parâmetros (a + b).
\n
// "__escreva(somar(2,3))__" é a impressão do retorno da função no console, onde o parâmetro __a__ nesse caso recebe 2 e o parâmetro __b__, 3
`


