const btn_entrar = document.querySelector('.entrar');

function setFormularioLogin() {
    const login = {}
    login.username = document.querySelector('.username').value;
    login.senha = document.querySelector('.password').value;
}

const url = 'http://localhost:3000/funcionario/logar'


const option = {
    method: 'POST',
    body: JSON.stringify(login),
    headers: {
        'Content-Type': 'application/json'
    }
}

fetch(url, option)
    .then((req) => { console.log(res) })
    .catch((err) => { console.log(err) })


function enviarDados(login);

btn_entrar.addEventListener('click', ()=>{
    setFormularioLogin();
})