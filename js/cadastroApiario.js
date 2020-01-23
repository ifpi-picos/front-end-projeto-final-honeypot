const btn_salvar = document.querySelector('.cadastrar-colmeia');

function Ovos(){
    if(document.getElementById('ovos_boa').checked = true){
        return "Boa";
    }
    if(document.getElementById('ovos_fraca').checked = true){
        return "Fraca";
    }
    if(document.getElementById('ovos_irregular').checked=true){
        return "Irregular";
    }
}

function Florada(){
    if(document.getElementById('florada_boa').checked = true){
        return "Boa";
    }
    if(document.getElementById('florada_fraca').checked = true){
        return "Fraca";
    }
    if(document.getElementById('florada_irregular').checked=true){
        return "Irregular";
    }
}

function Realeiras(){
    if(document.getElementById('realeiras_presente').checked = true){
        return "Presente";
    }
    if(document.getElementById('realeiras_ausente').checked = true){
        return "Ausente";
    }
   
}

function setFormularioApiario(){
    const apiario = {};
    apiario.endereco = document.querySelector('.end').value;
    apiario.quantidade = document.querySelector('.qtd-colmeias').value;
    apiario.responsavel = document.querySelector('.responsavel').value;
    apiario.cadastro = document.querySelector('.data_cadastro').value
    apiario.ovos = Ovos();
    apiario.florada = Florada();
    apiario.realeiras = Realeiras();

    const url = 'http://localhost:3000/apiario'

    const option = {
        method: 'POST',
        body: JSON.stringify(apiario),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url,option)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        }) 

}



function enviarDados(apiario) {
    console.log("Vaiiii Dadooooooos!")
}

btn_salvar.addEventListener('click', () => {
    setFormularioApiario();
   
})


