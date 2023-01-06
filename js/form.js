const botao = document.getElementById("form-adiciona");

// botao.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const body = document.querySelector("#tabela-pacientes");
//   const nome = e.target.nome.value;
//   const peso = e.target.peso.value;
//   const altura = e.target.altura.value;
//   const gordura = e.target.gordura.value;
//   const imc = calculaIMC(peso, altura);

//   body.innerHTML += `
//       <tr class="paciente" id="primeiro-paciente">
//           <td class="info-nome">${nome}</td>
//           <td class="info-peso">${peso}</td>
//           <td class="info-altura">${altura}</td>
//           <td class="info-gordura">${gordura}</td>
//           <td class="info-imc">${imc}</td>
//       </tr>
//     `;
// });

botao.addEventListener("submit", (e) => {
  e.preventDefault(e);

  const paciente = extraiValor(e);

  criaElementos(paciente);

  limpaFormulario(e);
});

function extraiValor(e) {
  const paciente = {
    nome: e.target.nome.value,
    peso: e.target.peso.value,
    altura: e.target.altura.value,
    gordura: e.target.gordura.value,
    imc: calculaIMC(e.target.peso.value, e.target.altura.value),
  };

  return paciente;
}

function criaElementos(paciente) {
  const pacienteTr = document.createElement("tr");
  const nomeTd = document.createElement("td");
  const pesoTd = document.createElement("td");
  const alturaTd = document.createElement("td");
  const gorduraTd = document.createElement("td");
  const imcTd = document.createElement("td");

  adicionaClasses(
    nomeTd,
    pesoTd,
    alturaTd,
    gorduraTd,
    imcTd,
    pacienteTr,
    paciente
  );
}

function adicionaClasses(
  nomeTd,
  pesoTd,
  alturaTd,
  gorduraTd,
  imcTd,
  pacienteTr,
  paciente
) {
  pacienteTr.classList.add("paciente");
  nomeTd.classList.add("info-nome");
  pesoTd.classList.add("info-peso");
  alturaTd.classList.add("info-altura");
  gorduraTd.classList.add("info-gordura");
  imcTd.classList.add("info-imc");

  preencheTd(nomeTd, pesoTd, alturaTd, gorduraTd, imcTd, pacienteTr, paciente);
}

function preencheTd(
  nomeTd,
  pesoTd,
  alturaTd,
  gorduraTd,
  imcTd,
  pacienteTr,
  paciente
) {
  nomeTd.innerHTML = paciente.nome;
  pesoTd.innerHTML = paciente.peso;
  alturaTd.innerHTML = paciente.altura;
  gorduraTd.innerHTML = paciente.gordura;
  imcTd.innerHTML = paciente.imc;

  const erros = verificaPesoEAltura(paciente);
  if (erros.length > 0) {
    mensagemErro(erros);
  } else {
    adicionaAoApendice(nomeTd, pesoTd, alturaTd, gorduraTd, imcTd, pacienteTr);
    const lista = document.querySelector("#mensagens-erro");
    lista.innerHTML = "";
  }
}

function adicionaAoApendice(
  nomeTd,
  pesoTd,
  alturaTd,
  gorduraTd,
  imcTd,
  pacienteTr
) {
  const body = document.querySelector("#tabela-pacientes");
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  body.appendChild(pacienteTr);
}

function limpaFormulario(e) {
  e.target.nome.value = "";
  e.target.peso.value = "";
  e.target.altura.value = "";
  e.target.gordura.value = "";
}

function mensagemErro(erros) {
  const lista = document.querySelector("#mensagens-erro");
  lista.innerHTML = "";
  erros.forEach((e) => {
    const listaLi = document.createElement("li");
    listaLi.innerHTML = e;

    lista.appendChild(listaLi);
  });
}
