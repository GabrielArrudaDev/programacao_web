const lista = [1, 2.2, 3, 6, 8, 10]
console.log(lista[1])
lista[2] = 12
console.log(lista)
lista[4] = 'texto'
console.log(lista)
lista[10] = 'edson'
console.log(lista)

//forma de colocar e retirar o valor da lista
//no final
lista.pop()
console.log(lista)
lista.push(9)
console.log(lista)

//no começo
lista.unshift('primeiro')
console.log(lista)

lista.shift('primeiro')
console.log(lista)
