document.addEventListener('DOMContentLoaded', () => {
    // Identifica e captura todos os botões ou elementos que usam "onclick" para abrir o modal
    const modal = document.getElementById('modal');
    const buttons = document.querySelectorAll('[onclick="abrirModal()"]');

    // Adiciona o evento de abertura do modal a cada botão identificado
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Previne comportamentos indesejados
            modal.style.display = 'flex';
        });
    });

    // Fecha o modal e redireciona para 'membro.html' quando necessário
    document.querySelector('.modal-close').addEventListener('click', () => {
        window.location.href = 'membro.html';
    });

    // Fecha o modal ao clicar no botão de fechar
    document.querySelector('.close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
    });
});