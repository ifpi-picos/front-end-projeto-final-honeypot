const trListarApiarios = document.getElementById('apiarios_cadastrados');

async function consultarApiarios(){
    const retorno = await fetch('http://localhost:3000/apiario');
    const info = await retorno.json();
    mostrarApiarios(info);
};

function mostrarApiarios(info){

        info.forEach((apiario) => {
            const html =
            `  
            <tr>
            <td>${apiario.endereco}</td>
            <td> ${apiario.responsavel} </td>
            <td>${apiario.quantidade}</td>
            <td>${apiario.cadastro}</td>
            <td>${apiario.ovos}</td>
            <td>${apiario.florada}</td>
            <td>${apiario.realeiras}</td>
            <td> - </td>
            <td> - </td>
            </tr>`;

            trListarApiarios.innerHTML = trListarApiarios.innerHTML + html;
        });


}

consultarApiarios();