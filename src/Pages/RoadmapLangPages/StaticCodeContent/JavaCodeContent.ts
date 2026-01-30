
export const varAndConstsJava: string =  `
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

export const dataTypesCodeJava : string = `


---
Tipos primitivos

\`\`\`
byte idade = 25;
// O tipo byte é indicado para economizar memória ou trabalhar com dados de baixo nível
\`\`\`

---

`
