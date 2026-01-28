let registros = JSON.parse(localStorage.getItem("ponto")) || [];

function baterPonto(tipo) {
  const nome = document.getElementById("nome").value.trim();
  if (!nome) {
    alert("Digite o nome do funcionário");
    return;
  }

  const agora = new Date();

  registros.push({
    nome,
    tipo,
    data: agora.toLocaleDateString(),
    hora: agora.toLocaleTimeString()
  });

  localStorage.setItem("ponto", JSON.stringify(registros));
  atualizarTabela();
}

function atualizarTabela() {
  const tabela = document.getElementById("tabela");
  tabela.innerHTML = "";

  registros.forEach(r => {
    tabela.innerHTML += `
      <tr>
        <td>${r.nome}</td>
        <td>${r.tipo}</td>
        <td>${r.data}</td>
        <td>${r.hora}</td>
      </tr>
    `;
  });
}

function limpar() {
  if (confirm("Limpar todos os registros?")) {
    localStorage.removeItem("ponto");
    registros = [];
    atualizarTabela();
  }
}

atualizarTabela();
