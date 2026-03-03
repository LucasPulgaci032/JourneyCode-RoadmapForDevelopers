export const varAndConstsJava: string = `
\`\`\`Java
public class Exemplo {
    public static void main(String[] args) {
        int numero = 1; \n// Correto. O tipo da variável espera um número inteiro (sem casas decimais)
        int numero2 = "Olá mundo"; \n//Errado. O tipo da variável espera um número inteiro, mas seu valor é do tipo String(texto)
    }
}
\`\`\`

`;
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

`;

export const dataTypesCodeJava: string = `

__tipos primitivos__:

  # BYTE 
  - tipo: byte

    exemplo: "byte idade = 25;"

    descricao: "Indicado para economizar memória ou trabalhar com dados de baixo nível"

  ---

  # SHORT
  - tipo: short

    exemplo: "short ano = 2025;"

    descricao: "Armazena números inteiros um pouco maiores que o byte"

  ---

  # INT
  - tipo: int

    exemplo: "int quantidade = 1500;"

    descricao: "Tipo mais comum para números inteiros no dia a dia"

  ---

  # LONG
  - tipo: long

    exemplo: "long populacao = 8000000000L;"

    descricao: "Usado para números inteiros muito grandes"

  ---

  # FLOAT
  - tipo: float

    exemplo: "float altura = 1.75f;"

    descricao: "Armazena números decimais com menor precisão"

  ---

  # DOUBLE
  - tipo: double

    exemplo: "double preco = 99.90;"

    descricao: "Padrão para números decimais com maior precisão"

  ---

  #  CHAR 
  - tipo: char

    exemplo: "char letra = 'A';"

    descricao: "Armazena um único caractere"

  ---

  #  BOOLEAN
  - tipo: boolean

    exemplo: "boolean ativo = true;"

    descricao: "Armazena apenas dois valores: true ou false"



`;

export const objArrJava: string = `
## __OBJETOS__

  - categoria: objetos

    exemplo: "Pessoa p = new Pessoa();"

    descricao: "Representam entidades reais dentro do programa, criadas a partir de uma classe"

    ---

## __CLASSES__

  - categoria: classes

    exemplo: "class Pessoa { String nome; int idade; }"

    descricao: "Funcionam como moldes que definem como os objetos serão criados"

    ---

## __ATRIBUTOS__

  - categoria: atributos

    exemplo: "p.nome = \"Lucas\";"

    descricao: "São as características ou dados que cada objeto possui"

    ---

## __MÉTODOS__

  - categoria: metodos

    exemplo: "void falar() { System.out.println(nome); }"

    descricao: "Representam ações ou comportamentos que um objeto pode executar"

    ---

## __ARRAYS__

  - categoria: arrays

    exemplo: "int[] numeros = new int[5];"

    descricao: "Estruturas que armazenam vários valores do mesmo tipo de forma organizada"

    ---

## __ÍNDICES__

  - categoria: indices

    exemplo: "numeros[0] = 10;"

    descricao: "Cada posição de um array é acessada por um índice que começa no valor zero"

    ---

## __ARRAYS DE OBJETOS__

  - categoria: arrays_de_objetos

    exemplo: "Pessoa[] pessoas = new Pessoa[3];"

    descricao: "Permitem armazenar vários objetos do mesmo tipo dentro de uma única estrutura"

    ---

## __RELAÇÃO ENTRE ELES__

  - categoria: relacao

    exemplo: "pessoas[0] = new Pessoa();"

    descricao: "Objetos representam entidades individuais e arrays organizam várias delas em conjunto"

`;

export const operatorsJava: string = `


 
  ## __ARITMÉTICOS__

  - categoria: aritmeticos

    exemplo: "int resultado = 10 + 5;"

    descricao: "Usados para realizar cálculos matemáticos como soma, subtração, multiplicação e divisão"

    ---

  ## __ATRIBUIÇÃO__
  - categoria: atribuicao

    exemplo: "int x = 10;  x += 5;"

    descricao: "Servem para atribuir valores às variáveis ou modificar valores já existentes"

    ---

  ## __COMPARAÇÃO__ 
  - categoria: comparacao

    exemplo: "boolean teste = 10 > 5;"

    descricao: "Utilizados para comparar valores e retornar verdadeiro ou falso"
  
    ---

  ## __LÓGICOS__
  - categoria: logicos

    exemplo: "boolean resultado = (10 > 5) && (5 < 8);"

    descricao: "Permitem combinar ou inverter condições lógicas"

    ---


  ## __UNÁRIOS__
  - categoria: unarios

    exemplo: "int x = 10;  x++;"

    descricao: "Atuam sobre um único valor, como incremento, decremento e negação"

    ---

  ## __BITWISE__
  - categoria: bitwise

    exemplo: "int resultado = 6 & 3;"

    descricao: "Operam diretamente sobre bits em nível binário"

   ---

  ## __TERNÁRIO__
  - categoria: ternario

    exemplo: "String resposta = (idade >= 18) ? \"Maior\" : \"Menor\";"

    descricao: "Permite criar decisões simples em uma única linha"

`;
