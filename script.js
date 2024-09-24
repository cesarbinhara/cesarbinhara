
const alterarFraseBtn = document.getElementById("mudar-titulo");

const paragrafos = [
  document.querySelector(".mensagem1"),
  document.querySelector(".mensagem2"),
  document.querySelector(".mensagem3"),
  document.querySelector(".mensagem4")
];
const novasFrases = [
  "primeira frase modificada!",
  "segunda frase modificada!",
  "terceira frase modificada!"
];

let indiceFraseAtual = 0; 


alterarFraseBtn.addEventListener("click", function () {
  
  paragrafos[indiceFraseAtual].textContent = novasFrases[indiceFraseAtual];
  

  indiceFraseAtual = (indiceFraseAtual + 1) % novasFrases.length;
});
