/**Faça uma função que mostre o dobro do número passado. Caso o número seja menor ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”.
 */

function mostrarDobro(numero) {
    if (numero <= 0) {
        return "Só é aceito números positivos maiores que zero.";
    } else {
        return numero * 2;
    }
}

// Exemplos de uso
console.log(mostrarDobro(5));   // 10 (dobra de 5)
console.log(mostrarDobro(2));  // Mensagem de erro
console.log(mostrarDobro(4));   // Mensagem de erro

