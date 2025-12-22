function enviarIdeiaWhats() {
    var campo = document.getElementById("ideiaWhats");

    if (!campo) {
        alert("Campo não encontrado");
        return;
    }

    var ideia = campo.value;

    if (ideia.trim() === "") {
        alert("Digite sua ideia antes de enviar 😊");
        return;
    }

    var numero = "5531987958108";
    var mensagem = encodeURIComponent(
        "Olá! Gostaria de um personalizado com a seguinte ideia: " + ideia
    );

    var linkWhats = "https://wa.me/" + numero + "?text=" + mensagem;
    window.open(linkWhats, "_blank");
}
