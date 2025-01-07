const botao = document.getElementById('gerar-cor');
const textoCor = document.getElementById('cor-atual');

botao.addEventListener('click', () => {
    const corAleatoria = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    document.body.style.backgroundColor = corAleatoria;
    textoCor.textContent = corAleatoria.toUpperCase();
});
