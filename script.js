/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */

//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Ativar Bootstrap ScrollSpy no elemento de navegação principal
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Colapsar a navbar responsiva quando o toggler estiver visível
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Adicionar event listener ao botão de envio de sugestão
    const enviarSugestaoBtn = document.getElementById('enviarSugestao');
    if (enviarSugestaoBtn) {
        enviarSugestaoBtn.addEventListener('click', enviarSugestao);
    }

});

/**
 * Função para enviar a sugestão via fetch
 */
function enviarSugestao() {
    const sugestaoInput = document.getElementById('sugestao');
    const mensagemDiv = document.getElementById('mensagem');

    if (!sugestaoInput || !mensagemDiv) {
        console.error('Elementos necessários não encontrados no DOM.');
        return;
    }

    const sugestao = sugestaoInput.value.trim();

    if (sugestao === '') {
        mensagemDiv.textContent = 'Por favor, insira uma sugestão antes de enviar.';
        return;
    }

    fetch('http://seu-servidor.com/api/sugestao', { // Substitua pela URL correta do seu endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sugestao: sugestao }), // Envia a sugestão no corpo da requisição
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Erro ao enviar sugestão.');
    })
    .then(data => {
        mensagemDiv.textContent = 'Sugestão enviada com sucesso!';
        // Opcional: Limpar o campo de texto após o envio
        sugestaoInput.value = '';
    })
    .catch(error => {
        mensagemDiv.textContent = 'Erro ao enviar sugestão. Tente novamente.';
        console.error('Erro:', error);
    });
}
