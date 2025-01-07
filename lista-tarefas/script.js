const lista = document.getElementById('lista');
const input = document.getElementById('nova-tarefa');

document.getElementById('adicionar').addEventListener('click', () => {
  const tarefa = input.value.trim();
  if (tarefa) {
    const li = document.createElement('li');
    const timestamp = new Date().toLocaleString();

    li.innerHTML = `
      <span class="tarefa-texto">${tarefa}</span>
      <span class="tarefa-data">(${timestamp})</span>
      <button class="editar">Editar</button>
      <button class="excluir">Excluir</button>
    `;

    lista.appendChild(li);
    input.value = '';

    // Adicionar funcionalidade de editar
    li.querySelector('.editar').addEventListener('click', () => {
      const novoTexto = prompt('Edite a tarefa:', li.querySelector('.tarefa-texto').textContent);
      if (novoTexto) {
        li.querySelector('.tarefa-texto').textContent = novoTexto;
      }
    });

    // Adicionar funcionalidade de excluir
    li.querySelector('.excluir').addEventListener('click', () => {
      lista.removeChild(li);
    });
  }
});
