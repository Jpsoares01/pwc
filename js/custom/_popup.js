


function validarEEnviar(event) {
    event.preventDefault(); // impede o envio normal

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!email.includes("@")) {
        alert("O email deve conter '@'.");
        return;
    }

    alert("Enviado com sucesso!");
}

