const btn_salvar = document.querySelector('.cadastrar');
function redirecionarCadastro(){
    document.location.assign("./pages/cadastrarFuncionario.html")
}

function redirecionarPrincipal(){
    document.location.assign("./pages/principal.html")
}
// pegando os valores do formulario de cadastro de funcionarios
function setFormularioFuncionario() {
    const funcionario = {};
    funcionario.nome = document.getElementsByClassName('.nome_func').value;
    funcionario.username = document.getElementsByClassName('.username').value;
    funcionario.funcao = document.getElementsByClassName('.funcao').value;
    funcionario.email = document.getElementsByClassName('.email').value;
    funcionario.senha = document.getElementsByClassName('.pass_func').value;

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