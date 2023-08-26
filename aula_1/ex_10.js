/**Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).
 */

function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }

    return contador;
}

// Exemplos de uso
console.log(contarVogais("Olá, mundo!"));    // 3 (a, o, u)
console.log(contarVogais("Olá, muundo!"));    // 4 (a, o, u, u)

console.log(contarVogais("JavaScript"));     // 3 (a, i, a)
console.log(contarVogais("JavaScriipt"));     // 4 (a, i, i, a)

console.log(contarVogais("OpenAI GPT-3.5")); // 2 (e, o)
console.log(contarVogais("OpeenAI GPT-3.5")); // 3 (e, e, o)
