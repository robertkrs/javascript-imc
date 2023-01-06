const botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
  console.log("oi");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:3000/pacientes");

  xhr.addEventListener("load", function () {
    const erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      const resposta = xhr.responseText;
      const pacientes = JSON.parse(resposta);

      pacientes.forEach((paciente) => {
        criaElementos(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  });
  xhr.send();
});
