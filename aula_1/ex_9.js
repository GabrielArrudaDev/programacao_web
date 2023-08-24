/**Escreva uma função que receba uma string como argumento e retorne a string invertida.
 */

function inverterString(texto) {
    return texto.split('').reverse().join('');
}

// Exemplos de uso
console.log(inverterString("Olá, mundo!"));  // !odnum ,álO