const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartoSelecionado = document.querySelector(".selecionado");
    cartoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function() {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado()

    cartaoAtual++;

    mostrarCartao(cartaoAtual);

});




btnVoltar.addEventListener("click", function() {
    if (cartaoAtual === 0) return;
    
    esconderCartaoSelecionado()

    cartaoAtual--;
    
    mostrarCartao(cartaoAtual);
});

// Passo 1 - pegar o elemento dentro do arquivo: 
/*
const btnAvancar = document.getElementById("btn-avancar");

// Passo 2 - reconhecer o clique do usuário no botão:

 btnAvancar.addEventListener('click', function(){
    const cartoes = documento.querySelectorAll('.cartao');

    cartoes[1].classList.add("selecionado");
}); */

// Passo 3 - fazer aparecer o próximo cartão:
/*
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
    const cartoes = document.querySelectorAll(".cartao");
    cartaoAtual++;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");
}); */