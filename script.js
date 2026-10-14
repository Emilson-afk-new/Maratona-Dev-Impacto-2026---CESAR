// Exibir ou ocultar o formulário de agendamento de compromisso
const botaoAgendar = document.querySelector('.agendar_compromisso p'); 
const formulario = document.querySelector('.form-box'); 

botaoAgendar.addEventListener('click', function () {
    if (formulario.style.display === 'flex') {
        formulario.style.display = 'none'; 
    } else {
        formulario.style.display = 'flex'; 
    }
}); 

// Gerenciamento de compromissos inseridos pelo usuário
const form = document.getElementById('form');
const inputDescricao = document.getElementById('descricao');
const inputData = document.getElementById('data');
const listaCompromissos = document.getElementById('lista-compromissos');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue sozinha

    const descricao = inputDescricao.value;
    const data = inputData.value;

    if (descricao != '' && data != '') {
        const novoItem = document.createElement('div');
        novoItem.classList.add('compromisso-item');

        novoItem.innerHTML = `
            <div class="compromisso-info">
                <p><strong>${data}</strong></p>
                <p>${descricao}</p>
            </div>
            <button class="btn-deletar">Excluir</button>
        `;

        const botaoDeletar = novoItem.querySelector('.btn-deletar');
        botaoDeletar.addEventListener('click', function() {
            novoItem.remove();
        });

        listaCompromissos.appendChild(novoItem);
        form.reset();
    }
});