
let listaDeNumerosSorteados = [];
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt (Math.random () * 10) +1;
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido; 
    }
}
 let numeroSecreto = gerarNumeroAleatorio();

 function exibir (cima, baixo) {
    let trocar = document.querySelector (cima);
    trocar.innerHTML = baixo
 }
 exibir ('h1', 'Jogo do Número Secreto');
 exibir ('p', 'Escolha um numero de 1 a 10');

 function verificarChute () {
    let chute = document.querySelector ('input'). value
    if (chute == numeroSecreto ) {
        exibir ('h1', 'Parabéns');
        exibir ('p', 'Você acertou o número secreto');
        document.getElementById ('reiniciar').removeAttribute('disabled');

    } else {
        if ( chute > numeroSecreto) {
           exibir ('h1', 'Tente novamente')
           exibir ('p', ' o numero secreto é menor');
        } else {
        exibir ('h1', 'Tente novamente')
        exibir ('p', ' o numero secreto é maior');
    }
    limparCampo();
 }
}

function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo();
    exibir ('h1', 'Jogo do Anchieta');
    exibir ('p', 'Escolha um numero de 1 a 10');
    document.getElementById('reiniciar'). setAttribute ('disabled', true);
}



















































































// function mudança (primeiro, segundo) {
//     let trocar = document.querySelector (primeiro)
//     trocar.innerHTML= segundo;
// }
// mudança ('h1', 'visao tropa');
// mudança ('p', 'valeu tropa');

// function oi () {
// console.log ('olá mundo');    
// }
// oi();

// function pessoa (nome) {
//     console.log (`olá ${nome}`);
// }
// pessoa ('luiz');

// function dobro (numero) {
//     return numero * 2
// }
// dobro(7)
// console.log ( dobro (7))

// function fudeu (numero1, numero2, numero3) {
//     return (numero1 + numero2 + numero3) /3;
//     }
//     fudeu (8,9,10)
//     console.log (fudeu (8,9,10));

//     function maior (primeiro, segundo) {
//     if  (primeiro > segundo)   {
//         return primeiro;
//     } 
//  else {
//     return segundo
//  }
// } 
// console.log ( maior (6,8));

// function elemrm (numero) {
//     return numero * numero
// }
// console.log ( elemrm (987));








































