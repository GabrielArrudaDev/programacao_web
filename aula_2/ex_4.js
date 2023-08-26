/**rie uma função que verifica se um número inteiro passado como parâmetro é
divisível por 3 e retorne true ou false*/

function ehDivisivelPor3(numero) {
    return numero % 3 === 0;
}

// Exemplos de uso
console.log(ehDivisivelPor3(9));   // true (9 é divisível por 3)
console.log(ehDivisivelPor3(10));  // false (10 não é divisível por 3)
console.log(ehDivisivelPor3(27));  // true (27 é divisível por 3)

