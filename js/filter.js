const campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function () {
  console.log(this.value);

  paciente.forEach((e) => {
    const tdTabela = e.querySelector(".info-nome");
    const nome = tdTabela.textContent;

    if (this.value.length > 0) {
      if (nome != this.value) {
        e.classList.add("invisivel");
      } else {
        e.classList.remove("invisivel");
      }
    } else {
      e.classList.remove("invisivel");
    }
  });
});
