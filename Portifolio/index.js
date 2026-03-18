document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('menu-principal');
    const navLinks = document.querySelectorAll('.nav a');

    // 1. Funcionalidade do Menu Toggle
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' para mostrar/esconder o menu
        navMenu.classList.toggle('active');
    });

    // 2. Fechar Menu ao Clicar em um Link (para mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Verifica se o menu está ativo antes de fechar
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Você pode adicionar outras funcionalidades JS aqui, como:
    // - Validação de formulário mais complexa.
    // - Efeitos de rolagem (scroll animations).
    // - Carrrosséis ou sliders para o portfólio.
});document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('menu-principal');
    const navLinks = document.querySelectorAll('.nav a');

    // 1. Funcionalidade do Menu Toggle
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' para mostrar/esconder o menu
        navMenu.classList.toggle('active');
    });

    // 2. Fechar Menu ao Clicar em um Link (para mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Verifica se o menu está ativo antes de fechar
            if (navMenu.classLss para o portfólio.
            }); para o portfólio.
            });