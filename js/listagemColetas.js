const trListaColetas = document.getElementById('coletas_cadastradas');

async function consultarColetas(){
    const retorno = await fetch('http://localhost:3000/coleta');
    const info = await retorno.json();
    mostrarColetas(info);
};

function mostrarColetas(info){
    info.forEach((coletas) => {
        const html =
        `  
        <tr>
        <td> </td>
        <td>${coletas.apiarios}</td>
        <td>${coletas.responsavel}</td>
        <td>${coletas.dataExtracao}</td>
        <td>${coletas.quantidadeExtraida}</td>
        <td>${coletas.cor}</td>
        <td>${coletas.pote250}</td>
        <td>${coletas.pote500}</td>
        <td>${coletas.pote1l}</td>
        <td>${coletas.tambor}</td>

        </tr>`;

        trListaColetas.innerHTML = trListaColetas.innerHTML + html;
    });

}

consultarColetas();