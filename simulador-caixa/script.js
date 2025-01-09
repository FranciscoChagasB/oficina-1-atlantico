document.getElementById('calcular').addEventListener('click', () => {
    const valorInput = document.getElementById('valor-saque').value;
    const valor = Math.floor(parseFloat(valorInput));
    const cedulas = [100, 50, 20, 10, 5, 2];
    const decimais = parseFloat(valorInput) - valor;
    let restante = valor;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    if (!valor || valor <= 0) {
        resultado.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    if (decimais > 0) {
        resultado.innerHTML += `<p>O valor contém R$ ${decimais.toFixed(2)} em moedas que não podem ser sacadas.</p>`;
    }

    // Função para calcular as cédulas usando backtracking
    function calcularNotas(valor, index = 0) {
        if (valor === 0) return []; // Solução encontrada

        if (index >= cedulas.length) return null; // Nenhuma solução possível

        const cedula = cedulas[index];
        const maxCedulas = Math.floor(valor / cedula);

        // Tentar todas as possibilidades, começando com o máximo possível de cédulas da denominação atual
        for (let qtd = maxCedulas; qtd >= 0; qtd--) {
            const restante = valor - qtd * cedula;
            const resultadoParcial = calcularNotas(restante, index + 1);

            if (resultadoParcial !== null) {
                return qtd > 0
                    ? [{ cedula, quantidade: qtd }, ...resultadoParcial]
                    : resultadoParcial;
            }
        }

        return null; // Nenhuma solução encontrada
    }

    // Chamar a função para calcular a combinação de cédulas
    const combinacao = calcularNotas(valor);

    if (combinacao) {
        // Renderiza o resultado
        combinacao.forEach(({ cedula, quantidade }) => {
            resultado.innerHTML += `<p>${quantidade} nota(s) de R$ ${cedula}</p>`;
        });
    } else {
        resultado.textContent = 'Erro ao calcular a combinação de cédulas.';
    }
});
