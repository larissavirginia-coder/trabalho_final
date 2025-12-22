console.log("Se otário nascerá, otário morrerá");

let nomeUsuario = "";


function iniciarQuiz() {
    nomeUsuario = prompt("Digite seu nome:");
    if (!nomeUsuario || nomeUsuario.trim() === "") {
        nomeUsuario = "Usuário";
    }

    document.getElementById("quiz").style.display = "block";
    document.getElementById("telaInicial").style.display = "none";
    document.querySelector(".entrada").style.display = "none";
    document.getElementById("saudacao").textContent = nomeUsuario + "," ;

}


function calcularPontuacao() {
    let pontos = 0;

    for (let i = 1; i <= 4; i++) {
        const resposta = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (resposta && resposta.value === "certo") {
            pontos++;
        }
    }

    const certa5 = document.querySelector('input[name="pergunta5"][value="certo"]:checked');
    if (certa5) pontos++;

    const resp3 = document.querySelector("#p3");
    if (resp3.value === "certo") pontos++;

    const resp6 = document.querySelector("#p6");
    if (resp6.value === "certo") pontos++;

    const resp7 = document.querySelector('input[name="p7"]:checked');
    if (resp7 && resp7.value === "certo") pontos++;

    const certa8 = document.querySelector('input[name="pergunta8"][value="certo"]:checked');
    if (certa8) pontos++;

    const resp9 = document.querySelector("#p9");
    if (resp9.value === "certo") pontos++;

    const resp10 = document.querySelector('input[name="pergunta10"]:checked');
    if (resp10 && resp10.value === "certo") pontos++;

    if (pontos >= 6) {
        alert(nomeUsuario + ", sua pontuação foi: " + pontos + " de 10. Parabéns você divou!! S2");
    } else {
        alert(nomeUsuario + ", sua pontuação foi: " + pontos + " de 10. Continue praticando!");
    }




}


