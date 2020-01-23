//listar apiarios cadastrados
const selecionarApiario = document.getElementById('listarApiarios');

async function consultarApiarios() {
    const retorno = await fetch('http://localhost:3000/apiario');
    const info = await retorno.json();
    mostrarApiarios(info);
};

var colmeia;
function mostrarApiarios(info) {
    info.forEach((apiario) => {

        const html =
            `  
        <option> ${colmeia = apiario.endereco}</option>
        `;

        selecionarApiario.innerHTML = selecionarApiario.innerHTML + html;

    });
}

consultarApiarios();

const btn_salvar = document.querySelector('.cadastrar_coleta');
//selecionar apiario e transformar em string
console.log(String(document.getElementById('listarApiarios').option))
// CADASTRANDO AS COLMEIAS
function setFormularioColeta() {
    const coleta = {};
    coleta.apiario = document.getElementById('listarApiarios').option.String();
    coleta.responsavel = document.querySelector('.responsavel').value;
    coleta.quantidadeExtraida = document.querySelector('.quantidade_extraida').value;
    coleta.cor = document.querySelector('.cor_aparente').value;
    coleta.pote250 = document.getElementById('250');
    coleta.pote500 = document.getElementById('500');
    coleta.pote1l = document.getElementById('.l');
    coleta.tambor = document.getElementById('tambor');

    const url = 'http://localhost:3000/coleta'

    const option = {
        method: 'POST',
        body: JSON.stringify(coleta),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    console.log("Json ok?");
    fetch(url, option)
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
    setFormularioColeta();
    console.log("problema aqui!")

})