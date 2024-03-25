// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarConsole(){
    console.log("O botão foi clicado");
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verificarAlert(){
    console.log("Eu amo JS");
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificarPrompt(){
    let cidadeBrasil; 
    cidadeBrasil = prompt("Fale o nome de uma cidade do Brasil");
    alert(`Estive em ${cidadeBrasil} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function verificarSoma(){
    let num1;
    let num2;
    let soma;
    num1 = parseInt(prompt("Digite o 1° número para soma"));
    num2 = parseInt(prompt("Digite o 2° número para soma"));
    soma = num1 + num2;
    alert(`A soma de ${num1} mais ${num2}, é igual a ${soma}.`);
}
