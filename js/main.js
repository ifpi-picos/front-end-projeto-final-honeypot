const btn_salvar = document.querySelector('.cadastrar');
function redirecionarCadastro(){
    document.location.assign("./pages/cadastrarFuncionario.html")
}
// pegando os valores do formulario de cadastro de funcionarios
function setFormularioFuncionario() {
    const funcionario = {};
    funcionario.nome = document.getElementById('nome').value;
    funcionario.username = document.getElementById('username').value;
    funcionario.funcao = document.getElementById('funcao').value;
    funcionario.email = document.getElementById('email').value;
    funcionario.senha = document.getElementById('senha').value;
    console.log(funcionario);

    const url = 'http://localhost:3000/funcionario'
    console.log("entrou")
    const option = {
        method: 'POST',
        body: JSON.stringify(funcionario),
        headers: {
            'Content-Type': 'application/json',
            
        }
    }
    fetch(url, option)
        .then((res) => {
            console.log(res);
        })

}

function enviarDados(funcionario) {

}
btn_salvar.addEventListener('click', () => {
    setFormularioFuncionario();

})