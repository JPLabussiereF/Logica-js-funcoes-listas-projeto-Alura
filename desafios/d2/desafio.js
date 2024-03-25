// Criar uma função que exibe "Olá, mundo!" no console.
function boasVindas(){
    console.log("Olá, mundo!");
}
boasVindas();
// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function boasVindasPessoa(){
    let nome = prompt("Digite o seu nome");
    alert(`Olá, ${nome}!`);
    console.log(`Olá, ${nome}!`);
}
boasVindasPessoa();
// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroDeX(){
    let numero = parseInt(prompt("Digite um número"));
    let dobro = numero * 2;
    alert(`O dobro do número ${numero} é ${dobro}!`);
    console.log(`O dobro do número ${numero} é ${dobro}!`);
}
dobroDeX();
// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDe3Numeros(){
    let numero1 = parseFloat(prompt("Digite o 1° número"));
    let numero2 = parseFloat(prompt("Digite o 2° número"));
    let numero3 = parseFloat(prompt("Digite o 3° número"));
    let media = (numero1 + numero2 + numero3) / 3;
    alert(`A média dos números ${numero1}, ${numero2} e ${numero3} é ${media}!`);
    console.log(`A média dos números ${numero1}, ${numero2} e ${numero3} é ${media}!`);
}
mediaDe3Numeros()
// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(){
    let num1 = parseInt(prompt("Digite o 1° número"));
    let num2 = parseInt(prompt("Digite o 2° número"));
    if (num1 > num2){
        console.log(`O maior número é ${num1}.`);
    }else{
        console.log(`O maior número é ${num2}.`);
    }
}
maiorNumero()
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadradoNumero(){
    let num = parseInt(prompt("Digite um número"));
    let quadrado = num * num;
    alert(`O quadrado do número ${num} é ${quadrado}!`);
    console.log(`O quadrado do número ${num} é ${quadrado}!`);
}
quadradoNumero();