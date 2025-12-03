document.addEventListener('DOMContentLoaded', () => {
    // queryselctor seleciona apenas o primeiro botao hamburguer que encontra 
    const menuIcon = document.querySelector('.menu-hamb');
    const menuLinks = document.getElementById('hamb-links');

    if (menuIcon) {
        // Encontrou o botão hambúrguer dentro do header-container
        console.log('Ícone encontrado!');
    }

    // se as constantes existem
    if (menuIcon && menuLinks) {
        // quando ususario clica no menu
        menuIcon.addEventListener('click', () => {
            // Alterna a classe 'is-active' no container dos links
            // Se a classe não existir, adiciona (menu aparece)
            // se a classe já existir, remove (menu desaparece)
            menuLinks.classList.toggle('is-active');
        });
    }
});

