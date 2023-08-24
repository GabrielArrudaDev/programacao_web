function formatarDinheiro(valor) {
    const valorFormatado = parseFloat(valor).toFixed(2); // Limita a 2 casas decimais
    return `R$${valorFormatado.replace('.', ',')}`; // Substitui o ponto por vírgula
}

// Exemplo de uso
console.log(formatarDinheiro(0.30000000000000004));  // R$0,30
