//função nomeada
function soma(a, b){
    return a + b
}
console.log(soma(2, 4))

//função anônima declarado numa variável

const subtracao = function (a, b){
    return a - b
}
console.log(subtracao(4, '6'))

//arrow function

const divisao = (a, b) => {
    if (b == 0) {
        return 'Impossível dividir por zero.'
    }
    else{
        return a / b
    }
}
console.log(divisao(6, 0))

const multiplicacao = (a, b) => a * b

console.log(multiplicacao(3, 6))

const calcular = (a, b, operacao) => operacao(a, b)

console.log('Cálculo: '+calcular(4, 2, divisao))

//função se comporta como classe
function Pessoa(){}

const p = new Pessoa()
p.nome = 'Edson'
console.log(p)

//função e classe no final das contas é a mesma coisa
//no javascript
class Aluno{

}
const a = new Aluno()