document.getElementById('calcular').addEventListener('click', () => {
    const valor = parseInt(document.getElementById('valor-saque').value, 10);
    const cedulas = [200, 100, 50, 20, 10, 5, 2, 1];
    let restante = valor;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    if (!valor || valor <= 0) {
        resultado.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    cedulas.forEach(cedula => {
        const qtdCedulas = Math.floor(restante / cedula);
        if (qtdCedulas > 0) {
            resultado.innerHTML += `<p>${qtdCedulas} nota(s) de R$ ${cedula}</p>`;
        }
        restante %= cedula;
    });

    if (restante > 0) {
        resultado.innerHTML += '<p>Não foi possível calcular todas as notas.</p>';
    }
});
