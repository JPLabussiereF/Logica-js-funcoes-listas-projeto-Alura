let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);

function exibirNomeNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNomeNaTela("h1", "Jogo do número secreto");
exibirNomeNaTela("p", "Chute um número de 1 a 10");

// O código abaixo é a mesma coisa do código acima. Mas o código acima está em boas praticas.
// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";
// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Chute um número de 1 a 10";

function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(chute == numeroAleatorio);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}