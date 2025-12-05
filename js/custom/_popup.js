


function validarEEnviar(event) {
    event.preventDefault(); // impede o envio normal

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("menssage").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("E-mail must contain '@'.");
        return;
    }

    alert("Sent successfully!");
}

