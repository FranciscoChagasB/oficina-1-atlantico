const lista = document.getElementById('lista');
const inputTarefa = document.getElementById('nova-tarefa');
const inputData = document.getElementById('data-tarefa');

document.getElementById('adicionar').addEventListener('click', () => {
    const tarefa = inputTarefa.value.trim();
    const data = inputData.value;

    if (tarefa && data) {
        const li = document.createElement('li');
        const dataFormatada = new Date(data).toLocaleDateString('pt-BR');

        li.innerHTML = `
          <div>
            <span class="tarefa-texto">${tarefa}</span>
            <span class="tarefa-data">(Realizar até: ${dataFormatada})</span>
          </div>
          <div>
            <button class="concluir">Concluir</button>
            <button class="editar">Editar</button>
            <button class="excluir">Excluir</button>
          </div>
        `;

        lista.appendChild(li);
        inputTarefa.value = '';
        inputData.value = '';

        li.querySelector('.concluir').addEventListener('click', () => {
            li.classList.toggle('concluida');
        });

        li.querySelector('.editar').addEventListener('click', () => {
            const novoTexto = prompt('Edite a tarefa:', li.querySelector('.tarefa-texto').textContent);
            const novaData = prompt('Edite a data (AAAA-MM-DD HH:mm):', data);

            if (novoTexto) {
                li.querySelector('.tarefa-texto').textContent = novoTexto;
            }
            if (novaData) {
                li.querySelector('.tarefa-data').textContent = `(Realizar até: ${new Date(novaData).toLocaleString('pt-BR')})`;
            }
        });

        li.querySelector('.excluir').addEventListener('click', () => {
            lista.removeChild(li);
        });
    } else {
        alert('Por favor, preencha a tarefa e a data para realizar.');
    }
});
