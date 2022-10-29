  function calculo_resultado(event) {
  const peso = Number(document.getElementById("Peso").value);
  const altura = Number(document.getElementById("Altura").value);
  const imc = peso / (altura * altura)
  let resposta = "";
  if (imc < 15.99) {
    resposta = (`Magreza Grave!`);
    cor = "magrezagrave";
  } else if (imc >= 16 && imc <= 16.99) {
    resposta = (`Magreza Moderada.}`);
    cor = "magrezamoderada";
  } else if (imc >= 17 && imc <= 18.5) {
    resposta = (`Magreza Leve.`);
    cor = "magrezaleve";
  } else if (imc > 18.5 && imc <= 24.9) {
    resposta = (`Saudável.`);
    cor = "saudavel";
  } else if (imc >= 25 && imc <= 29.9) {
    resposta = (`Sobrepeso!`);
    cor = "sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    resposta = (`Obesidade Grau 1!!`);
    cor = "obesidade1";
  } else if (imc >= 35 && imc <= 39.9) {
    resposta = (`Obesidade Grau 2!!!`);
    cor = "obesidade2";
  } else if (imc <= 40) {
    resposta = (`Obesidade Grau 3!!!!`);
    cor = "obesidade3";
  }
  document.getElementById("Resultado").innerHTML = `Você Está ${resposta} <br> IMC: ${imc.toFixed(2)}`;
  document.getElementById("Resultado").className = cor
}
