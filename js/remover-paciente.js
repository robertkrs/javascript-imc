// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function (paciente) {
//   paciente.addEventListener("dblclick", function (e) {
//     this.remove();
//   });
// });

const pacientes = document.getElementById("tabela-pacientes");

pacientes.addEventListener("dblclick", (event) => {
  const alvo = event.target;
  alvo.parentNode.classList.add("fadeOut");
  const paiAlvo = alvo.parentNode;

  if (event.target.tagName == "TD") {
    setTimeout(() => {
      paiAlvo.remove();
    }, 500);
  }
});
