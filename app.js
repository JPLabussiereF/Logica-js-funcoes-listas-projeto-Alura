let listaDeNumerosSorteados = [];
let limiteDeNumeros = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1;
console.log(numeroAleatorio);

function exibirNomeNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial(){
    exibirNomeNaTela("h1", "Jogo do número secreto");
    exibirNomeNaTela("p", "Chute um número de 1 a 10");
}
exibirMensagemInicial();
// O código abaixo é a mesma coisa do código acima. Mas o código acima está em boas praticas.
// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";
// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Chute um número de 1 a 10";

function verificarChute(){
    let chute = document.querySelector("input").value;
    

    if( chute == numeroAleatorio){
        let palavraTentativa = tentativa > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto, com ${tentativa} ${palavraTentativa}!`;

        exibirNomeNaTela("h1", "Você Venceu!");
        exibirNomeNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else if (chute > numeroAleatorio){
        exibirNomeNaTela("p", "O número secreto é menor!");
        tentativa++;
        limparCampo();
    }else{
        exibirNomeNaTela("p", "O número secreto é maior!");
        tentativa++;
        limparCampo();
    }
    responsiveVoice.speak(mensagemTentativas, "Brazilian Portuguese Female", {rate:1.2});
}

function gerarNumeroAleatorio(){
    let numeroEscolohdo = parseInt(Math.random() * limiteDeNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == limiteDeNumeros){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolohdo)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolohdo);
        console.log(listaDeNumerosSorteados);
        return numeroEscolohdo;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";

}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}