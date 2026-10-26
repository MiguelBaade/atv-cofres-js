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

    botaoc1.disabled = true;
    botaoc2.disabled = true;
    botaoc3.disabled = true;
}

botaoJogarNovamente.addEventListener("click", function() {
    cofrePremiado = Math.floor(Math.random() * 3) + 1;

    mensagemAbriuCofre.textContent = "";
    mensagemCofrePremiado.textContent = "";

    botaoc1.disabled = false;
    botaoc2.disabled = false;
    botaoc3.disabled = false;
});

botaoc1.addEventListener("mouseenter", function(){

    const largura = arena.clientWidth - botaoc1.offsetWidth;
    const altura = arena.clientHeight - botaoc1.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoc1.style.left = x + 'px';
    botaoc1.style.top = y + 'px';
});
