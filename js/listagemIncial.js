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
                    <td>${apiario.cadastro}</td>
                    `;

                    trListarApiarios.innerHTML = trListarApiarios.innerHTML + html;
                });
        }


        consultarApiarios();


const trListaColetas = document.getElementById('coletas_cadastradas');



    async function consultarColetas(){
    const resposta = await fetch('http://localhost:3000/coleta');
    const infos = await resposta.json();
    mostrarColetas(infos);
    };


    function mostrarColetas(infos){
        infos.forEach((coletas) => {
        const html =
        `  
        <tr>
            <td>${coletas.apiarios}</td>
            <td>${coletas.dataExtracao}</td>
            <td>${coletas.quantidadeExtraida}</td>
        </tr>`;

        trListaColetas.innerHTML = trListaColetas.innerHTML + html;
    });

}


consultarColetas();
