const paciente = document.querySelectorAll(".paciente");
paciente.forEach((e) => {
  peso = e.querySelector(".info-peso");
  altura = e.querySelector(".info-altura");

  const imc_paciente = e.querySelector(".info-imc");

  if (peso < 0 || peso > 250 || altura < 1.0 || altura > 2.5) {
    console.log("Peso invalido ou Altura invalidos");
    imc_paciente.innerHTML = "Peso Inválido";
    e.classList.add("invalido");
  } else {
    imc_paciente.innerHTML = calculaIMC(peso.innerHTML, altura.innerHTML);
  }
});

function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}
function verificaPesoEAltura(paciente) {
  const erro = [];
  if (paciente.nome.length == 0) {
    erro.push("O nome não pode ser em branco");
  }
  if (!verificaPeso(paciente.peso)) {
    erro.push("Peso Inválido");
  }
  if (!verificaAltura(paciente.altura)) {
    erro.push("Altura Inválida");
  }
  if (paciente.gordura.length == 0) {
    erro.push("A gordura não pode ser em branco");
  }
  return erro;
}

function verificaPeso(pesoTd) {
  if (pesoTd < 250 && pesoTd > 0) {
    return true;
  } else {
    return false;
  }
}
function verificaAltura(alturaTd) {
  if (alturaTd < 2.3 && alturaTd > 1.0) {
    return true;
  } else {
    return false;
  }
}
