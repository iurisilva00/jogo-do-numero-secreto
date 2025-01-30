// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10: ';
let listaNumeros = []
let numerLimite = 10
let numerSecreto = gerarNumeroAleatorio();
console.log(numerSecreto)
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rete:1.2});
}
function exibirTexto(){
    exibirTextoNaTela('h1','Jogo do número secreto'); 
    exibirTextoNaTela('p','Escolha um número entre 1 e 10: ');

}
exibirTexto()
function verificarChute() {
    let chute = document.querySelector('input').value;
    if( chute== numerSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa'
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('h1','Acertou!'); 
        exibirTextoNaTela('p','Você acertou o numero secreto!');
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else {
        if(chute > numerSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor que o numero digitado!');
        }
        else{
            exibirTextoNaTela('p', 'O numero secreto é maior que o numero digitado!');
        }
        tentativas++;
        limpaCampo();
    }
   
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numerLimite+1);
    let quantidadeElemtentos = listaNumeros.length;

    if (quantidadeElemtentos == numerLimite){
        listaNumeros = [];
    }
    if ( listaNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros)
        return numeroEscolhido;
    }
}
function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = "";

}
function reiniciarJogo() {
    numerSecreto = gerarNumeroAleatorio()
    limpaCampo();
    tentativas=1
    exibirTexto()
    document.getElementById('reiniciar').setAttribute('disabled',true)
    console.log(numerSecreto)
}