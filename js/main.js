const btn_salvar = document.querySelector('.cadastrar');

// pegando os valores do formulario de cadastro de funcionarios
function setFormularioFuncionario() {
    const funcionario = {};
    funcionario.nome = document.querySelector('.nome_func').value;
    funcionario.username = document.querySelector('.username').value;
    funcionario.funcao = document.querySelector('.funcao').value;
    funcionario.email = document.querySelector('.email').value;
    funcionario.senha = document.querySelector('.pass_func').value;

    const url = 'http://localhost:3000/funcionario'

    const option = {
        method: 'POST',
        body: JSON.stringify(funcionario),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, option)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })

}

function enviarDados(funcionario) {

}
btn_salvar.addEventListener('click', () => {
    setFormularioFuncionario();

})