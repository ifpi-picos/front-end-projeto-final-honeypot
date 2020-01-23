const trListarFuncionario = document.getElementById('listar_funcionarios');

async function consultarFuncionarios() {
    const retorno = await fetch('http://localhost:3000/funcionario');
    const info = await retorno.json();
    mostrarFuncionarios(info);
  }

  function mostrarFuncionarios(info) {
    info.forEach((funcionario) => {
      const html = 
      `  
      <tr>
      <td>${funcionario._id}</td>
      <td> ${funcionario.nome} </td>
      <td>${funcionario.funcao}</td>
      <td>${funcionario.email}</td>
      <td> <i class="fa fa-trash" style="color: red; align-self: center;"></i></td>
      </tr>`;
      trListarFuncionario.innerHTML = trListarFuncionario.innerHTML + html;
    });
  } 
  consultarFuncionarios();
  