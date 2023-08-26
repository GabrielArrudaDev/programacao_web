/**aça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
Por exemplo:

A variável nome possui o conteúdo “Edson Martin Feitosa”.

Deve mostrar edson.feitosa@facens.br */

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function construirEmail(nomeCompleto) {
    const nomeSemAcentos = removerAcentos(nomeCompleto);
    const partesNome = nomeSemAcentos.split(" ");
    const primeiroNome = partesNome[0].toLowerCase();
    const ultimoNome = partesNome[partesNome.length - 1].toLowerCase();

    const email = `${primeiroNome}.${ultimoNome}@facens.br`;
    return email;
}

// Exemplo de uso
const nomeCompleto = "Ana Júlia Corrêa Salomão";
const email = construirEmail(nomeCompleto);

console.log("Endereço de e-mail:", email);

