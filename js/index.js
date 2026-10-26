const botaoc1 = document.getElementById("c1");
const botaoc2 = document.getElementById("c2");
const botaoc3 = document.getElementById("c3");
const arena = document.getElementById("arena");
const mensagemAbriuCofre = document.getElementById("mensagemAbriuCofre");
const mensagemCofrePremiado = document.getElementById("mensagemCofrePremiado");
const mensagemTentativa = document.getElementById("mensagemTentativa");
const botaoJogarNovamente = document.getElementById("jogarNovamente");
let cofrePremiado = Math.floor(Math.random() * 3) + 1;
let tentativa = 0;
let acertoTentativa = 0;

botaoc1.addEventListener("click", function(){
    mensagemAbriuCofre.textContent = "Você abriu o cofre 1!";
    abrirCofre(1);
});

botaoc2.addEventListener("click", function(){
    mensagemAbriuCofre.textContent = "Você abriu o cofre 2!";
    abrirCofre(2);
});

botaoc3.addEventListener("click", function(){
    mensagemAbriuCofre.textContent = "Você abriu o cofre 3!";
    abrirCofre(3);
});


function abrirCofre(numeroEscolhido){
    tentativa++;

    if(numeroEscolhido == cofrePremiado){
        acertoTentativa++;
        mensagemCofrePremiado.textContent = "Parabéns! Você acertou o cofre premiado!"
    } else{
        mensagemCofrePremiado.textContent = "Não foi dessa vez! Este cofre está vazio!";
    }

    mensagemTentativa.textContent = " N° de acertos: " + acertoTentativa + "/N° de tentativas: " + tentativa;
}

botaoJogarNovamente.addEventListener("click", function() {

});

/*
botaoNao.addEventListener("mouseenter", function(){
    tentativa++;

    const largura = arena.clientWidth - botaoNao.offsetWidth;
    const altura = arena.clientHeight - botaoNao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.left = x + 'px';
    botaoNao.style.top = y + 'px';

    mensagem.textContent = "Tentativas de clicar no Não: " + tentativa;
});
*/
