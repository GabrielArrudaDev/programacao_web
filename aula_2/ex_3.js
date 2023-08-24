/**
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
e tempo de aplicação. A primeira função retornará o montante da aplicação
financeira sob o regime de juros simples e a segunda retornará o valor da
aplicação sob o regime de juros compostos.
 */

function jurosSimples(capital, taxa, tempo) {
    const montante = capital * (1 + (taxa / 100) * tempo);
    return montante;
}
function jurosCompostos(capital, taxa, tempo) {
    const montante = capital * Math.pow(1 + taxa / 100, tempo);
    return montante;
}
const capital = 1000; // Valor inicial
const taxa = 5;       // Taxa de juros em porcentagem
const tempo = 3;      // Tempo de aplicação em anos

const montanteJurosSimples = jurosSimples(capital, taxa, tempo);
const montanteJurosCompostos = jurosCompostos(capital, taxa, tempo);

console.log("Montante com juros simples:", montanteJurosSimples);
console.log("Montante com juros compostos:", montanteJurosCompostos);
