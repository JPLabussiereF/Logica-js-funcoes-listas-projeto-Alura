// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura, peso){
    let imc = peso / (altura*altura);
}
// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorialNumero(num) {
    if(num < 0){ 
        return -1;

    }else if (num == 0){
        return 1;

    }else{
        return (num * fatorialNumero(num - 1));
    }
  }
console.log(fatorialNumero(5));
// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dollarParaReal(valorDolar){
    let precoDolar = 4.80;
    let valorReal = valorDolar * precoDolar;
    return parseFloat(valorReal).toFixed(2);
}
console.log(dollarParaReal(3));
// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaEPerimetroRetangulo(alturaRetangulo, larguraRetangulo){
    let areaRetangulo = parseFloat(alturaRetangulo*larguraRetangulo).toFixed(2);
    let perimetroRetangulo = parseFloat(2*(alturaRetangulo + larguraRetangulo)).toFixed(2);
    let mensagemRetangulo = `\nA área do retangulo é ${areaRetangulo}. Já o seu perimetro é ${perimetroRetangulo}.`;
    return mensagemRetangulo
}
console.log(areaEPerimetroRetangulo(4.10, 5.20));
// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaEPerimetroCirculo(raio){
    let pi = 3.14;
    let areaCirculo = parseFloat(raio*(pi*pi)).toFixed(2);
    let perimetroCirculo = parseFloat(2*pi*raio).toFixed(2);
    let mensagemCirculo = `\nA área da sala circular é ${areaCirculo}. Já o seu perimetro é ${perimetroCirculo}.\n`;
    return mensagemCirculo;
}
console.log(areaEPerimetroCirculo(4));
// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuadaDeX(numTabuada){
    for(let i = 1; i <= 10; i++){
        let tabuada = numTabuada * i;
        console.log(`"${numTabuada}" vezes "${i}" é igual a "${tabuada}"`);
    }
}
tabuadaDeX(40);
