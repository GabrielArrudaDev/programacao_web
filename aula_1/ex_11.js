/* Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'. */

function validarEmail(email) {
    const partes = email.split('@');

    if (partes.length !== 2) {
        return false;
    }

    const dominioParte = partes[1].split('.');
    if (dominioParte.length < 2) {
        return false;
    }

    return true;
}

// Exemplos de uso
console.log(validarEmail("User@example.com"));    // true (válido)
console.log(validarEmail("Invalid@domain"));      // false (faltando ponto após @)
console.log(validarEmail("WithoutAtSign.com"));         // false (faltando @)
console.log(validarEmail("At@Sign.After@Point")); // false (mais de um @)
