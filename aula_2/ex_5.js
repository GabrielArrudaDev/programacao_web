/**
screva uma função que recebe um vetor de números inteiros e mostre como
resultado qual é o menor e qual é o maior número.
 */

function encontrarMenorMaior(vetor) {
    if (vetor.length === 0) {
        return "O vetor está vazio.";
    }

    let menor = vetor[0];
    let maior = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    return { menor, maior };
}

// Exemplo de uso
const numeros = [10, 5, 23, -4, 7, 0];
const resultado = encontrarMenorMaior(numeros);

console.log("Menor número:", resultado.menor);
console.log("Maior número:", resultado.maior);
