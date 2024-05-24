const form = document.getElementById("contactForm");

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById("name");
    const inputTel = document.getElementById("phone");
    const inputEmail = document.getElementById("email");

    let linha = '<tr class="nova-linha">';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputTel.value = '';
    inputEmail.value = '';

    form.reset();
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}