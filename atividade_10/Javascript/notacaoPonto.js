//criação de objeto
const pessoa = {
    nome : 'Edson',
    tel : '(15) 8989877',
    endereco : {
        rua : 'rua teste',
        numero : 1
    }
}
console.log(pessoa)
console.log(pessoa.nome, pessoa.endereco.rua)

pessoa.cpf = '222777888-90'
console.log(pessoa)

const objeto = {}
objeto.teste = 'demonstração'
console.log(objeto)