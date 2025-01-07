const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const resultado = document.getElementById('resultado');
let tentativas = 0;

document.getElementById('adivinhar').addEventListener('click', () => {
    const palpite = parseInt(document.getElementById('palpite').value, 10);
    tentativas++;

    if (palpite === numeroSecreto) {
        resultado.textContent = `Parabéns! Você acertou em ${tentativas} tentativa(s).`;
        resultado.style.color = 'green';
    } else if (palpite < numeroSecreto) {
        resultado.textContent = 'Baixo!';
        resultado.style.color = 'orange';
    } else {
        resultado.textContent = 'Alto!';
        resultado.style.color = 'orange';
    }
});
