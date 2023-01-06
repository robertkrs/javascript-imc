const campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function () {
  paciente.forEach((e) => {
    const tdTabela = e.querySelector(".info-nome");
    const nome = tdTabela.textContent;
    const expressao = new RegExp(this.value, "s"); //expressão regular

    if (this.value.length > 0) {
      if (expressao.test(nome)) {
        e.classList.remove("invisivel");
      } else {
        e.classList.add("invisivel");
      }
    } else {
      e.classList.remove("invisivel");
    }
  });
});
