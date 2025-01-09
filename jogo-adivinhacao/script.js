let numeroSecreto = Math.floor(Math.random() * 100) + 1;
const resultado = document.getElementById('resultado');
const reiniciarBtn = document.getElementById('reiniciar');
const palpiteInput = document.getElementById('palpite');
const enviarBtn = document.getElementById('adivinhar');
let tentativas = 0;

enviarBtn.addEventListener('click', () => {
    const palpite = parseInt(palpiteInput.value, 10);
    tentativas++;

    if (palpite === numeroSecreto) {
        resultado.textContent = `Parabéns! Você acertou em ${tentativas} tentativa(s).`;
        resultado.style.color = 'green';
        reiniciarBtn.style.display = 'inline-block';
        palpiteInput.disabled = true; // Desabilita o input
        enviarBtn.disabled = true; // Desabilita o botão "Enviar"
    } else if (palpite < numeroSecreto) {
        resultado.textContent = 'Baixo!';
        resultado.style.color = 'orange';
    } else {
        resultado.textContent = 'Alto!';
        resultado.style.color = 'orange';
    }
});

reiniciarBtn.addEventListener('click', () => {
    tentativas = 0;
    numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um novo número secreto
    resultado.textContent = '';
    resultado.style.color = '#333';
    palpiteInput.value = '';
    palpiteInput.disabled = false; // Reabilita o input
    enviarBtn.disabled = false; // Reabilita o botão "Enviar"
    reiniciarBtn.style.display = 'none'; // Esconde o botão "Reiniciar"
});